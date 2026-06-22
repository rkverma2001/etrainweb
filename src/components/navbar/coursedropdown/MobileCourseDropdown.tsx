import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import courseData from "./data";

const MobileCourseDropdown: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const handleCategoryToggle = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm max-h-[60vh] overflow-y-auto">
      {courseData.map((category, index) => (
        <div
          key={category.categorySlug}
          className="border-b border-gray-100 last:border-b-0"
        >
          {/* Category Header */}
          <button
            onClick={() => handleCategoryToggle(index)}
            className="sticky top-0 z-10 w-full flex items-center justify-between px-4 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-gray-800 text-sm">
              {category.categoryName}
            </span>

            {activeCategory === index ? (
              <ChevronUp
                size={18}
                className="text-[#008641] flex-shrink-0"
              />
            ) : (
              <ChevronDown
                size={18}
                className="text-gray-500 flex-shrink-0"
              />
            )}
          </button>

          {/* Courses */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeCategory === index
                ? "max-h-[1000px]"
                : "max-h-0"
            }`}
          >
            <div className="bg-gray-50">
              {/* View All Category */}
              <Link
                to={category.categorySlug}
                className="block px-6 py-3 text-[#008641] font-semibold text-sm border-b border-gray-200 hover:bg-white transition-colors"
              >
                View All {category.categoryName}
              </Link>

              {/* Course List */}
              {category.courses.map((course) => (
                <Link
                  key={course.slug}
                  to={course.slug}
                  className="block px-6 py-3 text-sm text-gray-700 hover:bg-white hover:text-[#008641] transition-colors border-b border-gray-100 last:border-b-0"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCourseDropdown;