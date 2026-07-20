import { BadgeCheck } from "lucide-react";

interface SampleCertificateSectionProps {
  course: {
    courseName: string;
    certificate: {
      certifier: string;
      certifierColor: string;
      certificateImg: string;
      bannerImg: string;
    };
  };
}

export default function SampleCertificateSection({
  course,
}: SampleCertificateSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-100 blur-3xl opacity-50" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-100 blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            <BadgeCheck size={16} />
            OFFICIAL CERTIFICATE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Sample Certificate
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            After successfully completing the course and assessment, you will
            receive an official <strong>{course.courseName.split(" ").slice(-3).join(" ")}</strong>
            certificate issued through the Tally Education program.
          </p>
        </div>

        {/* Certificate */}

        <div className="mt-20 flex justify-center">
          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 scale-110 rounded-[40px] bg-green-200/40 blur-3xl" />

            {/* Certificate Card */}

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(22,163,74,0.18)]">

              <img
                src={course.certificate.certificateImg}
                alt="TallyEssential Level 1 Certificate"
                className="w-full max-w-5xl rounded-2xl object-cover"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}