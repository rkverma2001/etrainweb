import Footer from "@/components/footer/Footer";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
    try {
      // replace with your real endpoint
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSuccess("Message sent — our team will contact you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setSuccess(
        "Failed to send message. Please try email support@etrainindia.com"
      );
    } finally {
      setSending(false);
    }
  };


  return (
    <div className="min-h-screen mt-18 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left: Contact details */}
          <div className="lg:col-span-1 space-y-6">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-slate-600">
              Have questions or want to partner with us? Reach out — we’re here
              to help.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="font-semibold">Headquarters</div>
              <address className="not-italic mt-2 text-sm text-slate-600">
                Etrain Education Private Limited
                <br />
                1211, 12th Floor Hemkunt Chambers 89,
                <br />
                Nehru Place, New Delhi – 110019 INDIA
              </address>

              <div className="mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m6 4v6m3 4H6a2 2 0 01-2-2V7a2 2 0 012-2h.5"
                    />
                  </svg>
                  <a
                    href="mailto:support@etrainindia.com"
                    className="text-sm text-slate-700 hover:text-green-600"
                  >
                    support@etrainindia.com
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l.7 2.1a1 1 0 01-.217 1l-1.3 1.3a11.042 11.042 0 005.516 5.516l1.3-1.3a1 1 0 011-.217l2.1.7A1 1 0 0121 17.72V21a2 2 0 01-2 2h-1C8.61 23 1 15.39 1 6V5z"
                    />
                  </svg>
                  <div className="text-sm text-slate-700">
                    +91 97170 88686
                    <br /> +91 99589 90134
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                <div className="font-medium">Office hours</div>
                <div>Mon — Fri: 10:30 AM — 6:00 PM</div>
                <div>Sat & Sun: Closed</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border text-sm">
              <div className="font-semibold mb-2">Quick links</div>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <a className="hover:text-green-600">Programs</a>
                </li>
                <li>
                  <a className="hover:text-green-600">Partner with us</a>
                </li>
                <li>
                  <a className="hover:text-green-600">Support center</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form + Map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold">Send us a message</h2>
              <p className="text-sm text-slate-600 mt-1">
                Fill the form and our team will get back to you.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="col-span-1 md:col-span-1 rounded-md border-gray-200 shadow-sm px-4 py-3"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Your email"
                  className="col-span-1 md:col-span-1 rounded-md border-gray-200 shadow-sm px-4 py-3"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="col-span-1 md:col-span-1 rounded-md border-gray-200 shadow-sm px-4 py-3"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="col-span-1 md:col-span-2 rounded-md border-gray-200 shadow-sm px-4 py-3"
                />

                <div className="col-span-1 md:col-span-2 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg shadow hover:bg-green-700 disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Send message"}
                  </button>
                  {success && (
                    <div className="text-sm text-green-600">{success}</div>
                  )}
                </div>
              </form>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h3 className="font-semibold">Our location</h3>
              <p className="text-sm text-slate-600 mt-2">
                1211, 12th Floor Hemkunt Chambers 89, Nehru Place, New Delhi –
                110019
              </p>

              <div className="mt-4 h-[420px] w-full overflow-hidden rounded-lg">
                {/* Embedded Google map - using a safe query embed */}
                <iframe
                  title="EtrainIndia location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1223070659467!2d77.24950587545995!3d28.62321968489244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c2d0661fc9%3A0x967fdc3d9a3f2cf0!2sHemkunt%20Chambers%2C%20Nehru%20Pl%20Market%20Rd%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1714045080736!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>

              <div className="mt-4 text-sm text-slate-600">
                Need directions? Open in{" "}
                <a
                  className="text-green-600"
                  href="https://www.google.com/maps/dir//12th,+Hemkunt+Chambers,+1211,+89,+Nehru+Pl+Market+Rd,+Nehru+Place,+New+Delhi,+Delhi+110019/@28.5480555,77.1709813,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390ce3c55dd5b595:0xa57597ae89f55a52!2m2!1d77.2533827!2d28.5480804?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Maps
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
