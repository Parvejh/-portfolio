import React from "react";
import { useEffect, useState } from "react";

export default function Hero() {
  // Live typing demo code
  const codeLines = [
    "import express from 'express';",
    "import cors from 'cors';",
    "import mongoose from 'mongoose';",
    "",
    "const app = express();",
    "app.use(cors());",
    "app.use(express.json());",
    "",
    "mongoose.connect(process.env.MONGO_URI)",
    "  .then(() => console.log('MongoDB connected ✔'))",
    "  .catch(err => console.error('DB error', err));",
    "",
    "app.get('/api/health', (req, res) => res.json({ ok: true }));",
    "",
    "app.listen(3000, () => console.log('Server on :3000 🚀'));"
  ];

  const [typed, setTyped] = useState([]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(prev => (i < codeLines.length ? [...prev, codeLines[i++]] : prev));
      if (i >= codeLines.length) clearInterval(id);
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="
        relative bg-black text-white
        pt-24 md:pt-28 pb-14 md:pb-20
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* tone down stripes on mobile */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-stripes opacity-[0.04] hidden sm:block" />

        {/* Glass card */}
        <div
          className="
            glass-card ring-1 ring-white/10
            px-4 sm:px-8 md:px-12
            py-8 sm:py-12 md:py-16
            shadow-[0_24px_100px_-30px_rgba(168,85,247,.55)]
          "
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* LEFT */}
            <div className="text-center md:text-left">
              {/* smaller headings on mobile */}
              <h1 className="text-[34px] sm:text-[44px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.05] md:leading-[0.95] tracking-tight">
                <span className="headline-span headline-1">Build.</span><br />
                <span className="headline-span headline-2">Ship.</span><br />
                <span className="headline-span headline-3">Scale.</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-slate-300/95 text-base sm:text-lg md:text-xl">
                Full-Stack Developer crafting reliable web apps with React, Node.js,
                Express & MongoDB — focused on performance and clean architecture.
              </p>

              {/* mobile-friendly buttons (full width on small screens) */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-5 items-stretch sm:items-center justify-center md:justify-start">
                <a href="#projects" className="btn-neon text-center w-full sm:w-auto">See Projects</a>
                <a href="#contact" className="btn-outline text-center w-full sm:w-auto">Contact Me</a>
              </div>

              {/* compact chips on mobile */}
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-2">
                {["React","Node.js","Express","MongoDB","REST APIs","JWT/RBAC"].map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] sm:text-xs rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: Editor + Terminal */}
            <div className="w-full">
              {/* Editor wrapper: cap height on mobile, allow scroll */}
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#0b0b12]/80 backdrop-blur-xl shadow-[0_18px_70px_-30px_rgba(59,130,246,.35)]">
                {/* title bar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80"></span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-300">server/index.js</div>
                  <div className="w-6" />
                </div>

                {/* code area: smaller font on mobile, scrollable */}
                <div
                  className="
                    px-3 sm:px-4 py-3 sm:py-4
                    font-mono text-[11px] sm:text-[12.5px] leading-6
                    text-slate-200/95 editor-grid
                    max-h-56 sm:max-h-80 overflow-auto
                  "
                >
                  {typed.length === 0 ? (
                    <div className="typing-caret h-4 sm:h-5" />
                  ) : (
                    typed.map((line, i) => (
                      <div key={i} className="whitespace-pre">
                        <span className="text-slate-500 select-none pr-2 sm:pr-3">
                          {String(i + 1).padStart(2, " ")}.
                        </span>
                        <span className="syntax">
                          {line}
                          {i === typed.length - 1 && typed.length < codeLines.length && <span className="caret ml-1" />}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Terminal: also capped height & compact */}
              <div className="mt-3 sm:mt-4 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#050508]/85 backdrop-blur-xl shadow-[0_12px_52px_-30px_rgba(236,72,153,.35)]">
                <div className="px-3 sm:px-4 py-2 text-[10px] sm:text-xs text-slate-300 bg-white/5">Terminal</div>
                <div className="px-3 sm:px-4 py-2 sm:py-3 font-mono text-[11px] sm:text-[12.5px] leading-6 text-slate-200/95 max-h-32 overflow-auto">
                  <div className="text-emerald-300">$ node index.js</div>
                  <div>Server on :3000 🚀</div>
                  <div className="text-emerald-300">MongoDB connected ✔</div>
                  <div className="text-slate-400">GET /api/health 200 12ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ambient glow (hide on very small to avoid crowding) */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[28rem] md:w-[40rem] h-[28rem] md:h-[40rem] rounded-full
                          bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
}
