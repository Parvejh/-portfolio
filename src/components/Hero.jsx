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
      setTyped((prev) => (i < codeLines.length ? [...prev, codeLines[i++]] : prev));
      if (i >= codeLines.length) clearInterval(id);
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative bg-black text-white pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Glass card layout: left text + right editor */}
        <div className="glass-card px-8 md:px-12 py-14 md:py-18 ring-1 ring-white/10 shadow-[0_30px_120px_-30px_rgba(168,85,247,.55)]">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT TEXT */}
            <div className="text-center md:text-left">
              <h1 className="text-[44px] md:text-[72px] font-extrabold leading-[0.95] tracking-tight">
                <span className="headline-span headline-1">Build.</span><br />
                <span className="headline-span headline-2">Ship.</span><br />
                <span className="headline-span headline-3">Scale.</span>
              </h1>
              <p className="mt-6 text-slate-300/95 text-lg md:text-xl">
                Full-Stack Developer crafting reliable web apps with React, Node.js,
                Express & MongoDB — focused on performance, clean architecture, and DX.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-5">
                <a href="#projects" className="btn-neon">See Projects</a>
                <a href="#contact" className="btn-outline">Contact Me</a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-2">
                {["React","Node.js","Express","MongoDB","REST APIs","JWT/RBAC"].map(t=>(
                  <span key={t} className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </div>

            {/* RIGHT: VS Code–style editor + terminal */}
            <div className="w-full">
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#0b0b12]/80 backdrop-blur-xl shadow-[0_20px_80px_-30px_rgba(59,130,246,.35)]">
                <div className="flex items-center justify-between px-4 py-2 bg-white/5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
                    <span className="h-3 w-3 rounded-full bg-green-400/80"></span>
                  </div>
                  <div className="text-xs text-slate-300">server/index.js</div>
                  <div className="w-6" />
                </div>

                <div className="px-4 py-4 font-mono text-[12.5px] leading-6 text-slate-200/95 editor-grid">
                  {typed.length === 0 ? (
                    <div className="typing-caret h-5" />
                  ) : (
                    typed.map((line, i) => (
                      <div key={i} className="whitespace-pre">
                        <span className="text-slate-500 select-none pr-3">{String(i + 1).padStart(2, " ")}.</span>
                        <span className="syntax">
                          {line}
                          {i === typed.length - 1 && typed.length < codeLines.length && <span className="caret ml-1" />}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-4 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#050508]/85 backdrop-blur-xl shadow-[0_14px_60px_-30px_rgba(236,72,153,.35)]">
                <div className="px-4 py-2 text-xs text-slate-300 bg-white/5">Terminal</div>
                <div className="px-4 py-3 font-mono text-[12.5px] leading-6 text-slate-200/95">
                  <div className="text-emerald-300">$ node index.js</div>
                  <div>Server on :3000 🚀</div>
                  <div className="text-emerald-300">MongoDB connected ✔</div>
                  <div className="text-slate-400">GET /api/health 200 12ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[36rem] md:w-[50rem] h-[36rem] md:h-[50rem] rounded-full
                          bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 blur-3xl opacity-25"></div>
        </div>
      </div>
    </section>
  );
}
