import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { CheckCircle2 } from "lucide-react";

const Ibm = () => {
  const [selected, setSelected] = useState("exam-vouchers");

  const options = [
    { label: "Artificial Intelligence", value: "exam-vouchers" },
    { label: "Full Stack Development", value: "practice-tests" },
    { label: "Data Science", value: "self-paced-course" },
  ];

  const courseData: Record<
    string,
    { title: string; description: string; image: string; duration: string; slug: string }[]
  > = {
    "exam-vouchers": [
      {
        title: "Python Programming",
        description: "IBM Python Certification",
        image:
          "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/pythonprogramming.svg",
        duration: "2,999",
        slug: "/ibm/CEPYT1IN",  
      },
      {
        title: "Python for Data Science",
        description: "IBM Data Science Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/pythonfordatascience.svg",
        duration: "2,999",
        slug: "/ibm/PY0101EN",
      },
      {
        title: "Generative AI Essentials",
        description: "IBM Gen AI Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/genaiessentials.svg",
        duration: "2,999",
        slug: "/ibm/GENAI101",
      },
      {
        title: "Data Analysis with Python",
        description: "IBM Data Analysis Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/dataanalysis.svg",
        duration: "2,999",
        slug: "/ibm/DA0101EN",
      },
      {
        title: "Cybersecurity Fundamentals",
        description: "IBM Cybersecurity Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/cybersecurityfundamentals.svg",
        duration: "2,999",
        slug: "/ibm/SC0101EN",
      },
      {
        title: "Internet of Things",
        description: "IBM IoT Certification",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/internetofthings.svg",
        duration: "2,999",
        slug: "/ibm/IOT0101EN",
      },
      {
        title: "Cloud Essentials",
        description: "IBM Cloud Essentials",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/cloudessentials.svg",
        duration: "2,999",
        slug: "/ibm/CL0101EN",
      },
      {
        title: "Blockchain Foundation",
        description: "IBM Blockchain Foundation",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/blockchainfoundation.svg",
        duration: "2,999",
        slug: "/ibm/BC0101EN",
      },
      {
        title: "AI Fundamentals",
        description: "IBM AI Fundamentals",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/aifundamentals.svg",
        duration: "2,999",
        slug: "/ibm/AI0101EN",
      },
      {
        title: "Machine Learning",
        description: "IBM Machine Learning",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/machinelearning.svg",
        duration: "2,999",
        slug: "/ibm/ML0101EN",
      },
      {
        title: "Machine Learning",
        description: "IBM Machine Learning",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/machinelearning.svg",
        duration: "2,999",
        slug: "/ibm/ML0101EN",
      },
      {
        title: "SQL and Relational DB 101",
        description: "IBM SQL and Relational DB 101",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/sqlandrdbms.svg",
        duration: "2,999",
        slug: "/ibm/DB0101EN",
      },
      {
        title: "Gen AI for Business",
        description: "IBM Gen AI for Business",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/genaibusiness.svg",
        duration: "2,999",
        slug: "/ibm/GENAI201",
      },
      {
        title: "Agile Methodologies",
        description: "IBM Agile Methodologies",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/Agile.svg",
        duration: "2,999",
        slug: "/ibm/AGILE101",
      },
      {
        title: "DevOps Fundamentals",
        description: "IBM DevOps Fundamentals",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/devops.svg",
        duration: "2,999",
        slug: "/ibm/CEDEV1IN",
      },
      {
        title: "Introduction to Big Data, Hadoop",
        description: "IBM Introduction to Big Data, Hadoop",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/bigdatahadoop.svg",
        duration: "2,999",
        slug: "/ibm/CEBDH1IN",
      },
      {
        title: "Introduction to Big Data, Hadoop",
        description: "IBM Introduction to Big Data, Hadoop",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/bigdatahadoop.svg",
        duration: "2,999",
        slug: "/ibm/CEBDH1IN",
      },
      {
        title: "Java Fundamentals",
        description: "IBM Java Fundamentals",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/java.svg",
        duration: "2,999",
        slug: "/ibm/CEJAVA1IN",
      },
      {
        title: "JavaScript",
        description: "IBM JavaScript",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/javascript.svg",
        duration: "2,999",
        slug: "/ibm/CEJS1IN",
      },
      {
        title: "NodeJs",
        description: "IBM NodeJs",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/nodejs.svg",
        duration: "2,999",
        slug: "/ibm/CENJS1IN",
      },
      {
        title: "No SQL - MongoDB",
        description: "IBM No SQL - MongoDB",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/nosqlmongodb.svg",
        duration: "2,999",
        slug: "/ibm/CEMDB1IN",
      },
      {
        title: "RDBMS - Database Fundamentals",
        description: "IBM RDBMS - Database Fundamentals",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/rdbms.svg",
        duration: "2,999",
        slug: "/ibm/CERDB1IN",
      },
      {
        title: "REST API",
        description: "IBM REST API",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/restapi.svg",
        duration: "2,999",
        slug: "/ibm/CEREST1IN",
      },
      {
        title: "Scala 101",
        description: "IBM Scala 101",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/scala.svg",
        duration: "2,999",
        slug: "/ibm/SCALA101",
      },
      {
        title: "Web Development using HTML",
        description: "IBM Web Development using HTML",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/webdevelopment.svg",
        duration: "2,999",
        slug: "/ibm/CEHTML1IN",
      },
      {
        title: "IBM Cloud Fundamental",
        description: "IBM Cloud Fundamental",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/ibmcloud.svg",
        duration: "2,999",
        slug: "/ibm/CEIBMCL1IN",
      },
      {
        title: "Introduction to Containers, Kubernetes",
        description: "IBM Cloud Fundamental",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/dockersandkubernetes.svg",
        duration: "2,999",
        slug: "/ibm/CN0101EN",
      },
      {
        title: "Deep Learning with TensorFlow",
        description: "IBM Deep Learning with TensorFlow",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/deeplearning.svg",
        duration: "2,999",
        slug: "/ibm/DL0101EN",
      },
      {
        title: "Data Science Methodology",
        description: "IBM Data Science Methodology",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/datasciencemethodology.svg",
        duration: "2,999",
        slug: "/ibm/DS0103EN",
      },
      {
        title: "Spring Framework",
        description: "IBM Spring Framework",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/spring.svg",
        duration: "2,999",
        slug: "/ibm/CESPR1IN",
      },
      {
        title: "Spark & Scala Fundamentals",
        description: "IBM Spark & Scala Fundamentals",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/sparkandscala.svg",
        duration: "2,999",
        slug: "/ibm/CESPS1IN",
      },
      {
        title: "Docker & Kubernetes",
        description: "IBM Docker & Kubernetes",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/dockersandkubernetes.svg",
        duration: "2,999",
        slug: "/ibm/CEDOCK1IN",
      },
      {
        title: "Data Visualization",
        description: "IBM Data Visualization",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/datavisualization.svg",
        duration: "2,999",
        slug: "/ibm/CEDV1IN",
      },
      {
        title: "Software Foundation Course - C",
        description: "IBM Software Foundation Course - C",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/C.svg",
        duration: "2,999",
        slug: "/ibm/CEC1IN",
      },
      {
        title: "Software Foundation Course - C++",
        description: "IBM Software Foundation Course - C++",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/C++.svg",
        duration: "2,999",
        slug: "/ibm/CECPP1IN",
      },
      {
        title: "Identity & Access Management",
        description: "IBM Identity & Access Management",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/identityandaccess.svg",
        duration: "2,999",
        slug: "/ibm/CEIAM1IN",
      },
      {
        title: "Deep Learning Fundamentals",
        description: "IBM Deep Learning Fundamentals",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/deeplearning.svg",
        duration: "2,999",
        slug: "/ibm/CEDL1IN",
      },
      {
        title: "NoSQL and DBaaS 101",
        description: "IBM NoSQL and DBaaS 101",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/nosqldbass101.svg",
        duration: "2,999",
        slug: "/ibm/CENOSQL1IN",
      },
      {
        title: "Simplifying Data Pipelines",
        description: "IBM Simplifying Data Pipelines",
        image: "https://etrain.blr1.cdn.digitaloceanspaces.com/ProductImages/Ibm/apache%20kafka.svg",
        duration: "2,999",
        slug: "/ibm/CEKAFKA1IN",
      },
    ],

  };

  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from IBM.",
    "Enhance your career prospects during interviews, internships, or performance evaluations.",
    "Gain hands-on, industry-aligned skills through IBM Certification courses powered by IBM Developer Skills Network.",
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
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/IBM.svg"
                className="mb-4 sm:mb-5 h-12 sm:h-14 md:h-16 object-contain"
                alt="IBM Logo"
              />

              <div className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  The{" "}
                  <span className="font-semibold">
                    IBM Certification Program
                  </span>{" "}
                  empowers learners to validate their expertise in emerging
                  technologies such as Artificial Intelligence, Data Science,
                  Cloud Computing, Cybersecurity, and more. Earning an IBM
                  certification demonstrates industry-relevant skills that are
                  recognized and respected by employers worldwide. These
                  credentials showcase a learner’s ability to apply advanced IBM
                  tools and technologies to solve real-world business
                  challenges—a powerful advantage in today’s digital economy.
                </p>

                <p className="mt-3 sm:mt-4">
                  EtrainIndia offers a complete preparation pathway for IBM
                  certifications, guiding learners from foundational concepts to
                  exam readiness. With expert-curated learning materials,
                  hands-on projects, practice assessments, and access to
                  official IBM-endorsed exams, EtrainIndia ensures that every
                  student gains the confidence and skills to excel in the
                  rapidly evolving tech industry.
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
                  src="https://etrain.blr1.cdn.digitaloceanspaces.com/videos/ibm_video.mp4"
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
                src="https://etrain.blr1.cdn.digitaloceanspaces.com/Logos/IBM.svg"
                alt="IBM Logo"
                className="h-10 sm:h-12 md:h-14 object-contain"
              />
            </h1>

            <p className="text-center text-sm sm:text-base mb-6 sm:mb-8">
              Official IBM Certification Courses designed to help learners
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
          Get Industry-Recognized Certifications from IBM
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
        src="https://etrain.blr1.cdn.digitaloceanspaces.com/Ibm_Certificate/python_certificate.jpg"
        alt="Apple Certificate"
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

export default Ibm;
