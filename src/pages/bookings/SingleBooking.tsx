import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
import { getBooking } from "../../features/bookingSlice";
import { useTypedSelector } from "../../store/store";

// STYLED
import { Container } from "../../components/styled/ContainerStyled";
import { Subcontainer, VerticalLine } from "./SingleBookingStyled";
import {
  DataContainer,
  GuestContainer,
  GuestName,
  Status,
} from "../../components/bookings/BookingRowStyled";

// Components
import { Loader } from "../../components/styled/Loader";
import { Booking } from "../../features/interfaces/interfaces";

export const SingleBooking: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<{ bookingId: string }>();
  const bookingId = params.bookingId;

  const { singleBooking } = useTypedSelector(
    (state: RootStateOrAny) => state.bookings
  );

  const [currentBooking, setCurrentBooking] = useState<Booking>(singleBooking);

  let orderDate: string | null =
    currentBooking?.orderDate?.toLocaleString() || null;
  let checkIn: string | null =
    currentBooking?.checkIn?.toLocaleString() || null;
  let checkOut: string | null =
    currentBooking?.checkOut?.toLocaleString() || null;

  useEffect(() => {
    if (bookingId) {
      dispatch(getBooking(bookingId));
      setCurrentBooking(singleBooking);
    }
  }, [singleBooking, dispatch, bookingId]);

  return !currentBooking ? (
    <Loader />
  ) : (
    <Container>
      <Subcontainer>
        <GuestContainer>
          <div>
            <GuestName>{currentBooking.name}</GuestName>

            <DataContainer>
              <p>Check in: {checkIn}</p>
              <p>Check Out: {checkOut}</p>
              <p>Order Date: {orderDate}</p>
              <p>Room Type: {currentBooking.room_number}</p>
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
