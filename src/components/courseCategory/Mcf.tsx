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

const Mcf = () => {
  const logos = [
    "1.svg",
    "2.svg",
    "3.svg",
    "4.svg",
    "5.svg",
    "6.svg",
    "7.svg",
    "8.svg",
  ];

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
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure Fundamentals (AZ-900) Bundle",
        image: "25.svg",
        duration: "3,999",
        slug: "/MCF-AZUREFUNDAMENTALS-101"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft 365 Copilot and Agent (AB-900) Bundle",
        image: "ab900bundle.svg",
        duration: "3,999",
        slug: "/MCF-365AB-900-106"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure AI Fundamentals (AI-901) Bundle",
        image: "27.svg",
        duration: "3,999",
        slug: "/MCF-AZUREAIFUNDAMENTALS-103"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure Data Fundamentals (DP-900) Bundle",
        image: "28.svg",
        duration: "3,999",
        slug: "/MCF-AZUREDATAFUNDAMENTALS-104"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Power Platform Fundamentals (PL-900) Bundle",
        image: "29.svg",
        duration: "3,999",
        slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900) Bundle",
        image: "32.svg",
        duration: "3,999",
        slug: "/MCF-SECURITYCOMPLIANCE-108"
      },
    ],

    "exam-vouchers": [
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure Fundamentals (AZ-900) Exam Voucher",
        image: "1.svg",
        duration: "2,499",
        slug: "/MCF-AZUREFUNDAMENTALS-101?tab=exam-vouchers"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft 365 Copilot and Agent (AB-900) Exam Voucher",
        image: "ab900exam.svg",
        duration: "2,499",
        slug: "/MCF-365AB-900-106?tab=exam-vouchers"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure AI Fundamentals (AI-901) Exam Voucher",
        image: "3.svg",
        duration: "2,499",
        slug: "/MCF-AZUREAIFUNDAMENTALS-103?tab=exam-vouchers"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure Data Fundamentals (DP-900) Exam Voucher",
        image: "4.svg",
        duration: "2,499",
        slug: "/MCF-AZUREDATAFUNDAMENTALS-104?tab=exam-vouchers"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Power Platform Fundamentals (PL-900) Exam Voucher",
        image: "5.svg",
        duration: "2,499",
        slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105?tab=exam-vouchers"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900) Exam Voucher",
        image: "8.svg",
        duration: "2,499",
        slug: "/MCF-SECURITYCOMPLIANCE-108?tab=exam-vouchers"
      },
    ],

    "practice-tests": [
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure Fundamentals (AZ-900) Practice Test Voucher",
        image: "9.svg",
        duration: "899",
        slug: "/MCF-AZUREFUNDAMENTALS-101?tab=practice-tests"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft 365 Copilot and Agent (AB-900) Practice Test Voucher",
        image: "ab900practice.svg",
        duration: "899",
        slug: "/MCF-365AB-900-106?tab=practice-tests"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure AI Fundamentals (AI-901) Practice Test Voucher",
        image: "11.svg",
        duration: "899",
        slug: "/MCF-AZUREAIFUNDAMENTALS-103?tab=practice-tests"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure Data Fundamentals (DP-900) Practice Test Voucher",
        image: "12.svg",
        duration: "899",
        slug: "/MCF-AZUREDATAFUNDAMENTALS-104?tab=practice-tests"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Power Platform Fundamentals (PL-900) Practice Test Voucher",
        image: "13.svg",
        duration: "899",
        slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105?tab=practice-tests"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900) Practice Test Voucher",
        image: "16.svg",
        duration: "899",
        slug: "/MCF-SECURITYCOMPLIANCE-108?tab=practice-tests"
      },
    ],

    "self-paced-course": [
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure Fundamentals (AZ-900) Self-Paced Video Based Learning Course Voucher",
        image: "17.svg",
        duration: "1,299",
        slug: "/MCF-AZUREFUNDAMENTALS-101?tab=courseware"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description:
          "Microsoft Azure AI Fundamentals (AI-901) Self-Paced Video Based Learning Course Voucher",
        image: "19.svg",
        duration: "1,299",
        slug: "/MCF-AZUREAIFUNDAMENTALS-103?tab=courseware"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description:
          "Microsoft Azure Data Fundamentals (DP-900) Self-Paced Video Based Learning Course Voucher",
        image: "20.svg",
        duration: "1,299",
        slug: "/MCF-AZUREDATAFUNDAMENTALS-104?tab=courseware"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Power Platform Fundamentals (PL-900) Self-Paced Video Based Learning Course Voucher",
        image: "21.svg",
        duration: "1,299",
        slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105?tab=courseware"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description:
          "Microsoft Security, Compliance, and Identity Fundamentals (SC-900) Self-Paced Video Based Learning Course Voucher",
        image: "24.svg",
        duration: "1,299",
        slug: "/MCF-SECURITYCOMPLIANCE-108?tab=courseware"
      },
    ],
  };

  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from Microsoft Certified Fundamentals.",
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
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/Microsoft.svg"
                className="mb-4 sm:mb-5 h-12 sm:h-14 md:h-16 object-contain"
                alt="Autodesk Category Logo"
              />
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  The Microsoft Certified Fundamentals exams are the pathway to
                fully understanding what cloud computing is, what options are
                available from Microsoft, and which options make sense for
                businesses to invest in. This set of exams is for students who
                are exploring a career in artificial intelligence, data science,
                and cloud computing.
                </p>
                <p className="mt-3 sm:mt-4">
                  EtrainIndia provides a full pathway solution that students can
                use to prepare for the Microsoft Certified Fundamentals certifications. From tailored
                learning materials and practice tests to Microsoft Certified Fundamentals certifications
                endorsed certification exams, EtrainIndia provides assistance
                every step of the way.
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
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/videos/mcf.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <div className="w-48 animate-marquee whitespace-nowrap bg-white ">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={`https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/McfBadges/${logo}`}
              alt={logo}
              className="h-28 mx-[38px] inline-block"
            />
          ))}
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
                    <span className="text-sm lg:text-base">{option.label}</span>
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
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/Microsoft.svg"
                    alt="Microsoft Logo"
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
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/Microsoft.svg"
                    alt="Logo"
                    className="h-10 sm:h-12 md:h-14 object-contain"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Official digital exam codes to take your Microsoft Certified Fundamentals certification
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
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/lklogo.svg"
                    alt="Logo"
                    className="h-10 sm:h-12 object-contain"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Self-paced courses with video learning, quizzes, and
                  assignments.
                </p>
              </>
            )}
            </div>
            <div className="flex-1 lg:max-h-[70vh] overflow-y-auto pr-1 sm:pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {courseData[selected]?.map((course, index) => (
                <CourseCard
                  key={index}
                  image={`https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Mcf/${course.image}`}
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
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/Certificate/McfAzureAiCertificate.svg"
              alt="MCF Certificate"
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

export default Mcf;
