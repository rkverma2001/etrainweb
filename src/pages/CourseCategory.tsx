import CourseSection from "@/components/courseCategory/CourseSection";
import VideoSection from "@/components/courseCategory/VideoSection";
import SampleCertificate from "@/components/courses/SampleCertificate";
import Footer from "@/components/footer/Footer";

const logos = [
  "1.svg",
  "2.svg",
  "3.svg",
  "4.svg",
  "5.svg",
  "6.svg",
  "7.svg",
  "8.svg",
  "9.svg",
  "10.svg",
  "11.svg",
  "12.svg",
  "13.svg",
  "14.svg",
  "15.svg",
  "16.svg",
];

const CourseCategory = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      
      <div className="max-w-7xl mx-auto pt-28">
        <VideoSection/>
      </div>
      <div className="mt-10">
        <div className="">
          <div className="overflow-hidden">
            <div
              className="flex items-center gap-6 animate-marquee"
              style={{ willChange: "transform" }}
            >
              {logos.concat(logos).map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center"
                  style={{ minWidth: 96 }}
                >
                  <img
                    src={`https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Adobebadges/${logo}`}
                    alt={logo}
                    className="h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-20 items-center justify-center">
        <CourseSection/>
      </div>
      <div>
        <SampleCertificate/>
      </div>
      <div className="mt-24">
        <Footer/>
      </div>
    </div>
  );
};

export default CourseCategory;
