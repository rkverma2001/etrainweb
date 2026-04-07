import React from "react";
import { Link } from "react-router-dom";

interface Category {
  categoryName: string;
  categorySlug: string;
}

interface CategoryListProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="w-1/3 border-r border-gray-200 overflow-y-auto max-h-96">
      {categories.map((category) => (
        <div
          key={category.categoryName}
          onMouseEnter={() => setActiveCategory(category.categoryName)}
          className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
            activeCategory === category.categoryName ? "bg-gray-100 font-semibold" : ""
          }`}
        >
          <Link to={category.categorySlug} className="text-gray-800 hover:text-blue-600">
            {category.categoryName}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;