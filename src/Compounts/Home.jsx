import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedref = useRef(null);

  useEffect(() => {
    const option = {
      strings: [
        "Welcome To My Portfolio",
        "it's Tushar Yukki",
        "I'm The Web Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedref.current, option);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedref}></h1>
        </div>
        <div className="right">
          <div
            className="img "
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img src="./images/study.boy.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
