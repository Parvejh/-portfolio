import React from "react";
import { useEffect, useState } from "react";

export default function Hero() {
  // live typing demo (short & wrapped-safe)
  const codeLines = [
    "import express from 'express'",
    "import cors from 'cors'",
    "import mongoose from 'mongoose'",
    "",
    "const app = express()",
    "app.use(cors())",
    "app.use(express.json())",
    "",
    "mongoose.connect(process.env.MONGO_URI)",
    "  .then(() => console.log('MongoDB connected ✔'))",
    "  .catch(err => console.error('DB error', err))",
    "",
    "app.get('/api/health', (req,res)=>res.json({ ok:true }))",
    "",
    "app.listen(3000, () => console.log('Server on :3000 🚀'))"
  ];

  const [typed, setTyped] = useState([]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped((prev) => (i < codeLines.length ? [...prev, codeLines[i++]] : prev));
      if (i >= codeLines.length) clearInterval(id);
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-black text-white pt-24 md:pt-28 pb-14 md:pb-20 overflow-hidden"
    >
      {/* hard clamp container width on all devices */}
      <div className="mx-auto w-full max-w-7xl px-3 xs:px-4 sm:px-6 overflow-x-hidden">
        {/* glass card */}
          <div
            className="
              glass-card w-full max-w-full overflow-hidden
              ring-1 ring-white/10
              px-4 sm:px-8 md:px-12
              py-8 sm:py-12 md:py-16
              /* shadow only from sm+ */
              sm:shadow-[0_24px_100px_-30px_rgba(168,85,247,.55)]
            "
          >
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start min-w-0">
            {/* LEFT SIDE */}
            <div className="text-center md:text-left min-w-0">
              <h1 className="text-[28px] xs:text-[34px] sm:text-[42px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.12] md:leading-[0.95] tracking-tight break-words">
                <span className="headline-span headline-1">Build.</span><br />
                <span className="headline-span headline-2">Ship.</span><br />
                <span className="headline-span headline-3">Scale.</span>
              </h1>

              <p className="mt-4 sm:mt-5 text-slate-300/95 text-[15px] sm:text-base md:text-xl max-w-[44rem] mx-auto md:mx-0">
                Full-Stack Developer crafting reliable web apps with React, Node.js,
                Express & MongoDB — focused on performance and clean architecture.
              </p>

              {/* CTAs: full-width on mobile, capped so they never bulge */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-5 items-stretch sm:items-center justify-center md:justify-start">
                <a href="#projects" className="btn-neon text-center w-full sm:w-auto max-w-[18rem] mx-auto sm:mx-0">
                  See Projects
                </a>
                <a href="#contact" className="btn-outline text-center w-full sm:w-auto max-w-[18rem] mx-auto sm:mx-0">
                  Contact Me
                </a>
              </div>

              {/* tech chips */}
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-2">
                {["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT/RBAC"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[11px] sm:text-xs rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full min-w-0">
              {/* Editor */}
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#0b0b12]/80 backdrop-blur-xl">
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-300">server/index.js</div>
                  <div className="w-6" />
                </div>

                {/* Code area: wrap + inner scroll only */}
                <div className="px-3 sm:px-4 py-3 sm:py-4 font-mono text-[11px] sm:text-[12.5px] leading-6 text-slate-200/95 max-h-56 sm:max-h-80 overflow-auto">
                  {typed.length === 0 ? (
                    <div className="h-5" />
                  ) : (
                    typed.map((line, i) => (
                      <div key={i} className="whitespace-pre-wrap break-words">
                        <span className="text-slate-500 select-none pr-2 sm:pr-3">
                          {String(i + 1).padStart(2, " ")}.
                        </span>
                        <span>{line}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Terminal */}
              <div className="mt-3 sm:mt-4 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#050508]/85 backdrop-blur-xl">
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

        {/* ambient glow (kept off on tiny screens by CSS below) */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[28rem] md:w-[40rem] h-[28rem] md:h-[40rem] rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 blur-3xl opacity-20" />
        </div>
      </div>
    </section>
  );
}
