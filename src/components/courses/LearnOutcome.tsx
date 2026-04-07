import React from "react";

const LearnerOutcome: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#faf5ee] px-[100px] py-28">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
        <img
          src="https://etrain.blr1.cdn.digitaloceanspaces.com/others/agirlimage.png"
          alt="Learner"
          className="w-[260px] sm:w-[300px] md:w-[380px] lg:w-96 h-auto rounded-xl object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0a033c]">
          Learner outcomes on EtrainIndia
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          <span className="text-[#0a033c]">87% of learners across campuses and corporates </span>
          report career-defining benefits after certifying with <span className="text-[#0a033c]">
          EtrainIndia </span>— from skill growth to promotions, better jobs, and professional excellence.
        </p>
      </div>
    </div>
  );
};

export default LearnerOutcome;
