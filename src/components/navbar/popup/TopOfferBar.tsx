import React from "react";
import { FaTag, FaTimes } from "react-icons/fa";

interface TopOfferBarProps {
  onClose?: () => void;
}

const TopOfferBar: React.FC<TopOfferBarProps> = ({ onClose }) => {
  return (
    <div className="relative w-full bg-[#0b8642] text-white">
      <div className="min-h-[44px] px-10 sm:px-12 md:px-14 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm md:text-[15px] font-medium leading-tight">
          <FaTag className="text-yellow-300 flex-shrink-0" />

          <span>
            <span className="font-bold text-yellow-300">50% OFF</span> on{" "}
            <span className="font-semibold">All Exam Vouchers</span> &{" "}
            <span className="font-semibold">All IBM Products</span> under{" "}
            <span className="font-bold text-yellow-300">
              NASSCOM & GOI Scheme
            </span>
          </span>

          <span className="hidden md:inline text-yellow-200">
            • Limited Time Offer
          </span>
        </div>

        {/* CROSS BUTTON */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close offer"
          className="
            absolute
            right-3
            sm:right-5
            top-1/2
            -translate-y-1/2
            w-7
            h-7
            flex
            items-center
            justify-center
            rounded-full
            text-white
            hover:bg-white/20
            transition-all
            duration-200
            cursor-pointer
          "
        >
          <FaTimes size={14} />
        </button>
      </div>
    </div>
  );
};

export default TopOfferBar;
