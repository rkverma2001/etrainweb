import React from "react";

const ScheduleExam: React.FC = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-semibold">Schedule Your Exam</h3>
        <p className="text-sm text-gray-500 mt-1">Book exam vouchers and reserve slots.</p>

        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Adobe Acrobat - Exam Voucher</div>
                <div className="text-sm text-gray-500">Voucher: EXM-ACR-2025</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">{`₹8,596`}</div>
                <div className="text-sm text-gray-500">Status: <span className="text-green-600">Available</span></div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <input type="date" className="border rounded px-3 py-2" />
              <select className="border rounded px-3 py-2">
                <option>10:00 AM</option>
                <option>02:00 PM</option>
                <option>04:00 PM</option>
              </select>
              <button className="px-4 py-2 bg-green-600 text-white rounded">Reserve slot</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-medium">Remote Proctoring - What to expect</div>
            <div className="text-sm text-gray-500 mt-2">A quick checklist and system verification to ensure your system is ready for remote proctored exams.</div>
            <button className="mt-3 px-4 py-2 border rounded text-green-700">Run System Check</button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h4 className="font-semibold">Upcoming reservations</h4>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">📅</div>
              <div>
                <div className="font-medium">Adobe Acrobat Certification</div>
                <div className="text-sm text-gray-500">15 Nov 2025 • 10:00 AM • Remote</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">🔔</div>
              <div>
                <div className="font-medium">Reminder: Upload ID</div>
                <div className="text-sm text-gray-500">Please upload a government ID 2 days before the exam.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg p-4 bg-blue-50 border border-blue-100">
          <div className="font-medium">Tips for exam day</div>
          <ol className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-1">
            <li>Ensure stable internet</li>
            <li>Keep your ID and workspace clean</li>
            <li>Close all background apps</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ScheduleExam;