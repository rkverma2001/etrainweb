import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CertCardProps {
  name: string;
  logo: string;
  company: string;
  slug?: string;
}

const CertCard: React.FC<CertCardProps> = ({ name, logo, company, slug }) => {
  return (
    <Link to={`${slug}`} className="block h-full">
      <Card className="w-full h-full max-w-xl p-5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] items-center">
        <div className="flex items-center gap-4 sm:gap-6 w-full">
          <div className="w-14 sm:w-16 shrink-0">
            <img src={logo} alt={name} className="w-full h-12 sm:h-14 object-contain" />
          </div>
          <div className="flex-1 min-w-0 flex flex-col items-start">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CertCard;
