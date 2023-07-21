// React
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
import { getRoom, editRoom } from "../../features/roomsSlice";
import { useTypedSelector } from "../../store/store";

//components
import RoomForm from "../../components/rooms/RoomForm";
import { Loader } from "../../components/styled/Loader";

import { IRoom } from "../../features/interfaces/interfaces";

export const EditRoom: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams<{ roomId: string }>();
  const { roomId } = params;
  const { singleRoom } = useTypedSelector(
    (state: RootStateOrAny) => state.rooms
  );

  const [currentRoom, setCurrentRoom] = useState<IRoom | null>(null);

  const formTitle =
    "Here you can edit the fields needed and save them to update the original room";

  useEffect(() => {
    if (roomId) {
      dispatch(getRoom(roomId));
    }
  }, [dispatch, roomId]);

  useEffect(() => {
    if (singleRoom) {
      setCurrentRoom(singleRoom);
    }
  }, [singleRoom]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCurrentRoom(
      (prevState) => ({ ...prevState, [name]: value } as IRoom | null)
    );
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate("/rooms");
  };

  const handleSubmit = () => {
    if (currentRoom && currentRoom._id) {
      dispatch(editRoom({ _id: currentRoom._id, room: currentRoom }));

      navigate("/rooms");
    }
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
