import Footer from '@/components/footer/Footer';
import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 mt-22">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border p-8 mb-15">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Refund &amp; Returns Policy</h1>
            <div className="text-sm text-slate-600 mt-2">Last Updated: <span className="font-medium">August 2024</span></div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm">Print</button>
          </div>
        </div>

        <div className="mt-6 prose prose-slate max-w-none">
          <section>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p>
              At EtrainIndia, we are committed to delivering high-quality training and certification solutions. This Refund &amp; Returns Policy explains when and how refunds are considered and processed for learners and partners.
            </p>
          </section>

          <hr className="my-6" />

          <section>
            <h2 className="text-2xl font-semibold">1. Program Enrolment &amp; Fees</h2>
            <p>All course purchases and certification exam bookings made on EtrainIndia platforms are final. Once a user has enrolled in a course or availed a service, fees are non-refundable, unless explicitly stated under a specific promotional or policy clause.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold">2. Refund Eligibility</h2>
            <p>A refund request may be considered under the following circumstances:</p>
            <ul>
              <li><strong>Duplicate Payment:</strong> If a user is charged twice for the same service.</li>
              <li><strong>Payment Failure with Debit:</strong> If the transaction fails but the amount is debited from your account.</li>
              <li><strong>Course Unavailability:</strong> If a course or exam is withdrawn or not accessible due to technical issues from our end and no alternative is provided.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold">3. Refund Process</h2>
            <p>To initiate a refund request, please email <a href="mailto:support@etrainindia.com" className="text-green-600">support@etrainindia.com</a> within 7 days of the transaction, mentioning your registered email ID, order ID, payment proof, and reason for refund.</p>
            <p>Eligible refunds, once approved, will be processed within 7–10 working days to the original payment method.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold">4. No Refund Cases</h2>
            <p>Refunds will not be granted in the following cases:</p>
            <ul>
              <li>Change of mind or lack of interest after enrolment.</li>
              <li>Delay in accessing or completing the course/exam due to user-related issues (e.g., technical problems on user’s device).</li>
              <li>Failure to attend scheduled instructor-led sessions or failure to appear for an exam.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold">5. Contact Information</h2>
            <p>If you have questions regarding our refund policy, please write to:</p>
            <div className="mt-2 p-4 bg-green-50 rounded-lg border">
              <div className="text-sm"><strong>Email:</strong> <a href="mailto:sales@etrainindia.com" className="text-green-600">sales@etrainindia.com</a></div>
              <div className="text-sm mt-1"><strong>Phone:</strong> +91-9958990134</div>
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default RefundPolicy;
