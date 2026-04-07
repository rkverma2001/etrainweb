import React from "react";

interface WhySectionProps {
  activeTab: string;
}

const WhySection: React.FC<WhySectionProps> = ({ activeTab }) => {
  return (
    <div>
      {activeTab === "Bundle" && (
        <div className="flex flex-col lg:flex-row justify-between mt-12 lg:mt-[80px] px-6 lg:px-20">
          {/* LEFT TEXT */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#17345b] leading-tight lg:leading-[80px] text-center lg:text-left">
            Why <br /> This <br /> Certification
          </div>

          {/* RIGHT CONTENT */}
          <div className="mt-10 lg:mt-[35px] space-y-6 lg:space-y-10">
            {/* ITEM 1 */}
            <div className="flex items-center">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/boost_Badge.svg"
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-lg sm:text-xl lg:text-2xl ml-4">
                Boost Career Prospects
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-center">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/recognized_badge.svg"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-lg sm:text-xl lg:text-2xl ml-4">
                Recognized by Top Employers & Companies
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-center">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/verified_badge.svg"
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-lg sm:text-xl lg:text-2xl ml-4">
                Validates Your Skills Officially
              </p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Exam Voucher" && (
        <div className="flex flex-col lg:flex-row justify-between mt-12 lg:mt-[80px] px-6 lg:px-20">
          {/* LEFT TEXT */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#17345b] leading-tight lg:leading-[80px] text-center lg:text-left">
            Why <br /> This <br /> Certification
          </div>

          {/* RIGHT CONTENT */}
          <div className="mt-10 lg:mt-[35px] space-y-6 lg:space-y-10">
            {/* ITEM 1 */}
            <div className="flex items-center">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/boost_Badge.svg"
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-lg sm:text-xl lg:text-2xl ml-4">
                Boost Career Prospects
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-center">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/recognized_badge.svg"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-lg sm:text-xl lg:text-2xl ml-4">
                Recognized by Top Employers & Companies
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-center">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/verified_badge.svg"
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <p className="text-lg sm:text-xl lg:text-2xl ml-4">
                Validates Your Skills Officially
              </p>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Practice Test" && (
        <div className="flex flex-col lg:flex-row justify-between mt-12 lg:mt-[80px] px-6 lg:px-35">
          {/* LEFT TEXT */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#17345b] leading-tight lg:leading-[80px] text-center lg:text-left mt-6 lg:mt-[68px]">
            Why <br /> CertPREP <br /> Practice Tests
          </div>
          {/* RIGHT CONTENT */}
          <div className="mt-10 lg:mt-0 space-y-6 lg:space-y-10">
            {/* ITEM 1 */}
            <div className="flex items-start">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/pt1.svg"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1"
              />
              <div className="ml-4">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Simulates Real Exam
                </p>
                <p className="font-light text-sm sm:text-base">
                  Experience the actual testing interface before exam day
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/pt2.svg"
                alt="boost"
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1"
              />
              <div className="ml-4">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Boosts Exam Confidence
                </p>
                <p className="font-light text-sm sm:text-base">
                  Practice until you feel fully ready
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/pt3.svg"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1"
              />
              <div className="ml-4">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Flexible Practice Modes
                </p>
                <p className="font-light text-sm sm:text-base">
                  Choose between Training and Testing modes
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex items-start">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/pt4.svg"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1"
              />
              <div className="ml-4">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Higher Chances of Passing
                </p>
                <p className="font-light text-sm sm:text-base">
                  Target and Strengthen weak areas
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Courseware" && (
        <div className="flex flex-col lg:flex-row justify-between mt-12 lg:mt-[80px] px-6 lg:px-35">
          {/* LEFT TEXT */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-[#17345b] leading-tight lg:leading-[80px] text-center lg:text-left mt-6 lg:mt-[68px]">
            Why <br /> Choose <br /> LearnKey
          </div>

          {/* RIGHT CONTENT */}
          <div className="mt-10 lg:mt-0 space-y-6 lg:space-y-10">
            {/* ITEM 1 */}
            <div className="flex items-start">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/lk1.svg"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1"
              />
              <div className="ml-4">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  24/7 Online Access
                </p>
                <p className="font-light text-sm sm:text-base">
                  Learn Anytime, Anywhere with On-demand Training Videos
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/lk2.svg"
                alt="boost"
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1"
              />
              <div className="ml-4">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Hands On Projects
                </p>
                <p className="font-light text-sm sm:text-base">
                  Apply Your Skills Through Real-World Exercises
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/lk3.svg"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1"
              />
              <div className="ml-4">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Seamless Experience
                </p>
                <p className="font-light text-sm sm:text-base">
                  Delivered on the GMetrix Platform Ensuring Smooth Access
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex items-start">
              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/recognized_badge.svg"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 mt-1"
              />
              <div className="ml-4">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Industry Recognition
                </p>
                <p className="font-light text-sm sm:text-base">
                  Industry Approved Courseware
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhySection;
