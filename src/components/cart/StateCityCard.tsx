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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const stateOptions: OptionType[] = State.getStatesOfCountry("IN").map((s) => ({
    value: s.isoCode,
    label: s.name,
  }));

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

    const amount = getCartTotalInPaise();
    if (!amount || amount <= 0) {
      setMessage("Invalid amount.");
      return;
    }

    if (!name || !email || !selectedState || !selectedCity) {
      setMessage("Please fill all details.");
      return;
    }

    setLoading(true);
    try {
      // 1️⃣ CREATE ORDER API CALL
      const orderResp = await api.post("/payment/create-order", {
        amount,
        currency: "INR",
        meta: {
          name,
          email,
          state: selectedState.label,
          city: selectedCity.label,
        },
      });

      const order = orderResp.data.order;

      const options: any = {
        key: 'rzp_test_RiKjzSerCop82t',
        amount: order.amount,
        currency: order.currency,
        name: "eTrainIndia",
        description: "Course Payment",
        order_id: order.id,
        prefill: { name, email },
        handler: async (response: any) => {
          try {
            // 2️⃣ VERIFY PAYMENT API CALL
            await api.post("/payment/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            await api.delete("/cart/clear");
             window.location.href = "/paymentVerification";
            setMessage("Payment Successful!");
          } catch {
            setMessage("Payment verification failed.");
          }
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      setMessage("Payment initialization failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-autoshadow p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Fill Your Details</h2>

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

      <Select options={stateOptions} value={selectedState} onChange={setSelectedState} placeholder="Select State" />

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
