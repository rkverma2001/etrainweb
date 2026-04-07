import React, { useEffect, useRef, useState } from "react";
import Faqs from "./Faqs";
import Curriculum from "./Curriculum";

interface CurriculumItem {
  question: string;
  answers: string[];
}

interface CoursewareProps {
  curriculumData: CurriculumItem[];
}

const Courseware: React.FC<CoursewareProps> = ({ curriculumData }) => {
  const counterRef = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startCounting, setStartCounting] = useState(false);

  const end = 700000;
  const duration = 10000;
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const frame = useRef(0);

  useEffect(() => {
    if (!startCounting) return;

    const counter = setInterval(() => {
      frame.current += 1;
      const progress = frame.current / totalFrames;
      setCount(Math.floor(progress * end));

      if (frame.current >= totalFrames) {
        clearInterval(counter);
        setCount(end);
        setIsComplete(true);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [startCounting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div className="mt-[60px] lg:mt-[100px]">
      <section className="w-full bg-white py-10 sm:py-14 lg:py-16">

        {/* CONTAINER FIX */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">

          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT */}
            <div className="w-full lg:w-3/5">

              {/* HEADING */}
              <h2 className="text-[#002726] text-2xl sm:text-3xl md:text-4xl font-medium mb-6 relative inline-block">
                Course Curriculum
                <img
                  src="https://etrain.blr1.digitaloceanspaces.com/Icon/line.svg"
                  className="w-28 sm:w-40 md:w-56 mt-[-5px]"
                />
              </h2>

              {/* CURRICULUM LIST */}
              <div className="space-y-3">
                {curriculumData.map((module, index) => (
                  <Curriculum
                    key={index}
                    question={module.question}
                    answers={module.answers}
                  />
                ))}
              </div>

              {/* WHY BUY */}
              <div className="mt-16 text-2xl sm:text-3xl md:text-4xl font-medium">
                Why buy from us?
              </div>

              {/* GRID FIX (IMPORTANT) */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7">
                {/* CARD 1 */}
                <div
                  ref={counterRef}
                  className="border rounded-2xl p-2 pl-5 pt-5 h-[165px] w-full max-w-[320px] bg-[#faf5ed] cursor-pointer"
                >
                  <h1
                    className={`text-5xl font-semibold ${
                      isComplete ? "text-[#0b8642]" : "text-black"
                    }`}
                  >
                    {count.toLocaleString()}+
                  </h1>
                  <p className="text-xl mt-2 font-light">
                    Certified Learners <br /> and Growing Strong
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="border rounded-2xl p-2 pl-5 h-[165px] w-full max-w-[320px] bg-[#faf5ed] cursor-pointer">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/Certiportblacklogo.svg"
                    alt="Exam Voucher"
                    className="pl-6 ml-1 pt-2 w-[240px] mb-4"
                  />

                  <p className="text-xl mt-[-6px] ml-[28px] font-light">
                    Authorized Resellers for
                    <br /> India
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="border rounded-2xl p-2 pl-5 pt-5 h-[165px] w-full max-w-[320px] bg-[#faf5ed] cursor-pointer">
                  <h1 className="text-4xl font-semibold text-[#0b8642]">
                    Instant Delivery
                  </h1>
                  <p className="text-xl mt-2 font-light">
                    Quick Voucher Access,
                    <br /> Flexible Exams
                  </p>
                </div>

                {/* CARD 4 */}
                <div className="border rounded-2xl p-2 pl-5 pt-5 h-[165px] w-full max-w-[320px] bg-[#faf5ed] relative cursor-pointer">
                  <h1 className="text-4xl font-semibold text-[#0b8642]">
                    Expert Support
                  </h1>
                  <p className="text-xl mt-2 font-light">
                    Help at Every Step,
                    <br /> Start to Finish
                  </p>

                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/support.svg"
                    alt="Support Icon"
                    className="h-20 absolute right-2 bottom-2 lg:static lg:ml-[241px] lg:mt-[-41px]"
                  />
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-16">

                <h2 className="text-[#002726] text-2xl sm:text-3xl md:text-4xl font-medium mb-8 relative inline-block">
                  Looking for some answers ?
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/line.svg"
                    className="absolute left-[60%] sm:left-[75%] md:left-[190px] top-[100%] mt-[-6px] w-28 sm:w-40 md:w-56"
                  />
                </h2>

                <div className="space-y-4">
                  <Faqs icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon1.svg" question="I have purchased the courseware. What's next?" answer="You'll receive an email..." />
                  <Faqs icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon2.svg" question="How long will I have access to the course?" answer="The voucher..." />
                  <Faqs icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon2.svg" question="Are these courses self-paced or live?" answer="They are self-paced..." />
                  <Faqs icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon3.svg" question="Will I get a certificate?" answer="Yes, You'll receive..." />
                  <Faqs icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon7.svg" question="Can I share my voucher?" answer="No. Vouchers..." />
                  <Faqs icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon7.svg" question="How are these courses different?" answer="They are structured..." />
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-2/5">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl card">
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/lkcertificate.svg"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
};

export default Courseware;