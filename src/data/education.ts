export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2025—Present",
    institution: "University of Texas, Austin",
    degree: "Post Graduate Program in Artificial Intelligence and Machine Learning: Business Applications",
  },
  {
    year: "2021—2022",
    institution: "Massachusetts Institute of Technology",
    degree: "Data Science and Machine Learning: Making Data-Driven Decisions",
    thesisUrl: "https://www.mygreatlearning.com/certificate/OUBJXWLQ",
  },
  {
    year: "2006—2010",
    institution: "Anna University",
    degree: "B.E. Electronics & Communication Engineering",
  },
];
