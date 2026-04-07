import Footer from "@/components/footer/Footer";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { CheckCircle2 } from "lucide-react";

interface Course {
  title: string;
  description: string;
  image: string;
  duration: string;
  slug?: string;
}

const Autodesk = () => {
  const logos = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg"];
  const [selected, setSelected] = useState("bundle");

  const options = [
    { label: "Best Value Bundle", value: "bundle" },
    { label: "Exam Vouchers", value: "exam-vouchers" },
    { label: "Practice Tests", value: "practice-tests" },
    { label: "E-Learning Course", value: "self-paced-course" },
  ];

  const courseData: Record<
    string, Course[]
  > = {
    "bundle": [
      {
        title: "Autodesk Certified User",
        description: "Autodesk AutoCAD Bundle",
        image: "1.svg",
        duration: "₹ 3,849",
        slug: "/AUTODESK-AUTOCAD-101"
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Inventor Bundle",
        image: "2.svg",
        duration: "₹ 3,849",
        slug: "/AUTODESK-INVENTOR-102"
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Fusion Bundle",
        image: "3.svg",
        duration: "₹ 3,849",
        slug: "/AUTODESK-FUSION-103"
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk 3ds Bundle",
        image: "6.svg",
        duration: "₹ 3,849",
        slug: "/AUTODESK-3DSMAX-104"
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Maya Bundle",
        image: "5.svg",
        duration: "₹ 3,849",
        slug: "/AUTODESK-MAYA-105"
      },

      {
        title: "Autodesk Certified User",
        description: "Autodesk Revit Bundle",
        image: "4.svg",
        duration: "₹ 3,849",
        slug: "/AUTODESK-REVIT-106"
      },
    ],
    "exam-vouchers": [
      {
        title: "Autodesk Certified User",
        description: "Autodesk AutoCAD Exam Voucher",
        image: "AutodeskExamVoucher1.svg",
        duration: "₹ 2,199",
        slug: "/AUTODESK-AUTOCAD-101?tab=exam-vouchers",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Inventor Exam Voucher",
        image: "AutodeskExamVoucher2.svg",
        duration: "₹ 2,199",
        slug: "/AUTODESK-INVENTOR-102?tab=exam-vouchers",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Fusion Exam Voucher",
        image: "AutodeskExamVoucher3.svg",
        duration: "₹ 2,199",
        slug: "/AUTODESK-FUSION-103?tab=exam-vouchers",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk 3ds MAX Exam Voucher",
        image: "AutodeskExamVoucher6.svg",
        duration: "₹ 2,199",
        slug: "/AUTODESK-3DSMAX-104?tab=exam-vouchers",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Maya Exam Voucher",
        image: "AutodeskExamVoucher5.svg",
        duration: "₹ 2,199",
        slug: "/AUTODESK-MAYA-105?tab=exam-vouchers",
      },

      {
        title: "Autodesk Certified User",
        description: "Autodesk Revit Exam Voucher",
        image: "AutodeskExamVoucher4.svg",
        duration: "₹ 2,199",
        slug: "/AUTODESK-REVIT-106?tab=exam-vouchers",
      },
    ],
    "practice-tests": [
      {
        title: "Autodesk Certified User",
        description: "Autodesk AutoCAD Practice Test Voucher",
        image: "AutodeskPracticeTest1.svg",
        duration: "₹ 899",
        slug: "/AUTODESK-AUTOCAD-101?tab=practice-tests",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Inventor Practice Test Voucher",
        image: "AutodeskPracticeTest2.svg",
        duration: "₹ 899",
        slug: "/AUTODESK-INVENTOR-102?tab=practice-tests",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Fusion Practice Test Voucher",
        image: "AutodeskPracticeTest3.svg",
        duration: "₹ 899",
        slug: "/AUTODESK-FUSION-103?tab=practice-tests",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Revit Practice Test Voucher",
        image: "AutodeskPracticeTest4.svg",
        duration: "₹ 899",
        slug: "/AUTODESK-REVIT-106?tab=practice-tests",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk Maya Practice Test Voucher",
        image: "AutodeskPracticeTest5.svg",
        duration: "₹ 899",
        slug: "/AUTODESK-MAYA-105?tab=practice-tests",
      },
      {
        title: "Autodesk Certified User",
        description: "Autodesk 3ds MAX Practice Test Voucher",
        image: "AutodeskPracticeTest6.svg",
        duration: "₹ 899",
        slug: "/AUTODESK-3DSMAX-104?tab=practice-tests",
      },
    ],
    "self-paced-course": [
      {
        title: "Autodesk Certified User",
        description:
          "Autodesk AutoCAD Self-Paced Video Based Learning Course Voucher",
        image: "AutodeskLearning1.svg",
        duration: "₹ 1,150",
        slug: "/AUTODESK-AUTOCAD-101?tab=courseware",
      },
      {
        title: "Autodesk Certified User",
        description:
          "Autodesk Inventor Self-Paced Video Based Learning Course Voucher",
        image: "AutodeskLearning2.svg",
        duration: "₹ 1,150",
        slug: "/AUTODESK-INVENTOR-102?tab=courseware",
      },
      {
        title: "Autodesk Certified User",
        description:
          "Autodesk Fusion Self-Paced Video Based Learning Course Voucher",
        image: "AutodeskLearning3.svg",
        duration: "₹ 1,150",
        slug: "/AUTODESK-FUSION-103?tab=courseware",
      },
      {
        title: "Autodesk Certified User",
        description:
          "Autodesk Revit Self-Paced Video Based Learning Course Voucher",
        image: "AutodeskLearning4.svg",
        duration: "₹ 1,150",
        slug: "/AUTODESK-REVIT-106?tab=courseware",
      },
      {
        title: "Autodesk Certified User",
        description:
          "Autodesk Maya Self-Paced Video Based Learning Course Voucher",
        image: "AutodeskLearning5.svg",
        duration: "₹ 1,450",
        slug: "/AUTODESK-MAYA-105?tab=courseware",
      },
      {
        title: "Autodesk Certified User",
        description:
          "Autodesk 3ds MAX Self-Paced Video Based Learning Course Voucher",
        image: "AutodeskLearning6.svg",
        duration: "₹ 1,450",
        slug: "/AUTODESK-3DSMAX-104?tab=courseware",
      },
    ],
  };

  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from Autodesk.",
    "Receive official digital badges from Credly to showcase your skills online.",
    "Enhance your career prospects during interviews, internships, or performance evaluations.",
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto pt-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2">
              <img
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/ACULogo.svg"
                className="mb-4 sm:mb-5 h-12 sm:h-14 md:h-16 object-contain"
                alt="Autodesk Category Logo"
              />
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  The Autodesk Certified User (ACU) certification is an
                  industry-recognized credential that can effectively start
                  students’ careers as designers, engineers, and makers. It
                  enhances students' higher ed applications and resumes by
                  providing the evidence of competency and proficiency. The
                  certification is an excellent way for students with about 150
                  hours of real-world Autodesk software experience to validate
                  their software skills.
                </p>
                <p className="mt-3 sm:mt-4">
                  EtrainIndia provides a full pathway solution that students can
                  use to prepare for the Autodesk certifications. From tailored
                  learning materials and practice tests to Autodesk endorsed
                  certification exams, EtrainIndia provides assistance every
                  step of the way.
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
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/videos/autodesk.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="">
          <div className="overflow-hidden">
            <div className="w-48 animate-marquee whitespace-nowrap bg-white ">
              {logos.concat(logos).map((logo, index) => (
                <img
                  key={index}
                  src={`https://etrain.blr1.digitaloceanspaces.com/ProductImages/AutodeskBadges/${logo}`}
                  alt={logo}
                  className="h-24 mx-[68px] inline-block"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-100 shadow-sm lg:sticky lg:top-24">
            <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">
              Product Type
            </h4>

            <ul className="flex flex-wrap justify-center lg:flex-col gap-3">
              {options.map((option) => (
                <li key={option.value}>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selected === option.value}
                      onChange={() => setSelected(option.value)}
                      className="form-checkbox text-blue-600"
                    />
                    <span className="text-sm lg:text-base">{option.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 flex flex-col">
          {/* Dynamic Heading */}
          <div className="shrink-0">
            {selected === "bundle" && (
              <>
                <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center gap-2 flex-wrap">
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/ACULogo.svg"
                    alt="Autodesk Logo"
                    className="h-10 sm:h-12 md:h-14 object-contain"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Get the complete certification package—exam voucher, practice tests, and learning resources—designed for success at the best value.
                </p>
              </>
            )}

            {selected === "exam-vouchers" && (
              <>
                <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center gap-2 flex-wrap">
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/ACULogo.svg"
                    alt="Logo"
                    className="h-10 sm:h-12 md:h-14 object-contain"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Official digital exam codes to take your Autodesk
                  certification exam online with remote proctoring.
                </p>
              </>
            )}

            {selected === "practice-tests" && (
              <>
                <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center gap-2 flex-wrap">
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/certpreplogo.svg"
                    alt="CertPREP Logo"
                    className="h-12 sm:h-14 md:h-16 object-contain"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Practice Tests are designed to simulate the real exam
                  environment, helping you gain confidence and improve your
                  performance.
                </p>
              </>
            )}

            {selected === "self-paced-course" && (
              <>
                <h1 className="text-xl sm:text-2xl text-center mb-3 font-semibold flex items-center justify-center gap-2 flex-wrap">
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/lklogo.svg"
                    alt="Logo"
                    className="h-10 sm:h-12 object-contain"
                  />
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/BrainLogo.svg"
                    alt="Brainbuffet Logo"
                    className="h-18 object-contain inline-block"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Self-paced courses with video learning, quizzes, and
                  assignments.
                </p>
              </>
            )}
          </div>

          {/* 🔥 Scrollable Grid */}
          <div className="flex-1 lg:max-h-[70vh] overflow-y-auto pr-1 sm:pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {courseData[selected]?.map((course, index) => (
                <CourseCard
                  key={index}
                  image={`https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Autodesk/${course.image}`}
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
      <div>
        <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px]">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
            <div className=" p-6 w-full max-w-lg h-fit">
              <h2 className="text-4xl ml-1 font-semibold text-gray-800 mb-12">
                Get Industry-Recognized Certifications & Digital Badge
              </h2>
              <ul className="space-y-4 text-gray-700 text-base">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6  rounded-full flex items-center justify-center mt-1 shrink-0">
                      <CheckCircle2 className="text-green-600 w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Certificate Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <img
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/Certificate/Autocad.svg"
              alt="Autodesk Certificate"
              className="h-full w-[600px] object-contain max-h-[500px]  rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Autodesk;
