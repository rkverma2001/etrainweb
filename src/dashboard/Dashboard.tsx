import React, { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import ProfilePanel from "./ProfilePanel";
import PurchaseHistory from "./PurchaseHistory";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import api from "@/services/api";

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
  const [active, setActive] = useState("purchases");
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    memberSince: "",
    avatarColor: "bg-green-600",
  });

  const [stats, setStats] = useState({
    enrolled: 0,
    totalSpent: 0,
  });

  const [purchases, setPurchases] = useState<any[]>([]);

  const currency = (n: number) =>
    `₹${Number(n || 0).toLocaleString("en-IN")}`;

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get("/dashboard/dashboard");

      console.log("Dashboard API Response:", response.data);

      const data = response.data;

      setProfile({
        name: data.user?.name || "Student",
        email: data.user?.email || "",
        phone: data.user?.mobile || "",
        memberSince: data.user?.createdAt
          ? new Date(data.user.createdAt).toLocaleDateString()
          : "N/A",
        avatarColor: "bg-green-600",
      });

      const totalSpent =
        data.recentOrders?.reduce(
          (sum: number, order: any) =>
            sum + (order.cart?.grandTotal || 0),
          0
        ) || 0;

      setStats({
        enrolled: data.purchasedCourses?.length || 0,
        totalSpent,
      });

      const formattedPurchases =
        data.purchasedCourses?.map((course: any) => ({
          id: course.orderId,
          title: course.courseName,
          type: course.packageType,
          date: new Date(course.purchaseDate).toLocaleDateString(),
          price: course.amount,
          status:
            course.orderStatus === "PAID"
              ? "Completed"
              : course.orderStatus,
        })) || [];

      setPurchases(formattedPurchases);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

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
                  active={active === "purchases"}
                  onClick={() => setActive("purchases")}
                  icon={<IconCart />}
                  label="Purchase History"
                />

                <NavButton
                  active={active === "profile"}
                  onClick={() => setActive("profile")}
                  icon={<IconUser />}
                  label="My Profile"
                />
              </div>

              <div className="mt-6 pt-4 border-t">
                <Link to="/contactus">
                  <button className="w-full text-sm py-2 rounded-md border border-green-600 text-green-700 font-medium cursor-pointer">
                    Contact Support
                  </button>
                </Link>
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
                  Total Courses: {stats.enrolled}
                  {" • "}
                  Total Spent: {currency(stats.totalSpent)}
                </p>
              </div>
            </div>

            <div className="mt-6">
              {active === "purchases" && (
                <PurchaseHistory
                  purchases={purchases}
                  currency={currency}
                />
              )}

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