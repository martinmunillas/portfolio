import React from "react";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";

import MessageForm from "./MessageForm";

import { hasntErrors, State } from "../redux/reducer";
import {
  Box,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@quaantum/components";

const Contact: React.FC = () => {
  const info = useSelector((state: State) =>
    hasntErrors(state) ? state.info : undefined
  );
  if (!info) return null;

  const { contactText, github, email, linkedin, youtube } = info;

  return (
    <Box mt='80px' id='contact'>
      <Heading mb='40px' fontSize='3rem' fontWeight='100'>
        <Fade bottom cascade>
          Contact.
        </Fade>
      </Heading>
      <Fade bottom>
        <Box>
          <Heading fontSize='5rem'>
            {contactText[0]}
            <br></br>
            <Box
              as='span'
              color='red'
              _hover={{
                customCss: `
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: thin;
      -webkit-font-smoothing: antialiased;`,
              }}
            >
              {contactText[1]}
            </Box>
          </Heading>
          <Text m='50px 0' fontSize='3rem'>
            {email}
          </Text>
          <MessageForm />
          <UnorderedList d='flex' m='50px 0' gap='20px' listStyle='none'>
            {github && (
              <ListItem>
                <Link target='_blank' rel='noopener noreferrer' href={github}>
                  Github
                </Link>
              </ListItem>
            )}
            {linkedin && (
              <ListItem>
                <Link target='_blank' rel='noopener noreferrer' href={linkedin}>
                  Linkedin
                </Link>
              </ListItem>
            )}
            {youtube && (
              <ListItem>
                <Link target='_blank' rel='noopener noreferrer' href={youtube}>
                  Youtube
                </Link>
              </ListItem>
            )}
          </UnorderedList>
        </Box>
      </Fade>
    </Box>
  );
};

export default Contact;
