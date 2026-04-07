// src/components/search/SuggestionDropdown.tsx
import React, { useEffect, useRef, useState } from "react";

type SuggestionItem = {
  id: string;
  label: string;
  secondary?: string;
  image?: string;
};

type Props = {
  items: SuggestionItem[];
  onSelect: (value: string) => void;
  onNavigateToCourse?: (id: string) => void;
  inputId?: string;
  /**
   * Called when dropdown should close (click outside, Escape)
   * Parent should set isSuggestionsOpen=false
   */
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
    // reset active when items change
    setActiveIndex(-1);
  }, [items]);

  // keyboard handling only while dropdown has items
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
          onSelect(items[activeIndex].label);
        }
      } else if (e.key === "Escape") {
        // return focus to input and notify parent to close
        (document.getElementById(inputId) as HTMLInputElement | null)?.focus();
        onClose?.();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, items, onSelect, inputId, onClose]);

  // close if click outside — notify parent (so it can hide the dropdown)
  useEffect(() => {
    const onDocClick = (ev: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(ev.target as Node)) {
        setActiveIndex(-1);
        onClose?.();
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
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
      className="absolute left-0 right-0 mt-12 bg-white rounded-md shadow-lg border border-gray-100 z-50 max-h-72 overflow-auto"
    >
      <ul className="divide-y">
        {items.map((it, idx) => (
          <li key={it.id}>
            <button
              type="button"
              role="option"
              aria-selected={idx === activeIndex}
              onMouseDown={(e) => e.preventDefault()} // avoid blur before click
              onClick={() => onSelect(it.label)}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`w-full text-left px-3 py-2 flex gap-3 items-center ${idx === activeIndex ? "bg-gray-100" : "hover:bg-gray-50"}`}
            >
              {it.image ? (
                <img src={it.image} alt={it.label} className="w-10 h-10 object-contain rounded" />
              ) : (
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-xs">C</div>
              )}
              <div className="truncate">
                <div className="text-sm font-medium truncate">{it.label}</div>
                {it.secondary && <div className="text-xs text-gray-500 truncate">{it.secondary}</div>}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
