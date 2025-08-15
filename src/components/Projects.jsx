import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Employee Management System",
      description: "Role-based tasks, activity tracking, and admin oversight.",
      tags: ["Node.js","Express","MongoDB","Socket.IO"],
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "E-commerce App",
      description: "Secure checkout, filters, admin dashboard & analytics.",
      tags: ["React","Node.js","MongoDB"],
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "AI Resume Reviewer",
      description: "AI suggestions, scoring, and improvement highlights.",
      tags: ["OpenAI","Node.js","React"],
      image: "https://images.unsplash.com/photo-1556157381-36fdc0720a8b?q=80&w=1200&auto=format&fit=crop"
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p,i)=> <ProjectCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
}
