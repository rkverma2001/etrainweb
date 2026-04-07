import React, { useEffect, useState } from "react";

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  total: number;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
  onRemove: (id: string) => void;
  onUpdate: (id: string, updatedTotal: number, updatedQty: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onRemove, onUpdate }) => {
  const [localQty, setLocalQty] = useState(product.quantity);
  const [localTotal, setLocalTotal] = useState(
    product.total ?? product.price * (product.quantity || 1)
  );

  useEffect(() => {
    setLocalQty(product.quantity || 1);
    setLocalTotal(product.total ?? product.price * (product.quantity || 1));
  }, [product]);

   useEffect(() => {
    onUpdate(product.id, localTotal, localQty);
  }, [localTotal, localQty]);


  // ⬇️ Decrease quantity
  const handleDecrease = () => {
    if (localQty > 1) {
      const newQty = localQty - 1;
      setLocalQty(newQty);
      setLocalTotal(localTotal - product.price);
    }
  };

  // ⬆️ Increase quantity
  const handleIncrease = () => {
    const newQty = localQty + 1;
    setLocalQty(newQty);
    setLocalTotal(localTotal + product.price);
  };

  return (
    <div className="flex items-start justify-between border-b py-4">
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-42 h-42 object-cover rounded-lg"
      />

      {/* Details */}
      <div className="flex-1 px-4">
        <h1 className="text-xl font-semibold gap-10 whitespace-pre-line">
          {product.title}
        </h1>
        <p className="text-sm mt-2 text-gray-500">{product.subtitle}</p>
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => onRemove(product.id)}
            className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
          >
            Delete
          </button>
          <button className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer">
            Save for later
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <span className="text-lg font-semibold">
          ₹{localTotal.toLocaleString()}
        </span>
        <div className="flex items-center mt-2 border rounded-lg px-2 py-1">
          <button onClick={handleDecrease} className="px-2 cursor-pointer">
            -
          </button>
          <span className="px-2">{localQty}</span>
          <button onClick={handleIncrease} className="px-2 cursor-pointer">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
