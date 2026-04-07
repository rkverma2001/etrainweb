import { FaStar } from "react-icons/fa";

const Ratings = () => {
  const rating = 5.0;
  const reviews = 1432;

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-700">
      {/* Stars */}
      <div className="flex space-x-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className="text-[#0b8642] w-4 h-4" />
        ))}
      </div>

      {/* Rating & Review count */}
      <span>({rating.toFixed(1)}) | {reviews.toLocaleString()} ratings</span>
    </div>
  );
};

export default Ratings;
