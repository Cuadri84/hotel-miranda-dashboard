import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

import booking from "../../data/bookings.json";
import { Container } from "../../components/styled/ContainerStyled";
import { Subcontainer, VerticalLine } from "./SingleBookingStyled";
import {
  BookingID,
  DataContainer,
  GuestContainer,
  GuestName,
  Status,
} from "../../components/bookings/BookingRowStyled";

import Arrow from "../../assets/leftArrow-icon.svg";

export const SingleBooking = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { bookingId } = params;

  let room = booking.find((room) => room.bookingID === Number(bookingId));

  const goToBooking = (id) => {
    navigate("/bookings/");
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
                goToBooking();
              }}
            />
            <GuestName>{room.userName}</GuestName>
            <BookingID>ID:{room.bookingID}</BookingID>
            <DataContainer>
              <p>Check in: {room.checkIn}</p>
              <p>Check Out: {room.checkOut}</p>
              <p>Order Date: {room.orderDate}</p>
              <p>Room Type: {room.roomType}</p>
              <Status $type={room.status}>{room.status}</Status>
            </DataContainer>
          </div>
          <VerticalLine />
          <DataContainer>
            <p>Special Request:</p>
            {room.specialRequest ? (
              <p>{room.specialRequest}</p>
            ) : (
              <p>No special request registered.</p>
            )}
          </DataContainer>
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
