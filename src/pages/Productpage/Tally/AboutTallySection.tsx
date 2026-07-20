import {
  BookOpen,
  Landmark,
  BarChart3,
  FileText,
  Receipt,
  ShieldCheck,
} from "lucide-react";

const skills = [
  {
    icon: BookOpen,
    title: "Accounting Fundamentals",
    description: "Understand accounting concepts and business transactions.",
  },
  {
    icon: Receipt,
    title: "GST Management",
    description: "Learn GST entries, taxation, and statutory compliance.",
  },
  {
    icon: Landmark,
    title: "Banking",
    description: "Record banking transactions and reconciliation.",
  },
  {
    icon: BarChart3,
    title: "MIS Reports",
    description: "Generate reports for better business decisions.",
  },
  {
    icon: FileText,
    title: "Financial Statements",
    description: "Prepare Balance Sheet, P&L and other reports.",
  },
  {
    icon: ShieldCheck,
    title: "Data Management",
    description: "Manage company data securely using TallyPrime.",
  },
];

export default function AboutTallySection({ course }: { course: any }) {

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            OFFICIAL TALLY CERTIFICATION
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            What is{" "}
            <span className="text-green-600">
              {course.courseName.split(" ").slice(-3).join(" ")}?
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Build strong accounting fundamentals using the latest version of
            TallyPrime. Learn through practical business scenarios and become
            job-ready with an industry-recognized certification.
          </p>
        </div>

        {/* Content */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">

          {/* Left Illustration */}

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-green-200/30 blur-3xl" />

            <div className="relative mx-auto flex h-[500px] w-full max-w-[500px] items-center justify-center">

              {/* Center */}

              <div className="z-20 flex h-36 w-36 items-center justify-center rounded-3xl bg-white shadow-2xl">
                <img
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/Tally.svg"
                  alt="Tally"
                  className="h-20"
                />
              </div>

              {/* Floating Cards */}

              {[
                {
                  icon: BookOpen,
                  title: "Accounting",
                  className: "top-0 left-1/2 -translate-x-1/2",
                },
                {
                  icon: Receipt,
                  title: "GST",
                  className: "top-20 right-0",
                },
                {
                  icon: Landmark,
                  title: "Banking",
                  className: "bottom-24 right-5",
                },
                {
                  icon: BarChart3,
                  title: "MIS",
                  className: "bottom-0 left-1/2 -translate-x-1/2",
                },
                {
                  icon: FileText,
                  title: "Reports",
                  className: "bottom-24 left-0",
                },
                {
                  icon: ShieldCheck,
                  title: "Security",
                  className: "top-20 left-0",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`absolute ${item.className}`}
                  >
                    <div className="flex w-32 flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <Icon
                        className="mb-3 text-green-600"
                        size={30}
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}

          <div>

            <h3 className="text-3xl font-bold text-slate-900">
              Learn Practical Accounting with TallyPrime
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {course.courseName.split(" ").slice(-3).join(" ")} is designed for students, professionals,
              entrepreneurs and job seekers who want to master computerized
              accounting using TallyPrime.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                      <Icon
                        className="text-green-600"
                        size={24}
                      />
                    </div>

                    <h4 className="font-semibold text-slate-900">
                      {skill.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}