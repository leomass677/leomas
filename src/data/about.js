import frontend_design_certificate from "../assets/frontend.svg";
import product_design_certificate from "../assets/productDesign.svg";

const about = {
  // Personal Info
  personal: {
    name: "Muktar Adamu Saidu",
    title: "Software Developer & Product Designer",
    location: "Abuja, Nigeria",
    email: "muktaradamu677@gmail.com",
    emailIcon: "MdMarkEmailUnread",
    social: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/muktaradamu",
        icon: "FaLinkedinIn",
        color: "#0077b5",
      },
      {
        platform: "GitHub",
        url: "https://github.com/muktaradamu",
        icon: "FaGithub",
        color: "#333333",
      },
      {
        platform: "Dribbble",
        url: "https://dribbble.com/muktaradamu",
        icon: "FaDribbble",
        color: "#ea4c89",
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/muktaradamu",
        icon: "FaInstagram",
        color: "#e4405f",
      },
    ],
  },

  // Bio / About sections
  bio: {
    title: "About Me",
    img: "../assets/about_image.svg",
    sections: [
      {
        id: "learning",
        header: "Learning",
        highlight: "the Craft",
        content: [
          "I started with 3 months of UI/UX design at MALHUB, followed by 3 months of front-end development (React, Tailwind). This dual-track learning gave me the foundation to both design and build.",
          "I applied my foundational skills during a 3-month software development internship at Sw Global, contributing to live projects and collaborating in a professional team setting.",
        ],
      },
      {
        id: "hybrid",
        header: "The",
        highlight: "Hybrid Creator",
        content: [
          "I now operate as a unified Software Developer & Product Designer, architecting complete digital experiences. My process merges user-centered design with robust, scalable code to build products that are both intuitive and technically sound.",
        ],
      },
    ],
  },

  // Skills
  skills: {
    design: [
      "Figma",
      "Adobe XD",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    frontend: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
    backend: ["Node.js", "Express", "Java", "REST APIs"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "CorelDRAW"],
  },

  // Work Experience
  experience: {
    title: "Work Experience",
    items: [
      {
        id: 1,
        role: "Software Development Intern",
        company: "SW Global",
        location: "Abuja, Nigeria",
        period: { start: "2025-09", end: "2025-11" },
        dateDisplay: "Sep 2025 – Nov 2025",
        certificateUrl: null,
        hasCertificate: false,
        highlights: [
          "Contributed to live software development projects",
          "Collaborated with cross-functional teams",
          "Implemented features using modern tech stack",
        ],
        technologies: ["Figma", "React", "Git", "GitHub"],
      },
      {
        id: 2,
        role: "Product Design",
        company: "MALHUB",
        location: "Ilorin, Nigeria",
        period: { start: "2025-06", end: "2025-09" },
        dateDisplay: "Jun 2025 – Sep 2025",
        certificateUrl: product_design_certificate,
        hasCertificate: true,
        highlights: [
          "Designed user interfaces for multiple projects",
          "Conducted user research and testing",
          "Collaborated with developers to implement designs",
        ],
        technologies: ["Figma", "Sketch"],
      },
      {
        id: 3,
        role: "Frontend Development",
        company: "MALHUB",
        location: "Ilorin, Nigeria",
        period: { start: "2025-03", end: "2025-07" },
        dateDisplay: "Mar 2025 – Jul 2025",
        certificateUrl: frontend_design_certificate,
        hasCertificate: true,
        highlights: [
          "Built responsive web interfaces",
          "Implemented designs using React and Tailwind CSS",
          "Optimized performance and accessibility",
        ],
        technologies: [
          "HTML5 & CSS3",
          "Tailwind CSS",
          "JavaScript",
          "Git & GitHub",
          "React",
        ],
      },
    ],
  },

  // Education & Certifications
  education: {
    title: "Education & Certifications",
    items: [
      {
        id: 1,
        degree: "Bsc Software Engineering",
        institution: "Al-Hikmah University",
        location: "Ilorin, Nigeria",
        period: { start: "2022", end: "2026" },
        dateDisplay: "2022 – 2026",
      },
      {
        id: 2,
        title: "HTML & CSS Fundamentals",
        issuer: "Udemy",
        date: "2024",
      },
      {
        id: 3,
        title: "React & JavaScript Development",
        issuer: "Udemy",
        date: "2024",
      },
      {
        id: 4,
        title: "Core Java Programming",
        issuer: "Self-Directed",
        date: "2024",
      },
    ],
  },

  // Beyond Work
  beyondWork: {
    title: "Beyond the Screen",
    description: "When I'm not designing or coding, you can find me:",
    activities: [
      {
        id: 1,
        name: "Photography",
        icon: "",
        description: "Street and landscape photography",
      },
      {
        id: 2,
        name: "Reading",
        icon: "",
        description: "Tech blogs and fiction novels",
      },
      {
        id: 3,
        name: "Open Source",
        icon: "",
        description: "Contributing to GitHub projects",
      },
    ],
    gallery: [
      {
        id: 1,
        url: "",
        alt: "Photography example",
        caption: "Street photography in Abuja",
      },
      {
        id: 2,
        url: "",
        alt: "Reading corner",
        caption: "My reading setup",
      },
    ],
  },

  // Website Info
  website: {
    title: "About This Website",
    version: "v1.0.0",
    designPhilosophy:
      "Clean, minimal, and performance focused interface designed with a strong emphasis on user experience. Built using React, Tailwind CSS, Framer Motion, React Icons, and Lenis for smooth scrolling, with typography powered by Inter and Roboto Flex. The design is first crafted in Figma and refined using modern web development practices.",
    technologies: [
      { name: "React", role: "Frontend Framework" },
      { name: "Tailwind CSS", role: "Styling" },
      { name: "Vite", role: "Build Tool" },
      { name: "React Router", role: "Navigation" },
    ],
    built: {
      date: "2026",
      secondsInMaking: function (months = 2) {
        const seconds = Math.floor(months * 30 * 24 * 60 * 60);
        return `${seconds.toLocaleString()} seconds in making.`;
      },
      readableTime: null,
    },
    nextVersion:
      "Version 2.0 coming soon with enhanced animations and Dark mode",
  },

  // Download Options
  downloads: {
    cv: {
      title: "Download CV",
      url: "/files/cv.pdf",
      fileSize: "2.4 MB",
      format: "PDF",
    },
    resume: {
      title: "Download Resume",
      url: "/files/resume.pdf",
      fileSize: "1.8 MB",
      format: "PDF",
    },
  },
};

export default about;
