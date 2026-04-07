import React from "react";

interface Purchase {
  id: string | number;
  title: string;
  type: string;
  date: string;
  price: number;
  status: "Completed" | "Pending" | string;
}

interface SavedItem {
  id: string | number;
  title: string;
  price: number;
}

interface OverviewSectionProps {
  purchases: Purchase[];
  saved: SavedItem[];
  currency: (value: number) => string;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({
  purchases,
  saved,
  currency,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold">Recent purchases</h3>
        <p className="text-sm text-gray-500 mt-1">
          Bundles, practice tests and vouchers you bought.
        </p>

        <div className="mt-4 space-y-4">
          {purchases.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-tr from-blue-900 to-green-700 text-white font-bold">
                {p.type[0]}
              </div>
              <div className="flex-1">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-500">
                  {p.date} •{" "}
                  <span className="px-2 py-0.5 rounded text-xs bg-gray-100">
                    {p.type}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{currency(p.price)}</div>
                <div
                  className={`text-sm mt-1 ${
                    p.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {p.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Saved for later</h3>
        <p className="text-sm text-gray-500 mt-1">
          Courses you bookmarked to purchase later.
        </p>

        <div className="mt-4 space-y-3">
          {saved.map((s) => (
            <div
              key={s.id}
              className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-100 shadow-sm"
            >
              <div>
                <div className="font-medium">{s.title}</div>
                <div className="text-sm text-gray-500">{currency(s.price)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded text-green-700 text-sm">
                  Add to cart
                </button>
                <button className="px-3 py-1 text-sm text-gray-500">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg p-4 bg-green-50 border border-green-100">
          <div className="font-medium">Need help picking the right course?</div>
          <div className="text-sm text-gray-600 mt-1">
            Contact our advisors for a free recommendation.
          </div>
          <button className="mt-3 px-4 py-2 rounded-md bg-green-600 text-white">
            Talk to advisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
