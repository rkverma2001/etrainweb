import React, { useState } from "react";
import courseData from "./data";
import CategoryList from "./CategoryList";
import CourseList from "./CourseList";
import MobileCourseDropdown from "./MobileCourseDropdown";

const DropdownWrapper: React.FC = () => {
  const categories = courseData.map((cat) => cat.categoryName);

  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0]
  );

  const activeCategoryData = courseData.find(
    (cat) => cat.categoryName === activeCategory
  );

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex absolute left-0 top-full w-[650px] bg-white shadow-xl rounded-lg border border-gray-200 z-50">
        <CategoryList
          categories={courseData}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {activeCategoryData && (
          <CourseList courses={activeCategoryData.courses} />
        )}
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileCourseDropdown />
      </div>
    </>
  );
};

export default DropdownWrapper;