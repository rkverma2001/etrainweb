import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { CheckCircle2 } from "lucide-react";

interface Course {
  title: string;
  description: string;
  image: string;
  duration: string;
  slug?: string;
}

const Apple = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selected, setSelected] = useState("bundle");

  const options = [
    { label: "Best Value Bundle", value: "bundle" },
    { label: "Exam Vouchers", value: "exam-vouchers" },
    { label: "Practice Tests", value: "practice-tests" },
    { label: "E-Learning Course", value: "self-paced-course" },
  ];

  const courseData: Record<string, Course[]> = {
    bundle: [
      {
        title: "App Development with Swift",
        description: "Swift Certified User Bundle",
        image: "/Apple/1.svg",
        duration: "₹ 3,849",
        slug: "/APPLE-SWIFT-CERTIFIED-101",
      },
      {
        title: "App Development with Swift",
        description: "Swift Associate Bundle",
        image: "/Apple/2.svg",
        duration: "₹ 3,849",
        slug: "/APPLE-SWIFT-ASSOCIATE-102",
      },
    ],
    "exam-vouchers": [
      {
        title: "App Development with Swift",
        description: "Swift Certified User Exam Voucher",
        image: "/Apple/AppleExamVoucher1.svg",
        duration: "₹ 2,199",
        slug: "/APPLE-SWIFT-CERTIFIED-101?tab=exam-vouchers",
      },
      {
        title: "App Development with Swift",
        description: "Swift Associate User Exam Voucher",
        image: "/Apple/AppleExamVoucher2.svg",
        duration: "₹ 2,199",
        slug: "/APPLE-SWIFT-ASSOCIATE-102?tab=exam-vouchers",
      },
    ],

    "practice-tests": [
      {
        title: "App Development with Swift",
        description: "Swift Certified User Practice Test Voucher",
        image: "/Apple/ApplePracticeTest1.svg",
        duration: "₹ 899",
        slug: "/APPLE-SWIFT-CERTIFIED-101?tab=practice-tests",
      },
      {
        title: "App Development with Swift",
        description: "Swift Associate Practice Test Voucher",
        image: "/Apple/ApplePracticeTest2.svg",
        duration: "₹ 899",
        slug: "/APPLE-SWIFT-ASSOCIATE-102?tab=practice-tests",
      },
    ],

    "self-paced-course": [
      {
        title: "App Development with Swift",
        description: "Swift Certified User Self-Paced Learning Course Voucher",
        image: "/Apple/AppleLearning1.svg",
        duration: "Coming Soon",
        slug: "/APPLE-SWIFT-CERTIFIED-101?tab=courseware",
      },
      {
        title: "App Development with Swift",
        description: "Swift Associate Self-Paced Learning Course Voucher",
        image: "/Apple/AppleLearning2.svg",
        duration: "Coming Soon",
        slug: "/APPLE-SWIFT-ASSOCIATE-102?tab=courseware",
      },
    ],
  };

  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from Apple.",
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
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/apple2.svg"
                className="mb-4 sm:mb-5 h-12 sm:h-14 md:h-16 object-contain"
                alt="Autodesk Category Logo"
              />
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  Master the art of building iOS applications with Apple’s
                  official programming language—Swift. This certification
                  validates your foundational skills in app development, from
                  designing intuitive interfaces using Xcode to coding logic
                  with Swift. Whether you're a student or a beginner in coding,
                  this program helps you start your journey into the world of
                  iOS app development, recognized by educators and employers
                  alike.
                </p>
                <p className="mt-3 sm:mt-4">
                  EtrainIndia provides a full pathway solution that students can
                  use to prepare for the App Development with Swift
                  certifications. From tailored learning materials and practice
                  tests to Apple endorsed certification exams, EtrainIndia
                  provides assistance every step of the way.
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
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/videos/swift.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[15px]">
        <div className="w-full flex justify-center items-center">
          <img
            src="https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/AppleBadges/1.svg"
            alt="Swift Certified User"
            className="h-32 mx-[18px] inline-block"
          />
          <img
            src="https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/AppleBadges/2.svg"
            alt="Swift Certified User"
            className="h-32 mx-[18px] inline-block"
          />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Sidebar / Filters */}
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
                      <span className="text-sm lg:text-base">
                        {option.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 flex flex-col">
            <div className="shrink-0">
              {selected === "bundle" && (
                <>
                  <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center gap-2 flex-wrap">
                    <img
                      src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/apple2.svg"
                      alt="Apple Logo"
                      className="h-10 sm:h-12 md:h-14 object-contain"
                    />
                  </h1>
                  <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                    Get the complete certification package—exam voucher,
                    practice tests, and learning resources—designed for success
                    at the best value.
                  </p>
                </>
              )}

              {selected === "exam-vouchers" && (
                <>
                  <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center gap-2 flex-wrap">
                    <img
                      src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/apple2.svg"
                      alt="Logo"
                      className="h-10 sm:h-12 md:h-14 object-contain"
                    />
                  </h1>
                  <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                    Official digital exam codes to take your Apple certification
                    exam online with remote proctoring.
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
                      src="https://etrain.blr1.cdn.digitaloceanspaces.com/msiLogo.svg"
                      alt="Logo"
                      className="h-16 sm:h-12 object-contain"
                    />
                  </h1>
                  <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                    These self-paced courses offer comprehensive training
                    through engaging content, quizzes, and assignments—delivered
                    by certified industry experts.
                  </p>
                </>
              )}
            </div>

            <div className="flex-1 lg:max-h-[70vh] overflow-y-auto pr-1 sm:pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {courseData[selected]?.map((course, index) => (
                  <CourseCard
                    key={index}
                    image={`https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages${course.image}`}
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
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/Certificate/Swiftcertifiedcertificate.svg"
              alt="Apple Swift Certificate"
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

export default Apple;
