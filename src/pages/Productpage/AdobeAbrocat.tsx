import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import ExamVoucher from "./ExamVoucher";
import PracticeVoucher from "./PracticeVoucher";
import Courseware from "./Courseware";
import Testimonials from "@/components/testimonials/Testimonials";
import BannerSteps from "./Abrocat/BannerSteps.tsx";
import SneekPeek from "./Abrocat/SneekPeek.tsx";
import CertificateSection from "./Abrocat/CertificateSection";
import WhySection from "./Abrocat/WhySection";
import WhatsIncluded from "./Abrocat/WhatsIncluded";
import axios from "@/services/api";
import testimonialData from "@/data/testimonialData.json";
import { useParams, useSearchParams } from "react-router-dom";
import ProductTab2 from "./Abrocat/ProductTab2.tsx";

type TabName = "Bundle" | "Exam Voucher" | "Practice Test" | "Courseware";

type TabItem = {
  title: string;
  subtitle: string;
  image: string;
  price: number;
};

type CurriculumItem = {
  question: string;
  answers: string[];
};

type Certificate = {
  certifier: string;
  certifierColor: string;
  certificateImg: string;
  bannerImg: string;
};

type Course = {
  courseCode: string;
  courseName: string;
  tabData: Record<string, TabItem>;
  curriculum: CurriculumItem[];
  banner: { videoUrl: string };
  video: { videoUrl: string };
  highlights: string[];
  certificate: Certificate;
  syllabus: string;
  practiceTestLink: string;
  coursewareLink: string;
};

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [searchParams] = useSearchParams();
  const tabFromURL = searchParams.get("tab");

  const mapTab = (tab: string | null): TabName => {
    switch (tab) {
      case "exam-vouchers":
        return "Exam Voucher";
      case "practice-tests":
        return "Practice Test";
      case "courseware":
        return "Courseware";
      case "bundle":
        return "Bundle";
      default:
        return "Bundle";
    }
  };

  const [activeTab, setActiveTab] = useState<TabName>(mapTab(tabFromURL));

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/course/${courseId}`);
        setCourse(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load course data.");
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourse();
    }
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [courseId]);

  const tabs =
  course?.courseCode === "MCE-CERTIFIEDEDUCATOR-101"
    ? ["Bundle", "Exam Voucher", "Practice Test"]
    : ["Bundle", "Exam Voucher", "Practice Test", "Courseware"];

  if (loading) return <p className="text-center mt-20">Loading course...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;
  if (!course) return <p className="text-center mt-20">No course found.</p>;

  return (
    <div className="">
      <div
        className="flex justify-center border-b border-gray-200 gap-4 sm:gap-8 md:gap-14 lg:gap-20 xl:gap-28 items-center mt-[100px] px-4 sm:px-6 lg:px-14 lg:ml-[120px] lg:mr-[150px]"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as TabName)}
            className="relative text-gray-700 text-xs sm:text-sm lg:text-lg pb-2 transition-all ease-linear cursor-pointer whitespace-nowrap"
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full  h-[2px] bg-blue-600 rounded"></span>
            )}
          </button>
        ))}
      </div>

      <ProductTab2
        tabData={course.tabData}
        activeTab={activeTab}
        syllabus={course.syllabus}
        coursewareLink={course.coursewareLink}
      />
      <WhatsIncluded activeTab={activeTab} />
      <div className="w-full relative">
        {/* TOP CURVE */}
        <div className="w-full relative mb-[-25px] mt-[10px]">
          <img
            src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67177e886c499c85bf94cc36_top%20curv.svg"
            alt="Curved Top Border"
            className="w-full h-auto block"
          />
        </div>

        {/* MIDDLE SECTION */}
        <WhySection activeTab={activeTab} />

        {/* BOTTOM CURVE */}
        <div className="w-full relative mt-[80px]">
          <img
            src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67177e883ea6a4d457e262f3_bottom%20curve.svg"
            alt="Curved Bottom Border"
            className="w-full h-auto block"
          />
        </div>
      </div>
      {activeTab === "Exam Voucher" && (
        <ExamVoucher
          highlights={course.highlights}
          videoSrc={course.video.videoUrl}
        />
      )}
      {activeTab === "Practice Test" && (
        <PracticeVoucher videoSrc={course.video.videoUrl} />
      )}
      {activeTab === "Courseware" && (
        <Courseware curriculumData={course.curriculum} />
      )}

      {activeTab === "Exam Voucher" && (
        <CertificateSection
          certifier={course.certificate.certifier}
          certifierColor={course.certificate.certifierColor}
          certificateImg={course.certificate.certificateImg}
          bannerImg={course.certificate.bannerImg}
        />
      )}

      {activeTab === "Courseware" && (
        <SneekPeek videoUrl={course.banner.videoUrl} />
      )}

      <BannerSteps activeTab={activeTab} />

      <div className="mt-[50px]">
        <Testimonials data={testimonialData} />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default CoursePage;
