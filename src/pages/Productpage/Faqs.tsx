// FaqsTest.tsx
import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FaqsProps {
  question: string;
  answer: string;
  icon: string;
}

const Faqs: React.FC<FaqsProps> = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10, // ✅ prevents collision
        flexWrap: "nowrap", // keeps layout same
      }}
    >
      <div
        style={{
          border: "1px solid #0b8642",
          borderRadius: 8,
          padding: 10,
          width: "100%", // ✅ changed
          maxWidth: 565, // ✅ keeps original design on desktop
          height: isOpen ? "auto" : 100,
          boxSizing: "border-box",
          background: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src={icon}
            alt="faq"
            style={{
              height: 32,
              maxWidth: "100%", // ✅ prevents overflow on small screens
            }}
          />

          <button
            type="button"
            onClick={toggleFAQ}
            style={{
              cursor: "pointer",
              padding: 8,
              borderRadius: 6,
              border: "none",
              background: "transparent",
              zIndex: 0,
              color: "#0b8642",
              flexShrink: 0, // ✅ prevents shrinking
            }}
          >
            <Plus
              size={28}
              className={`transition-transform duration-400 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </button>
        </div>

        <h1
  style={{
    marginTop: 12,
    color: "#001a38",
    fontWeight: 500,
    whiteSpace: "nowrap",        // ✅ force single line
    overflow: "hidden",          // ✅ hide overflow
    textOverflow: "ellipsis",    // ✅ show ...
  }}
>
  {question}
</h1>

        <div
          style={{
            overflow: "hidden",
            maxHeight: isOpen ? 200 : 0,
            transition: "max-height 300ms ease, opacity 300ms ease",
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 12 : 0,
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#4b5563",
              wordBreak: "break-word", // ✅ FIX
              overflowWrap: "anywhere", // ✅ STRONG FIX
            }}
            dangerouslySetInnerHTML={{ __html: answer }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
