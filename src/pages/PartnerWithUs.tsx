import Footer from "@/components/footer/Footer";
import api from "@/services/api";
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
    city: "",
    state: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const { data } = await api.post("/partner", form);

      if (data.success) {
        setSuccess(
          "Thank you for your enquiry. Our Partnership Team has successfully received your request. We will review your request and contact you within 24–48 hours.",
        );

        setForm({
          name: "",
          organisation: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess("");
        }, 15000);
      } else {
        setError(data.message || "Unable to submit your request.");
      }
    } catch (err: any) {
      console.error("Partner Enquiry Error:", err);

      setError(
        err.response?.data?.message ||
          err.message ||
          "Something went wrong. Please try again later.",
      );

      setTimeout(() => {
        setError("");
      }, 5000);
    } finally {
      setSubmitting(false);
    }
  };

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
              Grow together with India's leading training & certification
              marketplace — reach 200k+ learners, co-deliver certification
              pathways and scale your channel or institution with our support.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Reseller</div>
                  <div className="text-sm text-slate-500">
                    Sell authorised certification vouchers, practice tests and
                    e-learning courses.
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
                    Run joint campaigns and customized course bundles.
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
                    Access remote proctoring & practice test integration.
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1 w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <div>
                  <div className="font-semibold">Technical Support</div>
                  <div className="text-sm text-slate-500">
                    Online technical support offered during execution of exams.
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
            <div className="w-80 h-80 bg-gradient-to-br from-slate-100 to-white rounded-3xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <img
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/partnershipimage.jpg"
                  alt="Badge"
                  className="h-80"
                />
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
              desc: "You list our certifications & products on your portal.",
            },
            {
              title: "Marketing",
              desc: "You will be allowed to use official marketing resources and product logos.",
            },
            {
              title: "Support",
              desc: "We offer technical, marketing, proctoring and fulfilment support to ensure smooth delivery.",
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
                    placeholder="+91 xxxxxx"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-slate-600">City</span>
                  <input
                    required
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-4 py-3 focus:ring-2 focus:ring-green-200"
                    placeholder="City"
                  />
                </label>

                <label className="block">
                  <span className="text-sm text-slate-600">State</span>
                  <input
                    required
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm px-4 py-3 focus:ring-2 focus:ring-green-200"
                    placeholder="State"
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
  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
>
  {submitting ? "Sending Request..." : "Request Partnership"}
</button>

                <div className="space-y-3">
                  {success && (
                    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                      <strong>Thank you!</strong>
                      <br />
                      {success}
                    </div>
                  )}

                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <strong>Error:</strong> {error}
                    </div>
                  )}
                </div>
              </div>
            </form>

            <div className="mt-8 text-sm text-slate-500">
              Prefer email? Write to{" "}
              <a
                href="mailto:partners@etrainindia.com"
                className="text-green-600 underline"
              >
                sales@etrainindia.com
              </a>
            </div>
          </div>

          {/* Right column — logos + stats */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-sm border">
              <div className="text-xs text-slate-500">Trusted by</div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-md shadow-sm text-center">
                  Certiport / Pearson
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm text-center">
                  HCL
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm text-center">
                  IBM
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm text-center">
                  Tally
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
