import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
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

function IconGrid() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="1" stroke="#0F766E" strokeWidth="1.6" />
      <rect x="13" y="3" width="8" height="8" rx="1" stroke="#0F766E" strokeWidth="1.6" />
      <rect x="3" y="13" width="8" height="8" rx="1" stroke="#0F766E" strokeWidth="1.6" />
      <rect x="13" y="13" width="8" height="8" rx="1" stroke="#0F766E" strokeWidth="1.6" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.8 7.6a4.4 4.4 0 00-6.2 0L12 10.2l-2.6-2.6a4.4 4.4 0 10-6.2 6.2L12 21l9-9a4.4 4.4 0 00-.2-4.8z"
        stroke="#0F766E"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
        stroke="#0F766E"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="7" r="4" stroke="#0F766E" strokeWidth="1.6" />
    </svg>
  );
}

const Dashboard: React.FC = () => {
  const [active, setActive] = useState("overview");
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const user =
    JSON.parse(localStorage.getItem("user") || "{}") || {};

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(Array.isArray(res.data) ? res.data : res.data.orders || []);
      } catch (error) {
        console.error("Order Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const paidOrders = useMemo(
    () => orders.filter((order) => order.status === "PAID"),
    [orders]
  );

  const purchases = useMemo(() => {
    return paidOrders.flatMap((order) =>
      order.cart.items.map((item: any) => ({
        id: order.bill?.invoiceNumber,
        orderId: order._id,
        title: item.course?.courseName,
        type: item.packageType,
        date: order.createdAt,
        price: item.price,
        status: order.status,
        paymentStatus: order.bill?.paymentStatus,
        transactionId: order.bill?.transactionId,
        invoiceNumber: order.bill?.invoiceNumber,
        image:
          item.course?.tabData?.[item.packageType]?.image ||
          item.course?.tabData?.Bundle?.image,
        certificate:
          item.course?.certificate?.certificateImg,
        badge:
          item.course?.certificate?.bannerImg,
        syllabus: item.course?.syllabus,
        practiceTestLink: item.course?.practiceTestLink,
        coursewareLink: item.course?.coursewareLink,
      }))
    );
  }, [paidOrders]);

  const stats = useMemo(() => {
    const enrolled = paidOrders.reduce(
      (acc, order) => acc + order.cart.items.length,
      0
    );

    const certificates = paidOrders.reduce(
      (acc, order) =>
        acc +
        order.cart.items.filter(
          (item: any) => item.course?.certificate
        ).length,
      0
    );

    const upcomingExams = paidOrders.reduce(
      (acc, order) =>
        acc +
        order.cart.items.filter(
          (item: any) =>
            item.packageType === "Exam Voucher" ||
            item.packageType === "Bundle"
        ).length,
      0
    );

    return {
      enrolled,
      certificates,
      upcomingExams,
      saved: 0,
    };
  }, [paidOrders]);

  const totalSpent = useMemo(() => {
    return paidOrders.reduce(
      (sum, order) => sum + (order.bill?.grandTotal || 0),
      0
    );
  }, [paidOrders]);

  const recentCourses = useMemo(() => {
    return purchases.slice(0, 4);
  }, [purchases]);

  const nextExam = useMemo(() => {
    return paidOrders
      .flatMap((order) => order.cart.items)
      .find(
        (item: any) =>
          item.packageType === "Exam Voucher" ||
          item.packageType === "Bundle"
      );
  }, [paidOrders]);

  const profile = {
    name: user?.name || "Student",
    email: user?.email || "",
    phone: user?.mobile || "",
    memberSince: user?.createdAt
      ? new Date(user.createdAt).toLocaleDateString()
      : "N/A",
    avatarColor: "bg-green-600",
  };

  const saved: any[] = [];

  const currency = (n: number) =>
    `₹${Number(n || 0).toLocaleString("en-IN")}`;

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-lg font-semibold">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto p-6 lg:p-10 grid grid-cols-12 gap-6">
        <aside className="col-span-12 lg:col-span-3">
          <div className="sticky top-6">
            <div className="rounded-xl bg-white shadow-md p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-white ${profile.avatarColor} text-xl font-bold`}
                >
                  {profile.name?.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    {profile.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Member Since {profile.memberSince}
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
                <button className="w-full text-sm py-2 rounded-md border border-green-600 text-green-700 font-medium">
                  Contact Support
                </button>

                <button className="w-full mt-3 text-sm py-2 rounded-md bg-green-600 text-white font-medium">
                  Buy New Course
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-white shadow p-4">
              <h4 className="text-sm text-gray-500">
                Quick Stats
              </h4>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <StatCard
                  label="Enrolled"
                  value={stats.enrolled}
                />
                <StatCard
                  label="Certificates"
                  value={stats.certificates}
                />
                <StatCard
                  label="Upcoming Exams"
                  value={stats.upcomingExams}
                />
                <StatCard
                  label="Saved"
                  value={stats.saved}
                />
              </div>
            </div>
          </div>
        </aside>

        <main className="col-span-12 lg:col-span-9">
          <div className="rounded-xl bg-white shadow p-6 mb-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold">
                  Welcome back, {profile.name} 👋
                </h1>

                <p className="text-gray-500 mt-1">
                  Total Courses: {stats.enrolled} • Total
                  Spent: {currency(totalSpent)}
                </p>
              </div>
            </div>

            {active === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <OverviewCard
                  title="My Courses"
                  subtitle="Purchased Courses"
                  value={`${stats.enrolled}`}
                  actionLabel="View Courses"
                  onAction={() => setActive("purchases")}
                >
                  <MiniProgress
                    percent={
                      stats.enrolled
                        ? Math.min(
                            (stats.certificates /
                              stats.enrolled) *
                              100,
                            100
                          )
                        : 0
                    }
                    label="Learning Progress"
                  />
                </OverviewCard>

                <OverviewCard
                  title="Certificates"
                  subtitle="Earned Credentials"
                  value={`${stats.certificates}`}
                  actionLabel="View Certificates"
                >
                  <div className="text-sm text-gray-600 mt-2">
                    Download certificates and badges.
                  </div>
                </OverviewCard>

                <OverviewCard
                  title="Upcoming Exams"
                  subtitle="Certification Exams"
                  value={`${stats.upcomingExams}`}
                  actionLabel="Schedule Exam"
                  onAction={() => setActive("schedule")}
                >
                  <div className="text-sm text-gray-600 mt-2">
                    {nextExam
                      ? nextExam.course.courseName
                      : "No Exams Available"}
                  </div>
                </OverviewCard>
              </motion.div>
            )}

            <div className="mt-6">
              {active === "overview" && (
                <OverviewSection
                  purchases={recentCourses}
                  saved={saved}
                  currency={currency}
                />
              )}

              {active === "purchases" && (
                <PurchaseHistory
                  purchases={purchases}
                  currency={currency}
                />
              )}

              {active === "savelist" && (
                <SaveList
                  items={saved}
                  currency={currency}
                />
              )}

              {active === "schedule" && <ScheduleExam />}

              {active === "profile" && (
                <ProfilePanel profile={profile} />
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;