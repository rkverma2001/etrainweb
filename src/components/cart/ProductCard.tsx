import React, { useEffect, useState } from "react";

export interface Product {
  id: string;
  courseId: string;
  packageType: string;

  title: string;
  subtitle: string;
  image: string;
  price: number;
  total: number;
  quantity: number;
}

interface ProductCardProps {
  product: Product;
  onRemove: () => void;
  onUpdate: (
    id: string,
    updatedTotal: number,
    updatedQty: number
  ) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onRemove,
  onUpdate,
}) => {
  const [localQty, setLocalQty] = useState(product.quantity);

  const [localTotal, setLocalTotal] = useState(
    product.total ??
      product.price * (product.quantity || 1)
  );

  useEffect(() => {
    setLocalQty(product.quantity || 1);

    setLocalTotal(
      product.total ??
        product.price * (product.quantity || 1)
    );
  }, [product]);

  useEffect(() => {
    onUpdate(product.id, localTotal, localQty);
  }, [localTotal, localQty]);

  const handleDecrease = () => {
    if (localQty > 1) {
      const newQty = localQty - 1;

      setLocalQty(newQty);
      setLocalTotal(localTotal - product.price);
    }
  };

  const handleIncrease = () => {
    const newQty = localQty + 1;

    setLocalQty(newQty);
    setLocalTotal(localTotal + product.price);
  };

  return (
    <div className="border-b py-5">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <div className="flex justify-center sm:justify-start">
          <img
            src={product.image}
            alt={product.title}
            className="
              w-full
              max-w-[220px]
              sm:w-36
              sm:h-36
              md:w-40
              md:h-40
              object-cover
              rounded-xl
              border
            "
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Title & Subtitle */}
          <div>
            <h2
              className="
                text-base
                sm:text-lg
                md:text-xl
                font-semibold
                text-gray-900
                leading-snug
              "
            >
              {product.title}
            </h2>

            <p
              className="
                text-sm
                text-gray-500
                mt-2
                line-clamp-3
              "
            >
              {product.subtitle}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              onClick={() => onRemove()}
              className="
                text-red-500
                hover:text-red-700
                text-sm
                font-medium
                cursor-pointer
              "
            >
              Delete
            </button>

            <button
              className="
                text-blue-500
                hover:text-blue-700
                text-sm
                font-medium
                cursor-pointer
              "
            >
              Save for later
            </button>
          </div>
        </div>

        {/* Price & Quantity */}
        <div
          className="
            flex
            sm:flex-col
            justify-between
            sm:justify-start
            items-center
            sm:items-end
            gap-4
            mt-4
            sm:mt-0
          "
        >
          <span
            className="
              text-lg
              md:text-xl
              font-bold
              text-gray-900
            "
          >
            ₹{localTotal.toLocaleString()}
          </span>

          <div
            className="
              flex
              items-center
              border
              rounded-lg
              overflow-hidden
            "
          >
            <button
              onClick={handleDecrease}
              className="
                px-3
                py-2
                hover:bg-gray-100
                cursor-pointer
              "
            >
              -
            </button>

            <span
              className="
                px-4
                py-2
                border-x
                min-w-[50px]
                text-center
              "
            >
              {localQty}
            </span>

            <button
              onClick={handleIncrease}
              className="
                px-3
                py-2
                hover:bg-gray-100
                cursor-pointer
              "
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;