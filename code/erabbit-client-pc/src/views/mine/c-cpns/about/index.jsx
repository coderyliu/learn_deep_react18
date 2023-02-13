import PropTypes from "prop-types";
import React, { memo } from "react";

import { AboutWrapper } from "./style";

const About = memo((props) => {
  return (
    <AboutWrapper>
      <h2>about center</h2>
    </AboutWrapper>
  );
});

About.propTypes = {};

export default About;
