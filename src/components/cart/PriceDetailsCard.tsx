import React, { useState, useEffect } from "react";
import api from "@/services/api";

interface PriceDetailsCardProps {
  price: number;
  discount: number;
  itemCount?: number;
  onPlaceOrder?: () => void;
}

type Coupon = {
  _id: string;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  maxDiscountAmount?: number;
  minPurchaseAmount?: number;
  validFrom?: string;
  validUntil?: string;
  usageLimit?: number;
  usedCount?: number;
  isActive?: boolean;
  applicableCourses?: unknown[];
};

const PriceDetailsCard: React.FC<PriceDetailsCardProps> = ({
  price,
  discount,
  itemCount = 1,
  onPlaceOrder,
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);

  const [appliedDiscount, setAppliedDiscount] = useState(discount || 0);

  const [toast, setToast] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast]);

  const subtotal = price;

  const totalAmount = Math.max(0, subtotal - appliedDiscount);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
  };

  const handleApplyCoupon = async () => {
    const code = couponCode?.trim().toUpperCase();

    if (!code) {
      showToast("Please enter a coupon code", "error");
      return;
    }

    setIsApplying(true);

    try {
      const { data } = await api.get("/coupon");
      console.log("Coupons API Response:", data);

      const coupons: Coupon[] = data;

      const found = coupons.find(
        (coupon) => coupon.code?.toUpperCase() === code,
      );

      if (!found) {
        showToast("Invalid coupon code", "error");
        return;
      }

      if (!found.isActive) {
        showToast("This coupon is not active", "error");
        return;
      }

      const now = new Date();

      if (found.validFrom && new Date(found.validFrom) > now) {
        showToast("Coupon is not yet valid", "error");
        return;
      }

      if (found.validUntil && new Date(found.validUntil) < now) {
        showToast("Coupon has expired", "error");
        return;
      }

      if (found.minPurchaseAmount && price < found.minPurchaseAmount) {
        showToast(
          `Minimum purchase ₹${found.minPurchaseAmount} required for this coupon`,
          "error",
        );
        return;
      }

      if (
        typeof found.usageLimit === "number" &&
        typeof found.usedCount === "number" &&
        found.usedCount >= found.usageLimit
      ) {
        showToast("Coupon usage limit reached", "error");
        return;
      }

      let computedDiscount = 0;

      if (found.discountType === "percentage") {
        computedDiscount = Math.floor((price * found.discountValue) / 100);

        if (
          found.maxDiscountAmount &&
          computedDiscount > found.maxDiscountAmount
        ) {
          computedDiscount = found.maxDiscountAmount;
        }
      } else {
        computedDiscount = found.discountValue;
      }

      computedDiscount = Math.min(computedDiscount, price);

      setAppliedDiscount(computedDiscount);

      localStorage.setItem("couponCode", found.code);

      localStorage.setItem("couponDiscount", computedDiscount.toString());

      showToast("Coupon applied successfully", "success");
    } catch (error) {
      console.error("Coupon apply error:", error);

      showToast("Error applying coupon. Try again.", "error");
    } finally {
      setIsApplying(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartTotal", totalAmount.toString());
  }, [totalAmount]);

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        PRICE DETAILS
      </h2>

      <div className="flex justify-between text-gray-600 mb-2">
        <span>
          Price ({itemCount} {itemCount > 1 ? "items" : "item"})
        </span>

        <span>₹{price.toLocaleString()}</span>
      </div>

      <div className="flex justify-between text-green-600 mb-2">
        <span>Discount</span>

        <span>- ₹{appliedDiscount.toLocaleString()}</span>
      </div>

      <div className="gap-3 my-4 flex flex-col">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1 border border-gray-300 rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleApplyCoupon}
          disabled={isApplying}
          className={`w-full rounded-xl font-semibold px-4 py-3 transition ${
            isApplying
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {isApplying ? "Applying..." : "Apply Coupon"}
        </button>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-gray-600 mb-2">
        <span>Subtotal</span>

        <span>₹{subtotal.toLocaleString()}</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-lg font-semibold text-gray-800 mb-2">
        <span>Total Amount</span>

        <span>
          ₹
          {totalAmount.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      <p className="text-green-600 text-sm mb-4">
        You will save ₹{appliedDiscount.toLocaleString()} on this order
      </p>

      <button
        onClick={() => onPlaceOrder?.()}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition cursor-pointer"
        disabled={price <= 0}
      >
        Place Order
      </button>

      {toast && (
        <div
          className={`fixed right-5 top-6 z-50 px-4 py-2 rounded-lg shadow-md text-white ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.msg}
        </div>
      )}
    </div>
  );
};

export default PriceDetailsCard;
