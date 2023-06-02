// React
import React, { useState } from "react";
import { useNavigate } from "react-router";

//Components
import BookingForm from "../../components/bookings/BookingForm";

export const NewBooking = () => {
  const navigate = useNavigate();

  const formTitle = "Please fill the form to create a new booking";
  const [currentBooking, setCurrentBooking] = useState({
    id: Math.floor(Math.random() * 100000),
    bookingID: Math.floor(Math.random() * 10000000),
    orderDate: new Date().toLocaleString("en-GB"),
    userName: "",
    userPicture: "",
    checkIn: "",
    checkOut: "",
    specialRequest: "",
    roomType: "",
    status: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setCurrentBooking((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/bookings");
  };

  const handleSubmit = () => {
    navigate("/bookings");
  };
  return (
    <BookingForm
      formTitle={formTitle}
      currentBooking={currentBooking}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    ></BookingForm>
  );
};
