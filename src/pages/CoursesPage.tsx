import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/services/api";
import Footer from "@/components/footer/Footer";

export default function CoursesPage() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get("/course");
        setCourses(data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    if (!search.trim()) return courses;

    return courses.filter(
      (course) =>
        course.courseName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        course.courseCode
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [courses, search]);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 mt-24 min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              All Courses
            </h1>
            <p className="text-gray-500 mt-1">
              {filteredCourses.length} Courses Available
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-lg font-medium text-gray-600">
              Loading courses...
            </div>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-gray-500">
              No courses found.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => {
              const image =
                course.tabData?.Bundle?.image ||
                course.tabData?.["Exam Voucher"]?.image ||
                course.tabData?.Courseware?.image ||
                course.tabData?.["Practice Test"]?.image ||
                "/placeholder-course.jpg";

              const firstTab =
                course.tabData?.Bundle ||
                course.tabData?.["Exam Voucher"] ||
                course.tabData?.Courseware ||
                course.tabData?.["Practice Test"];

              return (
                <Link
                  key={course._id}
                  to={`/${course.courseCode}`}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Square Image */}
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      src={image}
                      alt={course.courseName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h2 className="text-base font-semibold text-gray-900 line-clamp-2 min-h-[48px]">
                      {course.courseName}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      {course.courseCode}
                    </p>

                    {/* Available Tabs */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {Object.keys(course.tabData || {}).map((tab) => (
                        <span
                          key={tab}
                          className="px-2 py-1 text-[11px] font-medium rounded-full bg-green-50 text-[#008641]"
                        >
                          {tab}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-[#008641]">
                        ₹{firstTab?.price || "—"}
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