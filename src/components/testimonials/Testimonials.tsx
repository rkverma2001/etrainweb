import { FaHeart } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  message: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialsProps {
  data: Testimonial[];
}

const Testimonials = ({ data }: TestimonialsProps) => {
  return (
    <div className="bg-white py-12 px-4 md:px-12">
      <div className="mb-10">
        <h4 className="text-sm font-semibold text-gray-600">HEAR IT FROM THEM</h4>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Certified People{" "}
          <span className="text-[#0b8743] inline-block">
            <FaHeart className="inline" />
          </span>{" "}
          EtrainIndia
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15">
        {data.map((item, idx) => (
          <TestimonialCard
            key={idx}
            message={item.message}
            name={item.name}
            role={item.role}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
