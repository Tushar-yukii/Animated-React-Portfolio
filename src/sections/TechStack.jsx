import React from "react";
import TitleHeader from "../Compounts/TitleHeader";
import { techStackIcons } from "../constants";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div key={icon.name}>{icon.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
