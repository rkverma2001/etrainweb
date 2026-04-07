import React from "react";

interface OverviewCardProps {
  title: string;
  subtitle?: string;
  value: string | number;
  actionLabel?: string;
  onAction?: () => void;
  children?: React.ReactNode;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  subtitle,
  value,
  actionLabel,
  onAction,
  children,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 to-transparent dark:from-green-500/10 rounded-2xl pointer-events-none"></div>

      {/* Header Section */}
      <div className="flex items-start justify-between relative z-10">
        <div>
          {subtitle && (
            <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {subtitle}
            </div>
          )}
          <div className="text-lg font-semibold mt-1 text-gray-800 dark:text-gray-100">
            {title}
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {value}
          </div>
          {actionLabel && (
            <button
              onClick={onAction}
              className="mt-2 px-3 py-1.5 text-sm font-medium rounded-lg border border-green-600 text-green-700 cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-200 dark:border-green-400 dark:text-green-300 dark:hover:bg-green-500 dark:hover:text-white"
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>

      {/* Divider */}
      {children && (
        <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>
      )}

      {/* Content Section */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default OverviewCard;
