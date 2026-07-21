const courseData = [
  {
    categoryName: "Microsoft Certified Fundamentals",
    categorySlug: "/mcf",
    courses: [
      { name: "Azure Fundamentals (AZ-900)", slug: "/MCF-AZUREFUNDAMENTALS-101" },
      { name: "Microsoft 365 Copilot and Agent Administration Fundamentals (AB-900)", slug: "/MCF-365AB-900-106" },
      { name: "Azure AI Fundamentals (AI-901)", slug: "/MCF-AZUREAIFUNDAMENTALS-103" },
      { name: "Azure Data Fundamentals (DP-900)", slug: "/MCF-AZUREDATAFUNDAMENTALS-104" },
      { name: "Power Platform Fundamentals (PL-900)", slug: "/MCF-POWERPLATFORMFUNDAMENTALS-105" },
      { name: "Security Compliance (SC-900)", slug: "/MCF-SECURITYCOMPLIANCE-108" },
    ],
  },
  {
    categoryName: "Microsoft Office Specialist",
    categorySlug: "/mos",
    courses: [
      { name: "Excel Expert", slug: "/MOS-EXCELEXPERT-101" },
      { name: "Word Expert", slug: "/MOS-WORDEXPERT-102" },
      { name: "PowerPoint Associate", slug: "/MOS-POWERPOINT-103" },
      { name: "Excel Associate", slug: "/MOS-EXCEL-104" },
      { name: "Word Associate", slug: "/MOS-WORD-105" }
    ],
  },
  {
    categoryName: "Microsoft Certified Professional - Role Based",
    categorySlug: "/mcp",
    courses: [
      { name: "Power BI (PL-300)", slug: "/rolebased/MCP-POWERBI-101" },
      {name: "Azure Administrator (AZ-104)", slug: "/rolebased/MCP-AZUREADMINISTRATOR-102" },
      {name: "AI Apps & Agents on Azure (AI-103)", slug: "/rolebased/MCP-AIAPP-103" },
      {name: "Cybersecurity Architect (SC-100)", slug: "/rolebased/MCP-CYBERSECURITYARCHITECT-104" },
      {name: "Azure Database Administrator (DP-300)", slug: "/rolebased/MCP-AZUREDBADMINISTRATOR-105" },
    ],
  },
  {
    categoryName: "AWS",
    categorySlug: "/aws",
    courses: [
      { name: "AWS Certified Cloud Practitioner", slug: "/rolebased/AWS-CLOUD-PRACTITIONER-101" },
      {name: "AWS Certified Solution Architect Associate", slug: "/rolebased/AWS-SOLUTIONARCHITECT-102" },
    ],
  },
  {
    categoryName: "Meta",
    categorySlug: "/META-DIGITALMARKETING-101",
    courses: [
      { name: "Digital Marketing Associate", slug: "/META-DIGITALMARKETING-101" },
    ],
  },
  {
    categoryName: "IBM",
    categorySlug: "/ibm",
    courses: [
      { name: "Python Programming", slug: "/ibm/CEPYT1IN" },
      { name: "Python for Data Science", slug: "/ibm/PY0101EN" },
      { name: "Generative AI Essentials", slug: "/ibm/GENAI101" },
      { name: "Data Analysis with Python", slug: "/ibm/DA0101EN" },
      { name: "Cybersecurity Fundamentals", slug: "/ibm/SC0101EN" },
      { name: "Internet of Things", slug: "/ibm/IOT0101EN" },
      { name: "Cloud Essentials", slug: "/ibm/CL0101EN" },
      { name: "Blockchain Foundation", slug: "/ibm/BC0101EN" },
      { name: "Artificial Intelligence Fundamentals", slug: "/ibm/AI0101EN" },
      { name: "Machine Learning using Python", slug: "/ibm/ML0101EN" },
      { name: "SQL and Relational Database 101", slug: "/ibm/DB0101EN" },
      { name: "Generative AI for Business and Professionals", slug: "/ibm/GENAI201" },
      { name: "Agile Methodologies", slug: "/ibm/AGILE101" },
      { name: "DevOps Fundamentals", slug: "/ibm/CEDEV1IN" },
      { name: "Introduction to Big Data, Hadoop and the Ecosystems", slug: "/ibm/CEBDH1IN" },
      { name: "Java Fundamentals", slug: "/ibm/CEJAVA1IN" },
      { name: "JavaScript", slug: "/ibm/CEJS1IN" },
      { name: "NodeJS", slug: "/ibm/CENJS1IN" },
      { name: "No SQL - MongoDB", slug: "/ibm/CEMDB1IN" },
      { name: "RDBMS - Database Fundamentals", slug: "/ibm/CERDB1IN" },
      { name: "REST API", slug: "/ibm/CEREST1IN" },
      { name: "Scala 101", slug: "/ibm/SCALA101" },
      { name: "Web Development using HTML", slug: "/ibm/CEHTML1IN" },
      { name: "IBM Cloud Fundamental", slug: "/ibm/CEIBMCL1IN" },
      { name: "Introduction to Containers, Kubernetes, and OpenShift V2", slug: "/ibm/CN0101EN" },
      { name: "Deep Learning with TensorFlow", slug: "/ibm/DL0101EN" },
      { name: "Data Science Methodology", slug: "/ibm/DS0103EN" },
      { name: "Spring Framework", slug: "/ibm/CESPR1IN" },
      { name: "Spark & Scala Fundamentals", slug: "/ibm/CESPS1IN" },
      { name: "Docker & Kubernetes", slug: "/ibm/CEDOCK1IN" },
      { name: "Data Visualization", slug: "/ibm/CEDV1IN" },
      { name: "Software Foundation Course - C", slug: "/ibm/CEC1IN" },
      { name: "Software Foundation Course - C++", slug: "/ibm/CECPP1IN" },
      { name: "Identity & Access Management", slug: "/ibm/CEIAM1IN" },
      { name: "Deep Learning Fundamentals", slug: "/ibm/CEDL1IN" },
      { name: "NoSQL and DBaaS 101", slug: "/ibm/CENOSQL1IN" },
      { name: "Simplifying Data Pipelines with Apache Kafka", slug: "/ibm/CEKAFKA1IN" },
    ],
  },
  {
    categoryName: "Cisco",
    categorySlug: "/cisco",
    courses: [
      { name: "CCST Cybersecurity", slug: "/CISCO-CYBERSECURITY-101" },
      { name: "CCST Networking", slug: "/CISCO-NETWORKING-102" },
      { name: "CCST IT Support", slug: "/CISCO-ITSUPPORT-103" },
    ],
  },
  {
    categoryName: "Adobe",
    categorySlug: "/adobe",
    courses: [
      { name: "After Effects", slug: "/ADOBE-AFTER-101" },
      { name: "Photoshop", slug: "/ADOBE-PHOTO-102" },
      { name: "Acrobat", slug: "/ADOBE-ACRO-103" },
      { name: "Premier", slug: "/ADOBE-PREMIER-104" },
      { name: "Animate", slug: "/ADOBE-ANIMATE-105" },
      { name: "Express", slug: "/ADOBE-EXPRESS-106" },
      { name: "Indesign", slug: "/ADOBE-INDESIGN-107" },
      { name: "Illustrator", slug: "/ADOBE-ILLUSTRATOR-108" },
      { name: "Dreamweaver", slug: "/ADOBE-DREAMWEAVER-109" },
      { name: "Firefly", slug: "/ADOBE-FIREFLY-110" },
    ],
  },
  {
    categoryName: "Autodesk",
    categorySlug: "/autodesk",
    courses: [
      { name: "Autocad", slug: "/AUTODESK-AUTOCAD-101" },
      { name: "Inventor", slug: "/AUTODESK-INVENTOR-102" },
      { name: "Fusion", slug: "/AUTODESK-FUSION-103" },
      { name: "3ds Max", slug: "/AUTODESK-3DSMAX-104" },
      { name: "Maya", slug: "/AUTODESK-MAYA-105" },
      { name: "Revit", slug: "/AUTODESK-REVIT-106" },
      { name: "Tinkercad 3D Design", slug: "/AUTODESK-TINKERCAD-107" }
    ],
  },
  {
    categoryName: "Apple",
    categorySlug: "/apple",
    courses: [
      { name: "Swift Certified User", slug: "/APPLE-SWIFT-CERTIFIED-101" },
      { name: "Swift Associate User", slug: "/APPLE-SWIFT-ASSOCIATE-102" }
    ],
  },
  {
    categoryName: "Critical Career Skills",
    categorySlug: "/criticalcareerskills",
    courses: [
      { name: "Generative AI Foundations", slug: "/CCS-GENAI-101" },
      { name: "Professional Communication", slug: "/CCS-PROFCOM-102" }
    ],
  },
  {
    categoryName: "IC3 Digital Literacy",
    categorySlug: "/ic3",
    courses: [
      { name: "Global Standard 6 Level 1", slug: "/IC3-GS1-101" },
      { name: "Global Standard 6 Level 2", slug: "/IC3-GS2-102" },
      { name: "Global Standard 6 Level 3", slug: "/IC3-GS3-103" },
      { name: "Spark", slug: "/IC3-SPARK-104" },
      { name: "PHP", slug: "/IC3-PHP-105" }
    ],
  },
  {
    categoryName: "IT Specialist",
    categorySlug: "/itspecialist",
    courses: [
      { name: "Artificial Intelligence", slug: "/ITS-AI-101" },
      { name: "Cloud Computing", slug: "/ITS-CLOUDCOMPUTING-102" },
      { name: "Computational Thinking", slug: "/ITS-COMPUTATIONALTHINKING-103" },
      { name: "Cybersecurity", slug: "/ITS-CYBERSECURITY-104" },
      { name: "Data Analytics", slug: "/ITS-DATAANALYTICS-105" },
      { name: "Databases", slug: "/ITS-DATABASES-106" },
      { name: "Device Configuration and Management", slug: "/ITS-DEVICECONFIG-107" },
      { name: "HTML and CSS", slug: "/ITS-HTMLCSS-108" },
      { name: "HTML 5 Application Development", slug: "/ITS-HTML5-109" },
      { name: "Java", slug: "/ITS-JAVA-110" },
      { name: "JavaScript", slug: "/ITS-JAVASCRIPT-111" },
      { name: "Networking", slug: "/ITS-NETWORKING-112" },
      { name: "Network Security", slug: "/ITS-NETWORKSECURITY-113" },
      { name: "Python", slug: "/ITS-PYTHON-114" },
      { name: "Software Development", slug: "/ITS-SOFTWAREDEVELOPMENT-115" },
    ],
  },
  {
    categoryName: "Intuit",
    categorySlug: "/intuit",
    courses: [
      { name: "QuickBooks Certified User Online", slug: "/INTUIT-QUICKBOOKS-101" },
      { name: "Bookkeeping Professional", slug: "/INTUIT-BOOKKEEPING-102" },
      { name: "Personal Finance", slug: "/INTUIT-PERSONALFINANCE-103" },
      { name: "Design Delight", slug: "/INTUIT-DESIGNDELIGHT-104" }
    ],
  },
  {
    categoryName: "Unity Certified User",
    categorySlug: "/unity",
    courses: [
      { name: "Programmer Certification", slug: "/UNITY-PROGRAMMER-101" },
      { name: "VR Developer Certification", slug: "/UNITY-VRDEVELOPER-102" },
      { name: "Artist Certification", slug: "/UNITY-ARTIST-103" }
    ],
  },
  {
    categoryName: "Tally",
    categorySlug: "/tally",
    courses: [
      { name: "Tally Essentials Level 1", slug: "/tally/TALLY-ESSENTIAL-L1-101" },
      { name: "Tally Essentials Level 2", slug: "/tally/TALLY-ESSENTIAL-L2-102" },
      { name: "Tally Essentials Level 3", slug: "/tally/TALLY-ESSENTIAL-L3-103" },
      { name: "Tally Comprehensive", slug: "/tally/TALLY-COMPREHENSIVE-101" },
    ],
  },
];

export default courseData;
