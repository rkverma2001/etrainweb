import { useNavigate } from "react-router-dom";
const HeroButton = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex justify-center">
      <div className="absolute left-1/2 top-1/2 h-[90px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300 blur-3xl opacity-50" />

      <button
        onClick={() => navigate("/certifications")}
        className="
        relative
        rounded-xl
        border
        border-white/70
        bg-white/40
        px-8
        py-4
        text-lg
        font-semibold
        text-slate-800
        backdrop-blur-xl
        transition
        duration-300
        hover:-translate-y-1
        shadow-xl
        cursor-pointer
      "
      >
        Get Certified →
      </button>
    </div>
  );
};

export default HeroButton;
