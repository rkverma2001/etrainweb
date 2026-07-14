import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { CheckCircle2 } from "lucide-react";

const Mcp = () => {
  const [selected, setSelected] = useState("exam-vouchers");

  const courseData: Record<
    string,
    { title: string; description: string; image: string; duration: string; slug: string }[]
  > = {
    "exam-vouchers": [
      {
        title: "Power BI (PL-300)",
        description: "Microsoft Power BI Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/powerbi.svg",
        duration: "5,740",
        slug: "/rolebased/MCP-POWERBI-101",  
      },
      {
        title: "Azure Administrator (AZ-104)",
        description: "Microsoft Azure Administrator Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/azureadministrator.svg",
        duration: "4,950",
        slug: "/rolebased/MCP-AZUREADMINISTRATOR-102",
      },
      {
        title: "AI Apps & Agents on Azure (AI-103)",
        description: "Microsoft AI Apps Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/azureaiappprod.svg",
        duration: "4,950",
        slug: "/rolebased/MCP-AIAPP-103",
      },
      {
        title: "Cybersecurity Architect (SC-100)",
        description: "Microsoft Cybersecurity Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/cybersecurityarchitect.svg",
        duration: "4,950",
        slug: "/rolebased/MCP-CYBERSECURITYARCHITECT-104",
      },
      {
        title: "Azure Database Administrator (DP-300)",
        description: "Microsoft Azure Database Administrator Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/azuredbadministratorprod.svg",
        duration: "4,950",
        slug: "/rolebased/MCP-AZUREDBADMINISTRATOR-105",
      },
    ],

  };

  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from Microsoft.",
    "Enhance your career prospects during interviews, internships, or performance evaluations.",
    "Gain hands-on, industry-aligned skills through Microsoft Certification.",
  ];

  return (
    <div className="relative">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2">
              <img
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/Microsoft.svg"
                className="mb-4 sm:mb-5 h-12 sm:h-14 md:h-16 object-contain"
                alt="Microsoft Logo"
              />

              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
  <p>
    The{" "}
    <span className="font-semibold">
      Microsoft Certified Professional (MCP) Program
    </span>{" "}
    empowers learners to validate their expertise across Microsoft’s
    industry-leading technologies, including Azure Cloud, Artificial
    Intelligence, Data Analytics, Power BI, Cybersecurity, Microsoft 365, Data
    Engineering, and Modern Application Development. Earning a Microsoft
    certification demonstrates practical, job-ready skills that are globally
    recognized by employers and technology leaders.
  </p>

  <p className="mt-3 sm:mt-4">
    EtrainIndia provides a comprehensive preparation pathway for Microsoft
    certifications, helping learners progress from foundational concepts to
    advanced professional certifications. With expert-designed learning
    resources, hands-on labs, real-world projects, practice assessments, and
    official Microsoft exam vouchers.
  </p>
</div>
            </div>

            {/* Right Video Section */}
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-video border-2 rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/videos/mcf.mp4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
  {/* Layout */}
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

    {/* Main Content */}
    <main className="w-full flex flex-col">
      {/* Dynamic Heading */}
      <div className="shrink-0">
            <h1 className="text-xl sm:text-2xl text-center mb-2 font-semibold flex items-center justify-center">
              <img
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/Microsoft.svg"
                alt="Microsoft Logo"
                className="h-10 sm:h-12 md:h-14 object-contain"
              />
            </h1>

            <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
              Official Microsoft Certification Courses designed to help learners
              develop in-demand technical skills and earn globally recognized
              credentials.
            </p>
      </div>

      {/* Scrollable Grid */}
      <div className="flex-1 lg:max-h-[70vh] overflow-y-auto pr-1 sm:pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {courseData[selected]?.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              price={course.duration}
              description={course.description}
              slug={course.slug || ""}
            />
          ))}
        </div>
      </div>
    </main>
  </div>
</div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="flex flex-col md:flex-row items-center gap-10">
    {/* Left Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8 leading-tight">
          Get Industry-Recognized Certifications from Microsoft
        </h2>

        <ul className="space-y-4 text-gray-700 text-base">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center mt-1 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/azuredbadministratorcertificate.svg"
        alt="Microsoft Certificate"
        className="w-full max-w-[600px] max-h-[500px] object-contain rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>
      <div className="mt-24 mb-[-40px]">
        <Footer />
      </div>
    </div>
  );
};

export default Mcp;
