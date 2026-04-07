import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginPopup = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
      <Card className="flex flex-col sm:flex-row w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
        {/* Left Side - Image only */}
        <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
          <img
            src="/sideimg.webp"
            alt="Login Side"
            className="object-cover w-full h-full rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 flex items-center">
          <CardContent className="w-full">
            <h2 className="mb-6 text-2xl font-bold text-center">Sign In</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute top-2.5 left-3 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <FaLock className="absolute top-2.5 left-3 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="mb-4 text-right text-sm">
              <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <Button className="w-full">Sign In</Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default LoginPopup;
