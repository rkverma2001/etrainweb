import CertCard from "./CertCard";
import certifications from "@/data/certifications.json";

const Certifications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {certifications.map((cert, index) => (
        <CertCard key={index} name={cert.name} logo={cert.logo}  company={cert.company} slug={cert.slug} />
      ))}
    </div>
  );
};

export default Certifications;
