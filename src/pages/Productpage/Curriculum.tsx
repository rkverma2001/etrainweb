import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FaqsProps {
  question: string;
  answers: string[];
}

const Curriculum: React.FC<FaqsProps> = ({ question, answers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="p-4 sm:p-5">
      <div
        className="border border-[#0b8642] rounded-lg p-3 bg-white w-full max-w-[565px]"
        style={{
          height: isOpen ? "auto" : 100,
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-[#001a38] font-light text-sm sm:text-base mt-[2px] pr-2 break-words">
            {question}
          </h1>

          <button
            type="button"
            onClick={toggleFAQ}
            className="cursor-pointer p-2 rounded-md bg-transparent text-[#0b8642]"
          >
            <Plus
              size={24}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* FIRST ANSWER */}
        {answers.length > 0 && (
          <h1 className="mt-[-4px] text-[#001a38] font-medium text-sm sm:text-base break-words">
            {answers[0]}
          </h1>
        )}

        {/* LIST */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[300px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <ol className="text-sm sm:text-base text-gray-600">
            {answers.slice(1).map((ans, index) => (
              <li key={index}>
                <div className="flex items-start gap-2 mt-2">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/verified_badge.svg"
                    alt=""
                    className="h-5 w-5 mt-[2px] flex-shrink-0"
                  />
                  <p className="text-[14px] sm:text-[16px] break-words">
                    {ans}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;