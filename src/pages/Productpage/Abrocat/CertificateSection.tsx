import React from "react";

interface CertificateSectionProps {
  certifier?: string;
  certifierColor?: string;
  certificateImg?: string;
  bannerImg?: string;
}

const CertificateSection: React.FC<CertificateSectionProps> = ({
  certifier,
  certifierColor = "#ed2224",
  certificateImg,
  bannerImg,
}) => {
  if (!certifier || !certificateImg || !bannerImg) return null;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-12 lg:mt-[80px] px-4 sm:px-6 lg:px-12">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-auto text-center lg:text-left">

        <h1 className="text-lg sm:text-xl md:text-2xl font-light mt-6 lg:mt-[80px] lg:ml-[130px]">
          You will be officially certified by{" "}
          <span className="font-bold" style={{ color: certifierColor }}>
            {certifier}
          </span>
        </h1>

        <img
          src={certificateImg}
          alt={`${certifier} Certificate`}
          className="w-full max-w-[600px] mt-6 sm:mt-8 lg:mt-10 mx-auto lg:ml-[120px]"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="relative mt-8 lg:mt-[-10px] lg:mr-[140px]">
        <img
          src={bannerImg}
          alt="Certification Banner"
          className="w-full max-w-[350px] sm:max-w-[450px] lg:max-w-none"
        />
      </div>

    </div>
  );
};

export default CertificateSection;