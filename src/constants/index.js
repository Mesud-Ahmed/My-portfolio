import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";

export const HERO_CONTENT = `I am a motivated and eager junior React developer with a passion for building responsive and user-friendly web applications.Having gained experience through personal projects, coding bootcamps, and collaborative learning, I am proficient in React, JavaScript, and modern web technologies. 

I enjoy working in collaborative teams, tackling challenges, and delivering clean, efficient code. 

`;

export const ABOUT_TEXT = ` aspiring junior React developer with a passion for building efficient and user-friendly web applications. as a 4th year Software Engineering student, I aim to work on impactful projects that enhance user experiences and solve real-world problems.<br><br>
Beyond coding, my hobbies and interests revolve around strengthening my religion, staying physically active through workouts, and cherishing quality time with my family. These aspects of my life shape my discipline, focus, and balance, which I bring into my work`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Food Order website",
    image: project1,
    description:
      "a food ordering website with integrated local database for storing meals items and ordered meals",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Project Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as  creation, deletion, and and viewing tasks and projects.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
  },
  {
    title: "The Almost Final Countdown - Mini Web Game",
    image: project3,
    description:
      "A fun and interactive web game where a player try to stop a timer as close as possible to a target time.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Pixabay Image Finder",
    image: project4,
    description:
      "A simple website that allows users to search for images. Users can enter a search term, select the number of images to display, and view results in a responsive grid format.",
    technologies: ["HTML", "CSS", "React", "Material UI", "Axios"],
  },
];

export const CONTACT = {
  address: "Addis Ababa, Ethiopia",
  phoneNo: "+251-941084897",
  email: "mesudahmed94@gmail.com",
};