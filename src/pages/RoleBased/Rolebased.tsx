import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/testimonials/Testimonials";
import axios from "@/services/api";
import testimonialData from "@/data/testimonialData.json";
import { useParams, useSearchParams } from "react-router-dom";
import ProductTab2 from "../Productpage/Abrocat/ProductTab2.tsx";
import WhatsIncluded from "../Productpage/Abrocat/WhatsIncluded.tsx";
import WhySection from "../Productpage/Abrocat/WhySection.tsx";
import ExamVoucher from "../Productpage/ExamVoucher.tsx";
import CertificateSection from "../Productpage/Abrocat/CertificateSection.tsx";
import BannerSteps from "../Productpage/Abrocat/BannerSteps.tsx";

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

const Rolebased = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");


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

  if (loading) return <p className="text-center mt-20">Loading course...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;
  if (!course) return <p className="text-center mt-20">No course found.</p>;

  return (
    <div className="mt-15">

      <ProductTab2
        tabData={course.tabData}
        activeTab={"Exam Voucher"}
        syllabus={course.syllabus}
        coursewareLink={course.coursewareLink}
      />
      <WhatsIncluded activeTab={"Exam Voucher"} />
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
        <WhySection activeTab={"Exam Voucher"} />

        {/* BOTTOM CURVE */}
        <div className="w-full relative mt-[80px]">
          <img
            src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67177e883ea6a4d457e262f3_bottom%20curve.svg"
            alt="Curved Bottom Border"
            className="w-full h-auto block"
          />
        </div>
      </div>
        <ExamVoucher
          highlights={course.highlights}
          videoSrc={course.video.videoUrl}
        />

        <CertificateSection
          certifier={course.certificate.certifier}
          certifierColor={course.certificate.certifierColor}
          certificateImg={course.certificate.certificateImg}
          bannerImg={course.certificate.bannerImg}
        />

      <BannerSteps activeTab={"Exam Voucher"} />

      <div className="mt-[50px]">
        <Testimonials data={testimonialData} />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Rolebased;