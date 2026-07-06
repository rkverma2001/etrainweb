import { useEffect, useState } from "react";

export default function useTypewriter(words: string[]) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex];

      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));

        if (charIndex === word.length) {
          timer = setTimeout(() => {
            deleting = true;
            tick();
          }, 1400);
          return;
        }

        timer = setTimeout(tick, 80);
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(tick, 300);
          return;
        }

        timer = setTimeout(tick, 40);
      }
    };

    tick();

    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
