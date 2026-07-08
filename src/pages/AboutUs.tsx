import Footer from "@/components/footer/Footer";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800">
      {/* MISSION & VALUE */}
      <section className="max-w-7xl mt-18 mx-auto px-6 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our mission</h2>
            <p className="text-slate-600">
              We offer current and relevant technology skills and credentials
              for the competitive global workforce and prepare students and
              professionals for successful careers. We work with academic
              institutions and state governments to implement on-site
              skill-development projects.
            </p>

            <h3 className="mt-6 text-xl font-semibold">What we deliver</h3>
            <ul className="mt-3 space-y-3 text-slate-600">
              <li>
                Comprehensive technology training and certification programs
              </li>
              <li>
                Courseware, online/offline training, practice tests and
                certification tests
              </li>
              <li>
                Programs from Microsoft, IBM, Adobe, Autodesk, Cisco, Meta, Tally,
              Apple and more ...
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold">Why learners choose us</h3>
            <ol className="mt-4 list-decimal list-inside space-y-3 text-slate-600">
              <li>Globally recognized credentials that boost employability</li>
              <li>Industry-aligned courseware and experienced trainers</li>
              <li>End-to-end support: training, testing & certification</li>
            </ol>
          </div>
        </div>
      </section>

      {/* PROGRAMS & SERVICES */}
      <section id="programs" className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
          <h2 className="text-2xl font-bold">Programs & Solutions</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            We are an education-technology company and e-commerce marketplace
            for internationally recognized skill trainings & certifications.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "Adobe",
            "Certiport",
            "Cisco",
            "HCL",
            "Microsoft",
            "IBM",
            "Autodesk",
            "Tally",
          ].map((name) => (
            <div
              key={name}
              className="bg-white p-4 rounded-lg shadow-sm border text-center"
            >
              {name}
            </div>
          ))}
        </div>

        </div>
      </section>

      {/* PARTNERS */}
      <section
        id="partners"
        className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12"
      >
        <h2 className="text-2xl font-bold">Partner network</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          We work with 600+ partners across India to deliver training and
          certification at scale.
        </p>

        <div className="mt-8 bg-green-50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <div className="text-3xl font-extrabold">
              Trusted by institutions & governments
            </div>
            <div className="mt-2 text-slate-600">
              On-site projects and large-scale skill development partnerships
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <a
              href="/partnerwithus"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg"
            >
              Partner with us
            </a>
          </div>
        </div>
      </section>

      {/* IMPACT / STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
            <div className="text-4xl font-extrabold text-slate-900">600k+</div>
            <div className="text-sm text-slate-600 mt-2">
              Learners empowered through certifications
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
            <div className="text-4xl font-extrabold text-slate-900">600+</div>
            <div className="text-sm text-slate-600 mt-2">
              Strong partners across India
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border text-center">
            <div className="text-4xl font-extrabold text-slate-900">50+</div>
            <div className="text-sm text-slate-600 mt-2">
              Cities where we operate
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-16">
          <h2 className="text-4xl font-semibold text-gray-800">
            Our Founder's Message
          </h2>

          <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 bg-gradient-to-br from-white to-green-50 p-5 sm:p-6 md:p-8 rounded-2xl shadow">

  {/* Founder Photo */}
  <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[350px] aspect-square rounded-2xl bg-gray-200 overflow-hidden shadow-md flex-shrink-0">
    <img
      src="https://etrain.blr1.cdn.digitaloceanspaces.com/gauravkapoor.png"
      alt="Founder"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Founder Details */}
  <div className="text-center md:text-left">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
      Gaurav Kapoor
    </h3>

    <p className="text-green-700 font-medium mt-1 text-sm sm:text-base">
      Founder & Managing Director, EtrainIndia
    </p>

    <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed max-w-xl md:max-w-2xl text-sm sm:text-base">
      "At EtrainIndia, our mission is to empower every learner with
      quality, accessible, and industry-ready education. <br/> We are
      committed to building a future where technology bridges gaps and
      unlocks limitless opportunities for students across the world."
    </p>
  </div>

</div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12"
      >
        <div className="bg-gradient-to-br from-[#f6fef9] to-white p-8 rounded-2xl shadow-sm border flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-2xl font-bold">
              Ready to empower learners and grow with us?
            </div>
            <div className="text-slate-600 mt-2">
              Partner with EtrainIndia for training, certification and on-site
              projects.
            </div>
          </div>
          <div>
            <a
              href="/partnerwithus"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg"
            >
              Become our partner
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default AboutUs;
