import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getUser } from "../../features/usersSlice";
import { useTypedSelector } from "../../store/store";

//STYLED
import {
  BookingID,
  DataContainer,
  GuestContainer,
  GuestName,
  Status,
} from "../../components/bookings/BookingRowStyled";
import { Container } from "../../components/styled/ContainerStyled";
import { Subcontainer, VerticalLine } from "../bookings/SingleBookingStyled";

export const SingleUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { userId } = params;
  const { singleUser } = useTypedSelector((state) => state.users);
  const [currentUser, setCurrentUser] = useState(singleUser);

  // let user = users.find((user) => user.id === Number(userId));
  useEffect(() => {
    dispatch(getUser(Number(userId)));

    setCurrentUser(singleUser);
  }, [singleUser, dispatch, userId]);

  return (
    <Container>
      <Subcontainer>
        <GuestContainer>
          {/* este div comentarlo y actualizar y entonces funciona porque a veces falla el redux */}
          <div>
            <img src={currentUser.photo} alt="User pic" />
            <GuestName>{currentUser.name}</GuestName>
            <BookingID>ID:{currentUser.id}</BookingID>
            <DataContainer>
              <p>mail: {currentUser.email}</p>
              <p>phote: {currentUser.phone}</p>
              <p>date: {currentUser.date}</p>
              <p>position: {currentUser.position}</p>
              <p>position description: {currentUser.description}</p>
              <Status $type={currentUser.status}>{currentUser.state}</Status>
            </DataContainer>
          </div>
          <VerticalLine />
        </GuestContainer>
      </Subcontainer>
    </Container>
  );
};
