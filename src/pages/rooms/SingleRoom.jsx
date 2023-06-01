import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

//DATA
import rooms from "../../data/rooms.json";

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
export const SingleRoom = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { roomId } = params;

  let room = rooms.find((room) => room.room_number === roomId);

  const goToRooms = (id) => {
    navigate("/rooms/");
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
                goToRooms();
              }}
            />
            <img src={room.photo} alt="User pic" />
            <GuestName>{room.bed_type}</GuestName>
            <BookingID>room number:{room.room_number}</BookingID>
            <DataContainer>
              <p>description: {room.description}</p>
              <p>facilities: {room.room_facilities}</p>
              <p>rate: {room.room_rate}</p>

              <Status $type={room.status}>{room.room_status}</Status>
            </DataContainer>
          </div>
          <VerticalLine />
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
