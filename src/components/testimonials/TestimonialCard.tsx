interface TestimonialCardProps {
  message: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard = ({
  message,
  name,
  role,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white w-[300px]">
      <div className="relative">
        <img className="absolute right-0" src="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/linkedin_icon.svg" />
        <div className="h-12"></div>
        <p className="text-sm text-gray-800 leading-relaxed ml-5 mr-5">
          {message}
        </p>
        <div className="flex items-center gap-3 mt-4 ml-5 mb-6">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 object-cover rounded-lg"
          />
          <div>
            <p className="font-semibold text-gray-900 text-sm">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
