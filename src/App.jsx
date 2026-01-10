import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import BlogNavbar from "./components/BlogNavbar"
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={
            <>
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
          <Route path="/blog/:slug" element={
            <>
              <BlogNavbar />
              <BlogPost />
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;