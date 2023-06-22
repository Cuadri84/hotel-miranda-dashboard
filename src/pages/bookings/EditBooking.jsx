// React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { editBooking, getBooking } from "../../features/bookingSlice";
import { useTypedSelector } from "../../store/store";

//Components
import BookingForm from "../../components/bookings/BookingForm";
import { Loader } from "../../components/styled/Loader";

export const EditBooking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { bookingId } = params;
  const { singleBooking } = useTypedSelector((state) => state.bookings);
  const [currentBooking, setCurrentBooking] = useState(null);
  const formTitle =
    "Here you can edit the fields needed and save them to update the original booking";

  useEffect(() => {
    dispatch(getBooking(Number(bookingId)));

    setCurrentBooking(singleBooking);
  }, [singleBooking, dispatch, bookingId]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setCurrentBooking((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setCurrentBooking({});
    navigate("/bookings");
  };

  const handleSubmit = () => {
    dispatch(editBooking(currentBooking));
    setCurrentBooking({});
    navigate("/bookings");
  };
  return !currentBooking ? (
    <Loader />
  ) : (
    <BookingForm
      formTitle={formTitle}
      currentBooking={currentBooking}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};
