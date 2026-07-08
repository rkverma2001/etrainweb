import { useEffect, useRef, useState } from "react";
import Faqs from "./Faqs";

type ExamVoucherProps = {
  highlights: string[];
  videoSrc: string;
};

const ExamVoucher = ({ highlights, videoSrc }: ExamVoucherProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startCounting, setStartCounting] = useState(false);
  const end = 700000;
  const duration = 10000; // total animation time in ms
  const frameRate = 1000 / 60; // 60 FPS
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
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.3 }, // Start when 30% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div className="mt-[100px]">
      <section className="w-full bg-white py-16">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Section */}

            <div className="w-full lg:w-3/5">
              <div className="px-4 sm:px-6 lg:px-12 mt-10">
                {/* HEADING */}
                <h2 className="text-[#002726] text-2xl sm:text-3xl md:text-4xl font-medium mb-2 relative inline-block">
                  Skills Covered in the Exam
                  <img
                    src="https://etrain.blr1.digitaloceanspaces.com/Icon/line.svg"
                    alt="line"
                    className="w-32 sm:w-40 md:w-56 mt-[-5px]"
                  />
                </h2>

                {/* LIST */}
                <div className="mt-4 space-y-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-start">
                      {/* ICON */}
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8">
                        <img
                          src="https://etrain.blr1.digitaloceanspaces.com/Icon/Tick_icon.svg"
                          alt="tick icon"
                          className="w-full h-full"
                        />
                      </div>

                      {/* TEXT */}
                      <p className="text-sm sm:text-base md:text-xl ml-3 leading-snug break-words">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex mt-18 text-4xl font-medium">
                Why buy from us?
              </div>
              <div className="mt-12 flex flex-wrap gap-7 items-center">
                <div
                  ref={counterRef}
                  className="border-1 rounded-2xl p-2 pl-5 pt-5 h-[165px] w-[320px] bg-[#faf5ed] cursor-pointer"
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
                <div className="border-1 rounded-2xl p-2 pl-5 h-[165px] w-[320px] bg-[#faf5ed] cursor-pointer">
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/Certiportblacklogo.svg"
                    alt="Exam Voucher"
                    className="pl-6 ml-1 pt-2 w-[240px] mb-4 transition duration-300 ease-in-out"
                  />

                  <p className="text-xl mt-[-6px] ml-[28px] font-light">
                    Authorized Resellers for
                    <br /> India
                  </p>
                </div>
                <div className="border-1 rounded-2xl p-2 pl-5 pt-5 h-[165px] w-[320px] bg-[#faf5ed]  cursor-pointer">
                  <h1 className="text-4xl font-semibold text-[#0b8642]">
                    Instant Delivery
                  </h1>
                  <p className="text-xl mt-2 font-light">
                    Quick Voucher Access,
                    <br /> Flexible Exams
                  </p>
                </div>
                <div className="border-1 rounded-2xl p-2 pl-5 pt-5 h-[165px] w-[320px] bg-[#faf5ed]  cursor-pointer">
                  <h1 className="text-4xl font-semibold text-[#0b8642]">
                    Expert Support
                  </h1>
                  <p className="text-xl mt-2 font-light">
                    Help at Every Step,
                    <br /> Start to Finish
                  </p>
                  <img
                    src="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/support.svg"
                    alt="Support Icon"
                    className="h-20 ml-[241px] mt-[-41px]"
                  />
                </div>
              </div>
              <div className="px-4 sm:px-6 lg:px-12 mt-10">
                {/* HEADING */}
                <div className="mb-8">
                  <h2 className="text-[#002726] text-2xl sm:text-3xl md:text-4xl font-medium relative inline-block">
                    Looking for some answers ?
                    <img
                      src="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/line.svg"
                      alt="line"
                      className="absolute left-[60%] sm:left-[78%] md:left-[190px] top-[100%] mt-[-6px] w-28 sm:w-40 md:w-56"
                    />
                  </h2>
                </div>
                    {videoSrc === "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Aws/aws_video.mp4" ? 
                    (<div className="space-y-6">
                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon1.svg"
                    question="What exactly do I receive after purchase?"
                    answer="An official AWS exam voucher code, delivered digitally via email in 24 hours."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon2.svg"
                    question="What is the exam format?"
                    answer="65 questions (50 scored, 15 unscored), 90 minutes, multiple-choice and multiple-response. Scored on a scale of 100–1,000; passing score is 700."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon3.svg"
                    question="Are there any prerequisites?"
                    answer="None formally required, though AWS recommends basic IT/cloud familiarity or completing AWS Cloud Practitioner Essentials."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon4.svg"
                    question="How long is the certification valid?"
                    answer="3 years from the date you pass."
                  />
                </div>) : 
                    (<div className="space-y-6">
                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon1.svg"
                    question="I have purchased the exam voucher. What's next?"
                    answer="You'll receive an email within 24 hours from our support team asking for your preferred exam date and time. Just reply with your choice, and your exam will be scheduled accordingly."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon2.svg"
                    question="How will my exam be conducted?"
                    answer="Your exam will be conducted online. You can take it from your home, office, college, or school — all you need is a computer with the required software and a stable internet connection."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon3.svg"
                    question="What are the available slots and days for the exam?"
                    answer="Exam slots are available from Monday to Saturday, between 11:00 AM and 5:00 PM. You can choose a time that best fits your schedule while booking."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon4.svg"
                    question="What are the passing marks for the exam?"
                    answer="You need to score 700 out of 1000 to pass the exam and receive your certificate."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon5.svg"
                    question="When will I receive my certificate?"
                    answer="Once you pass the exam, your certificate will be generated instantly. You can download it by logging into your account and going to the My Transcript section."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon6.svg"
                    question="Can I take the exam if I fail?"
                    answer="The exam voucher includes only one attempt. If you don't pass, you'll need to purchase a new voucher to retake the exam."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon7.svg"
                    question="What is the validity period of the exam voucher?"
                    answer="You must schedule and take the exam within 3 months from the date of purchase."
                  />

                  <Faqs
                    icon="https://etrain.blr1.cdn.digitaloceanspaces.com/Icon/faqicon8.svg"
                    question="Can I reschedule or cancel my exam once booked?"
                    answer="Yes, you can — but you must inform us at least 24 hours in advance."
                  />
                </div>)}
              </div>
            </div>

            {/* Right Section (Video) */}
            <div className="w-full lg:w-2/5 relative md:block">
              <div className="lg:sticky lg:top-30">
                <div className="bg-white overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl card">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className="w-full max-w-[500px] rounded-xl"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
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

export default ExamVoucher;