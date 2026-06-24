import React from "react";
import {
  Clock3,
  BadgeCheck,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useParams } from "react-router-dom";
import courses from "./Ibmcourses.json";
import Footer from "@/components/footer/Footer";

interface CourseData {
  provider: string;
  title: string;
  subtitle: string;
  description: string;

  level: string;
  effort: string;
  language: string;
  rating: string;
  price: number;

  heroImage: string;
  certificateImage?: string;
  skills: string[];
  modules: {
    title: string;
    description: string;
  }[];

  overview: string[];

  instructor: {
    name: string;
    designation: string;
    description: string;
  };

  ctaTitle: string;
  ctaDescription: string;
}

const CourseDetails = () => {
  const { slug } = useParams();

  const course = courses.find((item) => item.slug === slug) as
    | CourseData
    | undefined;

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
              <div className="inline-block px-5 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-sm tracking-[0.2em] uppercase text-blue-200 mb-6">
                {course.provider}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {course.title}
                <br />
                {course.subtitle}
              </h1>

              <p className="mt-6 text-lg text-gray-200 leading-8 max-w-xl">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold inline-flex items-center gap-3">
                  Enroll Now
                  <ArrowRight size={20} />
                </button>

                <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 font-medium">
                  View Syllabus
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl max-w-md w-full">
                <img
                  src={course.heroImage}
                  alt={course.title}
                  className="w-40 bg-white rounded-2xl p-4 mx-auto"
                />

                <div className="mt-8 space-y-4">
                  <StatRow label="Level" value={course.level} />

                  <StatRow label="Estimated Effort" value={course.effort} />

                  <StatRow label="Language" value={course.language} />

                  <StatRow label="Course Rating" value={course.rating} />

                  <StatRow label="Price" value={`₹${course.price}`} />
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
            icon={<Clock3 size={24} />}
            title={course.effort}
            subtitle="Estimated Effort"
          />

          <InfoCard
            icon={<BadgeCheck size={24} />}
            title="Certificate"
            subtitle="Certificate Offered"
          />

          <InfoCard
            icon={<BarChart3 size={24} />}
            title={course.level}
            subtitle="Level"
          />

          <InfoCard
            icon={<Globe size={24} />}
            title={course.language}
            subtitle="Language"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <h2 className="text-3xl font-bold mb-6">Skills You Will Learn</h2>

        <div className="flex flex-wrap gap-4">
          {course.skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT COURSE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-3xl font-bold mb-6">At a Glance</h2>

        <div className="space-y-6 text-gray-300 leading-8 text-lg">
          {course.overview.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>

      {/* COURSE MODULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-3xl font-bold mb-8">Course Syllabus</h2>

        <div className="space-y-5">
          {course.modules.map((module, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-400 mt-1" size={22} />

                <div>
                  <h3 className="text-xl font-semibold">
                    Module {index + 1}: {module.title}
                  </h3>

                  <p className="text-gray-400 mt-2">{module.description}</p>
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

          {course.certificateImage ? (
            <img
              src="https://etrain.blr1.cdn.digitaloceanspaces.com/dstibm/IBMsample.png"
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
          <h3 className="text-2xl font-semibold">{course.instructor.name}</h3>

          <p className="text-blue-300 mt-2">{course.instructor.designation}</p>

          <p className="text-gray-300 mt-4 leading-8">
            {course.instructor.description}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{course.ctaTitle}</h2>

          <p className="mt-4 text-lg text-white/90">{course.ctaDescription}</p>

          <button className="mt-8 px-8 py-4 bg-white text-black rounded-2xl font-semibold">
            Go To Class
          </button>
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
