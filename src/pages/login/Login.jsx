// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// React Context
import { useLogin } from "../../hooks/useLogin";

// Styled Components
import {
  LoginContainer,
  LoginCard,
  LogoContainer,
  InputContainer,
  Input,
  LoginButton,
} from "./LoginStyled";

import Logo from "../../assets/sidebar/logo.png";

export const Login = () => {
  const { login } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const validateLogin = () => {
    if (email === "d" && password === "d") {
      login(email, password);
      localStorage.setItem(
        "auth",
        JSON.stringify({ auth: true, email: email, password: password })
      );
    } else {
      alert("Email or password are not correct! Please try again...");
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LogoContainer>
          <img
            src={Logo}
            style={{ width: 240, height: 70 }}
            alt="Hotel admin logo"
          />
        </LogoContainer>
        <form>
          <InputContainer>
            <Input
              type="text"
              className="input-userName"
              value={userName}
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputContainer>
          <LoginButton type="login" text="LOGIN" onClick={validateLogin}>
            Login
          </LoginButton>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};
