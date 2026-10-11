import { useEffect } from "react";
import Intro from "./components/Intro/intro";
import NavBar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/Projects";

function App() {
  // Scroll reveal: fade elements up the first time they enter the viewport
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("shown");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll(".sectionTitle, .sectionLead, .card, .contactForm").forEach((el) => {
      // stagger siblings (cards in a grid) by 70ms each
      const index = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty("--delay", `${Math.min(index, 4) * 70}ms`);
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
