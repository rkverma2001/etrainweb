import Footer from '@/components/footer/Footer';
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 mt-22">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border mb-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Terms & Conditions</h1>
            <div className="text-sm text-slate-600 mt-2">Last Updated: <span className="font-medium">August 2024</span></div>
          </div>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm">Print</button>
        </div>

        {/* Body */}
        <div className="mt-6 prose prose-slate max-w-none">
          <p>
            Welcome to <strong>www.etrainindia.com</strong>! Please take a few minutes to review these Terms and Conditions. These Terms and Conditions apply to your access and use of the Web Site. Your use of our Web Site constitutes your agreement to follow these Terms and Conditions and to be bound by them.
          </p>

          <hr className="my-6" />

          {/* Table of Contents */}
          <nav className="mb-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li><a className="text-green-600" href="#changes">• Terms & Conditions May Change</a></li>
              <li><a className="text-green-600" href="#handling">• Handling Charges</a></li>
              <li><a className="text-green-600" href="#use">• Use of Our Web Site</a></li>
              <li><a className="text-green-600" href="#comments">• User Comments</a></li>
              <li><a className="text-green-600" href="#creative">• Creative Corner</a></li>
              <li><a className="text-green-600" href="#hyperlinks">• Hyperlinks</a></li>
              <li><a className="text-green-600" href="#pricing">• Product Pricing Information</a></li>
              <li><a className="text-green-600" href="#disclaimer">• Disclaimer</a></li>
            </ul>
          </nav>

          <section id="changes">
            <h2 className="text-2xl font-semibold">These Terms and Conditions May Change</h2>
            <p>EtrainIndia reserves the right to update or modify these Terms and Conditions at any time without prior notice. We encourage you to review these Terms and Conditions whenever you purchase products from us or use our Web Site.</p>
          </section>

          <section id="handling" className="mt-6">
            <h2 className="text-2xl font-semibold">Handling Charges</h2>
            <p>Our handling charges are intended to compensate for the cost of processing your order, handling, and packing the products you purchase. Please review our detailed Shipping Policy for more information.</p>
          </section>

          <section id="use" className="mt-6">
            <h2 className="text-2xl font-semibold">Use of Our Web Site</h2>
            <p>By accessing and using this site, you agree to do so only for lawful purposes and in accordance with these Terms and Conditions.</p>
          </section>

          <section id="comments" className="mt-6">
            <h2 className="text-2xl font-semibold">User Comments</h2>
            <p>
              We welcome your comments about our Web Site and Products. However, any comments, feedback, notes, messages, ideas, suggestions, or other communications (collectively "Comments") sent to our Web Site shall remain the exclusive property of EtrainIndia.
            </p>
          </section>

          <section id="creative" className="mt-6">
            <h2 className="text-2xl font-semibold">Creative Corner</h2>
            <p>Images intended for use on the Creative Corner remain the exclusive property of the artists who submit them. However, EtrainIndia is not liable for any third-party misuse of these images.</p>
          </section>

          <section id="hyperlinks" className="mt-6">
            <h2 className="text-2xl font-semibold">Hyperlinks to Other Web Sites</h2>
            <p>
              Our Web Site may contain links to external services and resources. EtrainIndia does not control such websites and is not responsible for their content or availability. Concerns regarding these external services should be directed to the respective website.
            </p>
          </section>

          <section id="pricing" className="mt-6">
            <h2 className="text-2xl font-semibold">Product Pricing Information</h2>
            <p>The prices displayed on our Web Site may differ from those available in stores or catalogs. Prices may vary from store to store.</p>
            <p>The price reflected online represents the everyday value price we offer to our customers.</p>
          </section>

          <section id="disclaimer" className="mt-6">
            <h2 className="text-2xl font-semibold">Disclaimer</h2>
            <p>
              At times, our Web Site or catalog may contain typographical errors, inaccuracies, or omissions related to product descriptions, pricing, and availability. EtrainIndia reserves the right to correct such errors and update information without prior notice.
            </p>
          </section>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TermsAndConditions;