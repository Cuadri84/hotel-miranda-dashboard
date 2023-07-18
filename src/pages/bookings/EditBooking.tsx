// React
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
import { getBooking, editBooking } from "../../features/bookingSlice";
import { useTypedSelector } from "../../store/store";

// Components
import BookingForm from "../../components/bookings/BookingForm";
import { Loader } from "../../components/styled/Loader";

import { Booking } from "../../features/interfaces/interfaces";

export const EditBooking: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams<{ bookingId: string }>();
  const { bookingId } = params;
  const { singleBooking } = useTypedSelector(
    (state: RootStateOrAny) => state.bookings
  );
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
  const formTitle =
    "Here you can edit the fields needed and save them to update the original booking";

  useEffect(() => {
    if (bookingId) {
      dispatch(getBooking(bookingId));
    }
  }, [dispatch, bookingId]);

  useEffect(() => {
    if (singleBooking) {
      setCurrentBooking(singleBooking);
    }
  }, [singleBooking]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentBooking(
      (prevState) =>
        ({
          ...prevState,
          [name]: value,
        } as Booking | null)
    );
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate("/bookings");
  };

  const handleSubmit = () => {
    if (currentBooking && currentBooking._id) {
      dispatch(
        editBooking({ _id: currentBooking._id, booking: currentBooking })
      );
      navigate("/bookings");
    }
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
