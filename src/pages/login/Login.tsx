// React & Router
import React, { useState } from "react";

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
              data-cy="userName"
              value={userName}
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              data-cy="mail"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Input>
          </InputContainer>
          <InputContainer>
            <Input
              type="password"
              data-cy="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Input>
          </InputContainer>
          <LoginButton data-cy="submit" onClick={validateLogin}>
            Login
          </LoginButton>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};
