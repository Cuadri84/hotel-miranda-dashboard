import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { getRoom } from "../../features/roomsSlice";
import { useTypedSelector } from "../../store/store";

//STYLED
import { Container } from "../../components/styled/ContainerStyled";
import { Subcontainer, VerticalLine } from "../bookings/SingleBookingStyled";
import {
  BookingID,
  DataContainer,
  GuestContainer,
  GuestName,
  Status,
} from "../../components/bookings/BookingRowStyled";

import Arrow from "../../assets/leftArrow-icon.svg";
export const SingleRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { roomId } = params;
  console.log(roomId);
  const { singleRoom } = useTypedSelector((state) => state.rooms);
  console.log(singleRoom);
  const [currentRoom, setCurrentRoom] = useState(singleRoom);
  console.log(currentRoom);

  useEffect(() => {
    dispatch(getRoom(roomId));

    setCurrentRoom(singleRoom);
  }, [singleRoom, dispatch, roomId]);

  const goToRooms = (id) => {
    navigate("/rooms/");
  };

  return (
    <Container>
      <Subcontainer>
        <GuestContainer>
          {/* este div comentarlo y actualizar y entonces funciona porque a veces falla el redux */}
          <div>
            <img
              src={Arrow}
              alt="Back arrow"
              onClick={() => {
                goToRooms();
              }}
            />
            <img src={currentRoom.photo} alt="User pic" />
            <GuestName>{currentRoom.bed_type}</GuestName>
            <BookingID>room number:{currentRoom.room_number}</BookingID>
            <DataContainer>
              <p>description: {currentRoom.description}</p>
              <p>facilities: {currentRoom.room_facilities}</p>
              <p>rate: {currentRoom.room_rate}</p>

              <Status $type={currentRoom.status}>
                {currentRoom.room_status}
              </Status>
            </DataContainer>
          </div>
          <VerticalLine />
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
