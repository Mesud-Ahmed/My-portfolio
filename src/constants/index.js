import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";
import project7 from "../assets/project-7.png";
import project8 from "../assets/project-8.png";

export const HERO_CONTENT = `I am a passionate React and Next.js developer dedicated to crafting responsive, user-friendly web applications. Through hands-on personal projects, coding bootcamps, and collaborative learning, I have honed my skills in React, Next.js, JavaScript, and modern web technologies.`;

export const ABOUT_TEXT = `As a Full-Stack developer and 4th-year Software Engineering student, My goal is to contribute to meaningful projects that address real-world challenges. <br><br>Beyond coding, I find balance through strengthening my faith, staying active with workouts, and spending quality time with family. These pursuits enhance my discipline and focus, which I bring to my development work.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Junior Frontend Developer (Freelance)",
    company: "Self-Employed",
    description: `Developed responsive web applications using React and Next.js for small businesses. Collaborated with clients to design user interfaces and integrate APIs. Focused on optimizing performance and ensuring cross-browser compatibility.`,
    technologies: ["React", "Next.js", "JavaScript", "TailwindCSS"],
  },
  {
    year: "2023 - 2024",
    role: "Web Development Intern",
    company: "Local Startup",
    description: `Assisted in building frontend components using React and integrated them with RESTful APIs. Worked with a team to implement responsive designs and improve user experience. Contributed to code reviews and agile development processes.`,
    technologies: ["React", "JavaScript", "CSS", "Node.js"],
  },
  {
    year: "2022 - 2023",
    role: "Coding Bootcamp Participant",
    company: "Tech Academy",
    description: `Completed an intensive coding bootcamp focused on full-stack development. Built multiple projects using React, Next.js, and JavaScript, with an emphasis on modern web development practices and version control with Git.`,
    technologies: ["React", "Next.js", "JavaScript", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Freedom Car Marketplace",
    image: project5,
    description:
      "A modern web application built with Next.js and Drizzle ORM, designed to provide a seamless platform for browsing, filtering, and managing car listings.",
    technologies: ["Next.js", "TailwindCSS", "Drizzle", "Neon"],
    livePreview: "https://car-marketplace-eight-jet.vercel.app/",
    github:
      "https://github.com/Mesud-Ahmed/Car-marketplace/tree/main/next-js-car-marketplace",
  },
  {
    title: "MediHelp+",
    image: project8,
    description:
      `I played a key role in developing the front-end of MediHelp+, a healthcare platform that <a href="https://www.linkedin.com/posts/mesud-ahmed-thrilled-to-share-that-we-won-the-activity-7225483748502347776-5uP5?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" style="color: #1DA1F2; font-weight: bold; text-decoration: underline;">won the 2025 GDG AASTU hackathon</a>. I focused on implementing responsive UI components using React, integrating features like real-time AI skin diagnosis, an interactive symptom checker, and local language support.`,
    technologies: ["Django", "React", "TailwindCSS", "Framer-motion"],
    livePreview: "https://medihelp-frontend-ntx5.vercel.app/",
    github: "https://github.com/ellay21/Medihelp-Frontend",
  },
  {
    title: "Food Order Website",
    image: project1,
    description:
      "A food ordering website with an integrated local database for storing meal items and ordered meals.",
    technologies: ["TailwindCSS", "Next.js"],
    github: "https://github.com/Mesud-Ahmed/Food-Order-app",
  },
  {
    title: "Rebel Rover - Travel Booking Website",
    image: project4,
    description:
      "Designed and developed as a capstone project by a team of seven students. The backend functionality is simulated using MockAPI.io.",
    technologies: ["React", "TailwindCSS", "MockAPI.io"],
    livePreview: "https://gdg-capstone-g1.netlify.app/",
    github: "https://github.com/anteneh83/G1_Capstone_Project",
  },
  {
    title: "Project Management App",
    image: project2,
    description:
      "A web application for managing tasks and projects, with features for creating, deleting, and viewing tasks and projects.",
    technologies: ["React", "TailwindCSS"],
    livePreview:
      "https://project-management-app-drab.vercel.app/?vercelToolbarCode=ijKgCzpQ_AM0uyP",
    github: "https://github.com/Mesud-Ahmed/Project-Management-app",
  },
  {
    title: "Daliya Specialized Eye Clinic",
    image: project6,
    description:
      "A responsive website for an eye clinic featuring doctor profiles, client reviews, and service information. Built with a user-friendly interface to enhance patient engagement and streamline online interactions.",
    technologies: ["TailwindCSS", "React", "Framer Motion"],
    livePreview: "https://eye-clinic-ecru.vercel.app/",
    github: "https://github.com/Mesud-Ahmed/Eye-clinic",
  },
  {
    title: "Anwar Cultural Tibs",
    image: project7,
    description:
      "A modern responsive restaurant website showcasing menus, restaurant information, and more.",
    technologies: ["TailwindCSS", "React", "Framer Motion"],
    livePreview: "https://restaurant-website-fawn-three.vercel.app/",
    github: "https://github.com/Mesud-Ahmed/Restaurant-website",
  },
  {
    title: "The Almost Final Countdown - Mini Web Game",
    image: project3,
    description:
      "A fun and interactive web game where players try to stop a timer as close as possible to a target time.",
    technologies: ["TailwindCSS", "React"],
    livePreview: "https://the-almost-final-countdown-chi.vercel.app/",
    github: "https://github.com/Mesud-Ahmed/The-Almost-Final-Countdown",
  },
];

export const CONTACT = {
  address: "Addis Ababa, Ethiopia",
  phoneNo: "+251-941084897",
  email: "mesudahmed94@gmail.com",
};