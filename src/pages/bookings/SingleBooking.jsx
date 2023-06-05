// React & Router
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getBooking } from "../../features/bookingSlice";
import { useTypedSelector } from "../../store/store";

//STYLED
import { Container } from "../../components/styled/ContainerStyled";
import { Subcontainer, VerticalLine } from "./SingleBookingStyled";
import {
  BookingID,
  DataContainer,
  GuestContainer,
  GuestName,
  Status,
} from "../../components/bookings/BookingRowStyled";

export const SingleBooking = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { bookingId } = params;
  const { singleBooking } = useTypedSelector((state) => state.bookings);
  const [currentBooking, setCurrentBooking] = useState(singleBooking);

  useEffect(() => {
    dispatch(getBooking(Number(bookingId)));

    setCurrentBooking(singleBooking);
  }, [singleBooking, dispatch, bookingId]);

  return (
    <Container>
      <Subcontainer>
        <GuestContainer>
          <div>
            <GuestName>{currentBooking.userName}</GuestName>
            <BookingID>ID:{currentBooking.bookingID}</BookingID>
            <DataContainer>
              <p>Check in: {currentBooking.checkIn}</p>
              <p>Check Out: {currentBooking.checkOut}</p>
              <p>Order Date: {currentBooking.orderDate}</p>
              <p>Room Type: {currentBooking.roomType}</p>
              <Status $type={currentBooking.status}>
                {currentBooking.status}
              </Status>
            </DataContainer>
          </div>
          <VerticalLine />
          <DataContainer>
            <p>Special Request:</p>
            {currentBooking.specialRequest ? (
              <p>{currentBooking.specialRequest}</p>
            ) : (
              <p>No special request registered.</p>
            )}
          </DataContainer>
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
