import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import BlogNavbar from "./components/BlogNavbar"
import Blog from "./components/Blog";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 900
        }
      },
      shape: {
        type: "circle",
        stroke: {
          width: 4,
          color: "#340DF6",
        }
      }
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Particles
                className="particles-canvas"
                init={particlesInit}
                options={particlesOptions}
              />
              <Navbar />
              <Header />
              <AboutMe />
              <Skills />
              <Experience />
            </>
          }/>
          <Route path="/blog" element={
            <>
              <BlogNavbar />
              <Blog />
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;