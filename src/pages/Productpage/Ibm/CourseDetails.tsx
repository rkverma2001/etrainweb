import React, { useEffect, useRef, useState } from "react";
import { BadgeCheck, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import Footer from "@/components/footer/Footer";
import api from "@/services/api";

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

  banner: {
    videoUrl: string;
  };

  video: {
    videoUrl: string;
  };

  highlights: string[];

  certificate: {
    certifier: string;
    certifierColor: string;
    certificateImg: string;
    bannerImg: string;
  };

  syllabus: string;
  practiceTestLink: string;
  coursewareLink: string;
}

const CourseDetails = () => {
  const { slug } = useParams();
  const syllabusRef = useRef<HTMLElement | null>(null);
  const [course, setCourse] = useState<CourseData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Course loading
const [addingToCart, setAddingToCart] = useState(false); // Add to cart loading
const [message, setMessage] = useState<string | null>(null);



  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);

        const response = await api.get(`/course/${slug}`);

        if (response.data) {
          setCourse(response.data);
          setError("");
        } else {
          setError("Course not found");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch course.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCourse();
    }
  }, [slug]);

  useEffect(() => {
  if (!message) return;

  const timer = setTimeout(() => {
    setMessage(null);
  }, 5000);

  return () => clearTimeout(timer);
}, [message]);

  const handleAddToCart = async () => {
  if (!course?.courseCode) {
    setMessage("❌ Invalid course.");
    return;
  }

  const token = localStorage.getItem("authToken");

  if (!token) {
    setMessage("⚠️ Please login to add items to your cart.");
    return;
  }

  try {
    setAddingToCart(true);
    setMessage(null);

    const { data } = await api.post(
      "/cart/add",
      {
        courseCode: course.courseCode,
        packageType: "Courseware",
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (data.success) {
      setMessage(data.message || "✅ Item added to cart successfully.");
    } else {
      setMessage(data.message || "❌ Failed to add item.");
    }
  } catch (error: any) {
    console.error(error);

    if (error.response?.status === 401) {
      setMessage("⚠️ Please login first.");
    } else if (error.response?.status === 409) {
      setMessage("⚠️ Item already exists in your cart.");
    } else {
      setMessage(
        error.response?.data?.message ||
          "❌ Something went wrong. Please try again."
      );
    }
  } finally {
    setAddingToCart(false);
  }
};

  useEffect(() => {
  if (!message) return;

  const timer = setTimeout(() => {
    setMessage(null);
  }, 30000); // 30 seconds

  return () => clearTimeout(timer);
}, [message]);

  const scrollToSyllabus = () => {
    syllabusRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020817] text-white">
        <h1 className="text-3xl font-semibold">Loading...</h1>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020817] text-white">
        <h1 className="text-3xl font-semibold">
          {error || "Course Not Found"}
        </h1>
      </div>
    );
  }
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020817] text-white">
        <h1 className="text-4xl font-bold">Course Not Found</h1>
      </div>
    );
  }
  return (
    <div className="bg-[#020817] text-white min-h-screen mt-14">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020817] via-[#071B4D] to-[#1D4ED8] py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {course.courseName}
              </h1>

              <p className="mt-6 text-lg text-gray-200 leading-8 max-w-xl">
                {course.highlights.join(" • ")}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
  onClick={handleAddToCart}
  disabled={addingToCart}
  className={`px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-3 transition-transform duration-200 ${
    addingToCart
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 cursor-pointer"
  }`}
>
  {addingToCart ? "Adding..." : "Add To Cart"}
  {!addingToCart && <ArrowRight size={20} />}
</button>

                <button
                  onClick={scrollToSyllabus}
                  className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 font-medium cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  View Syllabus
                </button>
              </div>
              {message && (
  <div
    className={`mt-4 rounded-xl px-4 py-3 font-medium ${
      message.startsWith("✅")
        ? "bg-green-100 text-green-700 border border-green-400"
        : message.startsWith("⚠️")
        ? "bg-yellow-100 text-yellow-700 border border-yellow-400"
        : "bg-red-100 text-red-700 border border-red-400"
    }`}
  >
    {message}
  </div>
)}
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl max-w-md w-full">
                <img
                  src={course.tabData.Courseware.image}
                  alt="IBM image"
                  className="w-40 bg-white rounded-2xl p-4 mx-auto"
                />

                <div className="mt-8 space-y-4">
                  <StatRow label="Estimated Effort" value="Self-Paced" />

                  <StatRow label="Includes" value="E-Courseware" />
                  <StatRow
                    label=""
                    value=" + Assessments + Exam (Certification)"
                  />

                  <StatRow label="Language" value="English" />

                  <StatRow label="Course Rating" value="4.8" />

                  <StatRow
                    label="Price"
                    value={`₹${course.tabData.Courseware.price}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={<BadgeCheck size={24} />}
            title="Certificate"
            subtitle="Certificate Offered"
          />

          <InfoCard
            icon={<Globe size={24} />}
            title="English"
            subtitle="Language"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <h2 className="text-3xl font-bold mb-6">Skills You Will Learn</h2>

        <div className="flex flex-wrap gap-4">
          {course.highlights.map((item) => (
            <div
              key={item}
              className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT COURSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-3xl font-bold mb-6">At a Glance</h2>

        <div className="space-y-6 text-gray-300 leading-8 text-lg">
          {course.highlights.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>

      {/* COURSE MODULES */}
      <section
        ref={syllabusRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12"
      >
        <h2 className="text-3xl font-bold mb-8">Course Syllabus</h2>

        <div className="space-y-5">
          {course.curriculum.map((module, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-400 mt-1" size={22} />

                <div>
                  <h3 className="text-xl font-semibold">{module.question}</h3>

                  <ul className="mt-3 space-y-2 text-gray-400">
                    {module.answers.map((answer, i) => (
                      <li key={i}>• {answer}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-3xl font-bold mb-8">Sample Certificate</h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-gray-300 mb-6">
            Upon successful completion of this course, you will receive an
            industry-recognized certificate from IBM Skills Network.
          </p>

          {course.certificate.certificateImg ? (
            <img
              src={course.certificate.certificateImg}
              alt="IBM Certificate"
              className="w-full max-w-4xl mx-auto rounded-2xl border border-white/10 shadow-2xl"
            />
          ) : (
            <div className="h-[400px] rounded-2xl border border-dashed border-white/20 flex items-center justify-center text-gray-400">
              Certificate Preview Coming Soon
            </div>
          )}
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-3xl font-bold mb-8">Instructor</h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">IBMCE Faculty Team</h3>

          <p className="text-blue-300 mt-2">IBM Experts</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            {course.tabData.Courseware.title}
          </h2>

          <p className="mt-4 text-lg text-white/90">
            {course.tabData.Courseware.subtitle}
          </p>

          <a
            href="https://etrain.skillsnetwork.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Go To Class
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const StatRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between border-b border-white/10 pb-3">
    <span className="text-gray-300">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

const InfoCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <div className="text-blue-400 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-gray-400 mt-2">{subtitle}</p>
  </div>
);

export default CourseDetails;
