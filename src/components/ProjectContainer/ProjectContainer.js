import React, { useState } from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import img1 from "../../assests/project1.png";
import img2 from "../../assests/project2.png";
import img3 from "../../assests/project3.png";
import img4 from "../../assests/project4.png";

const ProjectContainer = () => {
  const [choosen, setChoosen] = useState(true);

  const client_projects = [
    {
      img: img1,
      title: "COVID 19 Tracker",
      desc:
        "This website shows overview of the covid 19 situation and also provide details country wise.",
      link: "https://covid-19-tracker-application-rc.netlify.app/",
    },
  ];

  const clone_works = [
    {
      img: img2,
      title: "Amazon Clone",
      desc:
        "Clone of Amazon with some functionalities like authentication, adding items to the cart, etc.",
      link: "https://clone-dd0a5.web.app/",
    },
    {
      img: img3,
      title: "Youtube Clone",
      desc:
        "Clone of Youtube with some functionalities like display random videos, etc.",
      link: "https://clone-65a08.web.app/",
    },
    {
      img: img4,
      title: "WhatsApp Clone",
      desc:
        "Clone of WhatsApp with some functionalities like create new groups, chat with different people, etc.",
      link: "https://chat-app-application-mastery.netlify.app/",
    },
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here are some projects which are changing many people lives and some
        clone works of large tech tack companies.
      </p>
      <div className="projectContainer__title">
        <h4
          className={choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(true)}
        >
          Client Projects
        </h4>
        <h4
          className={!choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(false)}
        >
          Clone Projects
        </h4>
      </div>

      {choosen ? (
        <div className="projectContainer__projects">
          {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <div className="projectContainer__projects">
          {clone_works.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      )}
    </Element>
  );
};

export default ProjectContainer;
