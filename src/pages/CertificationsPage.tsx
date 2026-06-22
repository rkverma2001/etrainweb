import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/services/api";
import Footer from "@/components/footer/Footer";

export default function CertificationsPage() {
  const [loading, setLoading] = useState(true);
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const { data } = await api.get("/course");

        const filtered = data.filter(
          (course: any) => course.tabData?.["Exam Voucher"]
        );

        setCertifications(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 mt-20 min-h-screen">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Professional Certifications
          </h1>
          <p className="text-gray-600 mt-3">
            Browse industry-recognized certification exam vouchers.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-10">
            Loading certifications...
          </div>
        ) : certifications.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No certifications available.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((course) => {
              const examVoucher = course.tabData?.["Exam Voucher"];

              return (
                <Link
                  key={course._id}
                  to={`/${course.courseCode}`}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Square Image */}
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      src={examVoucher?.image}
                      alt={course.courseName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h2 className="text-base font-semibold text-gray-900 line-clamp-2 min-h-[48px]">
                      {course.courseName}
                    </h2>

                    <p className="text-sm text-gray-500 mt-2 line-clamp-2 min-h-[40px]">
                      {examVoucher?.subtitle}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-bold text-[#008641] text-lg">
                        ₹{examVoucher?.price}
                      </span>

                      <span className="text-sm font-medium text-[#008641]">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}