import React, { useEffect } from "react";
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

export const SingleBooking: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<{ bookingId: string }>();
  const bookingId = params.bookingId;

  const { singleBooking } = useTypedSelector(
    (state: RootStateOrAny) => state.bookings
  );

  let orderDate: string | null =
    singleBooking?.orderDate?.toLocaleString() || null;
  let checkIn: string | null = singleBooking?.checkIn?.toLocaleString() || null;
  let checkOut: string | null =
    singleBooking?.checkOut?.toLocaleString() || null;

  useEffect(() => {
    if (bookingId) {
      dispatch(getBooking(bookingId));
    }
  }, [dispatch, bookingId]);

  return !singleBooking ? (
    <Loader />
  ) : (
    <Container>
      <Subcontainer>
        <GuestContainer>
          <div>
            <GuestName>{singleBooking.name}</GuestName>

            <DataContainer>
              <p>Check in: {checkIn}</p>
              <p>Check Out: {checkOut}</p>
              <p>Order Date: {orderDate}</p>
              <p>Room Type: {singleBooking.room_number}</p>
              <Status $type={singleBooking.status}>
                {singleBooking.status}
              </Status>
            </DataContainer>
          </div>
          <VerticalLine />
          <DataContainer>
            <p>Special Request:</p>
            {singleBooking.specialRequest ? (
              <p>{singleBooking.specialRequest}</p>
            ) : (
              <p>No special request registered.</p>
            )}
          </DataContainer>
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
