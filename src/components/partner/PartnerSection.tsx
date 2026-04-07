const PartnersSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-medium tracking-wide text-emerald-700 shadow-sm">
            Trusted by Global Leaders
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Global Certification & Technology Partners
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
            EtrainIndia delivers world-class programs in collaboration with
            leading global organizations, ensuring industry-recognized
            credentials and career-ready skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Certiport */}
          <div className="relative rounded-2xl bg-white/80 backdrop-blur shadow-sm hover:shadow-xl transition border border-emerald-50">
            <div className="absolute inset-x-6 -top-3">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-100">
                Global Certification Partner
              </span>
            </div>

            <div className="p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4">
              <img
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/partnerslogo/CertiportPearsonLogo.png"
                alt="Certiport"
                className="h-10 sm:h-12 object-contain"
              />

              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-slate-900">
                  Certiport – A Pearson VUE Business
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Official certification partner for globally recognized
                  credentials in technology and professional skills.
                </p>

                <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2 text-[11px]">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                    Authorized Testing Center
                  </span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                    15,000+ Learners Certified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* IBM */}
          <div className="relative rounded-2xl bg-white/80 backdrop-blur shadow-sm hover:shadow-xl transition border border-sky-50">
            <div className="absolute inset-x-6 -top-3">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 border border-sky-100">
                Silver Business Partner
              </span>
            </div>

            <div className="p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4">
              <img
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/partnerslogo/IBM_Silver.png"
                alt="IBM"
                className="h-16 sm:h-20 md:h-24 object-contain"
              />

              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-slate-900">
                  IBM Skills Network Programs
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  Courses and certifications in Data Analytics, AI & Cloud,
                  aligned with IBM&apos;s industry standards.
                </p>

                <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2 text-[11px]">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">
                    Global Certificate
                  </span>
                  <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                    IBM Digital Badge
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* HCL Tech (Centered) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-full md:max-w-md rounded-2xl bg-white/80 backdrop-blur shadow-sm hover:shadow-xl transition border border-sky-50">
              <div className="absolute inset-x-6 -top-3">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 border border-sky-100">
                  Business Partner
                </span>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4">
                <img
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/HCLTech.svg"
                  alt="HCL"
                  className="h-10 sm:h-12 object-contain"
                />

                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-slate-900">
                    HCLTech Career Shaper Programs
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    Courses and certifications in Data Analytics, AI & Cloud,
                    aligned with IBM&apos;s industry standards.
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2 text-[11px]">
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">
                      Global Certificate
                    </span>
                    <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                      HCLTech Badge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
