import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
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

// Components
import { Loader } from "../../components/styled/Loader";

export const SingleRoom: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<{ roomId: string }>();
  const roomId = params.roomId;

  const { singleRoom } = useTypedSelector(
    (state: RootStateOrAny) => state.rooms
  );

  useEffect(() => {
    if (roomId) {
      dispatch(getRoom(roomId));
    }
  }, [dispatch, roomId]);

  return !singleRoom ? (
    <Loader />
  ) : (
    <Container>
      <Subcontainer>
        <GuestContainer>
          <div>
            <img src={singleRoom.photo} alt="User pic" />
            <GuestName>{singleRoom.bed_type}</GuestName>
            <BookingID>room number:{singleRoom.room_number}</BookingID>
            <DataContainer>
              <p>description: {singleRoom.description}</p>
              <p>facilities: {singleRoom.room_facilities}</p>
              <p>rate: {singleRoom.room_rate}</p>

              <Status $type={singleRoom.status}>
                {singleRoom.room_status}
              </Status>
            </DataContainer>
          </div>
          <VerticalLine />
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
