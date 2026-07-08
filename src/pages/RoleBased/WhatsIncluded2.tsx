import React from "react";
import { Card } from "@/components/ui/card";



const WhatsIncluded2: React.FC = () => {
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
          <div className="grid grid-cols-1 gap-4 sm:gap-6 place-items-center w-full px-4 sm:px-6 md:px-0">
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
          </div>
      </div>
    </div>
  );
};

export default WhatsIncluded2;
