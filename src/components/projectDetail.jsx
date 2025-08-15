import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="btn-outline px-5 py-3 inline-block">Back to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-black text-white pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-card ring-1 ring-white/10 px-6 md:px-10 py-8 md:py-10">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-extrabold">{project.title}</h1>
            <div className="flex gap-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-neon px-5 py-2">Visit Live</a>
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-outline px-5 py-2">Source</a>
              )}
            </div>
          </div>

          <p className="mt-4 text-slate-300/95">{project.longDescription}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {project.features?.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                {project.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <Link to="/" className="btn-outline px-5 py-2">← Back to Home</Link>
          </div>
        </div>
      </div>

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[36rem] md:w-[50rem] h-[36rem] md:h-[50rem] rounded-full
                        bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 blur-3xl opacity-20"></div>
      </div>
    </section>
  );
}
