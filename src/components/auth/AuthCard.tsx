import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FiEdit } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../services/api";
import { useAuth } from "./AuthContext";

const AuthCard: React.FC = () => {
  const { closeAuth } = useAuth();

  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleGetOtp = async () => {
    if (!phone || phone.length < 8) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post("/auth/send-otp", {
        mobile: `+${phone}`,
      });

      if (data.message) {
        toast.success(data.message);
        setOtpSent(true);
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error: any) {
      console.error("Axios error:", error);

      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleVerify = async () => {
    const code = otp.join("");

    if (!phone) {
      toast.error("Phone number missing");
      return;
    }
    if (code.length !== 6 || !/^\d{6}$/.test(code)) {
      toast.error("Enter full 6-digit OTP");
      return;
    }

    const payload = { mobile: `+${phone}`, otp: code };

    try {
      setLoading(true);
      const response = await axios.post("/auth/verify-otp", payload);
      const token = response?.data?.token;
      const msg =
        response?.data?.message ??
        response?.data?.msg ??
        response?.data?.success ??
        null;
      
      if (token) {
      // Save JWT in localStorage
      localStorage.setItem("authToken", token);

      // Show success message
      toast.success(typeof msg === "string" ? msg : "OTP verified");
       setTimeout(() => {
    closeAuth();
    window.location.reload(); // 👈 reload the entire app after login
  }, 1000);
      } else {
      toast.error(msg || "Invalid OTP!");
      }

     } catch (error: any) {
    const data = error.response?.data;
    const msg =
      (typeof data === "string" ? data : data?.message || data?.error) ||
      `Server error: ${error.response?.status}`;
    toast.error(msg);
  } finally {
    setLoading(false);
  }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    handleVerify();
  }

  if (e.key === "Backspace") {
    const target = e.target as HTMLInputElement;
    const index = Number(target.id.split("-")[1]);
    if (otp[index]) {
      handleOtpChange("", index);
    } else if (index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
      handleOtpChange("", index - 1);
      prevInput?.focus();
    }
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md relative">
        <ToastContainer position="top-right" autoClose={3000} />

        {/* Close Button */}
        <button
          onClick={closeAuth}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Top Illustration */}

        {!otpSent ? (
          <>
            <div className="flex justify-center mb-6">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/Auth1.svg"
                alt="OTP Illustration"
                className="w-38 h-38"
              />
            </div>
            {/* --- Your Phone Number Card (unchanged) --- */}
            <h2 className="text-xl font-semibold mb-6">
              Please enter your Mobile Number
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/Auth2.svg"
                alt="mobile"
                className="inline-block w-10 h-6 ml-2"
              />
            </h2>

            <div className="mb-6">
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  placeholder: "E.g.9958990134",
                }}
                containerClass="!w-full flex items-center border border-gray-300 rounded-lg bg-white px-2 py-1"
                inputClass="!w-full !border-0 !outline-none !shadow-none !text-base placeholder-gray-400"
                buttonClass="!bg-transparent !border-0 !shadow-none !px-1"
                dropdownClass="!w-64 !shadow-lg !rounded-lg !border !border-gray-200"
              />
            </div>

            <button
              onClick={handleGetOtp}
              disabled={loading}
              className="w-full bg-[#0b8743] hover:opacity-90 text-white py-3 rounded-lg font-medium transition cursor-pointer"
            >
              Get OTP
            </button>

            <p className="text-xs text-gray-500 mt-6 text-center">
              By continuing you agree to our{" "}
              <a href="#" className="text-blue-600 underline">
                Terms of use
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/Auth3.svg"
                alt="OTP Illustration"
                className="w-38 h-38"
              />
            </div>
            {/* --- OTP Input Card --- */}
            <h2 className="text-xl font-semibold mb-2">
              Enter OTP
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/Auth2.svg"
                alt="mobile"
                className="inline-block w-10 h-6 ml-2"
              />
            </h2>
            <p className="text-gray-500 mb-4 flex items-center">
              6 digit code sent to {"  "}
              <span className="text-blue-600 ml-1">+{phone}</span>
              <button
                onClick={() => setOtpSent(false)}
                className="ml-1 text-blue-600 cursor-pointer"
              >
                <FiEdit size={16} />
              </button>
            </p>

            <div className="flex justify-between mb-6 gap-3">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  onKeyDown={handleKeyDown}
                  className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center mb-4">
              Didn't receive OTP?{" "}
              <button className="text-blue-600 font-medium cursor-pointer">
                Resend OTP
              </button>
            </p>

            <button
              onClick={handleVerify}
              className="w-full bg-[#0b8743] hover:opacity-90 text-white py-3 rounded-lg font-medium transition cursor-pointer"
            >
              Verify & Proceed
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
