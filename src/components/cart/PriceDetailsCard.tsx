import React, { useState, useEffect } from "react";

interface PriceDetailsCardProps {
  price: number;      // Total price before discount
  discount: number;   // Discount amount (initial / fallback)
  itemCount?: number; // Optional — number of items
  onPlaceOrder?: () => void; // called when user clicks Place Order
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
  applicableCourses?: unknown[]; // kept generic for now
};

const COUPON_API = "http://localhost:8080/api/v1/coupon/"; // provided by you

const PriceDetailsCard: React.FC<PriceDetailsCardProps> = ({
  price,
  discount,
  itemCount = 1,
  onPlaceOrder,
}) => {
  // local coupon input
  const [couponCode, setCouponCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  // applied discount stored locally so UI updates immediately
  const [appliedDiscount, setAppliedDiscount] = useState<number>(discount || 0);

  // toast state
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  // auto-hide toast after 3s
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  // price calculations use appliedDiscount
  const gstRate = 0.18; // 18% GST
  const subtotal = price;
  const gstAmount = subtotal * gstRate;
  const totalAmount = Math.max(0, (subtotal + gstAmount) - appliedDiscount);

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
      // Fetch coupons (your endpoint returns an array as shown)
      const res = await fetch(COUPON_API);
      if (!res.ok) {
        throw new Error("Failed to reach coupon server");
      }
      const coupons: Coupon[] = await res.json();

      // find coupon by code (case-insensitive)
      const found = coupons.find((c) => c.code?.toUpperCase() === code);

      if (!found) {
        showToast("Invalid coupon code", "error");
        return;
      }

      // validations
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
          "error"
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

      // calculate discount
      let computedDiscount = 0;
      if (found.discountType === "percentage") {
        computedDiscount = Math.floor((price * found.discountValue) / 100);
        if (found.maxDiscountAmount && computedDiscount > found.maxDiscountAmount) {
          computedDiscount = found.maxDiscountAmount;
        }
      } else {
        // fixed amount
        computedDiscount = found.discountValue;
      }

      // Ensure discount isn't more than price
      computedDiscount = Math.min(computedDiscount, price);

      // Apply discount locally (you may want to also inform backend)
      setAppliedDiscount(computedDiscount);
      showToast("Coupon applied successfully", "success");

      // Optionally: If you want to inform parent component or update backend,
      // you can call a prop callback here (not requested). Example:
      // onCouponApplied?.({ code: found.code, discount: computedDiscount });

    } catch (err) {
      console.error("Coupon apply error:", err);
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
      <h2 className="text-lg font-semibold text-gray-700 mb-4">PRICE DETAILS</h2>

      {/* Price */}
      <div className="flex justify-between text-gray-600 mb-2">
        <span>
          Price ({itemCount} {itemCount > 1 ? "items" : "item"})
        </span>
        <span>₹{price.toLocaleString()}</span>
      </div>

      {/* Discount (shows appliedDiscount) */}
      <div className="flex justify-between text-green-600 mb-2">
        <span>Discount</span>
        <span>- ₹{appliedDiscount.toLocaleString()}</span>
      </div>

      {/* Coupon Input + Apply Button (keeps your existing design look) */}
      <div className="gap-3 my-4 flex flex-col">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1 border border-gray-300 rounded-xl px-3 py-2 w-66 focus:ring-2 focus:ring-green-500"
          aria-label="Coupon code"
        />
        <button
          onClick={handleApplyCoupon}
          disabled={isApplying}
          className={`w-full rounded-xl font-semibold px-4 py-3 transition ${
            isApplying ? "bg-gray-300 text-gray-700 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {isApplying ? "Applying..." : "Apply Coupon"}
        </button>
      </div>

      <hr className="my-3" />

      {/* Subtotal */}
      <div className="flex justify-between text-gray-600 mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString()}</span>
      </div>

      {/* GST */}
      <div className="flex justify-between text-gray-600 mb-2">
        <span>GST (18%)</span>
        <span>₹{gstAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
      </div>

      <hr className="my-3" />

      {/* Total */}
      <div className="flex justify-between text-lg font-semibold text-gray-800 mb-2">
        <span>Total Amount</span>
        <span>
          ₹{totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </span>
      </div>

      <p className="text-green-600 text-sm mb-4">
        You will save ₹{appliedDiscount.toLocaleString()} on this order
      </p>

      {/* Place Order Button */}
      <button
        onClick={() => onPlaceOrder?.()}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition cursor-pointer"
        disabled={price <= 0}
        aria-disabled={price <= 0}
        aria-label="Place Order"
      >
        Place Order
      </button>

      {/* Simple toast in top-right (doesn't change main design) */}
      {toast && (
        <div
          className={`fixed right-5 top-6 z-50 px-4 py-2 rounded-lg shadow-md text-white ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
          role="status"
          aria-live="polite"
        >
          {toast.msg}
        </div>
      )}
    </div>
  );
};

export default PriceDetailsCard;
