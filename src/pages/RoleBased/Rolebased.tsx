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
import WhatsIncluded2 from "./WhatsIncluded2.tsx";

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
      {courseId === "AWS-CLOUD-PRACTITIONER-101" && (
  <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
    <div className="border border-gray-200 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        About the AWS Certified Cloud Practitioner
      </h2>

      <p className="text-lg leading-8 text-gray-700">
        The <span className="font-semibold">AWS Certified Cloud Practitioner</span> validates
        foundational, high-level understanding of AWS Cloud, services, and
        terminology.
      </p>

      <p className="mt-4 text-lg leading-8 text-gray-700">
        This is an excellent starting point on the AWS Certification journey for
        individuals with no prior IT or cloud experience who are switching to a
        cloud career, as well as line-of-business employees seeking foundational
        cloud literacy.
      </p>
    </div>
  </section>
)}
      {courseId === "AWS-CLOUD-PRACTITIONER-101" ? (
  <WhatsIncluded2 />
) : (
  <WhatsIncluded activeTab={"Exam Voucher"} />
)}
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