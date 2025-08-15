import React from "react";
export default function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="bg-[#0a0a0a] rounded-xl p-4 transition-transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40 hover:cursor-pointer">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 w-full h-44 object-cover"
        loading="lazy"
        decoding="async"
        width="600"
        height="300"
      />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((t, i) => (
          <span key={i} className="px-3 py-1 text-xs bg-purple-500/90 text-white rounded-full">{t}</span>
        ))}
      </div>
    </div>
  );
}
