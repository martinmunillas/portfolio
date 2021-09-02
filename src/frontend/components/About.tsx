import React from "react";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";

import "../styles/components/About.scss";
import { hasntErrors, State } from "../redux/reducer";
import { Box, Flex, Heading, Img, Text } from "@quaantum/components";

const About: React.FC = () => {
  const info = useSelector((state: State) =>
    hasntErrors(state) ? state.info : undefined
  );
  return (
    <Flex justify='space-between' mb='100px'>
      <Box w='60%'>
        <Heading mb='40px'>
          <Fade bottom cascade>
            About.
          </Fade>
        </Heading>
        <Fade bottom>
          <Text>
            {info?.aboutMessage.split("\n").map((paragraph, index) => (
              <React.Fragment key={index}>
                <br />
                <br /> {paragraph}
              </React.Fragment>
            ))}
          </Text>
        </Fade>
      </Box>
      <Box w='30%' alignSelf='flex-end'>
        <Img
          src={info?.aboutImage || ""}
          alt="martin munilla's face"
          br='20px'
        />
      </Box>
    </Flex>
  );
};

export default About;
