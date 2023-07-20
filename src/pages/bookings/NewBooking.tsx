import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewBooking } from "../../features/bookingSlice";

import { Booking } from "../../features/interfaces/interfaces";

// Components
import BookingForm from "../../components/bookings/BookingForm";

export const NewBooking: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formTitle = "Please fill the form to create a new booking";
  const [currentBooking, setCurrentBooking] = useState<Booking>({
    _id: "",
    name: "",
    orderDate: new Date(),
    checkIn: new Date().toISOString().split("T")[0],
    checkOut: new Date().toISOString().split("T")[0],
    specialRequest: "",
    room_number: 0,
    status: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentBooking((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e: FormEvent) => {
    e.preventDefault();
    navigate("/bookings");
  };
  const handleSubmit = () => {
    dispatch(createNewBooking(currentBooking));
    navigate("/bookings");
  };

  return (
    <BookingForm
      formTitle={formTitle}
      currentBooking={currentBooking}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};
