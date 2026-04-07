import React from "react";

interface NavButtonProps {
  active?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  active = false,
  onClick,
  icon,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
        active
          ? "bg-green-50 border border-green-200 text-green-700"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium">{label}</div>
      </div>
    </button>
  );
};

export default NavButton;
