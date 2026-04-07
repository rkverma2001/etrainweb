import React from "react";

interface BannerStepsProps {
  activeTab: string;
}

const BannerSteps: React.FC<BannerStepsProps> = ({ activeTab }) => {

  const getBanner = () => {
    switch (activeTab) {
      case "Bundle":
        return "https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/steps_banner.svg";
      case "Exam Voucher":
        return "https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/certibanner.svg";
      case "Practice Test":
        return "https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/practicebanner.svg";
      case "Courseware":
        return "https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/lkbanner.svg";
      default:
        return "";
    }
  };

  const bannerSrc = getBanner();
  if (!bannerSrc) return null;

  return (
    <div className="w-full mt-10 sm:mt-12 md:mt-16 lg:mt-20">
      <img
        src={bannerSrc}
        alt="banner"
        className="w-screen max-w-none h-auto object-cover"
      />
    </div>
  );
};

export default BannerSteps;