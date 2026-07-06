import AnimatedCounter from "./AnimatedCounter";
import { HERO_STATS } from "../../data/heroData";

const HeroStats = () => {
  return (
    <div className="flex flex-wrap justify-center gap-x-14 gap-y-8 pb-12">
      {HERO_STATS.map((stat) => (
        <div
          key={stat.label1}
          className="flex items-center gap-4"
        >
          <div className="relative w-[82px] h-[82px] shrink-0">
            <div
              className="w-[82px] h-[82px] rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${stat.circleFrom} 0%, #fff 100%)`,
              }}
            >
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                format={stat.format}
              />
            </div>

            <div
              className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs shadow-lg"
              style={{
                background: stat.iconBg,
              }}
            >
              {stat.icon}
            </div>
          </div>

          <div className="text-left text-base leading-5 font-medium text-[#1A1D24]">
            <div>{stat.label1}</div>
            <div>{stat.label2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;