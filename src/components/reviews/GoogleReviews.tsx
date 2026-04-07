import { useEffect } from "react";

const GoogleReviews: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-10">
      <div
        className="elfsight-app-0607d678-992f-4f3a-90fe-d65db47acc06"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default GoogleReviews;
