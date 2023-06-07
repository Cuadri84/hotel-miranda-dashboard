import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export const SingleRoom = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { roomId } = params;
  const { singleRoom } = useTypedSelector((state) => state.rooms);
  const [currentRoom, setCurrentRoom] = useState(singleRoom);

  useEffect(() => {
    dispatch(getRoom(roomId));

    setCurrentRoom(singleRoom);
  }, [singleRoom, dispatch, roomId]);

  return (
    <Container>
      <Subcontainer>
        <GuestContainer>
          <div>
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
