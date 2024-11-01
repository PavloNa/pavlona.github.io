import Intro from "./components/Intro/intro";
import NavBar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
