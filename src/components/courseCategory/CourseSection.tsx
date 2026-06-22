import { useState } from "react";
import CourseCard from "./CourseCard";

interface Course {
  title: string;
  description: string;
  image: string;
  duration: string;
  slug?: string;
}

const CourseSection = () => {
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
        title: "Adobe Certified Professional",
        description: "Adobe After Effects Bundle",
        image: "Adobe/adobeaftereffectsbundle.svg",
        duration: "3,849",
        slug: "/ADOBE-AFTER-101",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Photoshop Bundle",
        image: "Adobe/adobephotoshopbundle.svg",
        duration: "3,849",
        slug: "/ADOBE-PHOTO-102",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Acrobat Pro Bundle",
        image: "Adobe/AbrocatBundle.svg",
        duration: "3,849",
        slug: "/ADOBE-ACRO-103",
      },

      {
        title: "Adobe Certified Professional",
        description: "Adobe Premier Pro Bundle",
        image: "Adobe/PremierPro.svg",
        duration: "3,849",
        slug: "/ADOBE-PREMIER-104",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Animate Bundle",
        image: "Adobe/Animate.svg",
        duration: "3,849",
        slug: "/ADOBE-ANIMATE-105",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Express Bundle",
        image: "Adobe/Express.svg",
        duration: "3,849",
        slug: "/ADOBE-EXPRESS-106",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe InDesign Bundle",
        image: "Adobe/Indesign.svg",
        duration: "3,849",
        slug: "/ADOBE-INDESIGN-107",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Illustrator Bundle",
        image: "Adobe/Illustrator.svg",
        duration: "3,849",
        slug: "/ADOBE-ILLUSTRATOR-108",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Dreamweaver Bundle",
        image: "Adobe/Dreamweaver.svg",
        duration: "3,849",
        slug: "/ADOBE-DREAMWEAVER-109",
      },
    ],
    "exam-vouchers": [
      {
        title: "Adobe Certified Professional",
        description: "Adobe After Effects Exam Voucher",
        image: "Adobe/adobePIae.svg",
        duration: "2,199",
        slug: "/ADOBE-AFTER-101?tab=exam-vouchers",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Photoshop Exam Voucher",
        image: "Adobe/adobePIps.svg",
        duration: "2,199",
        slug: "/ADOBE-PHOTO-102?tab=exam-vouchers",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Acrobat Pro Exam Voucher",
        image: "Adobe/adobePIacro.svg",
        duration: "2,199",
        slug: "/ADOBE-ACRO-103?tab=exam-vouchers",
      },

      {
        title: "Adobe Certified Professional",
        description: "Adobe Premier Pro Exam Voucher",
        image: "Adobe/adobePIpr.svg",
        duration: "2,199",
        slug: "/ADOBE-PREMIER-104?tab=exam-vouchers",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Animate Exam Voucher",
        image: "Adobe/adobePIan.svg",
        duration: "2,199",
        slug: "/ADOBE-ANIMATE-105?tab=exam-vouchers",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Express Exam Voucher",
        image: "Adobe/adobePIexp.svg",
        duration: "2,199",
        slug: "/ADOBE-EXPRESS-106?tab=exam-vouchers",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe InDesign Exam Voucher",
        image: "Adobe/adobePIid.svg",
        duration: "2,199",
        slug: "/ADOBE-INDESIGN-107?tab=exam-vouchers",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Illustrator Exam Voucher",
        image: "Adobe/adobePIai.svg",
        duration: "2,199",
        slug: "/ADOBE-ILLUSTRATOR-108?tab=exam-vouchers",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Dreamweaver Exam Voucher",
        image: "Adobe/adobePIdw.svg",
        duration: "2,199",
        slug: "/ADOBE-DREAMWEAVER-109?tab=exam-vouchers",
      },
    ],

    "practice-tests": [
      {
        title: "Adobe Certified Professional",
        description: "Adobe After Effects Practice Test Voucher",
        image: "AdobeTest/adobePIae.svg",
        duration: "899",
        slug: "/ADOBE-AFTER-101?tab=practice-tests",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Photoshop Practice Test Voucher",
        image: "AdobeTest/adobePIps.svg",
        duration: "899",
        slug: "/ADOBE-PHOTO-102?tab=practice-tests",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Acrobat Pro Practice Test Voucher",
        image: "AdobeTest/adobePIacro.svg",
        duration: "899",
        slug: "/ADOBE-ACRO-103?tab=practice-tests",
      },

      {
        title: "Adobe Certified Professional",
        description: "Adobe Premier Pro Practice Test Voucher",
        image: "AdobeTest/adobePIpr.svg",
        duration: "899",
        slug: "/ADOBE-PREMIER-104?tab=practice-tests",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Animate Practice Test Voucher",
        image: "AdobeTest/adobePIan.svg",
        duration: "899",
        slug: "/ADOBE-ANIMATE-105?tab=practice-tests",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Express Practice Test Voucher",
        image: "AdobeTest/adobePIexp.svg",
        duration: "899",
        slug: "/ADOBE-EXPRESS-106?tab=practice-tests",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe InDesign Practice Test Voucher",
        image: "AdobeTest/adobePIid.svg",
        duration: "899",
        slug: "/ADOBE-INDESIGN-107?tab=practice-tests",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Illustrator Practice Test Voucher",
        image: "AdobeTest/adobePIai.svg",
        duration: "899",
        slug: "/ADOBE-ILLUSTRATOR-108?tab=practice-tests",
      },
      {
        title: "Adobe Certified Professional",
        description: "Adobe Dreamweaver Practice Test Voucher",
        image: "AdobeTest/adobePIdw.svg",
        duration: "899",
        slug: "/ADOBE-DREAMWEAVER-109?tab=practice-tests",
      },
    ],

    "self-paced-course": [
      {
        title: "Adobe Certified Professional",
        description:
          "Adobe After Effects Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIae.svg",
        duration: "1,149",
        slug: "/ADOBE-AFTER-101?tab=courseware",
      },
      {
        title: "Adobe Certified Professional",
        description:
          "Adobe Photoshop Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIps.svg",
        duration: "1,149",
        slug: "/ADOBE-PHOTO-102?tab=courseware",
      },
      {
        title: "Adobe Certified Professional",
        description:
          "Adobe Acrobat Pro Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIacro.svg",
        duration: "1,149",
        slug: "/ADOBE-ACRO-103?tab=courseware",
      },

      {
        title: "Adobe Certified Professional",
        description:
          "Adobe Premier Pro Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIpr.svg",
        duration: "1,149",
        slug: "/ADOBE-PREMIER-104?tab=courseware",
      },
      {
        title: "Adobe Certified Professional",
        description:
          "Adobe Animate Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIan.svg",
        duration: "1,149",
        slug: "/ADOBE-ANIMATE-105?tab=courseware",
      },
      {
        title: "Adobe Certified Professional",
        description:
          "Adobe Express Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIexp.svg",
        duration: "1,149",
        slug: "/ADOBE-EXPRESS-106?tab=courseware",
      },
      {
        title: "Adobe Certified Professional",
        description:
          "Adobe InDesign Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIid.svg",
        duration: "1,149",
        slug: "/ADOBE-INDESIGN-107?tab=courseware",
      },
      {
        title: "Adobe Certified Professional",
        description:
          "Adobe Illustrator Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIai.svg",
        duration: "1,149",
        slug: "/ADOBE-ILLUSTRATOR-108?tab=courseware",
      },
      {
        title: "Adobe Certified Professional",
        description:
          "Adobe Dreamweaver Self-Paced Video-Based Learning Course Voucher",
        image: "AdobeLearning/adobePIdw.svg",
        duration: "1,149",
        slug: "/ADOBE-DREAMWEAVER-109?tab=courseware",
      },
    ],
  };

  return (
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
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Adobebadges/AdobeCategoryLogo.svg"
                    alt="Logo"
                    className="h-10 sm:h-12 md:h-14 object-contain"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Get the complete certification package—exam voucher, practice
                  tests, and learning resources—designed for success at the best
                  value.
                </p>
              </>
            )}

            {selected === "exam-vouchers" && (
              <>
                <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center gap-2 flex-wrap">
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Adobebadges/AdobeCategoryLogo.svg"
                    alt="Logo"
                    className="h-10 sm:h-12 md:h-14 object-contain"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Official digital exam codes to take your Adobe certification
                  exam online with remote proctoring.
                </p>
              </>
            )}

            {selected === "practice-tests" && (
              <>
                <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center gap-2 flex-wrap">
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/certpreplogo.svg"
                    alt="Logo"
                    className="h-12 sm:h-14 md:h-16 object-contain"
                  />
                </h1>
                <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                  Practice Tests simulate the real exam environment and boost
                  confidence.
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

          {/* 🔥 Scrollable Grid */}
          <div className="flex-1 lg:max-h-[70vh] overflow-y-auto pr-1 sm:pr-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {courseData[selected]?.map((course, index) => (
                <CourseCard
                  key={index}
                  image={`https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/${course.image}`}
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
  );
};

export default CourseSection;
