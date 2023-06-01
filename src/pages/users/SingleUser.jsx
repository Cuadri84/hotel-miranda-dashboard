import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

//DATA
import users from "../../data/users.json";

//STYLED
import { Container } from "../../components/styled/ContainerStyled";
import { Subcontainer, VerticalLine } from "../bookings/SingleBookingStyled";
import {
  BookingID,
  DataContainer,
  GuestContainer,
  GuestName,
  Status,
} from "../../components/bookings/BookingRowStyled";

import Arrow from "../../assets/leftArrow-icon.svg";

export const SingleUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { userId } = params;

  let user = users.find((user) => user.id === Number(userId));

  const goToUsers = (id) => {
    navigate("/users/");
  };
  return (
    <Container>
      <Subcontainer>
        <GuestContainer>
          <div>
            <img
              src={Arrow}
              alt="Back arrow"
              onClick={() => {
                goToUsers();
              }}
            />
            <img src={user.photo} alt="User pic" />
            <GuestName>{user.name}</GuestName>
            <BookingID>ID:{user.id}</BookingID>
            <DataContainer>
              <p>mail: {user.email}</p>
              <p>phote: {user.phone}</p>
              <p>date: {user.date}</p>
              <p>position: {user.position}</p>
              <p>position description: {user.description}</p>
              <Status $type={user.status}>{user.state}</Status>
            </DataContainer>
          </div>
          <VerticalLine />
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
