import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import CourseCard from "../components/courseCategory/CourseCard";

const BoaPage = () => {
  const [selected, setSelected] = useState("exam-vouchers");

  const options = [
    { label: "Artificial Intelligence", value: "exam-vouchers" },
    { label: "Full Stack Development", value: "practice-tests" },
    { label: "Data Science", value: "self-paced-course" },
  ];

  const courseData: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      duration: string;
      slug: string;
    }[]
  > = {
    "exam-vouchers": [
        {
        title: "AI Apps & Agents on Azure (AI-103)",
        description: "Microsoft AI Apps Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/azureaiappprod.svg",
        duration: "4,950",
        slug: "/rolebased/MCP-AIAPP-103",
      },
      {
        title: "AI Fundamentals",
        description: "IBM AI Fundamentals",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/aifundamentals.svg",
        duration: "2,999",
        slug: "/ibm/AI0101EN",
      },
      {
        title: "Agentic AI Systems (GH-600)",
        description: "Microsoft Agentic AI Systems Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/ghprod.svg",
        duration: "4,950",
        slug: "/rolebased/MCP-GH600-AGENTICAI-106",
      },
      {
        title: "Agile Methodologies",
        description: "IBM Agile Methodologies",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/Agile.svg",
        duration: "2,999",
        slug: "/ibm/AGILE101",
      },
      {
        title: "AWS Certified Cloud Practitioner",
        description: "AWS Cloud Practitioner Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Aws/awscloudpractitionerfoundation.svg",
        duration: "7,400",
        slug: "/rolebased/AWS-CLOUD-PRACTITIONER-101",
      },
      {
        title: "AWS Certified Solution Architect Associate ",
        description: "AWS Solution Architect Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Aws/awssolutionarchitectassociate.svg",
        duration: "8,499",
        slug: "/rolebased/AWS-SOLUTIONARCHITECT-102",
      },
      {
        title: "Azure Administrator (AZ-104)",
        description: "Microsoft Azure Administrator Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/azureadministrator.svg",
        duration: "4,950",
        slug: "/rolebased/MCP-AZUREADMINISTRATOR-102",
      },
      {
        title: "Azure Database Administrator (DP-300)",
        description: "Microsoft Azure Database Administrator Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/azuredbadministratorprod.svg",
        duration: "4,950",
        slug: "/rolebased/MCP-AZUREDBADMINISTRATOR-105",
      },
      {
        title: "Blockchain Foundation",
        description: "IBM Blockchain Foundation",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/blockchainfoundation.svg",
        duration: "2,999",
        slug: "/ibm/BC0101EN",
      },
      {
        title: "Cisco Certified Support Technician",
        description: "CCST Cybersecurity Bundle",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Cisco/1.svg",
        duration: "3,999",
        slug: "/CISCO-CYBERSECURITY-101",
      },
      {
        title: "Cisco Certified Support Technician",
        description: "CCST Networking Bundle",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Cisco/3.svg",
        duration: "3,999",
        slug: "/CISCO-NETWORKING-102",
      },
      {
        title: "Cloud Essentials",
        description: "IBM Cloud Essentials",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/cloudessentials.svg",
        duration: "2,999",
        slug: "/ibm/CL0101EN",
      },
      
      {
        title: "Critical Career Skills",
        description: "CCS Generative AI Foundations Bundle",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ccs/1.svg",
        duration: "3,999",
        slug: "/CCS-GENAI-101",
      },
      {
        title: "Cybersecurity Fundamentals",
        description: "IBM Cybersecurity Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/cybersecurityfundamentals.svg",
        duration: "2,999",
        slug: "/ibm/SC0101EN",
      },
      {
        title: "Data Analysis with Python",
        description: "IBM Data Analysis Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/dataanalysis.svg",
        duration: "2,999",
        slug: "/ibm/DA0101EN",
      },
      {
        title: "Data Science Methodology",
        description: "IBM Data Science Methodology",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/datasciencemethodology.svg",
        duration: "2,999",
        slug: "/ibm/DS0103EN",
      },
      {
        title: "Data Visualization",
        description: "IBM Data Visualization",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/datavisualization.svg",
        duration: "2,999",
        slug: "/ibm/CEDV1IN",
      },
      {
        title: "Deep Learning Fundamentals",
        description: "IBM Deep Learning Fundamentals",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/deeplearning.svg",
        duration: "2,999",
        slug: "/ibm/CEDL1IN",
      },
      {
        title: "Deep Learning with TensorFlow",
        description: "IBM Deep Learning with TensorFlow",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/deeplearning.svg",
        duration: "2,999",
        slug: "/ibm/DL0101EN",
      },
      {
        title: "DevOps Fundamentals",
        description: "IBM DevOps Fundamentals",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/devops.svg",
        duration: "2,999",
        slug: "/ibm/CEDEV1IN",
      },
      {
        title: "Docker & Kubernetes",
        description: "IBM Docker & Kubernetes",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/dockersandkubernetes.svg",
        duration: "2,999",
        slug: "/ibm/CEDOCK1IN",
      },
      {
        title: "Gen AI for Business",
        description: "IBM Gen AI for Business",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/genaibusiness.svg",
        duration: "2,999",
        slug: "/ibm/GENAI201",
      },
      {
        title: "Generative AI Essentials",
        description: "IBM Gen AI Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/genaiessentials.svg",
        duration: "2,999",
        slug: "/ibm/GENAI101",
      },
      {
        title: "IBM Cloud Fundamental",
        description: "IBM Cloud Fundamental",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/ibmcloud.svg",
        duration: "2,999",
        slug: "/ibm/CEIBMCL1IN",
      },
      {
        title: "Identity & Access Management",
        description: "IBM Identity & Access Management",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/identityandaccess.svg",
        duration: "2,999",
        slug: "/ibm/CEIAM1IN",
      },
      {
        title: "Internet of Things",
        description: "IBM IoT Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/internetofthings.svg",
        duration: "2,999",
        slug: "/ibm/IOT0101EN",
      },
      {
        title: "Introduction to Big Data, Hadoop",
        description: "IBM Introduction to Big Data, Hadoop",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/bigdatahadoop.svg",
        duration: "2,999",
        slug: "/ibm/CEBDH1IN",
      },
      {
        title: "Introduction to Containers, Kubernetes",
        description: "IBM Cloud Fundamental",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/dockersandkubernetes.svg",
        duration: "2,999",
        slug: "/ibm/CN0101EN",
      },
      {
        title: "Java Fundamentals",
        description: "IBM Java Fundamentals",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/java.svg",
        duration: "2,999",
        slug: "/ibm/CEJAVA1IN",
      },
      {
        title: "JavaScript",
        description: "IBM JavaScript",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/javascript.svg",
        duration: "2,999",
        slug: "/ibm/CEJS1IN",
      },
      {
        title: "Machine Learning",
        description: "IBM Machine Learning",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/machinelearning.svg",
        duration: "2,999",
        slug: "/ibm/ML0101EN",
      },
      {
        title: "Meta Certified Digital Marketing Associate",
        description: "Meta Digital Marketing Exam Voucher",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Meta/2.svg",
        duration: "2,499",
        slug: "/META-DIGITALMARKETING-101?tab=exam-vouchers",
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft 365 Copilot and Agent (AB-900) Bundle",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Mcf/ab900bundle.svg",
        duration: "3,999",
        slug: "/MCF-365AB-900-106"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure AI Fundamentals (AI-901) Bundle",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Mcf/27.svg",
        duration: "3,999",
        slug: "/MCF-AZUREAIFUNDAMENTALS-103"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Azure Fundamentals (AZ-900) Bundle",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Mcf/25.svg",
        duration: "3,999",
        slug: "/MCF-AZUREFUNDAMENTALS-101"
      },
      {
        title: "Microsoft Certified Fundamentals",
        description: "Microsoft Power Platform Fundamentals (PL-900) Bundle",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Mcf/29.svg",
        duration: "3,999",
        slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105"
      },
      {
        title: "NodeJs",
        description: "IBM NodeJs",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/nodejs.svg",
        duration: "2,999",
        slug: "/ibm/CENJS1IN",
      },
      {
        title: "No SQL - MongoDB",
        description: "IBM No SQL - MongoDB",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/nosqlmongodb.svg",
        duration: "2,999",
        slug: "/ibm/CEMDB1IN",
      },
      {
        title: "NoSQL and DBaaS 101",
        description: "IBM NoSQL and DBaaS 101",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/nosqldbass101.svg",
        duration: "2,999",
        slug: "/ibm/CENOSQL1IN",
      },
      
      {
        title: "PMI Project Management",
        description: "Project Management Bundle",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Pmi/1.svg",
        duration: "3,999",
        slug: "/PMI-PROJECTMANAGEMENTREADY-101",
      },
      {
        title: "Power BI Data Analyst (PL-300)",
        description: "Microsoft Power BI Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Rolebased/powerbi.svg",
        duration: "5,740",
        slug: "/rolebased/MCP-POWERBI-101",  
      },
      {
        title: "Python for Data Science",
        description: "IBM Data Science Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/pythonfordatascience.svg",
        duration: "2,999",
        slug: "/ibm/PY0101EN",
      },
      {
        title: "Python Programming",
        description: "IBM Python Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/pythonprogramming.svg",
        duration: "2,999",
        slug: "/ibm/CEPYT1IN",
      },
      {
        title: "RDBMS - Database Fundamentals",
        description: "IBM RDBMS - Database Fundamentals",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/rdbms.svg",
        duration: "2,999",
        slug: "/ibm/CERDB1IN",
      },
      {
        title: "REST API",
        description: "IBM REST API",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/restapi.svg",
        duration: "2,999",
        slug: "/ibm/CEREST1IN",
      },
      {
        title: "Scala 101",
        description: "IBM Scala 101",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/scala.svg",
        duration: "2,999",
        slug: "/ibm/SCALA101",
      },
      {
        title: "Simplifying Data Pipelines",
        description: "IBM Simplifying Data Pipelines",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/apache%20kafka.svg",
        duration: "2,999",
        slug: "/ibm/CEKAFKA1IN",
      },
      
      {
        title: "Software Foundation Course - C",
        description: "IBM Software Foundation Course - C",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/C.svg",
        duration: "2,999",
        slug: "/ibm/CEC1IN",
      },
      {
        title: "Software Foundation Course - C++",
        description: "IBM Software Foundation Course - C++",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/C++.svg",
        duration: "2,999",
        slug: "/ibm/CECPP1IN",
      },
      {
        title: "Spark & Scala Fundamentals",
        description: "IBM Spark & Scala Fundamentals",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/sparkandscala.svg",
        duration: "2,999",
        slug: "/ibm/CESPS1IN",
      },
      {
        title: "Spring Framework",
        description: "IBM Spring Framework",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/spring.svg",
        duration: "2,999",
        slug: "/ibm/CESPR1IN",
      },
      {
        title: "SQL and Relational DB 101",
        description: "IBM SQL and Relational DB 101",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/sqlandrdbms.svg",
        duration: "2,999",
        slug: "/ibm/DB0101EN",
      },
      {
        title: "Web Development using HTML",
        description: "IBM Web Development using HTML",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/webdevelopment.svg",
        duration: "2,999",
        slug: "/ibm/CEHTML1IN",
      },
    ],
  };

  return (
    <div className="relative">
      <Navbar />

      <div className="w-full mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Main Content */}
          <main className="w-full flex flex-col">
            {/* Dynamic Heading */}
            <div className="shrink-0">
              <h1 className="text-2xl sm:text-3xl text-center mb-2 font-semibold flex items-center justify-center">
                BOA
              </h1>

              <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
                Advance Your Career with Certifications from the World's Leading Technology Providers.
              </p>
            </div>

            {/* Scrollable Grid */}
            <div className="flex-1 pr-1 sm:pr-2">
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
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default BoaPage;
