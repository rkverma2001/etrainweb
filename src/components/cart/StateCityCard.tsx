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

  const getCartTotalInPaise = () => {
    const total = localStorage.getItem("cartTotal"); // YOU MUST SAVE THIS IN PRICEDETAILS
    const rupees = total ? Number(total) : 0;
    return Math.round(rupees * 100);
  };

  const handleBuyNow = async () => {

    setMessage(null);
    setLoading(true);

    try {
      // Validation
      if (!name.trim()) {
        setMessage("Please enter your name");
        setLoading(false);
        return;
      }

      if (!email.trim()) {
        setMessage("Please enter your email");
        setLoading(false);
        return;
      }

      if (!mobile.trim()) {
        setMessage("Please enter your mobile number");
        setLoading(false);
        return;
      }

      if (!selectedState || !selectedCity) {
        setMessage("Please select state and city");
        setLoading(false);
        return;
      }

      /*
    ====================================
    CREATE USER IF NOT EXISTS
    ====================================
    */

      try {
        const userResp = await api.post("/user", {
          name,
          email,
          mobile: `+91${mobile}`,
          userType: "Student",
          city: selectedCity.label,
          state: selectedState.label,
        });

      } catch (userError: any) {

        const errorMessage = userError?.response?.data?.error || "";

        if (
          errorMessage.includes("already exists") ||
          errorMessage.includes("User with this mobile already exists")
        ) {
        } else {
          setMessage(errorMessage || "Unable to save user details");

          setLoading(false);
          return;
        }
      }

      /*
    ====================================
    CREATE PAYMENT ORDER
    ====================================
    */

      const paymentResp = await api.post("/payment/create-order", {
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
;

      const razorpayOrder = paymentResp.data.razorpayOrder;

      if (!razorpayOrder?.id) {
        throw new Error("Razorpay order not received from backend");
      }

      /*
    ====================================
    OPEN RAZORPAY
    ====================================
    */

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_live_fUOvzk20fHrJlv",

        amount: razorpayOrder.amount,

        currency: razorpayOrder.currency,

        order_id: razorpayOrder.id,

        name: "eTrainIndia",

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


          try {
            /*
          ====================================
          VERIFY PAYMENT
          ====================================
          */

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


            if (verifyResp.data.success) {
              setMessage("Payment Successful. Redirecting...");

              setTimeout(() => {
                window.location.href =
                  "/paymentVerification?orderId=" + verifyResp.data.orderId;
              }, 1000);
            } else {
              setMessage(
                verifyResp.data.error || "Payment verification failed",
              );
            }
          } catch (verifyError: any) {

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
            setLoading(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);

      rzp.on("payment.failed", (response: any) => {

        setMessage(response?.error?.description || "Payment failed");

        setLoading(false);
      });

      rzp.open();
    } catch (error: any) {

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
