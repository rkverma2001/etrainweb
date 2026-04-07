import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
import clsx from "clsx";

const AuthPopup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
//   const [visible, setVisible] = useState(true);

//   if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <Card className="flex flex-col sm:flex-row w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl bg-white animate-fade-in">
        {/* Left Side - Image */}
        <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
          <img
            src="/sideimg.webp"
            alt="Side Visual"
            className="object-cover w-full h-full rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
          />
        </div>

        {/* Right Side - Auth Form */}
        <div className="relative w-full sm:w-1/2 flex flex-col justify-between">
          {/* Close Button */}
          {/* <button
            onClick={() => setVisible(false)}
            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl z-10"
          >
            <IoClose />
          </button> */}

          {/* Tab Switch Buttons */}
          <div className="flex justify-around pt-8">
            <button
              className={clsx(
                "px-4 py-2 font-semibold text-sm transition",
                isSignUp ? "text-gray-500 hover:text-black" : "border-b-2 border-black"
              )}
              onClick={() => setIsSignUp(false)}
            >
              Login
            </button>
            <button
              className={clsx(
                "px-4 py-2 font-semibold text-sm transition",
                isSignUp ? "border-b-2 border-black" : "text-gray-500 hover:text-black"
              )}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 flex-1 flex items-center justify-center">
            <CardContent className="w-full">
              {isSignUp ? (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <div className="relative">
                      <FaUser className="absolute top-2.5 left-3 text-gray-400" />
                      <Input type="text" placeholder="Enter your full name" className="pl-10" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <div className="relative">
                      <FaEnvelope className="absolute top-2.5 left-3 text-gray-400" />
                      <Input type="email" placeholder="Enter your email" className="pl-10" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="relative">
                      <FaLock className="absolute top-2.5 left-3 text-gray-400" />
                      <Input type="password" placeholder="Enter your password" className="pl-10" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                    <div className="relative">
                      <FaLock className="absolute top-2.5 left-3 text-gray-400" />
                      <Input type="password" placeholder="Re-enter your password" className="pl-10" />
                    </div>
                  </div>

                  <div className="mb-4 flex items-start gap-2 text-sm">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-gray-700">
                      I accept the{" "}
                      <a href="#" className="text-blue-600 underline">Terms of Service</a> and{" "}
                      <a href="#" className="text-blue-600 underline">Privacy Policy</a>
                    </label>
                  </div>

                  <Button className="w-full mt-2">Sign Up</Button>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <div className="relative">
                      <FaEnvelope className="absolute top-2.5 left-3 text-gray-400" />
                      <Input type="email" placeholder="Enter your email" className="pl-10" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <div className="relative">
                      <FaLock className="absolute top-2.5 left-3 text-gray-400" />
                      <Input type="password" placeholder="Enter your password" className="pl-10" />
                    </div>
                  </div>

                  <div className="mb-4 text-right">
                    <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                  </div>

                  <Button className="w-full mt-2">Login</Button>
                </>
              )}
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AuthPopup;
