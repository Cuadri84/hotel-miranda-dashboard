// React & Router
// React & Router
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SidebarContainer } from "./SideBarStyled";

export const SideBar = () => {
  const [display, setDisplay] = useState(false);
  const location = useLocation();

  const displayMenu = () => {
    setDisplay(!display);
  };

  return (
    <SidebarContainer
      display={display ? "300px" : "0px"}
      adjustHeight={display ? "100%" : 0}
    >
      <h1 onClick={displayMenu}>Hotel Logo</h1>
      <ul>
        <li>Dashboard</li>
        <li>Bookings</li>
        <li>Rooms</li>
        <li>Contact</li>
        <li>Users</li>
      </ul>
    </SidebarContainer>
  );
};
