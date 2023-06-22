// React
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { editRoom, getRoom } from "../../features/roomsSlice";
import { useTypedSelector } from "../../store/store";

//components
import RoomForm from "../../components/rooms/RoomForm";
import { Loader } from "../../components/styled/Loader";

export const EditRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { roomId } = params;
  const { singleRoom } = useTypedSelector((state) => state.rooms);
  const [currentRoom, setCurrentRoom] = useState(null);

  const formTitle =
    "Here you can edit the fields needed and save them to update the original room";

  useEffect(() => {
    dispatch(getRoom(roomId));
    setCurrentRoom(singleRoom);
  }, [singleRoom, dispatch, roomId]);

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    let valToUpdate;
    if (type === "checkbox") {
      const newVal = [...currentRoom[name]];
      if (checked) {
        newVal.push(value);
      } else {
        const index = newVal.indexOf(value);
        newVal.splice(index, 1);
      }
      valToUpdate = newVal;
    } else {
      valToUpdate = value;
    }
    setCurrentRoom((prevState) => ({ ...prevState, [name]: valToUpdate }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setCurrentRoom({});
    navigate("/rooms");
  };

  const handleSubmit = () => {
    dispatch(editRoom(currentRoom));
    setCurrentRoom({});
    navigate("/rooms");
  };

  return !currentRoom ? (
    <Loader />
  ) : (
    <RoomForm
      formTitle={formTitle}
      currentRoom={currentRoom}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};
