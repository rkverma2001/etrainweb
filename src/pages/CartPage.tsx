import React, { useEffect, useState } from "react";
import PriceDetailsCard from "@/components/cart/PriceDetailsCard";
import ProductCard, { Product } from "@/components/cart/ProductCard";
import api from "@/services/api";
import StateCityCard from "@/components/cart/StateCityCard";
import { useAuth } from "@/components/auth/AuthContext";
import { useCart } from "@/components/cart/CartContext";

interface CartApiItem {
  _id: string;
  course: {
    _id: string;
    tabData: Record<string, { title: string; subtitle: string; image: string }>;
  };
  packageType: string;
  price: number;
  total: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const { isAuthenticated, openAuth } = useAuth();
  const { syncCartCount } = useCart();

  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      setCartItems([]);
      setError("Please log in to view your cart.");
      setLoading(false);
      return;
    }

    let cancelled = false;

    const fetchCartData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await api.get("/cart");
        if (cancelled) return;

        const items: CartApiItem[] = data?.items ?? [];
        setCartItems(
          items.map((item) => {
            const tab = item.course?.tabData?.[item.packageType];
            return {
              id: item._id,
              courseId: item.course?._id,
              packageType: item.packageType,
              title: tab?.title ?? "",
              subtitle: tab?.subtitle ?? "",
              image: tab?.image ?? "",
              price: item.price,
              total: item.total,
              quantity: item.quantity,
            };
          }),
        );
      } catch (err) {
        if (cancelled) return;
        console.error("Error fetching cart:", err);
        setError("Failed to load cart. Please try again later.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCartData();
    return () => {
      cancelled = true;
    };
  }, [isAuthenticated]);

  // Keep the navbar badge in step with quantity changes and removals here.
  useEffect(() => {
    if (isAuthenticated && !loading && !error) syncCartCount(cartItems);
  }, [cartItems, isAuthenticated, loading, error, syncCartCount]);

  const removeFromCart = async (product: Product) => {
    try {
      await api.post("/cart/remove", {
        courseId: product.courseId,
        packageType: product.packageType,
      });
      setCartItems((prev) => prev.filter((item) => item.id !== product.id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const handleUpdate = async (id: string, updatedTotal: number, updatedQty: number) => {
    const currentItem = cartItems.find((item) => item.id === id);
    if (!currentItem) return;

    // Optimistic update; roll back if the server rejects it.
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, total: updatedTotal, quantity: updatedQty } : item,
      ),
    );

    try {
      await api.put("/cart/update", {
        courseId: currentItem.courseId,
        packageType: currentItem.packageType,
        quantity: updatedQty,
      });
    } catch (err) {
      console.error("Update Cart Error:", err);
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, total: currentItem.total, quantity: currentItem.quantity }
            : item,
        ),
      );
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.total, 0);
  const itemCount = cartItems.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="w-full lg:w-2/3">
            <div className="w-full bg-white shadow-md rounded-xl p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-medium mb-4 border-b pb-4">
                Cart Items
              </h2>

              {loading ? (
                <p className="text-gray-500">Loading your cart...</p>
              ) : error ? (
                <div className="text-center text-gray-700 py-8">
                  <p>{error}</p>

                  {!isAuthenticated && (
                    <button
                      onClick={openAuth}
                      className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg cursor-pointer"
                    >
                      Login Now
                    </button>
                  )}
                </div>
              ) : cartItems.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">Your cart is empty.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onRemove={() => removeFromCart(product)}
                      onUpdate={handleUpdate}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Price Details Section */}
          <div className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-36">
              <PriceDetailsCard
                price={totalPrice}
                itemCount={itemCount}
                onCouponChange={setCouponCode}
                onPlaceOrder={() => {
                  if (!isAuthenticated) {
                    openAuth();
                    return;
                  }
                  setShowCheckoutModal(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 relative w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <button
              aria-label="Close checkout"
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-4 right-4 text-xl font-bold cursor-pointer text-black hover:text-gray-700"
            >
              ✕
            </button>

            <StateCityCard couponCode={couponCode ?? ""} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
