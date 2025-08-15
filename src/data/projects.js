import saneBloggerImg from  '../assets/SaneBlogger.png'
import nodeImg from  '../assets/node.png'

export const projects = [
  {
    id: 1,
    slug: "employee-management-system",
    title: "Employee Management System",
    tagline: "Role-based tasks, activity tracking, admin dashboard.",
    longDescription:
      "A full-stack system to manage employees, roles, and tasks with real-time updates and audit logging. Built for speed and reliability.",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.IO"],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://employeemanagementsystem-0j39.onrender.com",
    repoUrl: "https://github.com/Parvejh/EmployeeManagementSystem",
    features: [
      "Role-based access control (RBAC)",
      "Realtime task updates via websockets",
      "Advanced filters & search",
      "Audit logs and activity timeline",
    ],
  },
  {
    id: 2,
    slug: "ecommerce-app",
    title: "E-commerce App",
    tagline: "Secure checkout, filters, admin, analytics.",
    longDescription:
      "Modern e‑commerce application with product management, cart/checkout, and admin analytics dashboard.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://your-shop.example.com",
    repoUrl: "https://github.com/yourname/ecommerce-app",
    features: [
      "Stripe payments & webhook verification",
      "Product filters, wishlists, and reviews",
      "Admin dashboard with charts",
      "Image optimization and lazy loading",
    ],
  },
  {
    id: 3,
    slug: "ai-resume-reviewer",
    title: "AI Resume Reviewer",
    tagline: "AI feedback, scoring, rewrite suggestions.",
    longDescription:
      "Upload a resume and get AI‑driven insights, section scores, and concrete rewrite suggestions to improve hiring chances.",
    tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1556157381-36fdc0720a8b?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://resume-reviewer.example.com",
    repoUrl: "https://github.com/yourname/ai-resume-reviewer",
    features: [
      "Section‑wise scoring and rubric",
      "Rewrite suggestions & bullet polishing",
      "Export improved resume",
      "Auth + rate limiting",
    ],
  },
  {
    id: 4,
    slug: "Sane-Blogger",
    title: "Sane Blogger",
    tagline: "Minimal, fast blog engine with auth, posts & SEO slugs.",
    longDescription:
      "User auth (Passport) with protected routes Create/edit/delete posts + draft/publish flow SEO-friendly slugs & meta basics MVC-style controllers/routes/models Simple, responsive EJS views",
    tech: ["Node.js", "Express", "MongoDB", "Passport", "EJS", "CSS"],
    image:saneBloggerImg,
    liveUrl: "https://sane-blogger.onrender.com/",
    repoUrl: "https://github.com/Parvejh/Sane-Blogger",
    features: [
      "Secure Authentication",
      "Post Management (CRUD)",
      "Responsive EJS Views",
      "Error Handling & Logging",
      "Draft & Publish Workflow",
    ],
  },
  {
    id: 5,
    slug: "NodeJs-Authentication",
    title: "NodeJs-Authentication",
    tagline: "Secure, modular auth with sessions/JWT, protected routes, and validation.",
    longDescription:
      "Signup/login with password hashing (bcrypt) Session-based auth (Passport) or JWT-ready structure Protected routes + auth/guest middleware Input validation & helpful error messages Clean MVC structure (controllers/routes/models)",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "bcrypt", "Passport/Session", "EJS"],
    image:nodeImg,
    liveUrl: "https://nodejs-authentication-4kyu.onrender.com",
    repoUrl: "https://github.com/Parvejh/NodeJs-Authentication",
    features: [
      "User Registration & Login",
      "Password Security",
      "Session-Based Authentication",
      "Clean MVC Structure",
      "Protected Routes",
    ],
  },
];