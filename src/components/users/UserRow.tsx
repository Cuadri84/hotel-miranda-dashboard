// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/usersSlice";

import { IUser } from "../../features/interfaces/interfaces";

// Styled Components
import {
  Row,
  DataContainer,
  UserContainer,
  UserName,
  UserID,
  UserJoinDate,
  Status,
} from "./UserRowStyled";
import { DataContainerButton, DropDown } from "../bookings/BookingRowStyled";

interface UserRowProps {
  user: IUser;
}

export const UserRow: React.FC<UserRowProps> = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let date: string = new Date(user.date).toLocaleDateString();

  const [showOptions, setShowOptions] = useState(false);

  const goToSingleUser = (id: string) => {
    navigate("/users/" + id);
  };

  const deleteCurrentUser = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    dispatch(deleteUser(id));
  };

  const editSingleUser = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    navigate("/editUser/" + id);
  };

  return (
    <Row
      onClick={() => {
        goToSingleUser(user._id);
      }}
    >
      <td>
        <UserContainer>
          <img src={user.photo} alt="User portrait" />
          <div>
            <UserName>{user.name}</UserName>
            <UserID>#{user._id}</UserID>
            <UserJoinDate>Joined on {date}</UserJoinDate>
          </div>
        </UserContainer>
      </td>
      <DataContainer className="data-container__text">
        <p>{user.description}</p>
      </DataContainer>
      <td>
        <UserContainer>
          <div>
            <UserJoinDate style={{ fontWeight: 500 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 48 48"
              >
                {/* SVG path data */}
              </svg>{" "}
              {user.phone}
            </UserJoinDate>
            <UserJoinDate style={{ fontWeight: 500 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 48 48"
              >
                {/* SVG path data */}
              </svg>{" "}
              {user.email}
            </UserJoinDate>
          </div>
        </UserContainer>
      </td>
      <td>
        <Status $type={user.state}>{user.state}</Status>
      </td>
      <DataContainerButton style={{ position: "relative", top: "25px" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowOptions(!showOptions);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 48 48"
          >
            <path d="M24.05 41.7q-1.25 0-2.125-.875t-.875-2.075q0-1.2.875-2.1.875-.9 2.075-.9 1.25 0 2.1.9.85.9.85 2.1 0 1.2-.85 2.075-.85.875-2.05.875Zm0-14.75q-1.25 0-2.125-.875T21.05 24q0-1.25.875-2.1.875-.85 2.075-.85 1.25 0 2.1.85.85.85.85 2.05 0 1.25-.85 2.125t-2.05.875Zm0-14.7q-1.25 0-2.125-.875T21.05 9.25q0-1.25.875-2.125T24 6.25q1.25 0 2.1.875.85.875.85 2.125t-.85 2.125q-.85.875-2.05.875Z" />
          </svg>
        </button>
        {showOptions && (
          <DropDown>
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    editSingleUser(e, user._id);
                  }}
                >
                  Edit user
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteCurrentUser(e, user._id);
                  }}
                >
                  Delete user
                </button>
              </li>
            </ul>
          </DropDown>
        )}
      </DataContainerButton>
    </Row>
  );
};
