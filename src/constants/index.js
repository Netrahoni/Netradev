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
  chess,
  payroll,
  ml,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
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
    title: "President",
    company_name: "Placement Committee – Amritsar Group of Colleges",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "April 2026 – July 2026",
    points: [
      "AI Integration: Leveraged Generative AI tools to automate corporate branding asset creation and optimize workload workflows, while scaling personalized placement related events frameworks.",
      "Corporate Branding: Spearheaded digital asset creation and strategic media outreach for high-volume corporate recruitment drives.",
      "Team Management: Led a committee of student coordinators to organize campus-wide placement activities and corporate engagement events.",
    ],
  },
  {
    title: "Secretary",
    company_name: "Nepali Student Association (NSA) – AGC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 – July 2026",
    points: [
      "Operations Management: Handled end-to-end documentation, financial budgeting, and administrative liaison with college department heads.",
      "Event Logistics: Headed cross-functional student teams to successfully design and host regional cultural festivals hosting over 100+ guests.",
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
    name: "Credit Card Fraud Detection",
    description:
      "Developed a Logistic Regression model achieving 87% accuracy in predicting fraudulent financial transactions. Reduced false positives by 16% via hyperparameter tuning and resolved extreme class imbalance for a 15% performance boost. Engineered a threshold-optimized function for live decision-making and serialized the final model using Joblib.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://colab.research.google.com/drive/1_Ei2oUstLcXZYnYkAAs1r1rD1PtJFDXr",
    live_demo_link: "https://colab.research.google.com/drive/1_Ei2oUstLcXZYnYkAAs1r1rD1PtJFDXr",
  },
  {
    name: "Chess AI Engine & Web Application",
    description:
      "Built a real-time chess engine using Minimax with Alpha-Beta Pruning to optimize move search depths. Hosted heavy AI calculations in Supabase Edge Functions to offload computation from the browser client. Managed international rules, validation logs, and countdown timers via React hooks with a TypeScript/Tailwind UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/Netrahoni/Chess-AI",
    live_demo_link: "https://chess-final-yow5.vercel.app",
  },
  {
    name: "Smart Payroll Management System",
    description:
      "Built a full-stack MongoDB, Express.js, React, and Node.js web application to automate workforce administration. Created RESTful APIs and secure dashboards to automate real-time attendance tracking and complex salary/tax math. Integrated backend pipelines to dynamically generate and display encrypted PDF payslips for employees.",
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
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: payroll,
    source_code_link: "https://github.com/Netrahoni/SmartPayroll",
    live_demo_link: "https://smart-payroll-two.vercel.app",
  },
];

const certifications = [
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera",
    date: "Early 2024",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    image: "",
  },
  {
    name: "Hands-on Data Analytics 5-Day Workshop",
    issuer: "Amritsar Group of Colleges (AGC)",
    date: "Mid 2024",
    link: "https://www.agcamritsar.in",
    image: "",
  },
  {
    name: "Introduction to Blockchain: Industry Applications",
    issuer: "Udemy",
    date: "Late 2024",
    link: "https://www.udemy.com",
    image: "",
  },
  {
    name: "Graphics Designer Certification of Appreciation",
    issuer: "Amritsar Group of Colleges (AGC)",
    date: "2024",
    link: "https://www.agcamritsar.in",
    image: "",
  },
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "2025",
    link: "https://nptel.ac.in",
    image: "",
  },
  {
    name: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "2025",
    link: "https://nptel.ac.in",
    image: "",
  },
];

export { services, technologies, experiences, testimonials, projects, certifications };
