import React from "react";

interface Purchase {
  id: string | number;
  title: string;
  type: string;
  date: string;
  price: number;
  status: "Completed" | "Pending" | string; // allows flexibility
}

interface PurchaseHistoryProps {
  purchases: Purchase[];
  currency: (value: number) => string;
}

const PurchaseHistory: React.FC<PurchaseHistoryProps> = ({ purchases, currency }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Purchase History</h3>
      <p className="text-sm text-gray-500 mt-1">All orders, invoices and actions.</p>

      <div className="mt-6 bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-6 py-3 text-sm text-gray-600">Order</th>
              <th className="px-6 py-3 text-sm text-gray-600">Product</th>
              <th className="px-6 py-3 text-sm text-gray-600">Type</th>
              <th className="px-6 py-3 text-sm text-gray-600">Date</th>
              <th className="px-6 py-3 text-sm text-gray-600">Price</th>
              <th className="px-6 py-3 text-sm text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map(p => (
              <tr key={p.id} className="border-t">
                <td className="px-6 py-4 text-sm">{p.id}</td>
                <td className="px-6 py-4">{p.title}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{p.type}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{p.date}</td>
                <td className="px-6 py-4 text-sm font-semibold">{currency(p.price)}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs ${p.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default PurchaseHistory;