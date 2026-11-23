import React, { useState, useEffect } from "react";
import api from "@/services/api";

interface PriceDetailsCardProps {
  price: number;
  itemCount?: number;
  onPlaceOrder?: () => void;
  /** Called with the applied coupon code, or null when no coupon applies. */
  onCouponChange?: (code: string | null) => void;
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

// Discount for a coupon at the current cart price. Recomputed whenever the
// price changes so quantity edits after applying a coupon stay correct.
const computeDiscount = (coupon: Coupon | null, price: number): number => {
  if (!coupon) return 0;
  if (coupon.minPurchaseAmount && price < coupon.minPurchaseAmount) return 0;

  let amount =
    coupon.discountType === "percentage"
      ? Math.floor((price * coupon.discountValue) / 100)
      : coupon.discountValue;

  if (coupon.discountType === "percentage" && coupon.maxDiscountAmount) {
    amount = Math.min(amount, coupon.maxDiscountAmount);
  }

  return Math.max(0, Math.min(amount, price));
};

const PriceDetailsCard: React.FC<PriceDetailsCardProps> = ({
  price,
  itemCount = 1,
  onPlaceOrder,
  onCouponChange,
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const appliedDiscount = computeDiscount(appliedCoupon, price);
  const couponBelowMinimum =
    !!appliedCoupon?.minPurchaseAmount && price < appliedCoupon.minPurchaseAmount;

  // Tell the parent which coupon (if any) currently applies.
  useEffect(() => {
    onCouponChange?.(appliedCoupon && !couponBelowMinimum ? appliedCoupon.code : null);
  }, [appliedCoupon, couponBelowMinimum, onCouponChange]);

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

      setAppliedCoupon(found);
      showToast("Coupon applied successfully", "success");
    } catch (error) {
      console.error("Coupon apply error:", error);

      showToast("Error applying coupon. Try again.", "error");
    } finally {
      setIsApplying(false);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
  };

  return (
    <div className="w-full lg:max-w-md bg-white shadow-lg rounded-2xl p-6">
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

      {appliedCoupon && (
        <div className="flex items-center justify-between text-sm bg-green-50 border border-green-200 rounded-lg px-3 py-2 mt-2">
          <span className={couponBelowMinimum ? "text-amber-700" : "text-green-700"}>
            {couponBelowMinimum
              ? `${appliedCoupon.code} needs a minimum purchase of ₹${appliedCoupon.minPurchaseAmount}`
              : `${appliedCoupon.code} applied`}
          </span>
          <button
            onClick={removeCoupon}
            className="text-red-600 hover:text-red-700 font-medium cursor-pointer"
          >
            Remove
          </button>
        </div>
      )}

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
