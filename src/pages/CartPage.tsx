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

   const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

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

        // Format items for UI
        const formattedItems: Product[] = data.items.map((item: CartItem) => ({
          id: item._id,
          title: item.course.tabData[item.packageType].title,
          subtitle: item.course.tabData[item.packageType].subtitle,
          image: item.course.tabData[item.packageType].image,
          price: item.price,
          total: item.total,
          quantity: item.quantity,
        }));

        setCartItems(formattedItems);
      } catch (err: unknown) {
        console.error("Error fetching cart:", err);
        setError("Failed to load cart. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  const removeFromCart = async (id: string) => {
    try {
      await api.delete(`/cart/remove/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const handleUpdate = (id: string, updatedTotal: number, updatedQty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, total: updatedTotal, quantity: updatedQty } : item
      )
    );
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.total, 0);
  const discount = Math.floor(totalPrice * 0.1); // Example: 10% discount
  const itemCount = cartItems.length;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row mx-35 mt-20">
        <div className="w-3/4">
          <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-medium mb-4 border-b py-4">
              Cart Items
            </h2>

            {loading ? (
              <p className="text-gray-500">Loading your cart...</p>
            ) : error ? (
              <div className="text-center text-gray-700">
                <p>{error}</p>
                {!localStorage.getItem("authTOken") && (
                  <button
                    onClick={handleLoginRedirect}
                    className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
                  >
                    Login Now
                  </button>
                )}
              </div>
            ) : cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onRemove={removeFromCart}
                  onUpdate={handleUpdate}
                  

                />
              ))
            )}
          </div>
        </div>
        <div className="w-1/4">
          <div>
            <PriceDetailsCard 
            price={totalPrice}
            discount={discount}
            itemCount={itemCount}
            onPlaceOrder={() => {
              if (!token) {
                // If not logged in, redirect to login
                navigate("/login");
                return;
              }
              setShowCheckoutModal(true);
            }}
            />
          </div>
        </div>
        {showCheckoutModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >

  
            <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10 w-100">
                <button
                  aria-label="Close checkout"
                  onClick={() => setShowCheckoutModal(false)}
                  className="ml-80 cursor-pointer font-bold text-black hover:text-gray-700"
                >
                  ✕
                </button>

              {/* embed your StateCityCard */}
              <StateCityCard />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default CartPage;
