import React from "react";
import {
  Clock3,
  BadgeCheck,
  BarChart3,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Footer from "@/components/footer/Footer";

const courseModules = [
  "Introduction and Applications of AI",
  "AI Concepts, Terminology, and Application Domains",
  "Business and Career Transformation Through AI",
  "Issues, Concerns, and Ethical Considerations",
];

const skills = [
  "AI Ethics",
  "Artificial Intelligence",
  "Generative AI",
  "Machine Learning",
  "Natural Language Processing",
];

const IBMCourseHeroSection = () => {
  return (
    <div className="bg-[#020817] text-white min-h-screen mt-14">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020817] via-[#071B4D] to-[#1D4ED8] py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-5 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-sm tracking-[0.2em] uppercase text-blue-200 mb-6">
                IBM Skills Network Course
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Artificial Intelligence
                <br />
                Fundamentals
              </h1>

              <p className="mt-6 text-lg text-gray-200 leading-8 max-w-xl">
                Learn core AI concepts and generative AI while exploring
                ethical considerations to kickstart your AI career with
                beginner-friendly practical learning.
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
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                  alt="IBM"
                  className="w-40 bg-white rounded-2xl p-4 mx-auto"
                />

                <div className="mt-8 space-y-4">
                  <StatRow label="Level" value="Beginner" />
                  <StatRow label="Estimated Effort" value="13 Hours" />
                  <StatRow label="Language" value="English" />
                  <StatRow label="Course Rating" value="4.9 (74 Reviews)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard icon={<Clock3 size={24} />} title="13 Hours" subtitle="Estimated Effort" />
          <InfoCard icon={<BadgeCheck size={24} />} title="Certificate" subtitle="Certificate Offered" />
          <InfoCard icon={<BarChart3 size={24} />} title="Beginner" subtitle="Level" />
          <InfoCard icon={<Globe size={24} />} title="English" subtitle="Language" />
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <h2 className="text-3xl font-bold mb-6">Skills You Will Learn</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
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
          <p>
            This course teaches the skills needed to move into various AI
            roles and helps learners understand key AI terminologies,
            applications, and real-world use cases.
          </p>

          <p>
            You will explore machine learning, neural networks, deep
            learning, NLP, generative AI models, large language models,
            ethical AI considerations, and AI-driven business
            transformation.
          </p>
        </div>
      </section>

      {/* COURSE MODULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-3xl font-bold mb-8">Course Syllabus</h2>

        <div className="space-y-5">
          {courseModules.map((module, index) => (
            <div
              key={module}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-400 mt-1" size={22} />
                <div>
                  <h3 className="text-xl font-semibold">
                    Module {index + 1}: {module}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Video lessons, readings, labs, quizzes and practical
                    exercises included.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-3xl font-bold mb-8">Instructor</h2>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Rav Ahuja</h3>
          <p className="text-blue-300 mt-2">Global Program Director, IBM Skills Network</p>
          <p className="text-gray-300 mt-4 leading-8">
            Leads growth strategy, curriculum creation, and partner programs
            for IBM Skills Network with strong focus on industry-ready
            professional certification programs.
          </p>
        </div>
      </section>

           
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Your AI Career Journey Today
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Beginner-friendly learning path with certification and practical
            industry exposure.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-black rounded-2xl font-semibold">
            Go To Class
          </button>
        </div>
      </section>
      <Footer/>
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

export default IBMCourseHeroSection;
