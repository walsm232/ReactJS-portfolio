import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

// Adding test comment for AWS Amplify


function App() {
  return (
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
  );
}

export default App;