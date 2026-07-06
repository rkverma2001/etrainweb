import useTypewriter from "../../hooks/useTypewriter";
import { TYPE_WORDS } from "../../data/heroData";

const Typewriter = () => {
  const text = useTypewriter(TYPE_WORDS);

  return (
    <h1 className="m-0 mb-3 text-[36px] font-bold italic leading-[1.1] tracking-[-0.015em] sm:text-[48px] md:text-[60px] lg:text-[68px]">
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(90deg,#008338 0%,#0C6631 45%,#21304D 100%)",
        }}
      >
        {text}
      </span>

      <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-pulse bg-green-600 align-[-0.1em]" />
    </h1>
  );
};

export default Typewriter;