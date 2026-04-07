import React from "react";

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 10H15"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M11 6L15 10L11 14"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50 to-sky-50" />
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-14 lg:flex-row lg:py-20">
        {/* Left content */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            World-class certifications &amp; training
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="block text-emerald-600">Future-Ready</span>
            <span className="block">Tech Skills.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Learn from the world&apos;s best edtech platform with hands-on
            projects, expert-led mentorship, and globally recognized
            certifications with EtrainIndia.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none">
              <span>Start Learning Now</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300">
              Explore all courses
            </button>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-emerald-500 outline outline-2 outline-slate-50" />
              <div className="h-8 w-8 rounded-full bg-sky-500 outline outline-2 outline-slate-50" />
              <div className="h-8 w-8 rounded-full bg-indigo-500 outline outline-2 outline-slate-50" />
            </div>
            <p className="text-xs text-slate-600 sm:text-sm">
              <span className="font-semibold text-slate-900">
                15,000+ learners
              </span>{" "}
              certified across campuses &amp; corporates.
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-emerald-200 via-sky-200 to-transparent opacity-70 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-xl">
              <img
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/imageheader.jpg"
                alt=""
              />
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-slate-600">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    Popular certification
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Microsoft
                  </p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                  Global Certification
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
