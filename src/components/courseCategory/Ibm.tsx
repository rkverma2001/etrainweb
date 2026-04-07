import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { CheckCircle2 } from "lucide-react";

const Ibm = () => {
  const [selected, setSelected] = useState("exam-vouchers");

  const options = [
    { label: "Artificial Intelligence", value: "exam-vouchers" },
    { label: "Full Stack Development", value: "practice-tests" },
    { label: "Data Science", value: "self-paced-course" },
  ];

  const courseData: Record<
    string,
    { title: string; description: string; image: string; duration: string }[]
  > = {
    "exam-vouchers": [
      {
        title: "Fundamentals of Building AI Agents",
        description: "IBM AI Certification Course",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/dstibm/images/coursesavailable/genaispecialist2.svg",
        duration: "₹ 2,199",
      },
      {
        title: "Introduction to Agentic AI",
        description: "IBM AI Certification Course",
        image: "/AppleImages/AppleExamVoucher2.svg",
        duration: "₹ 2,199",
      },
    ],

    "practice-tests": [
      {
        title: "App Development with Swift",
        description: "Swift Certified User Practice Test Voucher",
        image: "/AppleImages/ApplePracticeTest1.svg",
        duration: "₹ 899",
      },
      {
        title: "App Development with Swift",
        description: "Swift Associate Practice Test Voucher",
        image: "/AppleImages/ApplePracticeTest2.svg",
        duration: "₹ 899",
      },
    ],

    "self-paced-course": [
      {
        title: "App Development with Swift",
        description: "Swift Certified User Self-Paced Learning Course Voucher",
        image: "/AppleImages/AppleLearning1.svg",
        duration: "Coming Soon",
      },
      {
        title: "App Development with Swift",
        description: "Swift Associate Self-Paced Learning Course Voucher",
        image: "/AppleImages/AppleLearning2.svg",
        duration: "Coming Soon",
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
    <div className="relative">
      <Navbar />

      <div className="mt-20">
        <div className="flex flex-col md:flex-row">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 bg-white overflow-y-auto">
            <img
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/IBM.svg"
              className="mb-5 mt-[-34px] ml-[-20px] h-22"
              alt="Adobe Category Logo"
            />
            <div className="mb-6 text-gray-700 text-justify leading-relaxed">
              <span>
                {" "}
                The <span className="font-semibold">IBM Certification Program</span> empowers learners to validate
                their expertise in emerging technologies such as Artificial
                Intelligence, Data Science, Cloud Computing, Cybersecurity, and
                more. Earning an IBM certification demonstrates
                industry-relevant skills that are recognized and respected by
                employers worldwide. These credentials showcase a learner’s
                ability to apply advanced IBM tools and technologies to solve
                real-world business challenges — a powerful advantage in today’s
                digital economy.{" "}
              </span>{" "}
              <div className="mt-[15px]">
                {" "}
                EtrainIndia offers a complete preparation pathway for IBM
                certifications, guiding learners from foundational concepts to
                exam readiness. With expert-curated learning materials, hands-on
                projects, practice assessments, and access to official
                IBM-endorsed exams, EtrainIndia ensures that every student gains
                the confidence and skills to excel in the rapidly evolving tech
                industry.{" "}
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <video
              className="w-full h-64 md:h-84 border-2 rounded-2xl object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/videos/swift.mp4"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-10 items-center justify-center">
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Sidebar / Filters */}
          <aside className="w-full lg:h-[530px] lg:w-1/5 bg-gray-100 p-4 border-b lg:border-b-0 lg:border-r">
            <h2 className="text-lg lg:text-xl font-semibold mb-3 text-center lg:text-left">
              Certification Course
            </h2>
            <ul className="flex lg:flex-col justify-center gap-3 lg:space-y-3 text-gray-800 flex-wrap">
              {options.map((option) => (
                <li key={option.value} className="flex items-center">
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
          </aside>

          {/* Main Content */}
          <main className="w-full lg:h-[530px] lg:w-4/5 p-4 sm:p-6 overflow-y-auto">
            {selected === "exam-vouchers" && (
              <> 
                <p className="text-center text-2xl font-semibold mb-10">
                  Official IBM Certification Course
                </p>
              </>
            )}
            {selected === "practice-tests" && (
              <>
                <h1 className="text-2xl text-center mb-2 font-semibold flex items-center justify-center gap-2 flex-wrap">
                  <img
                    src="/CoursesCategories/CertPREPLogo.png"
                    alt="CertPREP Logo"
                    className="h-16 object-contain inline-block"
                  />
                </h1>
                <p className="text-center text-lg mb-10">
                  Practice Tests are designed to simulate the real exam
                  environment, helping you gain confidence and improve your
                  performance.
                </p>
              </>
            )}
            {selected === "self-paced-course" && (
              <>
                <h1 className="text-2xl text-center mb-3 font-semibold flex items-center justify-center gap-2 flex-wrap">
                  <img
                    src="/CoursesCategories/msiLogo.svg"
                    alt="CertPREP Logo"
                    className="h-16 object-contain inline-block"
                  />
                </h1>
                <p className="text-center text-lg mb-10">
                  These self-paced courses offer comprehensive training through
                  engaging content, quizzes, and assignments—delivered by
                  certified industry experts.
                </p>
              </>
            )}
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
              {courseData[selected].map((course, index) => (
                <CourseCard
                  key={index}
                  image={course.image} // ensure `course.image` is just the filename
                  title={course.title}
                  price={course.duration}
                  description={course.description}
                  slug=""
                />
              ))}
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
              src="\CoursesCategories\AppleCertificate.png"
              alt="Apple Certificate"
              className="h-full w-[600px] object-contain max-h-[500px]  rounded-xl shadow-lg"
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

export default Ibm;
