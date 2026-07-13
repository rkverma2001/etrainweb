import React from "react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Info, X } from "lucide-react";

interface WhatsIncludedProps {
  activeTab: string;
}

const WhatsIncluded3: React.FC<WhatsIncludedProps> = ({ activeTab }) => {
  const [showPracticeInfo, setShowPracticeInfo] = useState(false);
  const [showExamInfo, setShowExamInfo] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl font-semibold text-[#17345b]">
        What's Included
        <img
          src="https://etrain.blr1.digitaloceanspaces.com/Icon/line.svg"
          alt="line"
          className="pl-[100px] w-56 mt-[-5px]"
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        {activeTab === "Bundle" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 place-items-center w-full px-4 sm:px-6 md:px-0">
            {/* CARD 2 */}
            <Card className="relative w-full max-w-xl p-[20px] sm:p-[30px] transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
              {/* Info Button */}
              <button
                type="button"
                onClick={() => setShowPracticeInfo(!showPracticeInfo)}
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 z-20"
                aria-label="Practice test information"
              >
                <Info size={14} />
              </button>

              {/* Information Popup */}
              {showPracticeInfo && (
                <div className="absolute top-10 right-2 z-50 w-64 sm:w-72 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
                  <button
                    type="button"
                    onClick={() => setShowPracticeInfo(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                    aria-label="Close information"
                  >
                    <X size={16} />
                  </button>

                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Official Practice Test
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Prepare with an official practice test designed to simulate
                    the certification exam experience. Assess your knowledge,
                    identify areas for improvement, and build confidence before
                    taking the final certification exam.
                  </p>
                </div>
              )}

              {/* Card Content */}
              <div className="flex items-center gap-4 sm:gap-6 w-full">
                <div className="w-1/5">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/Practice_Test_Card_Icon_Green.svg"
                    alt="Practice Test Icon"
                    className="w-full h-12 sm:h-15 object-contain"
                  />
                </div>

                <div className="w-4/5 flex flex-col items-start">
                  <h2 className="text-sm sm:text-lg text-gray-800">
                    Official Practice Test
                  </h2>
                </div>
              </div>
            </Card>

            {/* CARD 3 */}
            <Card className="relative w-full max-w-xl p-4 sm:p-5 transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
              {/* Info Button */}
              <button
                type="button"
                onClick={() => setShowExamInfo(!showExamInfo)}
                className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 z-20"
                aria-label="Exam voucher information"
              >
                <Info size={14} />
              </button>

              {/* Information Popup */}
              {showExamInfo && (
                <div className="absolute top-10 right-2 z-50 w-64 sm:w-72 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
                  <button
                    type="button"
                    onClick={() => setShowExamInfo(false)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                    aria-label="Close information"
                  >
                    <X size={16} />
                  </button>

                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    Official Exam Voucher
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Receive an official exam voucher to take your certification
                    exam. Use the voucher to attempt the authorized
                    certification exam and validate your skills by earning an
                    industry-recognized certification.
                  </p>
                </div>
              )}

              {/* Card Content */}
              <div className="flex items-center gap-4 sm:gap-6 w-full">
                <div className="w-1/5">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/Certification_Card_Icon_Green.svg"
                    alt="Certification Icon"
                    className="w-full h-16 sm:h-20 pt-[15px] object-contain"
                  />
                </div>

                <div className="w-4/5 flex flex-col items-start">
                  <h2 className="text-sm sm:text-lg text-gray-800">
                    Official Exam Voucher
                  </h2>
                </div>
              </div>
            </Card>
          </div>
        )}
        {activeTab === "Exam Voucher" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 place-items-center w-full px-4 sm:px-6 md:px-0">
            {/* CARD 1 */}
            <Card className="w-full max-w-xl p-4 sm:p-5 transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
              <div className="flex items-center gap-4 sm:gap-6 w-full">
                <div className="w-1/5">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/Certification_Card_Icon_Green.svg"
                    alt="Learning Icon"
                    className="w-full h-16 sm:h-20 pt-[15px] object-contain"
                  />
                </div>

                <div className="w-4/5 flex flex-col items-start">
                  <h2 className="text-sm sm:text-lg text-gray-800">
                    Official Exam Voucher
                  </h2>
                </div>
              </div>
            </Card>

            {/* CARD 2 */}
            <Card className="w-full max-w-xl p-[20px] sm:p-[30px] transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
              <div className="flex items-center gap-4 sm:gap-6 w-full">
                <div className="w-1/5">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/proctor.svg"
                    alt="Learning Icon"
                    className="w-full h-12 sm:h-15 object-contain"
                  />
                </div>

                <div className="w-4/5 flex flex-col items-start">
                  <h2 className="text-sm sm:text-lg text-gray-800">
                    Remote Proctoring
                  </h2>
                </div>
              </div>
            </Card>
          </div>
        )}
        {activeTab === "Practice Test" && (
          <div>
            <Card className="w-full max-w-xl p-5 transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
              <div className="flex items-center gap-4 w-full">
                <div className="w-1/5">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/Practice_Test_Card_Icon_Green.svg"
                    alt="Learning Icon"
                    className="w-full h-15 object-contain"
                  />
                </div>
                <div className="w-4/5 flex flex-col items-start">
                  <h2 className="text-lg text-gray-800">
                    Official Practice Test Voucher
                  </h2>
                </div>
              </div>
            </Card>
          </div>
        )}
        {activeTab === "Courseware" && (
          <div>
            <Card className="w-full max-w-xl p-5 transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
              <div className="flex items-center gap-2 w-full">
                <div className="w-1/5">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/Learning_Course_Card_Icon_green.svg"
                    alt="Learning Icon"
                    className="w-full h-14 object-contain"
                  />
                </div>
                <div className="w-4/5 flex flex-col items-start">
                  <h2 className="text-lg text-gray-800">
                    Self-Paced E-Learning Course
                  </h2>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsIncluded3;
