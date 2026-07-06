const HeroBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/40 px-5 py-2 backdrop-blur-xl shadow-lg">
      <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />

      <span className="text-sm font-semibold text-green-700">
        100+ globally recognized certifications
      </span>
    </div>
  );
};

export default HeroBadge;
