import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#0a0a0a] rounded-xl p-4 transition-transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/40">
      <Link to={`/projects/${project.slug}`} className="block group">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width="600"
            height="338"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-400 text-sm mt-1">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.slice(0, 4).map((t, i) => (
            <span key={i} className="px-3 py-1 text-xs bg-white/5 text-slate-300 rounded-full ring-1 ring-white/10">
              {t}
            </span>
          ))}
        </div>
      </Link>

      {/* Quick actions */}
      <div className="mt-4 flex items-center gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-neon px-4 py-2 text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          Live
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline px-4 py-2 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
