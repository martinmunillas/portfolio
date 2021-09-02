import React from "react";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

import "../styles/components/Hero.scss";
import { hasntErrors, State } from "../redux/reducer";
import { Button, Flex, Heading, Text } from "@quaantum/components";

const Hero: React.FC = () => {
  const info = useSelector((state: State) =>
    hasntErrors(state) ? state.info : undefined
  );
  return (
    <Flex direction='column' justify='center' minH='100vh'>
      <Flex
        as='header'
        direction='row'
        justify='flex-start'
        align='center'
        position='absolute'
        top='60px'
        left='20%'
      >
        <Heading as='h1' ml='-30px' fontSize='1em' fontWeight='400' p='2em 0'>
          <Fade bottom cascade>
            martinmunilla.
          </Fade>
        </Heading>
      </Flex>
      <Fade bottom>
        <Text>{info?.heroText}</Text>
        <Flex mt='30px' wrap='wrap'>
          <Button
            cursor='pointer'
            w='200px'
            b='0px'
            br='25px'
            m='10px 0'
            p='1em 3em'
            mr='20px'
            color='blue'
            customCss={`
            transition: all 0.2s ease-out;
            -webkit-transition: all 0.2s ease-out;
            -moz-transition: all 0.2s ease-out;
            -ms-transition: all 0.2s ease-out;
            -o-transition: all 0.2s ease-out;
            `}
          >
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </Button>
          <Button
            cursor='pointer'
            w='200px'
            b='0px'
            br='25px'
            m='10px 0'
            p='1em 3em'
            mr='20px'
            color='#222222'
            customCss={`
            transition: all 0.2s ease-out;
            -webkit-transition: all 0.2s ease-out;
            -moz-transition: all 0.2s ease-out;
            -ms-transition: all 0.2s ease-out;
            -o-transition: all 0.2s ease-out;
            `}
          >
            <a rel='noopener noreferrer' href={info?.cvUrl} target='_blank'>
              Download CV
            </a>
          </Button>
        </Flex>
      </Fade>
    </Flex>
  );
};

export default Hero;
