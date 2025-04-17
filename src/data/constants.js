export const Bio = {
  name: "Ahmad Hossamo",
  roles: ["Full Stack Developer", "Programmer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results.",
  github: "https://github.com/ahmadmh404",
  resume:
    "https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
  twitter: "https://twitter.com/RishavChanda",
  insta: "https://www.instagram.com/rishav_chanda/",
  facebook: "https://www.facebook.com/rishav.chanda.165/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        image: "/skills-svgs/html5.svg",
      },
      {
        name: "CSS",
        image: "/skills-svgs/css3.svg",
      },
      {
        name: "JavaScript",
        image: "/skills-svgs/javascript.svg",
      },
      {
        name: "React Js",
        image: "/skills-svgs/react-js.svg",
      },
      {
        name: "Tailwind CSS",
        image: "/skills-svgs/tailwindcss.svg",
      },
      {
        name: "ShadcnUI",
        image: "/skills-svgs/shadcnui.png",
      },
      {
        name: "React Hook Form",
        image: "/skills-svgs/react-hook-form.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "/skills-svgs/node-js.png",
      },
      {
        name: "Express Js",
        image: "/skills-svgs/express-js.png",
      },
      {
        name: "MongoDB",
        image: "/skills-svgs/mongodb.svg",
      },
      {
        name: "Prima ORM",
        image: "/skills-svgs/prisma.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "/skills-svgs/git.png",
      },
      {
        name: "GitHub",
        image: "/skills-svgs/github.png",
      },
      {
        name: "Netlify",
        image: "/skills-svgs/netlify.png",
      },
      {
        name: "VS Code",
        image: "/skills-svgs/visual-studio-code.png",
      },
      {
        name: "Postman",
        image: "/skills-svgs/postman.png",
      },
    ],
  },
  {
    title: "Full Stak",
    skills: [
      {
        name: "Next Js",
        image: "/skills-svgs/next-js.png",
      },
      {
        name: "Zod",
        image: "/skills-svgs/zod.png",
      },
    ],
  },
];

export const education = [
  {
    id: 1,
    img: "/education-images/high-school.jpg",
    school: "Zaki Al-Arsozi Secondary School",
    date: "2017 - 2020",
    grade: "82%",
    desc: "Completed secondary education with a focus on mathematics and computing subjects. Developed a strong foundation in logical thinking and problem-solving skills.",
    degree: "Secondary School Certificate",
  },
  {
    id: 2,
    img: "/education-images/university.png",
    school: "Institute of ICTE, Tartous, Syria",
    date: "2020 - Present",
    grade: "3.2 GPA",
    desc: "Currently completing my final year in Information Technology, specializing in software development. My coursework includes advanced web development, database management, and software engineering principles. Notable achievements include leading the development of a social media platform as my graduation project, where I specialized in frontend development using Next.js and TypeScript.",
    degree: "Higher Nitec in Information Technology",
  },
];

export const experiences = [
  {
    id: 2,
    image: "/experience-images/university.png",
    role: "Technical Student",
    company: "Institute of Technical Education",
    date: "2020 - Present",
    desc: "Advanced programming courses, technical workshops & lab sessions, computer science fundamentals, team projects & collaboration",
    skills: [
      "Software Development",
      "Web Technologies",
      "Computer Science",
      "Team Collaboration",
    ],
    company_logo: "/experience-images/graduation.png",
  },
  {
    id: 1,
    image: "/experience-images/high-five.png",
    role: "Frontend Lead Developer",
    company: "Social Media Platform (Graduation Project)",
    date: "Sep 2023 - Present",
    desc: "Frontend architecture with Next.js & TypeScript, UI components with ShadcnUI, API integration & real-time features, performance optimization",
    skills: [
      "Next.js",
      "TypeScript",
      "ShadcnUI",
      "Tailwind CSS",
      "API Integration",
      "Performance Optimization",
    ],
    company_logo: "/experience-images/high-five.png",
  },
];

export const projects = [
  {
    id: 14,
    title: "AI Resume Builder",
    date: "Oct 2023 - Nov 2023",
    description:
      "An AI-powered resume builder application utilizing React, Vite, Tailwind CSS, Strapi, and Clerk for seamless resume creation and management.",
    image:
      "https://raw.githubusercontent.com/ahmadmh404/Resume-Builder-Strapi/main/public/assets/resume-builder.png",
    tags: ["React", "Vite", "Tailwind CSS", "Strapi", "Clerk"],
    category: "SAAS",
    github: "https://github.com/ahmadmh404/Resume-Builder-Strapi",
    webapp: "https://resume-builder-strapi.vercel.app/",
    company_logo: "/skills-svgs/react.png",
  },
  {
    id: 13,
    title: "Auth.js V5 Toolkit",
    date: "Sept 2023 - Oct 2023",
    description:
      "A comprehensive authentication toolkit built using Next.js, Auth.js, and Shadcn UI, providing a streamlined approach to user authentication and management.",
    image:
      "https://raw.githubusercontent.com/ahmadmh404/auth-js-5-toolkit/main/public/assets/auth-js.png",
    tags: ["Next.js", "Auth.js", "Shadcn UI", "Tailwind CSS"],
    category: "WEB",
    github: "https://github.com/ahmadmh404/auth-js-5-toolkit",
    webapp: "https://auth-js-5-toolkit.vercel.app/",
    company_logo: "/skills-svgs/next-js.png",
  },
];
