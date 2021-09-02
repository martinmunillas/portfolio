import React from "react";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

import "../styles/components/Projects.scss";
import ProjectItem from "./ProjectItem";
import { hasntErrors, State } from "../redux/reducer";

const Projects: React.FC = () => {
  const projects = useSelector((state: State) =>
    hasntErrors(state) ? state.projects : []
  );
  const github = useSelector((state: State) =>
    hasntErrors(state) ? state.info.github : ""
  );
  return (
    <div className='projects'>
      <h1 className='projects__heading'>
        <Fade bottom cascade>
          Projects.
        </Fade>
      </h1>
      <div className='projects__content'>
        {projects.map((project, index) => (
          <ProjectItem {...project} key={index} />
        ))}
      </div>
      <a
        href={github}
        target='_blank'
        rel='noopener noreferrer'
        style={{ textDecoration: "underline" }}
      >
        Check all my projects on my github →
      </a>
    </div>
  );
};

export default Projects;
