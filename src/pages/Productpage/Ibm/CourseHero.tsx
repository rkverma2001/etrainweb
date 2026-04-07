import React from "react";
import {
  Star,
  Clock,
  Globe,
  Award,
  ShieldCheck,
  Minus,
  Plus,
} from "lucide-react";

const CourseHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-14">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto">
          <img
            src="/ibm-logo.png"
            alt="IBM"
            className="h-10 mb-4"
          />

          <div className="bg-blue-900 text-white rounded-xl p-4 text-xl font-semibold">
            IBM Certified Data Analyst
          </div>

          <img
            src="/student-image.jpg"
            alt="Course"
            className="rounded-xl mt-4"
          />

          <div className="mt-3 inline-block bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full">
            Global Certification
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            IBM Certified Data Analyst
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Master data analysis with Python and earn an industry-recognized IBM certification.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-gray-700 font-medium">
              4.8 | 19,617 reviews
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mt-5 text-gray-600">
            <div className="flex items-center gap-2">
              <Award size={18} /> Intermediate
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} /> 6 Weeks
            </div>

            <div className="flex items-center gap-2">
              ⚡ Self-paced
            </div>

            <div className="flex items-center gap-2">
              <Globe size={18} /> English
            </div>
          </div>

          {/* PRICE */}
          <div className="mt-6 flex items-center gap-6">
            <h2 className="text-3xl font-bold text-gray-900">₹3,999</h2>

            {/* Quantity */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button className="px-3 py-2 hover:bg-gray-100">
                <Minus size={16} />
              </button>
              <span className="px-4">1</span>
              <button className="px-3 py-2 hover:bg-gray-100">
                <Plus size={16} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
              <ShieldCheck size={16} /> 256-bit SSL Secure Payment
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow">
              Buy Now
            </button>

            <button className="bg-green-100 text-green-700 hover:bg-green-200 px-8 py-3 rounded-xl font-semibold">
              Add to Cart
            </button>
          </div>

          {/* Benefits */}
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ Official IBM Certification</li>
            <li>✔ Lifetime Access</li>
            <li>✔ Free exam voucher included</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;