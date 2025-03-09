export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors?: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
    {
      year: "2024",
      conference: "IEEE",
      title: "Cognitive Radio Networks: An AI-Based Approach",
      // authors: "Gautam Solaimalai",
      paperUrl: "https://ieeexplore.ieee.org/document/10568748",
      codeUrl: "",
      tldr: "Exploring AI integration in network optimizations.",
      // imageUrl: "/images/cognitive-radio-networks.jpg",
    },
    {
      year: "2024",
      conference: "IEEE",
      title: "Deep Reinforcement Learning for Autonomous Drone Navigation in Cluttered Environments",
      // authors: "Gautam Solaimalai",
      paperUrl: "https://ieeexplore.ieee.org/document/10602151",
      codeUrl: "",
      tldr: "Contributing to advancements in drone navigation using AI.",
      // imageUrl: "/images/drone-navigation.jpg",
    },
    {
      year: "2024",
      conference: "AIP Conference Proceedings",
      title: "Theoretical Optimization of Group Size in Group Normalization for Enhanced Deep Neural Network Training",
      // authors: "Gautam Solaimalai",
      paperUrl: "https://doi.org/10.1063/5.0232854",
      codeUrl: "",
      tldr: "Optimizing deep learning model training through group normalization techniques.",
      // imageUrl: "/images/dnn-training.jpg",
    },
    {
      year: "2024",
      conference: "IEEE",
      title: "Natural Language Processing in Virtual Assistants: Current Approaches and Challenges",
      // authors: "Gautam Solaimalai",
      paperUrl: "https://ieeexplore.ieee.org/document/10560644",
      codeUrl: "",
      tldr: "Analyzing challenges and advancements in NLP for virtual assistants.",
      // imageUrl: "/images/nlp-virtual-assistants.jpg",
    },
    {
      year: "2023",
      conference: "IEEE",
      title: "Deep Learning Method to Analyze the Bi-LSTM Model for Energy Consumption Forecasting in Smart Cities",
      // authors: "Gautam Solaimalai",
      paperUrl: "https://ieeexplore.ieee.org/document/10370467",
      codeUrl: "",
      tldr: "Using deep learning for predictive energy management in smart cities.",
      // imageUrl: "/images/smart-city-energy.jpg",
    },
  ]; 
