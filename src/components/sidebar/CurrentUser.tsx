// React & Router
import React from "react";

// Styled Components
import { Card, UserName, UserEmail } from "./CurrentUserStyled";

//assets
import UserPic from "../../assets/sidebar/yo.jpg";

function CurrentUser() {
  return (
    <Card>
      <img className="image" src={UserPic} alt="" />
      <UserName>David Cuadrillero</UserName>
      <UserEmail>https://github.com/Cuadri84</UserEmail>
      {/* <LinkButton>
        <a href="">Edit user</a>
      </LinkButton> */}
    </Card>
  );
}

export default CurrentUser;
