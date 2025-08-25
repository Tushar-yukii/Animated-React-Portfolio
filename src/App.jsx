import React, { useEffect } from "react";

import "./App.css";
import Navbar from "./Compounts/Navbar";
import Home from "./Compounts/Home";
import Skills from "./Compounts/Skills";
import Project from "./Compounts/Project";
import Contant from "./Compounts/Contant";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Skills />
        <Project />
        <Contant />
      </div>
    </>
  );
}

export default App;
