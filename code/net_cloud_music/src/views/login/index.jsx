import PropTypes from "prop-types";
import React, { memo } from "react";

import LoginModal from "@/components/app-header/c-cpns/login-modal";
import { LoginWrapper } from "./style";

const Login = memo((props) => {
  return (
    <LoginWrapper>
      {/* <LoginModal></LoginModal> */}
    </LoginWrapper>
  );
});

Login.propTypes = {};

export default Login;
