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
    <Link to={`${slug}`}>
      <Card className="w-full max-w-xl p-5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] items-center">
        <div className="flex items-center gap-6 w-full">
          <div className="w-1/5">
            <img src={logo} alt={name} className="w-full h-20 object-contain" />
          </div>
          <div className="w-4/5 flex flex-col items-start">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CertCard;
