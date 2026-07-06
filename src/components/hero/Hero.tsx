import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroButton from "./HeroButton";
import HeroStats from "./HeroStats";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F6FA] min-h-screen">
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[860px] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">

        <HeroBadge />

        <div className="mt-8">
          <HeroHeading />
        </div>

        <div className="mt-2 mb-12">
          <HeroButton />
        </div>

        <HeroStats />

      </div>
    </section>
  );
};

export default Hero;