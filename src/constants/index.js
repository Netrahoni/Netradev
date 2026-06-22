import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Meta Front-End Developer",
    company_name: "Coursera (Certified)",
    icon: meta,
    iconBg: "#383E56",
    date: "Early 2024",
    points: [
      "Completed Meta's professional front-end developer certification via Coursera.",
      "Built and deployed responsive web applications using React.js best practices.",
      "Learned accessibility standards, component architecture, and version control.",
      "Applied knowledge to real-world projects involving UI/UX and web performance.",
    ],
  },
  {
    title: "Data Analytics Workshop Participant",
    company_name: "AGC (5-Day Workshop)",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Mid 2024",
    points: [
      "Participated in a 5-day intensive Hands-on Data Analytics workshop at AGC.",
      "Worked with Python libraries including Pandas and Matplotlib for data exploration.",
      "Analyzed real-world datasets and built visualizations to derive meaningful insights.",
      "Gained exposure to Big Data concepts and database management techniques.",
    ],
  },
  {
    title: "Nepali Student Association — Secretary",
    company_name: "Amritsar Group of Colleges",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sept 2024 – Sept 2025",
    points: [
      "Represented the student body and led teams to organize the annual Dashain festival for 100+ guests.",
      "Managed all documentation, budgets, and liaison with college department heads.",
      "Coordinated cultural events and ensured smooth execution of student-focused programs.",
      "Built leadership, administration, and team communication skills in a large institution.",
    ],
  },
  {
    title: "Placement Cell Technical Coordinator",
    company_name: "Amritsar Group of Colleges",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2025 – Jun 2026",
    points: [
      "Leveraged Generative AI for student prep and leading social media/branding initiatives.",
      "Designed digital assets and managed outreach for corporate recruitment drives.",
      "Coordinated with HR teams and external companies for campus placement events.",
      "Improved student visibility through strategic AI-powered content creation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Netra's payroll system saved us hours every month. The dashboard he built is intuitive and reliable — exactly what we needed.",
    name: "Priya Sharma",
    designation: "HR Manager",
    company: "Tech Solutions Pvt.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "The chess AI he implemented with Alpha-Beta pruning was surprisingly strong. Netra clearly understands algorithms at a deep level.",
    name: "Dr. Anil Verma",
    designation: "Professor, CS Dept",
    company: "Amritsar Group of Colleges",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Working with Netra on the placement cell was great. He's organized, tech-savvy, and always brings creative ideas to the table.",
    name: "Rajesh Kumar",
    designation: "Placement Officer",
    company: "Amritsar Group of Colleges",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

const projects = [
  {
    name: "Smart Payroll Management System",
    description:
      "A full-stack web application to automate employee management and salary calculations. Features real-time attendance tracking, leave management, automated PDF payslip generation, and secure NoSQL data storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Netrahoni/SmartPayroll",
    live_demo_link: "https://smart-payroll-two.vercel.app",
  },
  {
    name: "Chess AI Engine",
    description:
      "A functional Chess Engine in Python using the Minimax algorithm with Alpha-Beta pruning for strategic decision-making. Supports full game logic including move validation, castling, en passant, and promotion.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "minimax",
        color: "green-text-gradient",
      },
      {
        name: "alpha-beta-pruning",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Netrahoni/Chess-AI",
    live_demo_link: "https://chess-final-yow5.vercel.app",
  },
  {
    name: "Interactive Chess Application",
    description:
      "A fully interactive Human vs. Human chess game built in Java with Java Swing. Features real-time state management, OOP architecture, dynamic game timers, drag-and-drop, and a captured piece tracker.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "java-swing",
        color: "green-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Netrahoni/Chess-final",
    live_demo_link: "https://chess-final-yow5.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
