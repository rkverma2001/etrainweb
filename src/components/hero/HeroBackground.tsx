import React from "react";

const HeroBackground = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="trailOrange"
          gradientUnits="userSpaceOnUse"
          x1="300"
          y1="90"
          x2="140"
          y2="230"
        >
          <stop offset="0%" stopColor="#D76E1B" stopOpacity="0" />
          <stop offset="100%" stopColor="#D76E1B" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient
          id="trailGreen"
          gradientUnits="userSpaceOnUse"
          x1="300"
          y1="700"
          x2="140"
          y2="560"
        >
          <stop offset="0%" stopColor="#008338" stopOpacity="0" />
          <stop offset="100%" stopColor="#008338" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient
          id="trailNavyR"
          gradientUnits="userSpaceOnUse"
          x1="900"
          y1="90"
          x2="1060"
          y2="230"
        >
          <stop offset="0%" stopColor="#2C4066" stopOpacity="0" />
          <stop offset="100%" stopColor="#2C4066" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient
          id="trailOrangeR"
          gradientUnits="userSpaceOnUse"
          x1="900"
          y1="700"
          x2="1060"
          y2="560"
        >
          <stop offset="0%" stopColor="#D76E1B" stopOpacity="0" />
          <stop offset="100%" stopColor="#D76E1B" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Vertical */}
      <line x1="0" y1="0" x2="0" y2="800" stroke="#E5E9F3" strokeWidth="1" />
      <line
        x1="1200"
        y1="0"
        x2="1200"
        y2="800"
        stroke="#E5E9F3"
        strokeWidth="1"
      />

      {/* Top */}
      <line
        x1="0"
        y1="90"
        x2="300"
        y2="90"
        stroke="#E5E9F3"
        strokeWidth="1"
      />
      <line
        x1="900"
        y1="90"
        x2="1200"
        y2="90"
        stroke="#E5E9F3"
        strokeWidth="1"
      />

      {/* Bottom */}
      <line
        x1="0"
        y1="700"
        x2="300"
        y2="700"
        stroke="#E5E9F3"
        strokeWidth="1"
      />
      <line
        x1="900"
        y1="700"
        x2="1200"
        y2="700"
        stroke="#E5E9F3"
        strokeWidth="1"
      />

      {/* Extra Top */}
      <line
        x1="0"
        y1="40"
        x2="220"
        y2="40"
        stroke="#E5E9F3"
        strokeWidth="1"
      />
      <line
        x1="980"
        y1="40"
        x2="1200"
        y2="40"
        stroke="#E5E9F3"
        strokeWidth="1"
      />

      {/* Extra Bottom */}
      <line
        x1="0"
        y1="760"
        x2="220"
        y2="760"
        stroke="#E5E9F3"
        strokeWidth="1"
      />
      <line
        x1="980"
        y1="760"
        x2="1200"
        y2="760"
        stroke="#E5E9F3"
        strokeWidth="1"
      />

      {/* Small Vertical */}
      <line
        x1="60"
        y1="0"
        x2="60"
        y2="60"
        stroke="#E5E9F3"
        strokeWidth="1"
      />
      <line
        x1="1140"
        y1="0"
        x2="1140"
        y2="60"
        stroke="#E5E9F3"
        strokeWidth="1"
      />
      <line
        x1="60"
        y1="740"
        x2="60"
        y2="800"
        stroke="#E5E9F3"
        strokeWidth="1"
      />
      <line
        x1="1140"
        y1="740"
        x2="1140"
        y2="800"
        stroke="#E5E9F3"
        strokeWidth="1"
      />

      {/* Corner Arcs */}
      <path
        d="M 0 90 A 140 140 0 0 1 140 230"
        stroke="#DCE2ED"
        strokeWidth="1"
      />
      <path
        d="M 1200 90 A 140 140 0 0 0 1060 230"
        stroke="#DCE2ED"
        strokeWidth="1"
      />
      <path
        d="M 0 700 A 140 140 0 0 0 140 560"
        stroke="#DCE2ED"
        strokeWidth="1"
      />
      <path
        d="M 1200 700 A 140 140 0 0 1 1060 560"
        stroke="#DCE2ED"
        strokeWidth="1"
      />

      {/* Large Arcs */}
      <path
        d="M 0 40 A 190 190 0 0 1 190 230"
        stroke="#DCE2ED"
        strokeWidth="1"
      />
      <path
        d="M 1200 40 A 190 190 0 0 0 1010 230"
        stroke="#DCE2ED"
        strokeWidth="1"
      />
      <path
        d="M 0 760 A 190 190 0 0 0 190 570"
        stroke="#DCE2ED"
        strokeWidth="1"
      />
      <path
        d="M 1200 760 A 190 190 0 0 1 1010 570"
        stroke="#DCE2ED"
        strokeWidth="1"
      />

      {/* Orange Trail */}
      <path
        d="M 300 90 L 0 90 A 140 140 0 0 1 140 230"
        stroke="url(#trailOrange)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        pathLength={1}
        strokeDasharray="0.24 1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="-0.24"
          dur="4.3s"
          begin="0.2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Navy Trail */}
      <path
        d="M 900 90 L 1200 90 A 140 140 0 0 0 1060 230"
        stroke="url(#trailNavyR)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        pathLength={1}
        strokeDasharray="0.24 1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="-0.24"
          dur="5.6s"
          begin="1.1s"
          repeatCount="indefinite"
        />
      </path>

      {/* Green Trail */}
      <path
        d="M 300 700 L 0 700 A 140 140 0 0 0 140 560"
        stroke="url(#trailGreen)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        pathLength={1}
        strokeDasharray="0.24 1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="-0.24"
          dur="6.4s"
          begin="0.7s"
          repeatCount="indefinite"
        />
      </path>

      {/* Orange Right Trail */}
      <path
        d="M 900 700 L 1200 700 A 140 140 0 0 1 1060 560"
        stroke="url(#trailOrangeR)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        pathLength={1}
        strokeDasharray="0.24 1"
        strokeDashoffset="1"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="1"
          to="-0.24"
          dur="7.2s"
          begin="2.4s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default HeroBackground;