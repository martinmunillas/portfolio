import { Flex, Heading, Img, Text } from "@quaantum/components";
import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import type { Project } from "../redux/reducer";

interface ProjectItemProps extends Project {}

const ProjectItem: React.FC<ProjectItemProps> = (props) => {
  return (
    <Fade bottom>
      <Link to={`/projects/${props._id}`}>
        <Flex direction='column' align='center' m='40px 0'>
          <Img
            src={"https://i.stack.imgur.com/LnEYQ.jpg"}
            alt={props.name}
            w='400px'
            h='400px'
            objectFit='cover'
            objectPosition='50% 50%'
            r='30px:'
          />
          <Heading m='10px 0'>{props.name}</Heading>
          <Text>{props.service}</Text>
        </Flex>
      </Link>
    </Fade>
  );
};

export default ProjectItem;
