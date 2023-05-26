// React & Router
import React from "react";
import { Link } from "react-router-dom";

// Styled Components
import { Card, UserName, UserEmail, LinkButton } from "./CurrentUserStyled";

//assets
import UserPic from "../../assets/sidebar/yo.jpg";

const CurrentUser = () => {
  return (
    <Card>
      <img className="image" src={UserPic} alt="" />
      <UserName>David Cuadrillero</UserName>
      <UserEmail>https://github.com/Cuadri84</UserEmail>
      <LinkButton>
        <Link>Edit user</Link>
      </LinkButton>
    </Card>
  );
};

export default CurrentUser;
