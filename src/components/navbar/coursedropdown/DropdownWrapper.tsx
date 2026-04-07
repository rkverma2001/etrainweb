import React, { useState } from "react";
import courseData from "./data";
import CategoryList from "./CategoryList";
import CourseList from "./CourseList";

const DropdownWrapper: React.FC = () => {
   const categories = courseData.map((cat) => cat.categoryName);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

   const activeCategoryData = courseData.find(
    (cat) => cat.categoryName === activeCategory
  );

  return (
    <div className="absolute left-0 top-full w-150 bg-white shadow-lg rounded-md border border-gray-200 flex z-50">
      <CategoryList
        categories={courseData}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      {activeCategoryData && <CourseList courses={activeCategoryData.courses} />}
    </div>
  );
};

export default DropdownWrapper;
