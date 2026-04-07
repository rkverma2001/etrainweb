// src/pages/PaymentVerification.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentVerification: React.FC = () => {
  const location = useLocation();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [receivedAt, setReceivedAt] = useState<string>("");

  // Read optional query param ?order_id=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const oid = params.get("order_id") || params.get("razorpay_order_id");
    if (oid) setOrderId(oid);

    // store human readable timestamp
    const now = new Date();
    setReceivedAt(now.toLocaleString());
  }, [location.search]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        <div className="flex items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="h-8 w-8 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-4">
          Payment Received
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Thank you — we have received your payment. Kindly wait <strong>up to 48 hours</strong> while we process and verify your order.
        </p>

        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-500 mb-2">Reference</div>
          <div className="text-sm text-gray-700 break-words">
            {orderId ? (
              <span>
                Order ID: <span className="font-medium">{orderId}</span>
              </span>
            ) : (
              <span className="italic text-gray-500">No order reference provided</span>
            )}
          </div>

          <div className="mt-3 text-xs text-gray-400">
            Received at: {receivedAt}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm text-gray-600">
            What happens next?
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>We will verify your payment and process your order.</li>
              <li>Processing can take up to 48 hours — we’ll email you updates.</li>
              <li>If anything is missing, we may contact you using the email you provided.</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs text-center text-gray-400">
          If you do not receive an update within 48 hours, contact support.
        </p>
      </div>
    </div>
  );
};

export default PaymentVerification;
