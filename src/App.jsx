import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}