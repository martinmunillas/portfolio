import React from "react";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";

import ProjectItem from "./ProjectItem";
import { hasntErrors, State } from "../redux/reducer";
import { Box, Flex, Heading, Link } from "@quaantum/components";

const Projects: React.FC = () => {
  const projects = useSelector((state: State) =>
    hasntErrors(state) ? state.projects : []
  );
  const github = useSelector((state: State) =>
    hasntErrors(state) ? state.info?.github : ""
  );
  return (
    <Box>
      <Heading fontSize='3rem' fontWeight='100'>
        <Fade bottom cascade>
          Projects.
        </Fade>
      </Heading>
      <Flex wrap='wrap' justify='space-between'>
        {projects?.map((project, index) => (
          <ProjectItem {...project} key={index} />
        ))}
      </Flex>
      <Link
        href={github}
        target='_blank'
        rel='noopener noreferrer'
        style={{ textDecoration: "underline" }}
      >
        Check all my projects on my github →
      </Link>
    </Box>
  );
};

export default Projects;
