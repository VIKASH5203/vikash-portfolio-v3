import screen from "../assets/screen.jpeg";
import PhoneKart from "../assets/PhoneKart.jpeg";
import toDo from "../assets/to-do.jpeg";

const information = {

  experiences: [
    {
      year: "07/2025 - Current",
      role: "Software Developer",
      company: "Amdocs",
      location: "Pune",
      description: `
        As a Software Developer at Amdocs, I focus on building scalable enterprise applications, improving system architecture, and mentoring junior developers. My work involves designing high-performance APIs, optimizing React components for complex workflows, and ensuring seamless integration with back-end systems to deliver a smooth customer experience.
      `,
    },
    {
      year: "08/2023 - 06/2025",
      role: "Software Engineer Associate",
      company: "Amdocs",
      location: "Pune",
      description: `
        Worked closely with clients to implement Figma-based UI designs and integrate third-party APIs, enhancing application features. I leveraged AEM to give clients greater control over content and experience management.
        Additionally, I implemented a comprehensive e-commerce solution for seamless sales across self-service, retail, and mobile platforms, integrating third-party APIs to expand application capabilities.
      `,
    },
    {
      year: "03/2023 - 05/2023",
      role: "Software Engineer Intern",
      company: "United We Care",
      location: "Delhi",
      description: `
        Created high-performance APIs using FastAPI, enabling efficient backend functionality and quick response times for client-facing applications. I also integrated Redis for fast in-memory data storage and caching, which improved application speed and reduced load on primary databases.
      `,
      certificate: true,
    },
    {
      year: "01/2023 - 03/2023",
      role: "Technical Blog Writer",
      company: "Coding Ninjas",
      location: "Delhi",
      description: `
        Authored around 30 technical blogs and articles covering a wide range of computer science topics, helping readers understand complex concepts in an accessible way.
      `,
      certificate: true,
    },
  ],

  projects: [
    {
      name: "Mind-Verse",
      description:
        "It is Multiuser blog service that allows users to compose, read, delete and update their posts freely and safely., Users can skim through their creative contents and add-in self-written blogs., Tech-Stack Used: Node.js, Express.js, Mongo DB, and Bootstrap. Passport.js was used for authentication.,",
      techStack: ["Node", "Express.js", "MongoDB", "Bootstrap", "Passport.js"],
      image: screen,
      github: "https://github.com/VIKASH5203/mind_verse",
      demo: "#"
    },
    {
      name: "PhoneKart",
      description:
        "PhoneKart is a backend for a mobile e-commerce platform built with Java, Spring Boot, and Hibernate. It provides RESTful APIs to perform CRUD operations on mobile products with a repository-checking mechanism for smooth data validation and persistence.",
      techStack: ["Java", "Spring Boot", "Hibernate", "MySQL"],
      image: PhoneKart,
      github: "https://github.com/VIKASH5203/PhoneKart",
      demo: "#"
    },
    {
      name: "Day-Scheduler",
      description:
        "A responsive daily to-do web app where users can add, edit, delete, and mark tasks as completed. Built using Node.js, Express, EJS, and MongoDB, it stores tasks persistently and provides a simple, intuitive interface for effective daily task management.",
      techStack: ["Node.js", "Express", "EJS"," Mongo DB"],
      image: toDo,
      github: "https://github.com/VIKASH5203/Day-Scheduler",
      demo: "#"
    },
  ],
  contactInfo: [
    {
      icon: "✉️",
      value: "vikashkr5203@gmail.com"
    },
    {
      icon: "📞",
      value: "+91 9693794441"
    },
    {
      icon: "📍",
      value: "Pune, India"
    }
  ]
};

export default information;
