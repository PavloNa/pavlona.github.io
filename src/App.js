import { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Intro from "./components/Intro/intro";
import NavBar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/Projects";
import Dither from "./components/Dither/dither";
import { BlogList, BlogPost } from "./components/Blog/blog";

function Home() {
  const { hash } = useLocation();

  useEffect(() => { document.title = "Pavlo Nazarchuk · Software Engineer"; }, []);

  // arriving from another page with /#section: jump to that section once it exists
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

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
    document.querySelectorAll(".home :is(.sectionHead, .card, .row, .contactForm)").forEach((el) => {
      // stagger siblings (cards in a grid) by 70ms each
      const index = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty("--delay", `${Math.min(index, 4) * 70}ms`);
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <main className="home">
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

function NotFound() {
  useEffect(() => { document.title = "Page not found · Pavlo Nazarchuk"; }, []);
  return (
    <section className="blog">
      <header className="sectionHead">
        <h1 className="sectionTitle">Page not found</h1>
        <p className="comment">nothing lives here</p>
      </header>
      <Link to="/" className="btn">Back to the home page</Link>
    </section>
  );
}

function App() {
  const { pathname, hash } = useLocation();

  // new page starts at the top, unless it's heading for a section
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="App">
      <Dither />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<main><NotFound /></main>} />
      </Routes>
    </div>
  );
}

export default App;
