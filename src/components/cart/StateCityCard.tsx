import React, { useState } from "react";
import Select from "react-select";
import { State, City } from "country-state-city";
import api from "@/services/api"; // << USING YOUR AXIOS INSTANCE

interface OptionType {
  value: string;
  label: string;
}

const StateCityCard: React.FC = () => {
  const [selectedState, setSelectedState] = useState<OptionType | null>(null);
  const [selectedCity, setSelectedCity] = useState<OptionType | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const stateOptions: OptionType[] = State.getStatesOfCountry("IN").map(
    (s) => ({
      value: s.isoCode,
      label: s.name,
    }),
  );

  const cityOptions: OptionType[] = selectedState
    ? City.getCitiesOfState("IN", selectedState.value).map((c) => ({
        value: c.name,
        label: c.name,
      }))
    : [];

  const handleBuyNow = async () => {
  console.log("========== BUY NOW STARTED ==========");

  setMessage(null);
  setLoading(true);

  try {
    console.log("User Details:", {
      name,
      email,
      mobile,
      state: selectedState?.label,
      city: selectedCity?.label,
    });

    if (!name.trim()) {
      console.log("Validation Failed: Name Missing");
      setMessage("Please enter your name");
      setLoading(false);
      return;
    }

    if (!email.trim()) {
      console.log("Validation Failed: Email Missing");
      setMessage("Please enter your email");
      setLoading(false);
      return;
    }

    if (!mobile.trim()) {
      console.log("Validation Failed: Mobile Missing");
      setMessage("Please enter your mobile number");
      setLoading(false);
      return;
    }

    if (!selectedState || !selectedCity) {
      console.log("Validation Failed: State/City Missing");
      setMessage("Please select state and city");
      setLoading(false);
      return;
    }

    console.log("========== CREATE USER ==========");

    try {
      const userResp = await api.post("/user", {
        name,
        email,
        mobile: `+91${mobile}`,
        userType: "Student",
        city: selectedCity.label,
        state: selectedState.label,
      });

      console.log("User Created:", userResp.data);
    } catch (userError: any) {
      console.log("User Create Error:", userError?.response?.data);

      const errorMessage = userError?.response?.data?.error || "";

      if (
        errorMessage.includes("already exists") ||
        errorMessage.includes("User with this mobile already exists")
      ) {
        console.log("Existing User Found. Continuing...");
      } else {
        setMessage(errorMessage || "Unable to save user details");
        setLoading(false);
        return;
      }
    }

    console.log("========== CREATE PAYMENT ORDER ==========");

    const couponCode = localStorage.getItem("couponCode") || "";

    console.log("Coupon From LocalStorage:", couponCode);

    const paymentResp = await api.post("/payment/create-order", {
      couponCode,
      currency: "INR",
      meta: {
        name,
        email,
        mobile: `+91${mobile}`,
        state: selectedState.label,
        city: selectedCity.label,
        method: "Online",
      },
    });

    console.log("Create Order Response:", paymentResp.data);

    const razorpayOrder = paymentResp.data.razorpayOrder;

    console.log("Razorpay Order:", razorpayOrder);
    console.log("Amount Received:", razorpayOrder.amount);
    console.log("Amount In Rupees:", razorpayOrder.amount / 100);

    if (!razorpayOrder?.id) {
      throw new Error("Razorpay order not received from backend");
    }

    console.log("========== OPENING RAZORPAY ==========");

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_live_fUOvzk20fHrJlv",

      amount: razorpayOrder.amount,

      currency: razorpayOrder.currency,

      order_id: razorpayOrder.id,

      name: "etrainIndia",

      description: "Course Payment",

      prefill: {
        name,
        email,
        contact: mobile,
      },

      theme: {
        color: "#0b8841",
      },

      handler: async (response: any) => {
        console.log("========== PAYMENT SUCCESS ==========");
        console.log("Razorpay Response:", response);

        try {
          console.log("========== VERIFY PAYMENT ==========");

          const verifyResp = await api.post("/payment/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,

            meta: {
              name,
              email,
              mobile,
              state: selectedState.label,
              city: selectedCity.label,
              method: "Online",
            },
          });

          console.log("Verify Response:", verifyResp.data);

          if (verifyResp.data.success) {
            console.log("Payment Verified Successfully");

            setMessage("Payment Successful. Redirecting...");

            setTimeout(() => {
              window.location.href =
                "/paymentVerification?orderId=" +
                verifyResp.data.orderId;
            }, 1000);
          } else {
            console.log("Verification Failed:", verifyResp.data);

            setMessage(
              verifyResp.data.error || "Payment verification failed",
            );
          }
        } catch (verifyError: any) {
          console.error(
            "VERIFY PAYMENT ERROR:",
            verifyError?.response?.data || verifyError,
          );

          setMessage(
            verifyError?.response?.data?.error ||
              "Payment verification failed",
          );
        } finally {
          setLoading(false);
        }
      },

      modal: {
        ondismiss: () => {
          console.log("Razorpay Closed By User");
          setLoading(false);
        },
      },
    };

    const rzp = new (window as any).Razorpay(options);

    rzp.on("payment.failed", (response: any) => {
      console.error("========== PAYMENT FAILED ==========");
      console.error(response);

      setMessage(response?.error?.description || "Payment failed");
      setLoading(false);
    });

    rzp.open();
  } catch (error: any) {
    console.error(
      "CREATE ORDER ERROR:",
      error?.response?.data || error,
    );

    setMessage(
      error?.response?.data?.error ||
        error?.message ||
        "Payment initialization failed",
    );

    setLoading(false);
  }
};

  return (
    <div className="max-w-sm mx-autoshadow p-6 space-y-4">
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
