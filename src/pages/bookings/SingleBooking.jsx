import React from "react";
import { useParams } from "react-router-dom";

import booking from "../../data/bookings.json";

export const SingleBooking = () => {
  const params = useParams();
  const { bookingId } = params;

  let room = booking.find((room) => room.bookingID === Number(bookingId));
  console.log(room);

  return <div>{room.checkOut}</div>;
};
