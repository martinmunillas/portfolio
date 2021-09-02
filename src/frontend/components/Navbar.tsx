import { Box, ListItem, UnorderedList } from "@quaantum/components";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Box as='nav' position='fixed' left='60em' top='6em' zIndex={100}>
      <UnorderedList>
        <ListItem display='inline-block'>
          <Box>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={scrollToTop}
            >
              Home
            </Link>{" "}
          </Box>
        </ListItem>
        <ListItem display='inline-block'>
          <Box>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>{" "}
          </Box>
        </ListItem>
        <ListItem display='inline-block'>
          <Box>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>{" "}
          </Box>
        </ListItem>
        <ListItem display='inline-block'>
          <Box>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>{" "}
          </Box>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Navbar;
