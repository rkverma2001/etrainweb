import useCounter from "../../hooks/useCounter";

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  format: "plain" | "million";
}

const AnimatedCounter = ({ target, suffix, format }: AnimatedCounterProps) => {
  const value = useCounter(target, format, suffix);

  return (
    <span className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-none text-[#1A1D24]">
      {value}
    </span>
  );
};

export default AnimatedCounter;
