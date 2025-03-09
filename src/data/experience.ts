export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep 2022 – Present",
    title: "Vice President | Software Engineering Manager",
    company: "U.S. Bancorp",
    description:
      "Leading cross-functional teams across three time zones, optimizing software development and delivery. Spearheaded microservices architecture using Spring Boot, NodeJS, and Apache Kafka, reducing incidents by 20% through Sentry and AppDynamics monitoring.",
    companyUrl: "https://www.usbank.com",
  },
  {
    date: "Jan 2022 – Sep 2022",
    title: "Software Engineering Manager",
    company: "OneTrust LLC",
    description:
      "Led development of a SaaS product serving 200,000+ users. Implemented Azure-based serverless solutions, cutting infrastructure costs by 25%, and improved system reliability through Sentry and AppDynamics integration.",
    companyUrl: "https://www.onetrust.com",
  },
  {
    date: "May 2020 – Jan 2022",
    title: "Sr. Advanced Engineer / Solutions Architect",
    company: "Honeywell Intelligrated",
    description:
      "Spearheaded robotics and supply chain automation, onboarding 50+ clients. Designed a full-stack warehouse execution system using React, NodeJS, and Spring Boot. Mentored 5 direct and 10 indirect reports, achieving a 90% delivery ratio.",
    companyUrl: "https://www.honeywell.com",
  },
  {
    date: "Jun 2017 – May 2020",
    title: "Advanced Software Engineer / Development Lead",
    company: "Honeywell International",
    description:
      "Led development of Go Direct Flight Services, implementing microservices for real-time flight planning, improving efficiency by 30%. Conducted code reviews and mentored junior engineers to enhance code quality.",
    companyUrl: "https://www.honeywell.com",
  },
  {
    date: "Dec 2010 – Jun 2017",
    title: "Tech Lead",
    company: "Tata Consultancy Services (The Home Depot)",
    description:
      "Migrated legacy systems to cloud-based microservices, improving scalability. Developed solutions for inventory and point-of-sale systems, increasing operational efficiency. Optimized batch processing with Spring Batch, reducing processing time.",
    companyUrl: "https://www.tcs.com",
  },
];

