import { Box, Flex, Heading } from "@quaantum/components";
import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";

const NotFound: React.FC = () => {
  return (
    <Box>
      <Background />
      <Flex
        direction='column'
        justify='center'
        align='center'
        width='100%'
        height='100vh'
      >
        <Heading as='h1' mt='20px' width='50%' textAlign='center'>
          404
        </Heading>
        <Heading as='h2' mt='40px'>
          Sorry the page that you're looking for is not currently available
        </Heading>
        <Link to='/'>
          <button>⬅ Go home</button>
        </Link>
      </Flex>
    </Box>
  );
};

export default NotFound;
