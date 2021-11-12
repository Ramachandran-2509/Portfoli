import React from "react";
import "./SkillContainer.css";
import { Element } from "react-scroll";
import skillImg from "../../assests/skill.jpg"
import LinearProgress from "@material-ui/core/LinearProgress";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
        <img src={skillImg} alt="" />
      </div>
      <div className="skillcontainer__text">
        <h2>SKILLSETS</h2>
        <div className="skillcontainer__skillset">
            <h5>React</h5>
            <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={90} />
        </div>
        </div>
        <div className="skillcontainer__skillset">
            <h5>NodeJS</h5>
            <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={70} />
        </div>
        </div>
        <div className="skillcontainer__skillset">
            <h5>Python</h5>
            <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={60} />
        </div>
        </div>
        <div className="skillcontainer__skillset">
            <h5>Django</h5>
            <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={50} />
        </div>
        </div>
        <div className="skillcontainer__skillset">
            <h5>MongoDB</h5>
            <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={55} />
        </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
