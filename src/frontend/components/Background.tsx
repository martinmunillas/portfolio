import { Heading } from "@quaantum/components";
import React from "react";

import "../styles/components/Background.scss";

const Background = () => {
  return (
    <Heading
      as='h4'
      position='fixed'
      color='yellow'
      z-index='-10'
      font-size='20rem'
      top='20%'
      left='-5rem'
      customCss='opacity: 0.03;'
    >
      CREATIVE
    </Heading>
  );
};

export default Background;
