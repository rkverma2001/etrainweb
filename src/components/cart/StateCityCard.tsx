import React, { useMemo, useState } from "react";
import Select from "react-select";
import { State, City } from "country-state-city";
import api from "@/services/api";

interface OptionType {
  value: string;
  label: string;
}

interface StateCityCardProps {
  /** Coupon code applied in the cart, validated again by the backend. */
  couponCode?: string;
}

declare global {
  interface Window {
    // Loaded via <script src="https://checkout.razorpay.com/v1/checkout.js">
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

type ApiError = { response?: { data?: { error?: string } }; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stateOptions: OptionType[] = State.getStatesOfCountry("IN").map((s) => ({
  value: s.isoCode,
  label: s.name,
}));

const StateCityCard: React.FC<StateCityCardProps> = ({ couponCode = "" }) => {
  const [selectedState, setSelectedState] = useState<OptionType | null>(null);
  const [selectedCity, setSelectedCity] = useState<OptionType | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const cityOptions: OptionType[] = useMemo(
    () =>
      selectedState
        ? City.getCitiesOfState("IN", selectedState.value).map((c) => ({
            value: c.name,
            label: c.name,
          }))
        : [],
    [selectedState],
  );

  const validate = (): string | null => {
    if (!name.trim()) return "Please enter your name";
    if (!EMAIL_RE.test(email.trim())) return "Please enter a valid email";
    if (!/^[6-9]\d{9}$/.test(mobile)) return "Please enter a valid 10-digit mobile number";
    if (!selectedState || !selectedCity) return "Please select state and city";
    return null;
  };

  const handleBuyNow = async () => {
    setMessage(null);

    const validationError = validate();
    if (validationError || !selectedState || !selectedCity) {
      setMessage(validationError);
      return;
    }

    setLoading(true);

    const fullMobile = `+91${mobile}`;
    const meta = {
      name: name.trim(),
      email: email.trim(),
      mobile: fullMobile,
      state: selectedState.label,
      city: selectedCity.label,
      method: "Online",
    };

    try {
      try {
        await api.post("/user", {
          name: meta.name,
          email: meta.email,
          mobile: fullMobile,
          userType: "Student",
          city: meta.city,
          state: meta.state,
        });
      } catch (userError) {
        const errorMessage = (userError as ApiError)?.response?.data?.error || "";
        // An existing user is fine; anything else stops checkout.
        if (!errorMessage.includes("already exists")) {
          setMessage(errorMessage || "Unable to save user details");
          setLoading(false);
          return;
        }
      }

      const paymentResp = await api.post("/payment/create-order", {
        couponCode,
        currency: "INR",
        meta,
      });

      const razorpayOrder = paymentResp.data?.razorpayOrder;
      if (!razorpayOrder?.id) {
        throw new Error("Razorpay order not received from backend");
      }

      if (!window.Razorpay) {
        throw new Error("Payment gateway failed to load. Please refresh and try again.");
      }

      const rzp = new window.Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_live_U3i6IY2fjrefgE",
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        order_id: razorpayOrder.id,
        name: "etrainIndia",
        description: "Course Payment",
        prefill: { name: meta.name, email: meta.email, contact: fullMobile },
        theme: { color: "#0b8841" },

        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            const verifyResp = await api.post("/payment/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              meta,
            });

            if (verifyResp.data?.success) {
              setMessage("Payment Successful. Redirecting...");
              const orderId = verifyResp.data.orderId || response.razorpay_order_id;
              setTimeout(() => {
                window.location.href =
                  "/paymentVerification?orderId=" + encodeURIComponent(orderId);
              }, 1000);
            } else {
              setMessage(verifyResp.data?.error || "Payment verification failed");
            }
          } catch (verifyError) {
            console.error("Payment verification error");
            setMessage(
              (verifyError as ApiError)?.response?.data?.error ||
                "Payment verification failed",
            );
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => setLoading(false),
        },
      });

      rzp.on("payment.failed", (response: { error?: { description?: string } }) => {
        setMessage(response?.error?.description || "Payment failed");
        setLoading(false);
      });

      rzp.open();
    } catch (error) {
      console.error("Create order error");
      const err = error as ApiError;
      setMessage(err?.response?.data?.error || err?.message || "Payment initialization failed");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Fill Your Details
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-lg p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email ID"
        className="w-full border rounded-lg p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex w-full">
        <span
          className="
      inline-flex
      items-center
      px-3
      border
      border-r-0
      rounded-l-lg
      bg-gray-100
      text-gray-700
      font-medium
    "
        >
          +91
        </span>

        <input
          type="tel"
          placeholder="9876543210"
          maxLength={10}
          className="
      w-full
      border
      rounded-r-lg
      p-2
      focus:outline-none
      focus:ring-2
      focus:ring-green-500
    "
          value={mobile}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setMobile(value);
          }}
        />
      </div>

      <Select
        options={stateOptions}
        value={selectedState}
        onChange={setSelectedState}
        placeholder="Select State"
      />

      <Select
        options={cityOptions}
        value={selectedCity}
        onChange={setSelectedCity}
        placeholder="Select City"
        isDisabled={!selectedState}
      />

      <button
        onClick={handleBuyNow}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        {loading ? "Processing..." : "Submit Details and Proceed"}
      </button>

      {message && <p className="text-center text-sm mt-2">{message}</p>}
    </div>
  );
};

export default StateCityCard;
