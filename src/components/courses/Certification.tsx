import CertCard from "./CertCard";
import certifications from "@/data/certifications.json";

const Certifications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
      {certifications.map((cert, index) => (
        <CertCard key={index} name={cert.name} logo={cert.logo}  company={cert.company} slug={cert.slug} />
      ))}
    </div>
  );
};

export default Certifications;
