import React from "react";
import { CheckCircle2 } from "lucide-react";

const SampleCertificate: React.FC = () => {
  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from Adobe.",
    "Receive official digital badges from Credly to showcase your skills online.",
    "Enhance your career prospects during interviews, internships, or performance evaluations.",
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">

        {/* Left Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-lg p-4 sm:p-6">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 sm:mb-8 md:mb-12">
              Get Industry-Recognized Certifications & Digital Badge
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mt-1 shrink-0">
                    <CheckCircle2 className="text-green-600 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  <span>{item}</span>

                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Right Section - Certificate Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://etrain.blr1.cdn.digitaloceanspaces.com/Certificate/PremierCertificate.svg"
            alt="ACPro Certificate"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain rounded-xl shadow-lg"
          />
        </div>

      </div>

    </div>
  );
};

export default SampleCertificate;