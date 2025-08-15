// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // your pinned hero with live code
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import "./index.css";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <BrowserRouter>
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            {/* Optional: list page only */}
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<div className="p-10 text-center">Not Found</div>} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
