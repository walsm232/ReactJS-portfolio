import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SEO from "./components/SEO";
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
              <SEO 
                title="Michael Walsh - Software Engineer Portfolio"
                description="Software Engineer originally from Ireland, now based in Spain. Specializing in Kubernetes, platform engineering, and cloud-native technologies. Co-founder of Kubernetes Dublin Meetup."
                path="/"
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
              <SEO 
                title="Blog - Michael Walsh"
                description="Blog posts about software engineering, platform engineering, Kubernetes, cloud-native technologies, and industry insights."
                path="/blog"
              />
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