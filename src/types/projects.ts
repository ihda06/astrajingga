export type Work = {
  id: number;
  title: string;
  description: string;
  stacks: Stack[];
  image: string;
  achievements?: string[];
  short_description?: string;
  type: "Internship" | "Fulltime" | "Freelance" | "Project";
  location?: string;
  position?: string;
  responsibilities?: string[];
  skills?: string[];
  link?: {
    liveLink?: string;
    githubLink?: string | null;
  };
  company?: {
    name: string;
    link?: string;
  };
  startDate: string;
  endDate?: string;
  images?: string[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  stacks: Stack[];
  image: string;
  achievements?: string[];
  short_description?: string;
  location?: string;
  position?: string;
  responsibilities?: string[];
  skills?: string[];
  link?: {
    liveLink?: string;
    githubLink?: string | null;
  };
  date: string; // ISO 8601 format (YYYY-MM-DD) - represents release date
  lastUpdated?: string; // ISO 8601 format (YYYY-MM-DD) - optional last update date
  images?: string[];
  status: "active" | "inactive" | "dead"; // active: fully functional, inactive: not available/maintained, dead: available but functions broken/not updated
  keyTakeaways?: string[]; // Array of key learning points from the project
};

/* eslint-disable no-unused-vars */
export enum Stack {
  NEXT_JS = "Next.js",
  TAILWIND = "Tailwind",
  CSS = "CSS",
  VITE = "Vite",
  NUXT = "Nuxt.js",
  VUE = "Vue.js",
  REACT = "React",
  AIRTABLE = "Airtable",
  ORACLE = "Oracle",
  JEST = "Jest",
}
