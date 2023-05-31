// React & Router
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Styled Components
import {
  Table,
  HeaderTitle,
  TableActions,
  TableFilters,
  FilterButton,
  TableButtons,
} from "../../components/styled/Tables";

//Data
import rooms from "../../data/rooms.json";

//Components
import { Container } from "../../components/styled/ContainerStyled";
import { DropdownMenu } from "../../components/styled/DropDownMenu";
import { Loader } from "../../components/styled/Loader";
import { CreateButton } from "../../components/styled/ButtonsStyled";
import { RoomRow } from "../../components/rooms/RoomRow";

export const Rooms = () => {
  const [activeFilter, setActiveFilter] = useState("Room Nr.");
  return (
    <>
      {" "}
      <TableActions>
        <TableFilters>
          <FilterButton>All Rooms</FilterButton>
          <FilterButton>Available Rooms</FilterButton>
          <FilterButton>Booked Rooms</FilterButton>
        </TableFilters>
        <TableButtons>
          <CreateButton>
            <NavLink to="/newRoom">+ New Room</NavLink>
          </CreateButton>
          <DropdownMenu
            setActiveFilter={setActiveFilter}
            type="white"
            options={[
              "Available",
              "Booked",
              "Highest rate first",
              "Lowest rate first",
            ]}
          ></DropdownMenu>
        </TableButtons>
      </TableActions>
      <Container>
        <Table>
          {" "}
          <thead>
            <tr>
              <HeaderTitle>Room Name</HeaderTitle>
              <HeaderTitle>Bed Type</HeaderTitle>
              <HeaderTitle>Facilities</HeaderTitle>
              <HeaderTitle>Rate</HeaderTitle>
              <HeaderTitle>Offer Price</HeaderTitle>
              <HeaderTitle>Status</HeaderTitle>
            </tr>
          </thead>
          <tbody>
            {rooms.map((rooms) => (
              <RoomRow key={rooms.id} room={rooms} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
