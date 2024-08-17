import { Work, Stack } from "@/types/projects";

export const experiences: Work[] = [
  {
    id: 1,
    title: "Frontend Internship",
    type: "Internship",
    position: "Frontend Developer",
    responsibilities: [
      "Designed user interface (UI) and user experience (UX) for the website project using Figma design tool.",
      "Created mockup prototypes for the website project using ReactJs, incorporating previously designed UI/UX.",
      "Managed mockup data using the nocode Airtable application to ensure data reliability and consistency throughout the project development.",
    ],
    achievements: [
      "Become top-performing internship team at Generasi Gigih Program",
      "Successfully completed a mockup project on time.",
      "Implemented Airtable as a no-code database.",
      "Designed and implemented UI/UX using Figma and React.js.",
      "Successfully communicated and collaborated remotely with international teams.",
    ],
    skills: ["Team work", "Communication", "Problem-solving", "Creativity"],
    company: {
      name: "AVPN",
      link: "https://avpn.asia/",
    },
    location: "Singapore(Remote)",
    short_description:
      "Securing an internship through the Generasi Gigih bootcamp, I gained valuable experience working remotely with international companies and received mentorship from industry leaders, enhancing my skills and boosting my confidence for future career goals.",
    description:
      "My first internship experience was a result of my achievements during the Generasi Gigih bootcamp, which provided exclusive opportunities for high-performing participants. This internship broadened my perspective on working remotely with companies in Singapore and abroad. I was mentored by distinguished professionals such as Hamdi Syarif from AVPN and Nico Samuel from GoTo, who guided and supported me in understanding various aspects of the job. This opportunity not only enhanced my knowledge and experience but also boosted my confidence to pursue higher career goals in the future.",
    stacks: [Stack.REACT, Stack.CSS, Stack.AIRTABLE],
    link: {
      githubLink: "",
      liveLink: "",
    },
    image: "/avpn.png",
    startDate: "May 2022",
    endDate: "August 2022",
  },
  {
    id: 2,
    title: "Frontend Internship",
    type: "Internship",
    company: {
      name: "Sekolahmu",
      link: "https://sekolah.mu/",
    },
    location: "Jakarta(Remote)",
    responsibilities: [
      "Designed 3 website components for the front-end design system at Sekolah.mu.",
      "Implemented these components into Storybook to facilitate documentation and team collaboration.",
      "Created unit tests for each component to ensure quality and consistency in development.",
      "Achieved an average of 95% coverage rate in unit tests for each component, demonstrating design quality and accuracy.",
      "Actively participated in the development and improvement of features on the payment page.",
      "Collaborated with the development team to implement changes and ensure the successful launch of new features.",
      "Utilized Vue.js to create dynamic and responsive web components, thereby increasing the application's interactivity and usability.",
    ],
    skills: [
      "Team work",
      "Communication",
      "Collaboration",
      "Documentation",
      "Design Systems",
      "Unit Testing",
    ],
    achievements: [
      "Successfully created 3 components for the design system.",
      "Achieved over 95% unit test coverage.",
      "Effectively conducted a remote internship.",
      "Successfully led daily scrum meetings.",
    ],
    short_description:
      "Secured through the Magang Merdeka portal, this internship expanded my knowledge of Vue.js, introduced me to Scrum Agile methodology, and significantly improved my skills in design systems and unit testing, making it my best experience so far.",
    description:
      "This internship was part of my academic requirements and was secured through the Magang Merdeka portal by the Ministry of Education and Culture. It significantly expanded my knowledge and experience, particularly in using Vue.js. The senior team members were incredibly supportive, and for the first time, I was directly involved in the Scrum Agile methodology. This experience also enhanced my skills in creating design systems as a front-end engineer and improved my understanding of unit testing. Overall, this internship has been the best experience I've had so far.",
    stacks: [Stack.VUE, Stack.CSS, Stack.NUXT],
    link: {
      githubLink: "",
      liveLink: "",
    },
    image: "/sekolahmu.png",
    startDate: "September 2022",
    endDate: "December 2022",
  },
  {
    id: 3,
    title: "Developer Internship",
    type: "Internship",
    company: {
      name: "Antares",
      link: "https://antares.id/",
    },
    location: "Jakarta(Remote)",
    responsibilities: [
      "Developed existing low-code application using Vue.js to monitor the PLN PJB system, improving operational efficiency and system oversight.",
      "Resolved bugs and developed new pages for additional features, ensuring a smooth and user-friendly interface.",
      "Developed and maintained using existing apps to meet project requirements, facilitating seamless data communication between systems.",
      "Utilized Oracle MySQL for backend tasks, including database creation and management, ensuring robust data handling and storage solutions.",
    ],
    skills: [
      "Full-Stack Development",
      "Database Design and Management",
      "API Development and Integration",
      "Oracle Database",
      "Website Development with JSON Schema",
      "Peer Code Review",
    ],
    achievements: [
      "Successfully designed several APIs.",
      "Improved and enhanced website appearance.",
      "Successfully conducted QA testing.",
    ],
    short_description:
      "This first full-stack developer role involved designing databases, developing APIs, using Oracle, creating websites from JSON schema templates, and conducting peer reviews, which greatly expanded my skills and understanding of full-stack development.",
    description:
      "This was my first experience as a full-stack developer, where I was tasked with designing databases, including table creation, API development, and integration. I utilized Oracle as the database system for practical implementation. Additionally, I developed websites using templates based on JSON schema and conducted peer reviews to enhance the quality of the code produced. This experience significantly broadened my skills and understanding of full-stack development.",
    stacks: [Stack.VUE, Stack.CSS, Stack.VITE, Stack.ORACLE],
    link: {
      githubLink: "",
      liveLink: "",
    },
    image: "/antares2.png",
    startDate: "January 2023",
    endDate: "June 2023",
  },
  {
    id: 4,
    title: "Frontend Developer",
    type: "Fulltime",
    company: {
      name: "Satu Dental",
      link: "https://www.satudental.com/",
    },
    location: "Jakarta Utara",
    achievements: [
      "Successfully designed a custom schedule view without bugs.",
      "Quickly understood existing frontend patterns and frameworks.",
      "Gained a solid understanding of the CI/CD concepts used.",
      "Successfully led daily scrum rituals and on-call duties.",
    ],
    short_description:
      "In my first full-time job, I worked with Tailwind CSS, managed three simultaneous projects, handled on-call duties, led daily scrums, designed form validations with Zod, and gained foundational CI/CD knowledge using Docker and GitHub Actions.",
    description:
      "This was my first full-time job experience, where I worked directly with Tailwind CSS for the first time. I was entrusted with vital project responsibilities, handling three projects simultaneously: a clinic management system, a lab management system, and a mobile web application for booking purposes. I also managed on-call duties to address user inquiries about the developed apps. My role involved leading daily scrums and actively contributing feedback on both work and company culture. I designed form validations using Zod and worked with React, Next.js, and page routing. Additionally, I was actively involved in deployment to staging and production environments using Docker, which provided me with a foundational understanding of CI/CD using GitHub Actions.",
    responsibilities: [
      "Designed and built systems for managing clinic and lab operations, including patient records, appointment scheduling, and billing, as well as systems for lab workflows, from sample tracking to test result reporting.",
      "Developed a responsive mobile web application to enhance customer access to services, including booking appointments and viewing clinic location.",
      "Utilized modern technologies such as Typescript for type safety, Next.js for server-side rendering, Tailwind CSS for styling, and Jest for testing to deliver high-quality web applications.",
      "Implemented unit tests using Jest to ensure code reliability and maintainability, covering critical components and functions.",
      "Actively participated in Scrum rituals, both as a participant and a leader, contributing to sprint planning, daily stand-ups, sprint reviews, and retrospectives.",
      "Consistently completed tasks in line with the committed story points during sprint planning, ensuring reliable delivery within set timelines.",
      "Authored detailed documentation for implementation procedures, research findings, and user guides to support both development and end-user training.",
    ],
    skills: [
      "System Design and Development",
      "Mobile Web Development",
      "Modern Technologies",
      "Unit Testing",
      "Scrum Methodology",
      "Task Management and Delivery",
      "Documentation",
      "On-Call Support",
      "Form Validation",
      "Deployment and CI/CD",
      "Front-End Technologies",
      "Leadership and Team Collaboration",
    ],
    stacks: [Stack.REACT, Stack.TAILWIND, Stack.NEXT_JS],
    link: {
      githubLink: "",
      liveLink: "",
    },
    image: "/satudental.webp",
    startDate: "November 2023",
    endDate: "",
  },
];

export const projects: Work[] = [
  {
    id: 5,
    title: "Coding Test #1",
    type: "Project",
    company: {
      name: "Synapsis",
    },
    description:
      "This project was part of a coding test for a company application process. It involved creating a simple blog to evaluate my front-end engineering skills by utilizing public APIs. In this web application, users can add and delete blog posts, open blog articles, and view content along with comments from other users. Impressively, this project was completed within just one week.",
    stacks: [Stack.REACT, Stack.TAILWIND, Stack.NEXT_JS],
    skills: [
      "Front-End Engineering",
      "Public API Integration",
      "CRUD Operations",
      "User Interface Design",
      "Time Management",
    ],
    link: {
      githubLink: "https://github.com/ihda06/synapsis-test",
      liveLink: "https://synapsis-test-ihda.vercel.app/",
    },
    image: "/synapsis2.png",
    startDate: "June 2024",
    endDate: "June 2024",
  },
  {
    id: 6,
    title: "Coding Test #2",
    type: "Project",
    company: {
      name: "Dellos",
    },
    skills: [
      "Front-End Development",
      "API Integration",
      "State Management",
      "Cookie Management",
      "User Interface Design",
      "Project Development",
      "Time Management",
      "Unit Testing",
    ],
    description:
      "This project was my second coding test for a company application process. The concept involved creating a news page that displays articles by utilizing The New York Times API to fetch article data and their prices. The project required implementing simple state management to store users' article purchases and credit balances in cookies. Additionally, I performed unit testing on the business logic to ensure reliability and accuracy. This project was completed within just one week.",
    stacks: [Stack.REACT, Stack.TAILWIND, Stack.NEXT_JS, Stack.JEST],
    link: {
      githubLink: "https://github.com/ihda06/dellos-test",
      liveLink: "https://dellos-test.vercel.app/",
    },
    image: "/dellos.png",
    startDate: "June 2024",
    endDate: "June 2024",
  },
  {
    id: 7,
    title: "Personal Web #1",
    type: "Project",
    company: {
      name: "Self Employed",
    },
    description:
      "This was my first web portfolio project, inspired by portfolio codebayu.com. The project features a night mode and is built using Next.js and Tailwind CSS, ensuring it is fully responsive.",
    skills: [
      "Web Development",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Design",
      "Dark Mode Implementation",
      "Front-End Development",
    ],
    stacks: [Stack.REACT, Stack.TAILWIND, Stack.NEXT_JS],
    link: {
      githubLink: "https://github.com/ihda06/playground",
      liveLink: "https://ihdas-playground.vercel.app/",
    },
    image: "/personal-1.png",
    startDate: "November 2023",
    endDate: "November 2023",
  },
  {
    id: 8,
    title: "Personal Web #2",
    type: "Project",
    company: {
      name: "Self Employed",
    },
    description: "",
    stacks: [Stack.REACT, Stack.TAILWIND, Stack.NEXT_JS],
    link: {
      githubLink: "https://github.com/ihda06/astra-jingga",
      liveLink: "https://ihda-anwari.vercel.app/",
    },
    image: "/personal-2.png",
    startDate: "November 2023",
    endDate: "November 2023",
  },
  {
    id: 9,
    title: "Twitter Web Menfess",
    type: "Project",
    company: {
      name: "Self Employed",
    },
    description: "",
    stacks: [Stack.REACT, Stack.TAILWIND, Stack.NEXT_JS],
    link: {
      githubLink: "https://github.com/ihda06/astra-webapp",
      liveLink: "https://astra-webapp.vercel.app/twitter-menfess",
    },
    image: "/personal-3.png",
    startDate: "November 2023",
    endDate: "November 2023",
  },
  {
    id: 10,
    title: "Stashion Apps",
    type: "Project",
    company: {
      name: "Stashion",
    },
    description: "",
    stacks: [Stack.REACT, Stack.TAILWIND, Stack.NEXT_JS],
    link: {
      githubLink: "",
      liveLink: "https://stashion.website/",
    },
    image: "/stashion.png",
    startDate: "June 2023",
    endDate: "June 2023",
  },
];
