import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
import { getUser } from "../../features/usersSlice";
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

export const SingleUser: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams<{ userId: string }>();
  const userId = params.userId;

  const { singleUser } = useTypedSelector(
    (state: RootStateOrAny) => state.users
  );

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [dispatch, userId]);

  return !singleUser ? (
    <Loader />
  ) : (
    <Container>
      <Subcontainer>
        <GuestContainer>
          <div>
            <img src={singleUser.photo} alt="User pic" />
            <GuestName>{singleUser.name}</GuestName>
            <BookingID>ID:{singleUser.id}</BookingID>
            <DataContainer>
              <p>mail: {singleUser.email}</p>
              <p>phote: {singleUser.phone}</p>
              <p>date: {singleUser.date}</p>
              <p>position: {singleUser.position}</p>
              <p>position description: {singleUser.description}</p>
              <Status $type={singleUser.status}>{singleUser.state}</Status>
            </DataContainer>
          </div>
          <VerticalLine />
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
