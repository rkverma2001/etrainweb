import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import ProfilePanel from "./ProfilePanel";
import ScheduleExam from "./ScheduleExam";
import SaveList from "./SaveList";
import PurchaseHistory from "./PurchaseHistory";
import OverviewSection from "./OverviewSection";
import OverviewCard from "./OverviewCard";
import MiniProgress from "./MiniProgress";
import StatCard from "./StatCard";
import NavButton from "./NavButton";

// EtrainIndia Student Dashboard (single-file React component)
// - TailwindCSS classes used for styling
// - Sidebar navigation layout
// - Sections: Overview, Purchase History, My Profile, SaveList, Schedule Exam
// - Sample data included; integrate with your APIs as needed

const Dashboard: React.FC = () => {
  const [active, setActive] = useState("overview");

  // sample student data (replace with API data)
  const stats = {
    enrolled: 12,
    certificates: 5,
    upcomingExams: 1,
    saved: 3,
  };

  const purchases = [
    {
      id: "ORD-1001",
      title: "Adobe Certified Professional - After Effects (Bundle)",
      type: "Bundle",
      date: "2025-10-01",
      price: 3849,
      status: "Active",
    },
    {
      id: "ORD-1002",
      title: "Adobe Acrobat Practice Test",
      type: "Practice Test",
      date: "2025-09-12",
      price: 10989,
      status: "Completed",
    },
    {
      id: "ORD-1003",
      title: "Adobe Acrobat Exam Voucher",
      type: "Exam Voucher",
      date: "2025-09-05",
      price: 8596,
      status: "Scheduled",
    },
  ];

  const saved = [
    { id: "S1", title: "Photoshop Best Value Bundle", price: 3849 },
    { id: "S2", title: "Illustrator Practice Test", price: 2999 },
    { id: "S3", title: "InDesign Exam Voucher", price: 4999 },
  ];

  const profile = {
    name: "Ritesh Kumar",
    email: "ritesh@example.com",
    phone: "+91 98xxxxxx",
    memberSince: "2023-05-13",
    avatarColor: "bg-green-600",
  };

  // small helpers
  const currency = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto p-6 lg:p-10 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="sticky top-6">
            <div className="rounded-xl bg-white shadow-md p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${profile.avatarColor} text-xl font-bold`}
                >
                  {profile.name.split(" ")[0][0]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                  <p className="text-sm text-gray-500">
                    Member since {profile.memberSince}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <NavButton
                  active={active === "overview"}
                  onClick={() => setActive("overview")}
                  icon={<IconGrid />}
                  label="Overview"
                />
                <NavButton
                  active={active === "purchases"}
                  onClick={() => setActive("purchases")}
                  icon={<IconCart />}
                  label="Purchase History"
                />
                <NavButton
                  active={active === "savelist"}
                  onClick={() => setActive("savelist")}
                  icon={<IconHeart />}
                  label="My SaveList"
                />
                <NavButton
                  active={active === "schedule"}
                  onClick={() => setActive("schedule")}
                  icon={<IconCalendar />}
                  label="Schedule Your Exam"
                />
                <NavButton
                  active={active === "profile"}
                  onClick={() => setActive("profile")}
                  icon={<IconUser />}
                  label="My Profile"
                />
              </div>

              <div className="mt-6 pt-4 border-t">
                <button className="w-full text-sm py-2 rounded-md border border-green-600 text-green-700 font-medium cursor-pointer">
                  Contact Support
                </button>
                <button className="w-full mt-3 text-sm py-2 rounded-md bg-green-600 text-white font-medium cursor-pointer">
                  Buy New Course
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-white shadow p-4">
              <h4 className="text-sm text-gray-500">Quick Stats</h4>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <StatCard label="Enrolled" value={stats.enrolled} />
                <StatCard label="Certificates" value={stats.certificates} />
                <StatCard label="Upcoming Exams" value={stats.upcomingExams} />
                <StatCard label="Saved" value={stats.saved} />
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-12 lg:col-span-9">
          <div className="rounded-xl bg-white shadow p-6 mb-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold">
                  Welcome back, {profile.name.split(" ")[0]} 👋
                </h1>
                <p className="text-gray-500 mt-1">
                  Here's a quick snapshot of your learning journey.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-lg border border-gray-200 text-sm cursor-pointer">
                  Help Center
                </div>
                <div className="px-4 py-2 rounded-lg border border-gray-200 text-sm cursor-pointer">
                  Settings
                </div>
              </div>
            </div>

            {/* Overview top cards (only visible on overview) */}
            {active === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <OverviewCard
                  title="My Courses"
                  subtitle="Active and in-progress"
                  value={`${stats.enrolled}`}
                  actionLabel="View Courses"
                  onAction={() => setActive("purchases")}
                >
                  <MiniProgress percent={45} label="Course completion" />
                </OverviewCard>

                <OverviewCard
                  title="Certificates"
                  subtitle="Official credentials"
                  value={`${stats.certificates}`}
                  actionLabel="View Certificates"
                  onAction={() => console.log("Download Certificate!")}
                >
                  <div className="mt-2 text-sm text-gray-600">
                    Earned badges and downloadable certificates
                  </div>
                </OverviewCard>

                <OverviewCard
                  title="Upcoming Exams"
                  subtitle="Schedule & reminders"
                  value={`${stats.upcomingExams}`}
                  actionLabel="Manage Exams"
                  onAction={() => setActive("schedule")}
                >
                  <div className="mt-2 text-sm text-gray-600">
                    Next exam: Adobe Acrobat - 2025-11-15
                  </div>
                </OverviewCard>
              </motion.div>
            )}

            {/* Render section by active */}
            <div className="mt-6">
              {active === "overview" && (
                <OverviewSection
                  purchases={purchases}
                  saved={saved}
                  currency={currency}
                />
              )}
              {active === "purchases" && (
                <PurchaseHistory purchases={purchases} currency={currency} />
              )}
              {active === "savelist" && (
                <SaveList items={saved} currency={currency} />
              )}
              {active === "schedule" && <ScheduleExam />}
              {active === "profile" && <ProfilePanel profile={profile} />}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

// ---------- Icons (simple svgs) ----------
function IconGrid() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        stroke="#0F766E"
        strokeWidth="1.6"
        rx="1"
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        stroke="#0F766E"
        strokeWidth="1.6"
        rx="1"
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        stroke="#0F766E"
        strokeWidth="1.6"
        rx="1"
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        stroke="#0F766E"
        strokeWidth="1.6"
        rx="1"
      />
    </svg>
  );
}
function IconCart() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3h2l.4 2M7 13h10l3-8H6.4"
        stroke="#0F766E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1" stroke="#0F766E" strokeWidth="1.6" />
      <circle cx="18" cy="20" r="1" stroke="#0F766E" strokeWidth="1.6" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8 7.6a4.4 4.4 0 00-6.2 0L12 10.2l-2.6-2.6a4.4 4.4 0 10-6.2 6.2L12 21l9-9a4.4 4.4 0 00-.2-4.8z"
        stroke="#0F766E"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke="#0F766E"
        strokeWidth="1.6"
      />
      <path
        d="M16 2v4M8 2v4"
        stroke="#0F766E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconUser() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
        stroke="#0F766E"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="7" r="4" stroke="#0F766E" strokeWidth="1.6" />
    </svg>
  );
}
