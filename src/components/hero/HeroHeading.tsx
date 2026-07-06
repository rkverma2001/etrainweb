import Typewriter from "./Typewriter";

const HeroHeading = () => {
  return (
    <>
      <h1 className="mb-1 text-[30px] font-light leading-tight text-[#454B5A] sm:text-[40px] md:text-[52px] lg:text-[58px]">
        Certifications built for
      </h1>

      <Typewriter />

      <p className="mx-auto mb-10 max-w-[560px] px-2 text-lg italic leading-8 text-[#454B5A]">
        Learn, Practice and Certify — your complete career journey with
        EtrainIndia.
      </p>
    </>
  );
};

export default HeroHeading;
