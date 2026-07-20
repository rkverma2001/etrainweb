import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/services/api";

import TallyHero from "./TallyHero";
import AboutTallySection from "./AboutTallySection";
import CurriculumSection from "./CurriculumSection";
import SampleCertificateSection from "./SampleCertificateSection";
import Footer from "@/components/footer/Footer";

interface CourseData {
  _id: string;
  courseCode: string;
  courseName: string;

  tabData: {
    Courseware: {
      title: string;
      subtitle: string;
      image: string;
      price: number;
    };
  };

  curriculum: {
    question: string;
    answers: string[];
  }[];

  highlights: string[];

  certificate: {
    certifier: string;
    certifierColor: string;
    certificateImg: string;
    bannerImg: string;
  };
}

const TallyPage = () => {
  const { slug } = useParams();

  const [course, setCourse] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);

        const { data } = await api.get(`/course/${slug}`);

        setCourse(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to fetch course.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCourse();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {error || "Course Not Found"}
      </div>
    );
  }

  return (
    <>
      <TallyHero course={course} />
      <AboutTallySection course={course} />
      <CurriculumSection course={course} />
      <SampleCertificateSection course={course} />
      <Footer />
    </>
  );
};

export default TallyPage;