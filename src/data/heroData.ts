export interface HeroStat {
  target: number;
  suffix: string;
  format: "plain" | "million";
  circleFrom: string;
  iconBg: string;
  icon: string;
  label1: string;
  label2: string;
}

export const TYPE_WORDS = [
  "the job you want.",
  "real career growth.",
  "global recognition.",
  "faster promotions.",
];

export const HERO_STATS: HeroStat[] = [
  {
    target: 10,
    suffix: "+",
    format: "plain",
    circleFrom: "#E5E9F3",
    iconBg: "#D76E1B",
    icon: "★",
    label1: "Years of",
    label2: "Excellence",
  },
  {
    target: 600,
    suffix: "+",
    format: "plain",
    circleFrom: "#DFF4E7",
    iconBg: "#008338",
    icon: "▲",
    label1: "Certification",
    label2: "Partners",
  },
  {
    target: 1000000,
    suffix: "+",
    format: "million",
    circleFrom: "#E5E9F3",
    iconBg: "#21304D",
    icon: "✓",
    label1: "Learners",
    label2: "Certified",
  },
];
