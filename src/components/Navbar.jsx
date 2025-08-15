import React from "react";
import gitLogo from '../assets/gitBlack.png'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        <Link to="/" className="inline-block px-5 py-2 rounded-full ring-1 ring-white/10 bg-black/40 text-3xl md:text-4xl font-semibold logo-gradient">
          Parvej Hussain
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4 text-lg font-medium">
            <li className="relative group">
                <Link to="/projects" className="text-slate-300 hover:text-white">Projects
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            <li className="relative group">
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
              <a href="https://github.com/Parvejh" className="text-slate-300">
                  <img src={gitLogo} alt="" className="bg-transparent h-10 rounded-full" />
              </a>
        </div>
      </div>
    </nav>
  );
}
