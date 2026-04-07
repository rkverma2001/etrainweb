import React, { useEffect, useState } from 'react'
import { FaLaptop, FaMinus, FaPlus } from 'react-icons/fa';
import DownloadButton from '@/components/button/DownloadButton';
import Ratings from '@/components/reviews/Ratings';
import api from '@/services/api';
import { useParams } from 'react-router-dom';

type TabName = "Bundle" | "Exam Voucher" | "Practice Test" | "Courseware";

interface TabContent {
  title: string;
  subtitle: string;
  image: string;
  price: number;
}

interface ProductTabProps {
  tabData: Record<TabName, TabContent>;
  activeTab: TabName;
  syllabus: string;
  coursewareLink: string;
}

const ProductTab: React.FC<ProductTabProps> = ({ tabData, activeTab, syllabus, coursewareLink }) => {
  const { courseId } = useParams<{ courseId: string }>();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
   useEffect(() => {
    setQuantity(1);
  }, [activeTab]);
  const formatPrice = (num: number) => {
    return num.toLocaleString("en-IN");
  };

  const params = useParams();
console.log("🔍 useParams output:", params);

const handleAddToCart = async () => {
    try {
      setLoading(true);
      setMessage(null);

      console.log("📦 Course Code from URL:", courseId);

      if (!courseId) {
        console.error("❌ No course code found in URL");
        setMessage("Invalid course. Please try again.");
        return;
      }

      const token = localStorage.getItem("authToken");
      console.log("🔑 Auth Token:", token);

      const response = await api.post(
        "/cart/add",
        {
          courseCode: courseId, // ✅ dynamically from URL
          packageType: activeTab,
          quantity, // ✅ from state
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      console.log("✅ Cart Add Response:", response.data);
      console.log("Quantity added:", quantity);
      setMessage("✅ Item added to cart successfully!");
    } catch (error: any) {
      console.error("❌ Add to cart failed:", error.response?.data || error.message);
      if (error.response?.status === 401) {
        setMessage("⚠️ Please log in to add items to your cart.");
      } else {
        setMessage("❌ Failed to add item. Try again later.");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex pl-14 pr-14 pb-14 relative z-10 md:flex-row">
        <div className="flex items-center  justify-center w-[75%] md:items-start md:justify-start">
          <div className="flex flex-col items-center justify-center">
            <img
              src={tabData[activeTab].image}
              className="mt-[74px] ml-[65px] h-66 border rounded-2xl"
              alt="IT Specialist Certification Logo"
            />
          </div>
          <div className="flex flex-col  justify-center md:mt-0 md:ml-10">
            <h1 className="text-[2.5rem] font-semibold gap-10 leading-12 ml-3 mt-[65px] whitespace-pre-line">
              {tabData[activeTab].title}
            </h1>
            <p className="text font-light ml-[12px]  mt-[10px]">
              {tabData[activeTab].subtitle}
            </p>
            <div className="ml-[12px] mt-[5px]">
              <Ratings />
            </div>
            {activeTab === "Bundle" && (
              <div className="ml-[12px] mt-[20px]">
                <DownloadButton link={syllabus} />
              </div>
            )}
            {activeTab === "Practice Test" && (
              <div className="ml-[12px] mt-[20px]">
                <button
                  className="flex items-center gap-2 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 cursor-pointer"
                  style={{ backgroundColor: "#0b8642" }}
                >
                  <p className="font-extralight">Explore More</p>
                </button>
              </div>
            )}
            {activeTab === "Exam Voucher" && (
              <div className="ml-[12px] mt-[20px]">
                <DownloadButton link={syllabus} />
              </div>
            )}
            {activeTab === "Courseware" && (
              <div className="ml-[12px] mt-[20px]">
                <DownloadButton link={coursewareLink}/>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[25%] items-center justify-center md:mt-0 md:ml-10">
          <div className=" h-[310px] w-[300px] bg-white rounded-xl  justify-center mt-[60px] ml-[-150px]">
            <div className="ml-[25px] mt-[5px] flex justify-between">
              <div className="ml-[-1px] mt-[3px] font-light">PRICE</div>
              <div className="flex items-center justify-center text-xs text-blue-600 font-semibold mb-1 mr-[20px]">
                <FaLaptop className="mr-1" />
                DIGITAL PRODUCT
              </div>
            </div>
            <div className="text-green-600 font-semibold text-xl ml-[25px]">
              ₹ {formatPrice(tabData[activeTab].price)}
            </div>
            <div className="ml-[25px] mt-[15px] font-light">QUANTITY</div>
            <div className="flex mt-2">
              <div className="flex items-center ml-[25px] border rounded">
                <button onClick={decrement} className="p-3 cursor-pointer">
                  <FaMinus className="w-3 h-3" />
                </button>

                <div className="px-2 py-1 text-center min-w-[10px]">
                  {quantity}
                </div>

                <button onClick={increment} className="p-3 cursor-pointer">
                  <FaPlus className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="ml-[25px] mt-[20px] flex justify-between">
              <div className="font-light">Product Total</div>
              <div className="font-light mr-[20px]">
                ₹ {formatPrice(tabData[activeTab].price * quantity)}
              </div>
            </div>
            <div className="ml-[25px] mt-[5px] flex justify-between">
              <div className="font-light">Grand Total</div>
              <div className="font-light mr-[20px]">
                ₹ {formatPrice(tabData[activeTab].price * quantity)}
              </div>
            </div>
            <div className="ml-[25px] mt-[5px] flex justify-between">
              <button
                onClick={handleAddToCart}
                disabled={loading}
                className="flex items-center mt-[15px] gap-2 text-white px-5 py-2 rounded-lg shadow hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: "#0b8642" }}
              >
                {loading ? "Adding..." : "Add to cart"}
              </button>
              <button
                className="flex items-center mt-[15px] mr-[20px] gap-2 text-white px-7 py-2 rounded-lg shadow hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: "#0b8642" }}
              >
                Buy Now
              </button>
            </div>
            {message && (
            <p className="ml-[25px] mt-3 text-sm text-gray-700">{message}</p>
          )}
          </div>
        </div>
      </div>
  )
}

export default ProductTab