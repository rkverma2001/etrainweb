import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { CheckCircle2 } from "lucide-react";

const Tally = () => {
  const [selected, setSelected] = useState("exam-vouchers");

  const options = [
    { label: "Artificial Intelligence", value: "exam-vouchers" },
    { label: "Full Stack Development", value: "practice-tests" },
    { label: "Data Science", value: "self-paced-course" },
  ];

  const courseData: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      duration: string;
      slug: string;
    }[]
  > = {
    "exam-vouchers": [
      {
        title: "Tally Essentials Level 1",
        description: "Tally Essentials Level 1 Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/Tally/tallyprod1.png",
        duration: "2,499",
        slug: "/tally/TALLY-ESSENTIAL-L1-101",
      },
      {
        title: "Tally Essentials Level 2",
        description: "Tally Essentials Level 2 Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/Tally/tallyprod2.png",
        duration: "2,499",
        slug: "/tally/TALLY-ESSENTIAL-L2-102",
      },
      {
        title: "Tally Essentials Level 3",
        description: "Tally Essentials Level 3 Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/Tally/tallyprod3.png",
        duration: "2,499",
        slug: "/tally/TALLY-ESSENTIAL-L3-103",
      },
      {
        title: "Tally Comprehensive",
        description: "Tally Comprehensive Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/Tally/tallyprod4.png",
        duration: "3,499",
        slug: "/tally/TALLY-COMPREHENSIVE-101",
      },
    ],
  };

  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from Tally.",
    "Enhance your career prospects during interviews, or performance evaluations.",
    "Gain hands-on, industry-aligned skills through Tally Certification courses powered by Tally Education.",
  ];

  return (
    <div className="relative">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2">
              <img
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/Tally.svg"
                className="mb-4 sm:mb-5 h-12 sm:h-14 md:h-16 object-contain"
                alt="Tally Logo"
              />

              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  The <span className="font-semibold">Tally Certification</span>{" "}
                  helps learners build practical accounting and business
                  management skills using TallyPrime, India's leading business
                  accounting software. The certification validates expertise in
                  financial accounting, GST, inventory management, payroll,
                  banking, taxation, and business reporting. Recognized by
                  businesses across industries, a Tally certification enhances
                  employability and prepares learners for real-world accounting
                  and finance roles.
                </p>

                <p className="mt-3 sm:mt-4">
                  EtrainIndia provides a complete learning pathway for Tally
                  certifications, from beginner to advanced levels. Through
                  expert-led training, practical exercises, real-world business
                  scenarios, mock assessments, and official Tally certification
                  preparation, learners gain the knowledge and confidence
                  required to excel in accounting, finance, taxation, and
                  business operations.
                </p>
              </div>
            </div>

            {/* Right Video Section */}
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-video border-2 rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/videos/tally.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Main Content */}
          <main className="w-full flex flex-col">
            {/* Dynamic Heading */}
            <div className="shrink-0">
              <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center">
                <img
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/Tally.svg"
                  alt="Tally Logo"
                  className="h-10 sm:h-12 md:h-14 object-contain"
                />
              </h1>

              <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                Official Tally Certification Courses designed to help learners
                develop in-demand financial skills and earn recognized
                credentials. <br /> The course includes a self-paced course,
                assessments, MCQ's and a certification exam.
              </p>
            </div>

            {/* Scrollable Grid */}
            <div className="flex-1 lg:max-h-[70vh] overflow-y-auto pr-1 sm:pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {courseData[selected]?.map((course, index) => (
                  <CourseCard
                    key={index}
                    image={course.image}
                    title={course.title}
                    price={course.duration}
                    description={course.description}
                    slug={course.slug || ""}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8 leading-tight">
                Get Industry-Recognized Certifications from Tally
              </h2>

              <ul className="space-y-4 text-gray-700 text-base">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center mt-1 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/Tally/level%201-1.svg"
              alt="Tally Certificate"
              className="w-full max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-24 mb-[-40px]">
        <Footer />
      </div>
    </div>
  );
};

export default Tally;
