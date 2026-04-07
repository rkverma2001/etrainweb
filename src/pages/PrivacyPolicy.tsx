import Footer from "@/components/footer/Footer";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 mt-28">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border p-8 mb-18">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">
              Privacy Policy
            </h1>
            <div className="text-sm text-slate-600 mt-2">
              Effective Date: <span className="font-medium">August 2024</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Print
            </button>
          </div>
        </div>

        {/* Intro / Summary */}
        <div className="mt-6 prose prose-slate max-w-none">
          <section>
            <h2 className="text-xl font-semibold">Quick summary</h2>
            <p className="text-slate-700">
              EtrainIndia respects your privacy. This policy explains what
              contact information we collect, why we collect it, how we use it,
              and the choices you have. The policy applies to information
              collected through our website.
            </p>
          </section>

          <hr className="my-6" />

          {/* Table of contents */}
          <nav className="mb-6">
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a href="#collect" className="text-green-600">
                  • Collecting information
                </a>
              </li>
              <li>
                <a href="#use" className="text-green-600">
                  • Using information
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-green-600">
                  • Cookies
                </a>
              </li>
              <li>
                <a href="#security" className="text-green-600">
                  • Security
                </a>
              </li>
              <li>
                <a href="#thirdparty" className="text-green-600">
                  • Third-party links
                </a>
              </li>
              <li>
                <a href="#changes" className="text-green-600">
                  • Policy changes
                </a>
              </li>
              <li>
                <a href="#contact" className="text-green-600">
                  • Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Collecting Information */}
          <section id="collect">
            <h2 className="text-2xl font-semibold">
              Collecting information about you
            </h2>
            <p className="text-slate-700">
              We may ask you to provide contact information such as name,
              shipping/billing address, telephone number, email address, payment
              details, birth date, gender, occupation, interests, and purchase
              history. Providing information is voluntary, but required
              information may be needed to complete purchases.
            </p>

            <div className="mt-4 bg-green-50 border-l-4 border-green-200 p-4 rounded">
              <strong className="block text-slate-800">Note:</strong>
              <p className="text-slate-700 mt-1">
                Even if you opt out of marketing communications, we may still
                contact you regarding orders or account issues.
              </p>
            </div>

            <p className="mt-4 text-slate-700">
              We also collect anonymous usage data (including device and
              location data) to analyse trends and improve the site. Anonymous
              visits are not linked to personally identifiable information
              unless you provide it voluntarily.
            </p>
          </section>

          {/* Using Information */}
          <section id="use" className="mt-6">
            <h2 className="text-2xl font-semibold">How we use information</h2>
            <p className="text-slate-700">
              We use contact information for internal purposes only, including
              but not limited to:
            </p>
            <ul>
              <li>Confirming orders, subscriptions, or registrations.</li>
              <li>Analysing preferences, trends, and site statistics.</li>
              <li>
                Informing you about new products, services and offers (where
                permitted).
              </li>
              <li>
                Providing information and support related to EtrainIndia
                services.
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section id="cookies" className="mt-6">
            <h2 className="text-2xl font-semibold">Cookies and tracking</h2>
            <p className="text-slate-700">
              We use cookies to improve user experience, remember preferences,
              measure audience size, support merchants, process orders, and
              analyse site usage. Cookies may be session-based (expire when you
              close your browser) or persistent (stored across sessions).
            </p>

            <p className="text-slate-700">
              You can control cookies at the browser level — note that disabling
              cookies may affect site functionality.
            </p>
          </section>

          {/* Security */}
          <section id="security" className="mt-6">
            <h2 className="text-2xl font-semibold">Security</h2>
            <p className="text-slate-700">
              We implement physical, electronic and procedural safeguards to
              protect your data. Our website uses Secure Sockets Layer (SSL) for
              secure transmission of information.
            </p>
            <p className="text-slate-700">
              Keep your account password private and sign out when using shared
              devices. If you suspect unauthorised access, contact us
              immediately.
            </p>
          </section>

          {/* Third party */}
          <section id="thirdparty" className="mt-6">
            <h2 className="text-2xl font-semibold">
              Links to third-party websites
            </h2>
            <p className="text-slate-700">
              Our site may link to third-party websites. We are not responsible
              for their content or privacy practices. Review third-party privacy
              policies before sharing information.
            </p>
          </section>

          {/* Policy changes */}
          <section id="changes" className="mt-6">
            <h2 className="text-2xl font-semibold">Policy changes</h2>
            <p className="text-slate-700">
              We will post updates to this policy on our website. Updated
              policies take effect on the effective date posted. Continued use
              of our services constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-6">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="text-slate-700">
              If you have questions about this policy, contact us at{" "}
              <a
                href="mailto:support@etrainindia.com"
                className="text-green-600"
              >
                support@etrainindia.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
