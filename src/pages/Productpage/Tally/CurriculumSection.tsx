import {
  BookOpen,
  Building2,
  FileSpreadsheet,
  Landmark,
  ShieldCheck,
  BarChart3,
  Database,
  Receipt,
  ChevronRight,
} from "lucide-react";

const colors = [
  "bg-blue-50 text-blue-600",
  "bg-green-50 text-green-600",
  "bg-orange-50 text-orange-600",
  "bg-purple-50 text-purple-600",
  "bg-cyan-50 text-cyan-600",
  "bg-red-50 text-red-600",
  "bg-indigo-50 text-indigo-600",
  "bg-yellow-50 text-yellow-600",
  "bg-emerald-50 text-emerald-600",
];

const icons = [
  BookOpen,
  Building2,
  FileSpreadsheet,
  Receipt,
  Landmark,
  BarChart3,
  ShieldCheck,
  Database,
  Receipt,
];

interface CurriculumSectionProps {
  course: {
    courseName: string;
    curriculum: {
      question: string;
      answers: string[];
    }[];
  };
}

export default function CurriculumSection({ course }: CurriculumSectionProps) {
  const modules = course.curriculum.map((item, index) => ({
    no: String(index + 1).padStart(2, "0"),
    title: item.question.includes("|")
      ? item.question.split("|")[1].trim()
      : item.question,
    topics: item.answers,
    color: colors[index % colors.length],
    icon: icons[index % icons.length],
  }));

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-50" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            COURSE CURRICULUM
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything You'll Learn in
            <span className="block text-green-600">
              {course.courseName.split(" ").slice(-3).join(" ")}?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn TallyPrime from fundamentals to GST with practical business
            scenarios and real-world accounting workflows.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.no}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
              >
                {/* Top */}

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${module.color}`}
                  >
                    <Icon size={30} />
                  </div>

                  <span className="text-5xl font-black text-slate-100 transition group-hover:text-green-100">
                    {module.no}
                  </span>
                </div>

                {/* Title */}

                <h3 className="mt-8 text-xl font-bold text-slate-900">
                  {module.title}
                </h3>

                {/* Topics */}

                <div className="mt-6 space-y-3">
                  {module.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-3">
                      <ChevronRight className="text-green-600" size={18} />

                      <span className="text-slate-600">{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-green-600 to-emerald-600 px-10 py-12 text-center text-white">
          <h3 className="text-3xl font-bold">
            Master the Complete {course.courseName}
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-green-100">
            From accounting fundamentals to GST, financial reporting, banking
            and company management — every module is taught through practical
            business scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}
