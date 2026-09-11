import React, { useEffect, useState } from "react";
import { FaLaptop, FaMinus, FaPlus } from "react-icons/fa";
import DownloadButton from "@/components/button/DownloadButton";
import Ratings from "@/components/reviews/Ratings";
import api from "@/services/api";
import { useNavigate, useParams } from "react-router-dom";

type TabName =
  | "Bundle"
  | "Exam Voucher"
  | "Practice Test"
  | "Courseware";

interface TabContent {
  title: string;
  subtitle: string;
  image: string;
  price: number;
  versions?: string[];
}

interface ProductTabProps {
  tabData: Record<TabName, TabContent>;
  activeTab: TabName;
  syllabus: string;
  coursewareLink: string;
}

/*
 * Payload sent to backend
 *
 * version is OPTIONAL because not every package has versions.
 */
interface AddToCartPayload {
  courseCode: string;
  packageType: TabName;
  quantity: number;
  version?: string;
}

const ProductTab3: React.FC<ProductTabProps> = ({
  tabData,
  activeTab,
  syllabus,
  coursewareLink,
}) => {
  const { courseId } = useParams<{ courseId: string }>();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState<number>(1);

  const [selectedVersion, setSelectedVersion] =
    useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [message, setMessage] =
    useState<string | null>(null);

  /*
   * ============================================================
   * QUANTITY
   * ============================================================
   */

  const increment = () => {
    setQuantity((q) => q + 1);
  };

  const decrement = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  /*
   * ============================================================
   * RESET WHEN TAB CHANGES
   * ============================================================
   *
   * When the user changes:
   *
   * Bundle -> Exam Voucher
   *
   * the old version should not remain selected.
   */

  useEffect(() => {
    setQuantity(1);
    setSelectedVersion("");
    setMessage(null);
  }, [activeTab]);

  /*
   * ============================================================
   * PRICE FORMAT
   * ============================================================
   */

  const formatPrice = (num: number) => {
    return num.toLocaleString("en-IN");
  };

  /*
   * ============================================================
   * CURRENT TAB VERSIONS
   * ============================================================
   *
   * Example:
   *
   * Bundle:
   * tabData.Bundle.versions
   *
   * Exam Voucher:
   * tabData["Exam Voucher"].versions
   *
   * Practice Test:
   * tabData["Practice Test"].versions
   *
   * Courseware:
   * tabData.Courseware.versions
   *
   * If versions are not present:
   * []
   */

  const currentVersions: string[] =
    tabData?.[activeTab]?.versions ?? [];

  /*
   * ============================================================
   * DEBUG
   * ============================================================
   */

  console.log("========== VERSION DEBUG ==========");
  console.log("Course ID:", courseId);
  console.log("Active Tab:", activeTab);
  console.log("Current Tab:", tabData?.[activeTab]);
  console.log("Current Versions:", currentVersions);
  console.log("Version Count:", currentVersions.length);
  console.log("Selected Version:", selectedVersion);
  console.log("===================================");

  /*
   * ============================================================
   * ADD TO CART
   * ============================================================
   */

  const handleAddToCart = async (
    redirectToCart: boolean = false
  ) => {
    try {
      setLoading(true);
      setMessage(null);

      console.log(
        "📦 Course Code from URL:",
        courseId
      );

      /*
       * Course ID / Course Code validation
       */

      if (!courseId) {
        console.error(
          "❌ No course code found in URL"
        );

        setMessage(
          "Invalid course. Please try again."
        );

        return;
      }

      /*
       * ========================================================
       * VERSION VALIDATION
       * ========================================================
       *
       * If this package has versions, user MUST select one.
       *
       * If this package has NO versions, no selection is needed.
       */

      if (
        currentVersions.length > 0 &&
        !selectedVersion
      ) {
        setMessage(
          "⚠️ Please select a version."
        );

        return;
      }

      /*
       * Authentication token
       */

      const token =
        localStorage.getItem("authToken");

      console.log("🔑 Auth Token:", token);
      console.log(
        "📦 Package Type:",
        activeTab
      );
      console.log(
        "📌 Selected Version:",
        selectedVersion
      );

      /*
       * ========================================================
       * CREATE PAYLOAD
       * ========================================================
       *
       * IMPORTANT:
       * The explicit AddToCartPayload type prevents the
       * TypeScript error when adding version.
       */

      const payload: AddToCartPayload = {
        courseCode: courseId,
        packageType: activeTab,
        quantity,
      };

      /*
       * Only send version if this package actually supports
       * versions.
       */

      if (
        currentVersions.length > 0 &&
        selectedVersion
      ) {
        payload.version = selectedVersion;
      }

      console.log(
        "📤 Add to Cart Payload:",
        payload
      );

      /*
       * ========================================================
       * API REQUEST
       * ========================================================
       */

      const response = await api.post(
        "/cart/add",
        payload,
        {
          headers: {
            "Content-Type":
              "application/json",

            Authorization: token
              ? `Bearer ${token}`
              : "",
          },
        }
      );

      console.log(
        "✅ Cart Add Response:",
        response.data
      );

      console.log(
        "Quantity added:",
        quantity
      );

      console.log(
        "Version added:",
        selectedVersion || "No version"
      );

      setMessage(
        "✅ Item added to cart successfully!"
      );

      /*
       * Buy Now
       */

      if (redirectToCart) {
        navigate("/cart");
      }
    } catch (error: any) {
      console.error(
        "❌ Add to cart failed:",
        error.response?.data ||
          error.message
      );

      /*
       * Unauthorized
       */

      if (
        error.response?.status === 401
      ) {
        setMessage(
          "⚠️ Please log in to add items to your cart."
        );
      } else {
        /*
         * Show backend error if available
         */

        setMessage(
          error.response?.data?.message ||
            "❌ Failed to add item. Try again later."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  /*
   * ============================================================
   * VERSION DROPDOWN
   * ============================================================
   */

  const VersionDropdown = () => {
    /*
     * Don't show dropdown when the current package
     * has no versions.
     */

    if (currentVersions.length === 0) {
      return null;
    }

    return (
      <select
        value={selectedVersion}
        onChange={(e) => {
          const version = e.target.value;

          setSelectedVersion(version);

          console.log(
            "📌 Selected Version:",
            version
          );
        }}
        className="mt-[10px] border rounded-lg px-3 py-2 text-sm bg-white w-[220px] focus:outline-none"
      >
        <option value="">
          Select Version
        </option>

        {currentVersions.map(
          (version) => (
            <option
              key={version}
              value={version}
            >
              {version}
            </option>
          )
        )}
      </select>
    );
  };

  /*
   * ============================================================
   * CURRENT TAB
   * ============================================================
   */

  const currentTab = tabData[activeTab];

  /*
   * Safety check
   */

  if (!currentTab) {
    return (
      <div className="p-5 text-center">
        Course information not available.
      </div>
    );
  }

  /*
   * ============================================================
   * UI
   * ============================================================
   */

  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 md:pl-14 md:pr-14 pb-10 md:pb-14 relative z-10">

      {/* =====================================================
          LEFT SECTION
      ====================================================== */}

      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[75%] md:items-start md:justify-start">

        {/* IMAGE */}

        <div className="flex flex-col items-center justify-center w-full md:w-auto">
          <img
            src={currentTab.image}
            className="mt-[20px] md:mt-[74px] md:ml-[65px] h-[140px] sm:h-[180px] md:h-66 border rounded-2xl"
            alt="IT Specialist Certification Logo"
          />
        </div>

        {/* CONTENT */}

        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:mt-0 md:ml-10">

          <h1 className="text-[1.4rem] sm:text-[1.8rem] md:text-[2.5rem] font-semibold gap-10 leading-tight md:leading-12 ml-0 md:ml-3 mt-[20px] md:mt-[65px] whitespace-pre-line">
            {currentTab.title}
          </h1>

          <p className="text font-light ml-0 md:ml-[12px] mt-[10px]">
            {currentTab.subtitle}
          </p>

          <div className="ml-0 md:ml-[12px] mt-[5px]">
            <Ratings />
          </div>

          {/* =================================================
              BUNDLE
          ================================================= */}

          {activeTab === "Bundle" && (
            <div className="ml-0 md:ml-[12px] mt-[20px]">
              <DownloadButton link={syllabus} />

              <VersionDropdown />
            </div>
          )}

          {/* =================================================
              PRACTICE TEST
          ================================================= */}

          {activeTab === "Practice Test" && (
            <div className="ml-0 md:ml-[12px] mt-[20px]">

              <button
                className="flex items-center gap-2 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 cursor-pointer"
                style={{
                  backgroundColor:
                    "#0b8642",
                }}
              >
                <p className="font-extralight">
                  Explore More
                </p>
              </button>

              <VersionDropdown />
            </div>
          )}

          {/* =================================================
              EXAM VOUCHER
          ================================================= */}

          {activeTab === "Exam Voucher" && (
            <div className="ml-0 md:ml-[12px] mt-[20px]">

              <DownloadButton link={syllabus} />

              <VersionDropdown />
            </div>
          )}

          {/* =================================================
              COURSEWARE
          ================================================= */}

          {activeTab === "Courseware" && (
            <div className="ml-0 md:ml-[12px] mt-[20px]">

              <DownloadButton
                link={coursewareLink}
              />

              <VersionDropdown />
            </div>
          )}

        </div>
      </div>

      {/* =====================================================
          RIGHT SECTION
      ====================================================== */}

      <div className="flex flex-col w-full md:w-[25%] items-center justify-center md:mt-0 md:ml-10">

        <div className="h-auto md:h-[310px] w-full max-w-[300px] bg-white rounded-xl justify-center mt-[30px] md:mt-[60px] md:ml-[-150px] p-4 md:p-0">

          <div className="ml-0 md:ml-[25px] mt-[5px] flex justify-between">

            <div className="font-light">
              PRICE
            </div>

            <div className="flex items-center text-xs text-blue-600 font-semibold mb-1 mr-2 md:mr-[20px]">

              <FaLaptop className="mr-1" />

              DIGITAL PRODUCT
            </div>
          </div>

          <div className="text-green-600 font-semibold text-lg md:text-xl ml-0 md:ml-[25px]">

            ₹ {formatPrice(currentTab.price)}

          </div>

          {/* QUANTITY */}

          <div className="ml-0 md:ml-[25px] mt-[15px] font-light">
            QUANTITY
          </div>

          <div className="flex mt-2">

            <div className="flex items-center ml-0 md:ml-[25px] border rounded">

              <button
                onClick={decrement}
                className="p-3 cursor-pointer"
                disabled={loading}
              >
                <FaMinus className="w-3 h-3" />
              </button>

              <div className="px-2 py-1 text-center min-w-[10px]">
                {quantity}
              </div>

              <button
                onClick={increment}
                className="p-3 cursor-pointer"
                disabled={loading}
              >
                <FaPlus className="w-3 h-3" />
              </button>

            </div>
          </div>

          {/* PRODUCT TOTAL */}

          <div className="ml-0 md:ml-[25px] mt-[20px] flex justify-between">

            <div className="font-light">
              Product Total
            </div>

            <div className="font-light mr-2 md:mr-[20px]">

              ₹{" "}

              {formatPrice(
                currentTab.price *
                  quantity
              )}

            </div>
          </div>

          {/* GRAND TOTAL */}

          <div className="ml-0 md:ml-[25px] mt-[5px] flex justify-between">

            <div className="font-light">
              Grand Total
            </div>

            <div className="font-light mr-2 md:mr-[20px]">

              ₹{" "}

              {formatPrice(
                currentTab.price *
                  quantity
              )}

            </div>
          </div>

          {/* BUTTONS */}

          <div className="ml-0 md:ml-[25px] mt-[10px] flex flex-col md:flex-row gap-2 md:gap-0 md:justify-between">

            {/* ADD TO CART */}

            <button
              onClick={() =>
                handleAddToCart(false)
              }
              disabled={loading}
              className="flex items-center justify-center mt-[10px] md:mt-[15px] gap-2 text-white px-5 py-2 rounded-lg shadow hover:opacity-90 cursor-pointer disabled:opacity-50"
              style={{
                backgroundColor:
                  "#0b8642",
              }}
            >
              {loading
                ? "Adding..."
                : "Add to Cart"}
            </button>

            {/* BUY NOW */}

            <button
              onClick={() =>
                handleAddToCart(true)
              }
              disabled={loading}
              className="flex items-center justify-center mt-[5px] md:mt-[15px] md:mr-[20px] gap-2 text-white px-7 py-2 rounded-lg shadow hover:opacity-90 cursor-pointer disabled:opacity-50"
              style={{
                backgroundColor:
                  "#0b8642",
              }}
            >
              {loading
                ? "Processing..."
                : "Buy Now"}
            </button>

          </div>

          {/* MESSAGE */}

          {message && (
            <p className="ml-0 md:ml-[25px] mt-3 text-sm text-gray-700">
              {message}
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductTab3;