import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import React  from "react";l
function App() {
  return (
    <>
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About/>
      <Experience />
      <Projects />
      <Testimonial/>
      <Footer />
    </div>
    </>
  )
}

export default App;
