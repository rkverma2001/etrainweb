import { useEffect, useRef, useState } from "react";

type SuggestionItem = {
  id: string;
  title: string;
  code?: string;
  image?: string;
};

type Props = {
  items: SuggestionItem[];
  onSelect: (value: string) => void;
  onNavigateToCourse?: (id: string) => void;
  inputId?: string;
  onClose?: () => void;
};

export default function SuggestionDropdown({
  items,
  onSelect,
  inputId = "search-input",
  onClose,
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActiveIndex(-1);
  }, [items]);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, items.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        if (activeIndex >= 0 && activeIndex < items.length) {
          e.preventDefault();
          onSelect(items[activeIndex].title);
        }
      } else if (e.key === "Escape") {
        (
          document.getElementById(inputId) as HTMLInputElement | null
        )?.focus();
        onClose?.();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [activeIndex, items, onSelect, inputId, onClose]);

  useEffect(() => {
    const onDocClick = (ev: MouseEvent) => {
      if (!containerRef.current) return;

      if (!containerRef.current.contains(ev.target as Node)) {
        setActiveIndex(-1);
        onClose?.();
      }
    };

    document.addEventListener("click", onDocClick);

    return () => {
      document.removeEventListener("click", onDocClick);
    };
  }, [onClose]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      role="listbox"
      aria-labelledby={inputId}
      id="search-suggestions"
      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto"
    >
      <ul className="divide-y divide-gray-100">
        {items.map((item, idx) => (
          <li key={item.id}>
            <button
              type="button"
              role="option"
              aria-selected={idx === activeIndex}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onSelect(item.title)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                idx === activeIndex
                  ? "bg-gray-100"
                  : "hover:bg-gray-50"
              }`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded object-cover border"
                />
              ) : (
                <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">
                  C
                </div>
              )}

              <div className="flex-1 min-w-1">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {item.title}
                </div>

                {item.code && (
                  <div className="text-xs text-gray-500 truncate mt-1">
                    {item.code}
                  </div>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}