import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Switch, Fragment } from "react-router-dom";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import BlogNavbar from "./components/BlogNavbar"
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <>
              <Particles
                className="particles-canvas" 
                params={{
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
                }}
              />
              <Navbar />
              <Header />
              <AboutMe />
              <Skills />
              <Experience />
            </>
          }/>
          <Route exact path="/blog" element={
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