export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Gautam Solaimalai",
  title: "Vice President | Engineering | Independent Researcher",
  institution: "US Bancorp",
  description:
    "I'm a Vice President and Software Engineering Manager with over 14 years of experience in enterprise software, cloud computing, and AI-driven solutions. My work focuses on building scalable, high-performance systems that leverage AI, IoT, and sustainable technologies to drive innovation in modern applications.",
  email: "gautam.solaimalai@ieee.org",
  googleScholarUrl: "https://scholar.google.com/citations?user=JLXhnKcAAAAJ&hl=en",
  githubUsername: "soltam",
  linkedinUsername: "gautam-solaimalai",
  twitterUsername: "GautamSolaimal2",
  institutionUrl: "https://www.usbank.com/index.html"
};
