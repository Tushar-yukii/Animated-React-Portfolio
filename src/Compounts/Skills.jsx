import React from "react";
import skills from "./data/skills.json";
const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items" data-aos="flip-left" data-aos-duration="1000">
          <img src="images/html.png" />
          <img src="images/css.png" />
          <img src="images/javascript.png" />
          <img src="images/react.png" />
          <img src="images/node.png" />
        </div>
      </div>
    </>
  );
};

export default Skills;
