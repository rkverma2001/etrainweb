const logos = [
  "Adobe.svg",
  "AgriscienceCareers.svg",
  "Apple.svg",
  "Autodesk.svg",
  "AWS.svg",
  "Cisco.svg",
  "CriticalCareer.svg",
  "EntrepreneurshipSmall.svg",
  "HCLTech.svg",
  "HealthScienceCareers.svg",
  "HospitalityCulinary.svg",
  "IBM.svg",
  "IC3.svg",
  "Intuit.svg",
  "ITSpecialist.svg",
  "Meta.svg",
  "Microsoft.svg",
  "Pearson.svg",
  "PMI.svg",
  "Tally.svg",
  "Unity.svg",
];

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden py-8">

      <div className="flex items-center justify-center mb-10">
      <p className="mb-6 text-center text-2xl font-semibold uppercase tracking-[0.25em] text-slate-500">
              Get certified by world&apos;s leading IT companies
            </p>
</div>
      <div className="w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={`https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/${logo}`}
              alt={logo}
              className="h-16 mx-[18px] inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
