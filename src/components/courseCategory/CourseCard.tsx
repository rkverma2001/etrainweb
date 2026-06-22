import React from "react";
import { FaLaptop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  slug: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  price,
  slug,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (slug) navigate(slug);
  };

  return (
    <div
      className="flex flex-col items-center text-center rounded-lg hover:shadow-md transition-shadow w-full max-w-xs mx-auto "
      onClick={handleClick}
      style={{ cursor: slug ? "pointer" : "default" }}
    >
      {/* Image */}
      <div className="w-full aspect-square mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-gray-800 mb-2">{title}</h3>
      <h4 className="text-sm font text-gray-700 mb-2">{description}</h4>

      {/* Label */}
      <div className="flex items-center justify-center text-xs text-blue-600 font-semibold mb-1">
        <FaLaptop className="mr-1" />
        DIGITAL PRODUCT
      </div>

      {/* Price */}
      <div className="text-green-600 font-semibold text-md">₹ {price}</div>
    </div>
  );
};

export default CourseCard;
