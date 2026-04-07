import React from "react";

interface Item {
  id: string | number;
  title: string;
  price: number;
}

interface SaveListProps {
  items: Item[];
  currency: (value: number) => string;
}

const SaveList: React.FC<SaveListProps> = ({ items, currency }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">My SaveList</h3>
      <p className="text-sm text-gray-500 mt-1">
        Items you saved to purchase later.
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((i) => (
          <div
            key={i.id}
            className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-between"
          >
            <div>
              <div className="font-medium">{i.title}</div>
              <div className="text-sm text-gray-500">{currency(i.price)}</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded border text-green-700">
                Add to cart
              </button>
              <button className="px-3 py-1 text-sm text-gray-500">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaveList;
