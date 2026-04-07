import Footer from "@/components/footer/Footer";
import React, { useState } from "react";

// Partner With Us page for EtrainIndia
// Single-file React component using Tailwind classes
// Default export a React component so it can be dropped into a Next.js or CRA app.

const PartnerWithUs: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess(true);
    setForm({ name: "", organisation: "", email: "", phone: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="bg-white mt-14">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900">
              Partner with <span className="text-green-600">EtrainIndia</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Grow together with India's leading certification & training
              marketplace — reach 200k+ learners, co-deliver certification
              pathways and scale your channel or institution with our support.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Official Reseller</div>
                  <div className="text-sm text-slate-500">
                    Sell authorised certification vouchers and practice tests
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Co-branded Programs</div>
                  <div className="text-sm text-slate-500">
                    Run joint campaigns and customized course bundles
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Teaching & Proctoring</div>
                  <div className="text-sm text-slate-500">
                    Access remote proctoring & practice test integration
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Marketing Support</div>
                  <div className="text-sm text-slate-500">
                    Shared marketing, lead-generation & distribution
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              <a
                href="#form"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg shadow hover:bg-green-700"
              >
                Become a Partner
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-lg hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right hero — badge / mock */}
          <div className="flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-slate-100 to-white rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <img src="/Badges/Acrobat.svg" alt="Badge" className="h-120" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS / HOW IT WORKS */}
      <section id="benefits" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center">
          How the partnership works
        </h2>
        <p className="text-center text-slate-600 mt-3">
          Simple, transparent collaboration with clear revenue sharing and
          support.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "List & Sell",
              desc: "We list your certifications & vouchers on etrainIndia and handle checkout.",
            },
            {
              title: "Co-Marketing",
              desc: "Joint campaigns, email blasts, and organic promotion across our channels.",
            },
            {
              title: "Support",
              desc: "Technical, proctoring and fulfilment support to ensure smooth delivery.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-6 shadow-sm border"
            >
              <div className="text-2xl font-semibold mb-2">{b.title}</div>
              <div className="text-slate-500">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER FORM */}
      <section id="form" className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="">
            <h3 className="text-3xl font-bold">
              Get in touch — become a partner
            </h3>
            <p className="mt-3 text-slate-600">
              Fill the form and our Partnerships team will reach out within 48
              hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-slate-600">Full name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-4 py-3 focus:ring-2 focus:ring-green-200"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-slate-600">Organisation</span>
                  <input
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-4 py-3 focus:ring-2 focus:ring-green-200"
                    placeholder="School / Company"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-slate-600">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-4 py-3 focus:ring-2 focus:ring-green-200"
                    placeholder="name@company.com"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-slate-600">Phone</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-4 py-3 focus:ring-2 focus:ring-green-200"
                    placeholder="+91 98xxxx"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-slate-600">
                  Message / Requirements
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-4 py-3 focus:ring-2 focus:ring-green-200"
                  placeholder="Tell us how you'd like to partner..."
                />
              </label>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg shadow hover:bg-green-700 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Request partnership"}
                </button>

                {success && (
                  <div className="text-green-600 font-medium">
                    Request sent. We'll contact you soon.
                  </div>
                )}
              </div>
            </form>

            <div className="mt-8 text-sm text-slate-500">
              Prefer email? Write to{" "}
              <a
                href="mailto:partners@etrainindia.com"
                className="text-green-600 underline"
              >
                info@etrainindia.com
              </a>
            </div>
          </div>

          {/* Right column — logos + stats */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-sm border">
              <div className="text-xs text-slate-500">Trusted by</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-md shadow-sm text-center">
                  Adobe
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm text-center">
                  Certiport
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm text-center">
                  Cisco
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm text-center">
                  HCL
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border">
              <div className="text-3xl font-extrabold text-slate-900">
                228,666+
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Certified learners and growing strong
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm border">
              <div className="font-semibold">Partner Support</div>
              <ul className="text-sm text-slate-500 mt-2 space-y-2">
                <li>Dedicated account manager</li>
                <li>Marketing collateral & co-branded assets</li>
                <li>Technical integration & proctoring</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PartnerWithUs;
