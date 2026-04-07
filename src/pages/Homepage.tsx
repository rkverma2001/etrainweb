import Certifications from "@/components/courses/Certification";
import LearnerOutcome from "@/components/courses/LearnOutcome";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import LogoSlider from "@/components/hero/LogoSlider";
import PartnersSection from "@/components/partner/PartnerSection";
import Testimonials from "@/components/testimonials/Testimonials";

const Homepage = () => {
  const testimonialData = [
    {
      message:
        "Excited to announce my graduation 🎓 from the UX Career Acceleration Program by EtrainIndia under the mentorship of Anudeep Ayyagari (UX Anudeep). It's been an enriching journey exploring UX concepts, design tools 🎨, and the realm of product design. Collaborating with talented peers, we've delved into crafting ...",
      name: "Abhishika K.N",
      role: "Engineer - 2 - Version",
      image: "https://i.ibb.co/jJmYtTp/1.jpg",
    },
    {
      message:
        "Excited to announce my graduation 🎓 from the UX Career Acceleration Program by GrowthSchool under the mentorship of Anudeep Ayyagari (UX Anudeep). It's been an enriching journey exploring UX concepts, design tools 🎨, and the realm of product design. Collaborating with talented peers, we've delved into crafting ...",
      name: "Rahul Sharma",
      role: "UI/UX Designer - TechCorp",
      image: "https://i.ibb.co/jJmYtTp/1.jpg",
    },
    {
      message:
        "Excited to announce my graduation 🎓 from the UX Career Acceleration Program by GrowthSchool under the mentorship of Anudeep Ayyagari (UX Anudeep). It's been an enriching journey exploring UX concepts, design tools 🎨, and the realm of product design. Collaborating with talented peers, we've delved into crafting ...",
      name: "Ritesh Kumar Verma",
      role: "Software Engineer - TechCorp",
      image: "https://i.ibb.co/jJmYtTp/1.jpg",
    },
    {
      message:
        "Excited to announce my graduation 🎓 from the UX Career Acceleration Program by GrowthSchool under the mentorship of Anudeep Ayyagari (UX Anudeep). It's been an enriching journey exploring UX concepts, design tools 🎨, and the realm of product design. Collaborating with talented peers, we've delved into crafting ...",
      name: "Ritesh Verma",
      role: "Software Developer - TechCorp",
      image: "https://i.ibb.co/jJmYtTp/1.jpg",
    },
  ];
  return (
    <div>
      <div className="mt-10">
        <HeroSection />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 my-12">
        <PartnersSection />
      </div>
      <div>
        <LogoSlider />
      </div>
      <div className="mb-15">
        <div className="flex items-center justify-center mb-10 mt-10">
          <h1
            className="mx-4 text-2xl  font-light text-[#0a033c] text-center"
            style={{ fontFamily: '"Source Sans 3", sans-serif' }}
          >
            Popular Courses & Certifications
          </h1>
        </div>
      </div>
      <div className="ml-10 mr-10 mb-10">
        <Certifications />
      </div>
      <div className="w-full flex flex-col items-center relative">
        {/* Top Curve */}
        <div className="w-full relative -mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10">
          <img
            src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67177e886c499c85bf94cc36_top%20curv.svg"
            alt="Top Curve"
            className="w-full h-auto block"
          />
        </div>

        {/* Content */}
        <div className="w-full flex justify-center items-center">
          <LearnerOutcome />
        </div>

        {/* Bottom Curve */}
        <div className="w-full relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10">
          <img
            src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67177e883ea6a4d457e262f3_bottom%20curve.svg"
            alt="Bottom Curve"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 px-4 sm:px-6 lg:px-8">
        <Testimonials data={testimonialData} />
      </div>
      <div className="mt-24">
          <Footer />
        </div>
    </div>
  );
};

export default Homepage;
