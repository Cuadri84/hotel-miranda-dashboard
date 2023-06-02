// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Styled Components
import {
  LoginContainer,
  LoginCard,
  LogoContainer,
  InputContainer,
  Input,
  LoginButton,
  Description,
} from "./LoginStyled";

import Logo from "../../assets/sidebar/logo.png";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "d" && password === "d") {
      localStorage.setItem(
        "auth",
        JSON.stringify([
          {
            email: "d@mail.com",
            password: "1234",
          },
        ])
      );
      navigate("/");
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
        {/* <Description>
          Please use <strong>test@test.com</strong> and <strong>12345</strong>{" "}
          as login data for testing purposes and keep in mind that this Website
          is meant to be used on a computer (not a mobile device)
        </Description> */}
        <form onSubmit={handleSubmit}>
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
          <LoginButton type="login" text="LOGIN">
            Login
          </LoginButton>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};
