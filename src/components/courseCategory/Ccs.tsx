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

const Ccs = () => {
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
        title: "Critical Career Skills",
        description: "CCS Generative AI Foundations Bundle",
        image: "/1.svg",
        duration: "3,999",
        slug: "/CCS-GENAI-101",
      },
      {
        title: "Critical Career Skills",
        description: "CCS Professional Communication Bundle",
        image: "/2.svg",
        duration: "3,999",
        slug: "/CCS-PROFCOM-102",
      },
    ],

    "exam-vouchers": [
      {
        title: "Critical Career Skills",
        description: "CCS Generative AI Foundations Exam Voucher",
        image: "/CCSExamVoucher1.svg",
        duration: "2,499",
        slug: "/CCS-GENAI-101?tab=exam-vouchers",
      },
      {
        title: "Critical Career Skills",
        description: "CCS Professional Communication Exam Voucher",
        image: "/CCSExamVoucher2.svg",
        duration: "2,499",
        slug: "/CCS-PROFCOM-102?tab=exam-vouchers",
      },
    ],

    "practice-tests": [
      {
        title: "Critical Career Skills",
        description: "CCS Generative AI Foundations Practice Test",
        image: "/CCSPractice1.svg",
        duration: "899",
        slug: "/CCS-GENAI-101?tab=practice-tests",
      },
      {
        title: "Critical Career Skills",
        description: "CCS Professional Communication Practice Test",
        image: "/CCSPractice2.svg",
        duration: "899",
        slug: "/CCS-PROFCOM-102?tab=practice-tests",
      },
    ],

    "self-paced-course": [
      {
        title: "Critical Career Skills",
        description:
          "CCS Generative AI Foundations Self-Paced Video Based Learning Course Voucher",
        image: "/CCSLearn1.svg",
        duration: "1,299",
        slug: "/CCS-GENAI-101?tab=courseware",
      },
      {
        title: "Critical Career Skills",
        description:
          "CCS Professional Communication Self-Paced Video Based Learning Course Voucher",
        image: "/CCSLearn2.svg",
        duration: "1,299",
        slug: "/CCS-PROFCOM-102?tab=courseware",
      },
    ],
  };

  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from Critical Career Skills.",
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
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/CriticalCareer.svg"
                className="mb-4 sm:mb-5 h-12 sm:h-14 md:h-16 object-contain"
                alt="CCS Category Logo"
              />
              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  This Critical Career Skills shift aims to prepare learners
                  across various fields with versatile, in-demand skills. By
                  focusing on cross-industry competencies, we're ensuring that
                  both student learners and professionals are well-equipped to
                  meet the diverse needs of today’s employers.
                </p>
                <p className="mt-3 sm:mt-4">
                  EtrainIndia provides a full pathway solution that students can
                  use to prepare for the Critical Career Skills certifications.
                  From tailored learning materials and practice tests to
                  Critical Career Skills endorsed certification exams,
                  EtrainIndia provides assistance every step of the way.
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
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/videos/CriticalCareer.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[25px]">
        <div className="w-full flex justify-center items-center">
          <img
            src="https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/CcsBadges/1.svg"
            alt="Cisco Certified User"
            className="h-30 mx-[18px] inline-block"
          />
          <img
            src="https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/CcsBadges/2.svg"
            alt="Cisco Certified User"
            className="h-30 mx-[18px] inline-block"
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
                      src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/CriticalCareer.svg"
                      alt="Critical Career Skills Logo"
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
                      src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/CriticalCareer.svg"
                      alt="Critical Career Skills Logo"
                      className="h-10 sm:h-12 md:h-14 object-contain"
                    />
                  </h1>
                  <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                    Official digital exam codes to take your Critical Career
                    Skills certification exam online with remote proctoring.
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
                    image={`https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ccs${course.image}`}
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
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/Certificate/CcsGenaiCertificate.svg"
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

export default Ccs;
