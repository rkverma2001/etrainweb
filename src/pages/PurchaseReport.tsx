import { Fragment, useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";
import api from "../services/api";

interface PurchaseUser {
  id: string;
  name: string;
  email: string;
  mobile: string;
  userType: string;
  city: string;
  state: string;
}

interface PurchaseCourse {
  id: string;
  courseCode: string;
  courseName: string;
}

interface Purchase {
  packageType: string;
  versionName?: string;
  quantity: number;
  price: number;
  total: number;
}

interface PurchaseBill {
  invoiceNumber?: string;
  orderNumber?: number;
  billDate?: string;
  paymentStatus?: string;
  paymentMethod?: string;
  transactionId?: string;
  subtotal?: number;
  tax?: number;
  discount?: number;
  grandTotal?: number;
}

interface PurchaseOrder {
  id: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
}

interface PurchaseCoupon {
  id?: string;
  code?: string;
  discount?: number;
  discountType?: string;
}

interface PurchaseRecord {
  order: PurchaseOrder;
  user: PurchaseUser | null;
  course: PurchaseCourse | null;
  purchase: Purchase;
  bill: PurchaseBill | null;
  coupon: PurchaseCoupon | null;
}

interface ApiResponse {
  success: boolean;
  count: number;
  data: PurchaseRecord[];
}

const PurchaseReport = () => {
  const [records, setRecords] = useState<PurchaseRecord[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [packageType, setPackageType] = useState("");
  const [status, setStatus] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [expandedRow, setExpandedRow] =
    useState<string | null>(null);

  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  // ---------------------------------------------
  // FETCH PURCHASE DATA
  // ---------------------------------------------

  const fetchPurchases = async () => {
    try {
      setLoading(true);
      setError("");

      const params: Record<string, string> = {};

      if (search.trim()) {
        params.search = search.trim();
      }

      if (courseCode) {
        params.courseCode = courseCode;
      }

      if (packageType) {
        params.packageType = packageType;
      }

      if (status) {
        params.status = status;
      }

      if (couponCode.trim()) {
        params.couponCode = couponCode.trim();
      }

      if (startDate) {
        params.startDate = startDate;
      }

      if (endDate) {
        params.endDate = endDate;
      }

      console.log("PURCHASE FILTERS:", params);

      const response =
        await api.get<ApiResponse>(
          "/purchase/combined",
          {
            params,
          }
        );

      console.log(
        "PURCHASE API RESPONSE:",
        response.data
      );

      if (response.data.success) {
        setRecords(response.data.data || []);
      } else {
        setRecords([]);
      }

      setPage(1);
    } catch (error: any) {
      console.error(
        "PURCHASE API ERROR:",
        error
      );

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to load purchase data"
      );
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------
  // INITIAL LOAD
  // ---------------------------------------------

  useEffect(() => {
    fetchPurchases();
  }, []);

  // ---------------------------------------------
  // RESET FILTERS
  // ---------------------------------------------

  const resetFilters = async () => {
    setSearch("");
    setCourseCode("");
    setPackageType("");
    setStatus("");
    setCouponCode("");
    setStartDate("");
    setEndDate("");

    try {
      setLoading(true);

      const response =
        await api.get<ApiResponse>(
          "/purchase/combined"
        );

      setRecords(response.data.data || []);
      setPage(1);
    } catch (error: any) {
      setError(
        error?.response?.data?.message ||
          "Failed to reset filters"
      );
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------
  // COURSE OPTIONS
  // ---------------------------------------------

  const courseOptions = useMemo(() => {
    return Array.from(
      new Set(
        records
          .map(
            (item) =>
              item.course?.courseCode
          )
          .filter(Boolean)
      )
    ) as string[];
  }, [records]);

  // ---------------------------------------------
  // PAGINATION
  // ---------------------------------------------

  const totalPages = Math.max(
    1,
    Math.ceil(
      records.length / ITEMS_PER_PAGE
    )
  );

  const paginatedRecords = records.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // ---------------------------------------------
  // SUMMARY
  // ---------------------------------------------

  const totalOrders = records.length;

  const paidOrders = records.filter(
    (item) =>
      item.order?.status === "PAID"
  ).length;

  const failedOrders = records.filter(
    (item) =>
      item.order?.status === "FAILED"
  ).length;

  const revenue = records
    .filter(
      (item) =>
        item.order?.status === "PAID"
    )
    .reduce(
      (total, item) =>
        total +
        Number(
          item.purchase?.total || 0
        ),
      0
    );

  // ---------------------------------------------
  // FORMAT CURRENCY
  // ---------------------------------------------

  const formatCurrency = (
    value: number | undefined
  ) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value || 0);
  };

  // ---------------------------------------------
  // FORMAT DATE
  // ---------------------------------------------

  const formatDate = (
    value?: string
  ) => {
    if (!value) return "-";

    return new Date(value).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // ---------------------------------------------
  // STATUS STYLE
  // ---------------------------------------------

  const statusClass = (
    value?: string
  ) => {
    switch (value) {
      case "PAID":
        return "bg-green-100 text-green-700";

      case "FAILED":
        return "bg-red-100 text-red-700";

      case "REFUNDED":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  // ---------------------------------------------
  // DOWNLOAD EXCEL
  // ---------------------------------------------

  const downloadExcel = () => {
    if (records.length === 0) {
      alert("No purchase data available to download.");
      return;
    }

    const excelData = records.map(
      (item, index) => ({
        "S.No": index + 1,

        "Order Number":
          item.bill?.orderNumber || "",

        "Invoice Number":
          item.bill?.invoiceNumber || "",

        "Student Name":
          item.user?.name || "",

        "Email":
          item.user?.email || "",

        "Mobile":
          item.user?.mobile || "",

        "User Type":
          item.user?.userType || "",

        "City":
          item.user?.city || "",

        "State":
          item.user?.state || "",

        "Course Code":
          item.course?.courseCode || "",

        "Course Name":
          item.course?.courseName || "",

        "Package Type":
          item.purchase?.packageType || "",

        "Version":
          item.purchase?.versionName || "",

        "Quantity":
          item.purchase?.quantity || 0,

        "Price":
          item.purchase?.price || 0,

        "Total":
          item.purchase?.total || 0,

        "Coupon Code":
          item.coupon?.code || "",

        "Coupon Discount":
          item.coupon?.discount || 0,

        "Coupon Discount Type":
          item.coupon?.discountType || "",

        "Subtotal":
          item.bill?.subtotal || 0,

        "Tax":
          item.bill?.tax || 0,

        "Discount":
          item.bill?.discount || 0,

        "Grand Total":
          item.bill?.grandTotal || 0,

        "Payment Status":
          item.bill?.paymentStatus ||
          item.order?.status ||
          "",

        "Payment Method":
          item.bill?.paymentMethod || "",

        "Transaction ID":
          item.bill?.transactionId || "",

        "Razorpay Order ID":
          item.order?.razorpayOrderId || "",

        "Razorpay Payment ID":
          item.order?.razorpayPaymentId || "",

        "Order Status":
          item.order?.status || "",

        "Purchase Date":
          item.order?.createdAt
            ? new Date(
                item.order.createdAt
              ).toLocaleString("en-IN")
            : "",
      })
    );

    // Create worksheet
    const worksheet =
      XLSX.utils.json_to_sheet(
        excelData
      );

    // Set column widths
    worksheet["!cols"] = [
      { wch: 8 },
      { wch: 15 },
      { wch: 20 },
      { wch: 22 },
      { wch: 30 },
      { wch: 16 },
      { wch: 18 },
      { wch: 18 },
      { wch: 20 },
      { wch: 16 },
      { wch: 35 },
      { wch: 18 },
      { wch: 22 },
      { wch: 10 },
      { wch: 12 },
      { wch: 14 },
      { wch: 18 },
      { wch: 18 },
      { wch: 22 },
      { wch: 14 },
      { wch: 12 },
      { wch: 14 },
      { wch: 14 },
      { wch: 18 },
      { wch: 18 },
      { wch: 25 },
      { wch: 25 },
      { wch: 25 },
      { wch: 18 },
      { wch: 25 },
    ];

    // Create workbook
    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Purchase Report"
    );

    // Filename
    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    const filename =
      `Purchase_Report_${today}.xlsx`;

    // Download
    XLSX.writeFile(
      workbook,
      filename
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-16">

      <div className="mx-auto max-w-[1600px]">

        {/* HEADER */}

        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Purchase Report
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage and analyze course purchases
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={fetchPurchases}
              disabled={loading}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              {loading
                ? "Loading..."
                : "Refresh"}
            </button>

            <button
              onClick={downloadExcel}
              disabled={
                loading ||
                records.length === 0
              }
              className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Download Excel
            </button>

          </div>

        </div>

        {/* ERROR */}

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* SUMMARY */}

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <SummaryCard
            title="Total Orders"
            value={totalOrders}
          />

          <SummaryCard
            title="Paid Orders"
            value={paidOrders}
          />

          <SummaryCard
            title="Failed Orders"
            value={failedOrders}
          />

          <SummaryCard
            title="Revenue"
            value={formatCurrency(
              revenue
            )}
          />

        </div>

        {/* FILTERS */}

        <div className="mb-6 rounded-xl border bg-white p-5 shadow-sm">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="font-semibold text-gray-900">
              Filters
            </h2>

            <button
              onClick={resetFilters}
              className="text-sm font-medium text-red-600 hover:text-red-700"
            >
              Reset Filters
            </button>

          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

            {/* SEARCH */}

            <Input
              label="Search"
              value={search}
              placeholder="Student, email, course..."
              onChange={setSearch}
            />

            {/* COURSE */}

            <Select
              label="Course"
              value={courseCode}
              onChange={setCourseCode}
              options={courseOptions}
              placeholder="All Courses"
            />

            {/* PACKAGE */}

            <Select
              label="Package Type"
              value={packageType}
              onChange={setPackageType}
              options={[
                "Bundle",
                "Exam Voucher",
                "Practice Test",
                "Courseware",
              ]}
              placeholder="All Packages"
            />

            {/* STATUS */}

            <Select
              label="Payment Status"
              value={status}
              onChange={setStatus}
              options={[
                "CREATED",
                "PAID",
                "FAILED",
                "REFUNDED",
              ]}
              placeholder="All Status"
            />

            {/* COUPON */}

            <Input
              label="Coupon Code"
              value={couponCode}
              placeholder="Enter coupon code"
              onChange={setCouponCode}
            />

            {/* START DATE */}

            <Input
              label="Start Date"
              type="date"
              value={startDate}
              onChange={setStartDate}
            />

            {/* END DATE */}

            <Input
              label="End Date"
              type="date"
              value={endDate}
              onChange={setEndDate}
            />

            {/* APPLY */}

            <div className="flex items-end">

              <button
                onClick={fetchPurchases}
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Apply Filters
              </button>

            </div>

          </div>

        </div>

        {/* TABLE */}

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="min-w-[1400px] w-full">

              <thead className="border-b bg-gray-50">

                <tr>

                  <Th>Order</Th>
                  <Th>Student</Th>
                  <Th>Course</Th>
                  <Th>Package</Th>
                  <Th>Amount</Th>
                  <Th>Coupon</Th>
                  <Th>Status</Th>
                  <Th>Invoice</Th>
                  <Th>Date</Th>
                  <Th>Action</Th>

                </tr>

              </thead>

              <tbody className="divide-y">

                {loading ? (

                  <tr>

                    <td
                      colSpan={10}
                      className="py-20 text-center text-gray-500"
                    >
                      Loading...
                    </td>

                  </tr>

                ) : paginatedRecords.length === 0 ? (

                  <tr>

                    <td
                      colSpan={10}
                      className="py-20 text-center text-gray-500"
                    >
                      No purchase records found
                    </td>

                  </tr>

                ) : (

                  paginatedRecords.map(
                    (item) => {

                      const isExpanded =
                        expandedRow ===
                        item.order.id;

                      return (
                        <Fragment
                          key={item.order.id}
                        >

                          <tr className="hover:bg-gray-50">

                            {/* ORDER */}

                            <td className="px-4 py-4">

                              <p className="font-semibold text-gray-900">
                                #
                                {item.bill
                                  ?.orderNumber ||
                                  "-"}
                              </p>

                              <p className="max-w-[160px] truncate text-xs text-gray-400">
                                {
                                  item.order
                                    ?.razorpayOrderId ||
                                  "-"
                                }
                              </p>

                            </td>

                            {/* STUDENT */}

                            <td className="px-4 py-4">

                              <p className="font-medium text-gray-900">
                                {
                                  item.user
                                    ?.name ||
                                  "Unknown"
                                }
                              </p>

                              <p className="text-xs text-gray-500">
                                {
                                  item.user
                                    ?.email ||
                                  "-"
                                }
                              </p>

                              <p className="text-xs text-gray-500">
                                {
                                  item.user
                                    ?.mobile ||
                                  "-"
                                }
                              </p>

                            </td>

                            {/* COURSE */}

                            <td className="px-4 py-4">

                              <p className="max-w-[220px] font-medium text-gray-900">
                                {
                                  item.course
                                    ?.courseName ||
                                  "-"
                                }
                              </p>

                              <p className="text-xs text-gray-500">
                                {
                                  item.course
                                    ?.courseCode ||
                                  "-"
                                }
                              </p>

                            </td>

                            {/* PACKAGE */}

                            <td className="px-4 py-4">

                              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                                {
                                  item.purchase
                                    ?.packageType ||
                                  "-"
                                }
                              </span>

                            </td>

                            {/* AMOUNT */}

                            <td className="px-4 py-4">

                              <p className="font-semibold text-gray-900">
                                {formatCurrency(
                                  item.purchase
                                    ?.total
                                )}
                              </p>

                            </td>

                            {/* COUPON */}

                            <td className="px-4 py-4">

                              {item.coupon
                                ?.code ? (

                                <div>

                                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                                    {
                                      item.coupon
                                        .code
                                    }
                                  </span>

                                  {item.coupon
                                    .discount !==
                                    undefined && (
                                    <p className="mt-1 text-xs text-gray-500">
                                      Discount:{" "}
                                      {
                                        item.coupon
                                          .discount
                                      }
                                    </p>
                                  )}

                                </div>

                              ) : (

                                <span className="text-gray-400">
                                  —
                                </span>

                              )}

                            </td>

                            {/* STATUS */}

                            <td className="px-4 py-4">

                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                                  item.order
                                    ?.status
                                )}`}
                              >
                                {
                                  item.order
                                    ?.status ||
                                  "-"
                                }
                              </span>

                              <p className="mt-1 text-xs text-gray-500">
                                {
                                  item.bill
                                    ?.paymentMethod ||
                                  "-"
                                }
                              </p>

                            </td>

                            {/* INVOICE */}

                            <td className="px-4 py-4 text-sm font-medium text-gray-700">

                              {
                                item.bill
                                  ?.invoiceNumber ||
                                "-"
                              }

                            </td>

                            {/* DATE */}

                            <td className="px-4 py-4 text-sm text-gray-600">

                              {formatDate(
                                item.order
                                  ?.createdAt
                              )}

                            </td>

                            {/* ACTION */}

                            <td className="px-4 py-4">

                              <button
                                onClick={() =>
                                  setExpandedRow(
                                    isExpanded
                                      ? null
                                      : item.order
                                          .id
                                  )
                                }
                                className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium hover:bg-gray-100"
                              >
                                {isExpanded
                                  ? "Hide"
                                  : "View"}
                              </button>

                            </td>

                          </tr>

                          {isExpanded && (

                            <tr>

                              <td
                                colSpan={10}
                                className="bg-gray-50 px-6 py-6"
                              >

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                                  <InfoBox title="Order Details">

                                    <Info
                                      label="Order ID"
                                      value={
                                        item.order
                                          .id
                                      }
                                    />

                                    <Info
                                      label="Razorpay Order"
                                      value={
                                        item.order
                                          .razorpayOrderId ||
                                        "-"
                                      }
                                    />

                                    <Info
                                      label="Payment ID"
                                      value={
                                        item.order
                                          .razorpayPaymentId ||
                                        "-"
                                      }
                                    />

                                  </InfoBox>

                                  <InfoBox title="Student Details">

                                    <Info
                                      label="Name"
                                      value={
                                        item.user
                                          ?.name ||
                                        "-"
                                      }
                                    />

                                    <Info
                                      label="Email"
                                      value={
                                        item.user
                                          ?.email ||
                                        "-"
                                      }
                                    />

                                    <Info
                                      label="Mobile"
                                      value={
                                        item.user
                                          ?.mobile ||
                                        "-"
                                      }
                                    />

                                    <Info
                                      label="Location"
                                      value={
                                        item.user
                                          ? `${item.user.city}, ${item.user.state}`
                                          : "-"
                                      }
                                    />

                                  </InfoBox>

                                  <InfoBox title="Billing Details">

                                    <Info
                                      label="Subtotal"
                                      value={formatCurrency(
                                        item.bill
                                          ?.subtotal
                                      )}
                                    />

                                    <Info
                                      label="Tax"
                                      value={formatCurrency(
                                        item.bill
                                          ?.tax
                                      )}
                                    />

                                    <Info
                                      label="Discount"
                                      value={formatCurrency(
                                        item.bill
                                          ?.discount
                                      )}
                                    />

                                    <Info
                                      label="Grand Total"
                                      value={formatCurrency(
                                        item.bill
                                          ?.grandTotal
                                      )}
                                    />

                                    <Info
                                      label="Coupon"
                                      value={
                                        item.coupon
                                          ?.code ||
                                        "-"
                                      }
                                    />

                                  </InfoBox>

                                </div>

                              </td>

                            </tr>

                          )}

                        </Fragment>
                      );
                    }
                  )

                )}

              </tbody>

            </table>

          </div>

          {/* PAGINATION */}

          {records.length > 0 && (

            <div className="flex items-center justify-between border-t px-5 py-4">

              <p className="text-sm text-gray-500">
                Page {page} of{" "}
                {totalPages}
              </p>

              <div className="flex gap-2">

                <button
                  disabled={page === 1}
                  onClick={() =>
                    setPage(
                      (prev) =>
                        prev - 1
                    )
                  }
                  className="rounded-lg border px-4 py-2 text-sm disabled:opacity-40"
                >
                  Previous
                </button>

                <button
                  disabled={
                    page === totalPages
                  }
                  onClick={() =>
                    setPage(
                      (prev) =>
                        prev + 1
                    )
                  }
                  className="rounded-lg border px-4 py-2 text-sm disabled:opacity-40"
                >
                  Next
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default PurchaseReport;

/* =====================================================
   COMPONENTS
===================================================== */

const SummaryCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold text-gray-900">
        {value}
      </p>

    </div>
  );
};

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) => {
  return (
    <div>

      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

    </div>
  );
};

const Select = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}) => {
  return (
    <div>

      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      >

        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
};

const Th = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
      {children}
    </th>
  );
};

const InfoBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>

      <h3 className="mb-3 text-sm font-semibold text-gray-900">
        {title}
      </h3>

      <div className="space-y-3 rounded-lg border bg-white p-4">
        {children}
      </div>

    </div>
  );
};

const Info = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <div className="flex justify-between gap-4 text-sm">

      <span className="text-gray-500">
        {label}
      </span>

      <span className="max-w-[65%] break-all text-right font-medium text-gray-900">
        {value}
      </span>

    </div>
  );
};