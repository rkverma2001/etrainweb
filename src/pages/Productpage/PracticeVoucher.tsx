import { useEffect, useRef, useState } from "react";
import Faqs from "./Faqs";

type PracticeVoucherProps = {
  videoSrc: string;
};

const PracticeVoucher = ({ videoSrc }: PracticeVoucherProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
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
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

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
      { threshold: 0.3 },
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div className="mt-[60px] lg:mt-[100px]">
      <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* LEFT */}
            <div className="w-full lg:w-3/5">
              {/* HEADING */}
              <h2 className="text-[#002726] text-2xl sm:text-3xl md:text-4xl font-medium mb-6 relative inline-block">
                Get Exam-Ready with Confidence
                <img
                  src="https://etrain.blr1.digitaloceanspaces.com/Icon/line.svg"
                  className="w-28 sm:w-40 md:w-56 mt-[-5px]"
                />
              </h2>

              <p className="text-sm sm:text-base md:text-xl font-light text-justify">
                Before you take your official
                <span className="font-medium">
                  {" "}
                  Certification{" "}
                </span>
                exam, prepare yourself with the
                <span className="font-medium">
                  {" "}
                  CertPREP Practice Tests powered by GMetrix
                </span>{" "}
                — the same platform trusted worldwide for certification
                readiness.
              </p>

              {/* SECTION */}
              <h2 className="mt-10 text-xl sm:text-2xl md:text-3xl font-medium">
                Two Ways to Practice
              </h2>

              <p className="mt-2 text-sm sm:text-base md:text-xl font-light">
                CertPREP offers{" "}
                <span className="font-medium">two powerful modes</span>
              </p>

              {/* TESTING MODE */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium mt-10">
                Testing Mode
              </h3>

              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/circle.svg"
                className="mt-[-30px] sm:mt-[-40px] w-32 sm:w-40 md:w-50 ml-[-10px] sm:ml-[-20px] md:ml-[-30px]"
              />

              {[
                "Simulates the real certification exam",
                "Timed questions with real-world scenarios",
                "Perfect for evaluating your readiness",
              ].map((text, i) => (
                <div key={i} className="flex mt-3">
                  <img src="https://etrain.blr1.digitaloceanspaces.com/Icon/Tick_icon.svg" className="w-5 h-5 mt-[3px]" />
                  <p className="text-sm sm:text-base md:text-xl ml-2 font-light">
                    {text}
                  </p>
                </div>
              ))}

              {/* TRAINING MODE */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium mt-10">
                Training Mode
              </h3>

              <img
                src="https://etrain.blr1.digitaloceanspaces.com/Icon/circle.svg"
                className="mt-[-30px] sm:mt-[-40px] w-32 sm:w-40 md:w-50 ml-[-10px] sm:ml-[-20px] md:ml-[-30px]"
              />

              {[
                "Learn at your own pace",
                "Step-by-step guidance and instant feedback",
                "Great for building skills while preparing",
              ].map((text, i) => (
                <div key={i} className="flex mt-3">
                  <img src="https://etrain.blr1.digitaloceanspaces.com/Icon/Tick_icon.svg" className="w-5 h-5 mt-[3px]" />
                  <p className="text-sm sm:text-base md:text-xl ml-2 font-light">
                    {text}
                  </p>
                </div>
              ))}

              {/* WHY BUY */}
              <div className="mt-16 text-2xl sm:text-3xl md:text-4xl font-medium">
                Why buy from us?
              </div>

              {/* PERFECT GRID MATCH */}
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
                  <Faqs
                    icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon1.svg"
                    question="I have purchased the practice test voucher. What's next?"
                    answer="You'll receive an email within 24 hours..."
                  />
                  <Faqs
                    icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon2.svg"
                    question="Are the questions the same as the real exam?"
                    answer="While not identical..."
                  />
                  <Faqs
                    icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon3.svg"
                    question="How many attempts are there in the practice test?"
                    answer="There are upto 5 attempts..."
                  />
                  <Faqs
                    icon="https://etrain.blr1.digitaloceanspaces.com/Icon/faqicon7.svg"
                    question="What is the validity period of the practice test voucher?"
                    answer="You must redeem..."
                  />
                </div>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="w-full lg:w-2/5">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl overflow-hidden card">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className="w-full rounded-xl"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeVoucher;
