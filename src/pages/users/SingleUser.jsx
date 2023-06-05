import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { getUser } from "../../features/usersSlice";
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
import { useTypedSelector } from "../../store/store";

export const SingleUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { userId } = params;

  const { singleUser } = useTypedSelector((state) => state.users);

  const [currentUser, setCurrentUser] = useState(singleUser);

  // let user = users.find((user) => user.id === Number(userId));
  useEffect(() => {
    dispatch(getUser(Number(userId)));

    setCurrentUser(singleUser);
  }, [singleUser, dispatch, userId]);

  const goToUsers = (id) => {
    navigate("/users/");
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
                goToUsers();
              }}
            />
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
