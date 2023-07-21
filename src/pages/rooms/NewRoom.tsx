// React
import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { createNewRoom } from "../../features/roomsSlice";

import { IRoom } from "../../features/interfaces/interfaces";

// Components
import RoomForm from "../../components/rooms/RoomForm";

const NewRoom: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formTitle = "Please fill the form to create a new room";
  const [currentRoom, setCurrentRoom] = useState<IRoom>({
    _id: "",
    room_number: 0,
    photo: "",
    photoTwo: "",
    photoThree: "",
    photoFour: "",
    photoFive: "",
    description: "",
    discountPercent: 0,
    discount: "",
    cancellationPolicy: "",
    bed_type: "",
    room_facilities: [],
    room_rate: 0,
    room_offer: "",
    room_status: "",
    bookings: { type: [], default: [] },
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCurrentRoom((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e: FormEvent) => {
    e.preventDefault();
    navigate("/rooms");
  };

  const handleSubmit = () => {
    dispatch(createNewRoom(currentRoom));

    navigate("/rooms");
  };
  return (
    <RoomForm
      formTitle={formTitle}
      currentRoom={currentRoom}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default NewRoom;
