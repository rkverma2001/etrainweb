import { GoDownload } from "react-icons/go";

interface DownloadButtonProps {
  link: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({link}) => {

    const handleDownload = () => {
    // open the file in a new tab or start download
    window.open(link, "_blank");
  };


  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 cursor-pointer"
      style={{ backgroundColor: '#0b8642' }}
    >
      <GoDownload className="w-4 h-4 font-light" />
      <p className="font-extralight">
        
        Exam Objectives
        </p>
    </button>
  );
};

export default DownloadButton;
