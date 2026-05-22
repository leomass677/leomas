import ai_resume_image from "../assets/ai_resume_image.svg";
import ai_mockup from "../assets/ai_mockup.svg";
import crowdsourced_image from "../assets/Crowdsourced_image.svg";
import architecture from "../assets/architecture.svg";
import muktar_pdf from "../assets/muktar.pdf";
import beiroot_mockup from "../assets/beiroot_mockup.svg";
import beiroot_mockup_mobile from "../assets/beiroot_mockup_mobile.svg";
import splitz_mockup from "../assets/split_mockup.svg";
import splitz from "../assets/splitz.svg";
import beiroot from "../assets/beiroot.svg";

const workDetails = {
  version: "v1.0.0",
  projects: [
    {
      id: 1,
      slug: "splitz-social-wallet-app",
      path: "splitz-mobile-app",
      title: "Splitz Social Wallet App",
      description:
        "A social finance mobile app that combines shared wallets, group expense tracking, and chat-based transactions into a seamless collaborative experience",

      year: 2025,
      link: "",

      header: {
        prefix: "Designing",
        highlight: "Splitz Social Wallet App",
      },

      overview:
        "Splitz is a modern social wallet mobile application designed to simplify shared expenses and collaborative money management. Inspired by the familiarity of messaging apps and the simplicity of digital wallets, the app allows users to create shared pods, manage contributions, split bills, and track transactions through a conversational interface.",

      details: [
        { label: "Designed with", value: "Figma" },
        { label: "Platform", value: "Mobile App" },
        { label: "Role", value: "UI/UX Designer" },
        { label: "Year", value: 2025 },
      ],

      cardImage: splitz_mockup,
      cardImageAlt: "Splitz mobile wallet app preview",

      backgroundStory: [
        "Managing shared expenses between friends, roommates, and groups is often stressful and disorganized. Most existing finance apps focus heavily on numbers and spreadsheets, making the experience feel rigid and transactional instead of collaborative.",

        "Splitz was designed to make shared money management feel more social, transparent, and effortless by combining wallet functionality with a familiar chat-based interaction system.",

        "The interface uses warm colors, rounded layouts, smooth micro-interactions, and conversational transaction feeds to create a friendly and approachable financial experience for everyday users.",
      ],

      contribution: [
        "User research",
        "UX strategy",
        "Mobile UI design",
        "Design systems",
        "Interaction design",
        "Wireframing",
        "Prototype design",
        "User flow design",
      ],

      designGoal:
        "To transform shared expense management into a simple, social, and low-friction experience through intuitive wallet interactions and conversational financial tracking.",

      outcome:
        "A modern mobile finance experience that simplifies group spending, shared savings, and collaborative money management while maintaining clarity, transparency, and usability.",

      keySolutions: [
        "Chat-Based Transactions",
        "Shared Wallet Pods",
        "Expense Splitting System",
        "Interactive Financial Insights",
      ],

      ideaGeneration: {
        title: "Generating ideas from user frustrations...",
        description:
          "Exploring how conversational UI patterns and wallet systems could work together to make financial collaboration feel natural and engaging.",
      },

      informationArchitecture: {
        title: "Information Architecture",
        description:
          "Structuring the app into clear flows including onboarding, pod management, transactions, analytics, settlements, and collaborative financial activities.",
        image: architecture,
        imageAlt: "Splitz app information architecture",
      },

      visualIdentity: {
        title: "Visual Identity & Mockups",
        image: splitz,
        imageAlt: "Splitz mobile app design system and UI mockups",
      },

      insights: {
        title: "Key Insights & Growth",
        description:
          "This project strengthened my understanding of financial product design, mobile interaction systems, and how social design patterns can improve user engagement in fintech experiences.",
      },
    },
    {
      id: 2,
      slug: "beiroot-food-ordering-platform",
      path: "beiroot-web-app",
      title: "Beiroot Food Ordering Platform",
      description:
        "A modern food ordering platform with seamless WhatsApp ordering and a responsive user experience",
      year: 2026,
      link: "https://beiroot.netlify.app",
      header: {
        prefix: "Designing",
        highlight: "Beiroot Food Ordering Platform",
      },
      overview:
        "This project is a modern food ordering platform created for Beiroot to simplify online food ordering and improve customer experience. The platform allows users to explore menus, add items to cart, and place orders directly through WhatsApp with a clean, responsive, and visually engaging interface.",

      details: [
        { label: "Designed with", value: "Figma" },
        { label: "Developed with", value: "React & Tailwind CSS" },
        { label: "Platform", value: "Web" },
        { label: "Role", value: "UI/UX Designer & Frontend Developer" },
        { label: "Year", value: 2025 },
      ],

      cardImage: beiroot_mockup_mobile,
      cardImageAlt: "Beiroot food ordering platform preview",

      backgroundStory: [
        "The project was inspired by the growing demand for fast and convenient online food ordering experiences for local restaurants. Many small food businesses struggle with outdated ordering systems or rely entirely on manual WhatsApp chats without a structured digital experience.",

        "I designed and developed a modern web-based platform that combines an engaging restaurant interface with a simplified ordering workflow. Customers can easily browse meals, filter menu items, add products to cart, and complete their order directly through WhatsApp.",

        "The design focuses heavily on simplicity, speed, and mobile-first usability, ensuring customers can quickly navigate the platform and place orders with minimal friction while maintaining a visually appealing brand identity.",
      ],

      contribution: [
        "User research",
        "UI/UX design",
        "Frontend development",
        "Responsive design",
        "Design systems",
        "Component architecture",
        "Interactive prototyping",
        "WhatsApp integration",
      ],

      designGoal:
        "To create a fast, modern, and user-friendly digital food ordering experience that helps customers browse and order meals effortlessly while strengthening Beiroot’s online presence.",

      outcome:
        "A responsive and visually engaging food ordering platform that streamlines customer interactions, improves menu accessibility, and simplifies ordering through seamless WhatsApp integration.",

      keySolutions: [
        "Interactive Food Menu",
        "WhatsApp Checkout System",
        "Responsive Mobile-First Design",
        "Menu Filtering & Search",
      ],

      ideaGeneration: {
        title: "Generating ideas from customer behavior...",
        description:
          "Transforming traditional food ordering into a modern digital experience by simplifying navigation, reducing friction, and improving ordering speed.",
      },

      informationArchitecture: {
        title: "Information Architecture",
        description:
          "Structuring the platform into a seamless flow from Homepage and Menu Browsing to Cart Management and WhatsApp Checkout for a smooth customer experience.",
        image: architecture,
        imageAlt: "Beiroot platform information architecture",
      },

      visualIdentity: {
        title: "Visual Identity & Mockups",
        image: beiroot,
        imageAlt: "Beiroot UI design and branding mockups",
      },

      insights: {
        title: "Key Insights & Growth",
        description:
          "This project strengthened my ability to combine UI/UX principles with frontend development to build a modern, conversion-focused food ordering experience optimized for both usability and brand identity.",
      },
    },
    {
      id: 3,
      slug: "ai-resume-cover-letter-builder",
      path: "ai-resume-builder",
      title: "AI Resume and Cover Letter Builder",
      description:
        "Create tailored resumes and compelling cover letters in minutes. Powered by AI to highlight your strengths and match job descriptions perfectly.",
      year: 2025,
      link: "https:",
      header: {
        prefix: "Designing",
        highlight: "AI Resume and Cover Letter Builder",
      },
      overview:
        "This project is a modern AI-powered resume and cover letter platform designed to simplify and enhance the job application process. The interface focuses on clarity, efficiency, and user guidance, helping users create professional documents with minimal effort.",
      details: [
        { label: "Designed with", value: "Figma" },
        { label: "Platform", value: "Web" },
        { label: "Role", value: "Designer" },
        { label: "Year", value: 2025 },
      ],
      cardImage: ai_resume_image,
      cardImageAlt: "AI Resume Builder interface preview",
      backgroundStory: [
        "This project was inspired by the difficulties many people face when creating resumes and cover letters. Most users, especially students and entry-level job seekers, often struggle with what to write, how to structure their content, and how to make their applications stand out. Existing tools can feel complicated or outdated, which makes the process even more stressful.",
        "I designed a modern AI-powered platform that guides users step-by-step, helping them quickly create and improve professional resumes and cover letters. It simplifies the process with smart suggestions, clear structure, and an easy-to-use interface, making the experience faster, more efficient, and less overwhelming.",
        "The design emphasizes clarity and ease of use, with a clean layout and smooth navigation, allowing users to quickly create and manage their resumes and cover letters with confidence.",
      ],
      contribution: [
        "User research",
        "Design leadership",
        "User flow",
        "Visual design",
        "Design systems",
        "Interactive prototyping",
        "User testing",
      ],
      designGoal:
        "To replace the stress of document creation with a guided, frictionless experience that balances powerful AI automation with a clean, user-centric interface.",
      outcome:
        "A seamless end-to-end platform that enables users to generate 'recruiter-ready' resumes and cover letters in minutes, eliminating writer's block and formatting errors.",
      keySolutions: [
        "AI-Powered Builder",
        "Smart Content Refinement",
        "Unified Document Dashboard",
        "Template Selection System",
      ],
      ideaGeneration: {
        title: "Generating ideas from findings...",
        description:
          "Translating user pain points into a structured AI workflow that prioritizes speed, clarity, and professional quality.",
      },
      informationArchitecture: {
        title: "Information Architecture",
        description:
          "Organizing the platform into a logical flow from Onboarding and Data Input to AI Generation and Final Export to ensure a fast, intuitive navigation experience.",
        image: architecture,
        imageAlt: "Information architecture diagram",
      },
      visualIdentity: {
        title: "Visual Identity & Mockups",
        image: ai_mockup,
        imageAlt: "Design system and UI mockups gallery",
      },
      insights: {
        title: "Key Insights & Growth",
        description:
          "Mastered the balance between AI automation and human agency, transforming a daunting document-creation process into a seamless, high-confidence user journey.",
      },
    },
    {
      id: 4,
      slug: "crowdsourced-price-intelligence",
      path: "crowdsourced-price-intelligence",
      title: "Crowdsourced Price Intelligence",
      description:
        "Crowdsourced, community-powered data to help you shop smarter and avoid overpaying. Real-time price tracking and insights for local markets.",
      year: 2025,
      link: "",
      header: {
        prefix: "Designing",
        highlight: "Crowdsourced Price Intelligence",
      },
      overview:
        "A community-driven platform designed to provide transparency in local markets. It allows users in Abuja to share and track real-time vegetable prices, ensuring fair trade and informed purchasing decisions.",
      details: [
        { label: "Designed with", value: "Figma" },
        { label: "Platform", value: "Web" },
        { label: "Role", value: "Designer" },
        { label: "Year", value: 2025 },
      ],
      cardImage: crowdsourced_image,
      cardImageAlt: "Price intelligence dashboard preview",
      backgroundStory: [
        "Local shoppers often face inconsistent pricing and 'cheating' due to a lack of centralized, reliable data. Without a transparent price guide, budgeting becomes difficult and market exploitation common.",
        "A community driven platform was created to solve this problem. It allows users to share real-time vegetable prices, ensuring fair trade and informed purchasing decisions for everyone in the community.",
        "The design emphasizes clarity and ease of use, with a clean layout and smooth navigation, allowing users to quickly check prices and contribute data with confidence.",
      ],
      contribution: [
        "User research",
        "User flow",
        "Design systems",
        "Interactive prototyping",
        "User testing",
      ],
      designGoal:
        "To build a high-trust, minimalist interface that makes contributing and accessing price data effortless for everyday users.",
      outcome:
        "A high-trust, data-accurate platform that empowers shoppers with real-time price intelligence, reducing market exploitation and improving local budgeting.",
      keySolutions: [
        "Crowdsourced Price Reporting",
        "Live Price Guide",
        "Community Validation System",
      ],
      ideaGeneration: {
        title: "Generating ideas from findings...",
        description:
          "Translating market research and user pain points into a community-driven feature set that prioritizes data transparency and ease of use.",
      },
      informationArchitecture: {
        title: "Information Architecture",
        description:
          "A flat, accessible structure focusing on two primary actions: Price Discovery (Search/Browse) and Price Contribution (Submission), supported by a clean admin oversight system.",
        image: architecture,
        imageAlt: "Information architecture diagram",
      },
      visualIdentity: {
        title: "Visual Identity & Mockups",
        image: crowdsourced_image,
        imageAlt: "Design system and UI mockups gallery",
      },
      insights: {
        title: "Key Insights & Growth",
        description:
          "Mastered the art of designing for community trust, ensuring that a data-heavy platform feels approachable and simple for the end-user.",
      },
    },
  ],

  missionAndGoals: [
    {
      id: 1,
      category: "mission",
      title: "Mission",
      color: "#6B6B59",
      styling: "bg-[#6B6B59]/[0.08] text-[#6B6B59]",
      icon: "MdOutlineWork",
      description:
        "To create digital products that are not only functional but also delightful to use, bridging the gap between design and development.",
    },
    {
      id: 2,
      category: "vision",
      title: "Vision",
      color: "#6B6B59",
      styling: "bg-[#6B6B59]/[0.08] text-[#6B6B59]",
      icon: "MdOutlineVisibility",
      description:
        "To be a leading hybrid creator, known for crafting seamless digital experiences that empower users and drive innovation.",
    },
    {
      id: 3,
      category: "values",
      title: "Values",
      color: "#6B6B59",
      styling: "bg-[#6B6B59]/[0.08] text-[#6B6B59]",
      icon: "MdOutlineFavoriteBorder",
      description:
        "User-Centricity, Innovation, Collaboration, Integrity, Continuous Learning.",
    },
  ],
  footer: {
    // Download Options

    header: "Let’s build something that makes an impact",
    developer: "Built by Muktar Adamu",
    location: "Abuja, Nigeria",
    timezone: "GMT+1",
    email: "muktaradamu677@gmail.com",
    emailIcon: "MdMarkEmailUnread",
    description:
      "I’m currently available for new opportunities and freelance projects . Let’s talk if you are looking for digital product designer.",
    social: [
      {
        platform: "LinkedIn",
        url: "https://bit.ly/muktar-adamu-linkedin",
        icon: "FaLinkedinIn",
        color: "#0077b5",
      },
      {
        platform: "GitHub",
        url: "https://github.com/leomass677",
        icon: "FaGithub",
        color: "#333333",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/leomas677?igsh=N2x4cjJjZjJyNHZn&utm_source=qr",
        icon: "FaInstagram",
        color: "#e4405f",
      },
      {
        platform: "Dribbble",
        url: "/",
        icon: "FaDribbble",
        color: "#ea4c89",
      },
    ],

    getTime12Hour: function () {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Africa/Lagos",
      };
      return now.toLocaleTimeString("en-US", options);
    },
    text: "© 2026 Muktar Adamu. All rights reserved.",
    downloads: {
      cv: {
        title: "Download CV",
        url: muktar_pdf,
        fileSize: function () {
          const fileSizeInBytes = 1024 * 1024; // Example file size (1 MB)
          const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
          return `${fileSizeInMB} MB`;
        },
        format: "PDF",
      },
    },
  },
};

export default workDetails;
