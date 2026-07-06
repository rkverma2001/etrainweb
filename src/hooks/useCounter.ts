import { useEffect, useState } from "react";

export default function useCounter(
  target: number,
  format: "plain" | "million",
  suffix: string,
) {
  const [value, setValue] = useState("0");

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();

    const animate = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);

      const current = target * eased;

      if (format === "million") {
        const millions = current / 1000000;

        setValue(`${millions.toFixed(millions >= 1 ? 0 : 1)}M${suffix}`);
      } else {
        setValue(`${Math.round(current).toLocaleString("en-IN")}${suffix}`);
      }

      if (t < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target, format, suffix]);

  return value;
}
