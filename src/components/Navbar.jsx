import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import gitLogo from "../assets/gitBlack.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Smooth-scroll to #contact (works from any route)
  const goContact = (e) => {
    e.preventDefault();
    const scrollToContact = () =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToContact, 100);
    } else {
      scrollToContact();
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="inline-block px-5 py-2 rounded-full ring-1 ring-white/10 bg-black/40
                     text-2xl md:text-4xl font-semibold logo-gradient"
          aria-label="Go to homepage"
        >
          Parvej Hussain
        </Link>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-6 text-lg font-medium">
            <li className="relative group">
              <NavLink
                to="/projects"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </NavLink>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              {/* use anchor for hover underline, but intercept click */}
              <a
                href="#contact"
                onClick={goContact}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          <a
            href="https://github.com/Parvejh"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300"
            aria-label="Open GitHub profile"
          >
            <img src={gitLogo} alt="GitHub" className="h-10 w-10 rounded-full" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-white/10 bg-black/40 text-slate-200"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute left-0 right-0 top-1 h-0.5 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1/2 -mt-0.5 h-0.5 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 right-0 bottom-1 h-0.5 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden
                    ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-black/80 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-2">
            <NavLink
              to="/projects"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl ring-1 ring-white/10 bg-white/5 text-base
                 ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`
              }
            >
              Projects
            </NavLink>

            <a
              href="#contact"
              onClick={goContact}
              className="block px-4 py-3 rounded-xl ring-1 ring-white/10 bg-white/5 text-slate-300 hover:text-white text-base"
            >
              Contact
            </a>

            <a
              href="https://github.com/Parvejh"
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-3 rounded-xl ring-1 ring-white/10 bg-white/5 text-slate-300 hover:text-white text-base"
            >
              <span className="inline-flex items-center gap-3">
                <img src={gitLogo} alt="GitHub" className="h-6 w-6 rounded-full" />
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
