import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import PriceDetailsCard from "@/components/cart/PriceDetailsCard";
import ProductCard, { Product } from "@/components/cart/ProductCard";
import api from "@/services/api";
import { useNavigate } from "react-router-dom";
import StateCityCard from "@/components/cart/StateCityCard";

interface CartItem {
  _id: string;
  course: {
    tabData: {
      [key: string]: {
        title: string;
        subtitle: string;
        image: string;
      };
    };
  };
  packageType: string;
  price: number;
  total: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const navigate = useNavigate();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  useEffect(() => {
    if (!token) {
      setError("Please log in to view your cart.");
      setLoading(false);
      return;
    }

    const fetchCartData = async () => {
      try {
        const response = await api.get("/cart");
        const data = response.data;

        if (!data || !data.items) {
          setCartItems([]);
          return;
        }

        const formattedItems: Product[] = data.items.map((item: any) => ({
          id: item._id,
          courseId: item.course._id,
          packageType: item.packageType,

          title: item.course.tabData[item.packageType].title,
          subtitle: item.course.tabData[item.packageType].subtitle,
          image: item.course.tabData[item.packageType].image,
          price: item.price,
          total: item.total,
          quantity: item.quantity,
        }));

        setCartItems(formattedItems);
      } catch (err) {
        console.error("Error fetching cart:", err);
        setError("Failed to load cart. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  const removeFromCart = async (
  courseId: string,
  packageType: string,
  itemId: string,
) => {
  try {
    const response = await api.post("/cart/remove", {
      courseId,
      packageType,
    });

    if (response.status === 200) {
      setCartItems((prev) =>
        prev.filter((item) => item.id !== itemId),
      );
    }
  } catch (err: any) {
    console.error("Error removing item:", err);

    if (err.response) {
      console.error("Backend Error:", err.response.data);
    }
  }
};

  const handleUpdate = (
    id: string,
    updatedTotal: number,
    updatedQty: number,
  ) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              total: updatedTotal,
              quantity: updatedQty,
            }
          : item,
      ),
    );
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.total, 0);

  const discount = Math.floor(totalPrice * 0.1);
  const itemCount = cartItems.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="w-full xl:w-2/3">
            <div className="w-full bg-white shadow-md rounded-xl p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-medium mb-4 border-b pb-4">
                Cart Items
              </h2>

              {loading ? (
                <p className="text-gray-500">Loading your cart...</p>
              ) : error ? (
                <div className="text-center text-gray-700 py-8">
                  <p>{error}</p>

                  {!localStorage.getItem("authToken") && (
                    <button
                      onClick={handleLoginRedirect}
                      className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
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
                      onRemove={() =>
                        removeFromCart(
                          product.courseId,
                          product.packageType,
                          product.id,
                        )
                      }
                      onUpdate={handleUpdate}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Price Details Section */}
          <div className="w-full xl:w-1/3">
            <div className="xl:sticky xl:top-28">
              <PriceDetailsCard
                price={totalPrice}
                discount={discount}
                itemCount={itemCount}
                onPlaceOrder={() => {
                  if (!token) {
                    navigate("/login");
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
          <div
            className="
              bg-white
              rounded-2xl
              shadow-xl
              p-4
              sm:p-6
              relative
              w-full
              max-w-lg
              max-h-[90vh]
              overflow-y-auto
            "
          >
            <button
              aria-label="Close checkout"
              onClick={() => setShowCheckoutModal(false)}
              className="
                absolute
                top-4
                right-4
                text-xl
                font-bold
                cursor-pointer
                text-black
                hover:text-gray-700
              "
            >
              ✕
            </button>

            <StateCityCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
