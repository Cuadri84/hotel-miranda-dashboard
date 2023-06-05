import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { deleteRoom } from "../../features/roomsSlice";

// Styled Components
import {
  RoomNameContainer,
  RoomId,
  RoomNumber,
  DataContainer,
  DataContainerButton,
  RoomText,
  RoomPrice,
  RoomStatus,
} from "./RoomRowStyled";
import { Row, DropDown } from "../bookings/BookingRowStyled";

export const RoomRow = (room) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);

  const goToSingleRoom = (id) => {
    navigate("/rooms/" + id);
  };

  const deleteCurrentRoom = (e, id) => {
    e.preventDefault();
    dispatch(deleteRoom(id));
  };

  return (
    <Row
      onClick={() => {
        goToSingleRoom(room.room.room_number);
      }}
    >
      <td>
        <RoomNameContainer>
          <img src={room.room.photo} alt="Room Img" />
          <div>
            <RoomNumber>Room Nr: {room.room.room_number}</RoomNumber>
            <RoomId>#{room.room.id}</RoomId>
          </div>
        </RoomNameContainer>
      </td>
      <DataContainer>
        <RoomText>{room.room.bed_type}</RoomText>
      </DataContainer>
      <DataContainer>
        <RoomText>
          {room.room.room_facilities.map((facility, index) => (
            <span key={index}>
              {/* Small logic to includes ",", "." and "&" in the right places of the displayed array. */}
              {(index && index !== room.room.room_facilities.length - 1
                ? ", "
                : "") +
                (index && index === room.room.room_facilities.length - 1
                  ? " & "
                  : "") +
                facility +
                (index === room.room.room_facilities.length - 1 ? "." : "")}
            </span>
          ))}
        </RoomText>
      </DataContainer>
      <DataContainer>
        <RoomPrice>
          ${room.room.room_rate}
          <span>/night</span>
        </RoomPrice>
      </DataContainer>
      <DataContainer>
        <RoomPrice>
          $
          {room.room.discount === "Yes"
            ? (
                room.room.room_rate -
                (room.room.room_rate * room.room.discountPercent) / 100
              ).toFixed(2)
            : "-"}
          <span>/night</span>
        </RoomPrice>
      </DataContainer>
      <td>
        <RoomStatus
          id="testingStatus"
          status={room.room.room_status === "Available" ? "#5AD07A" : "#E23428"}
        >
          {room.room.room_status}
        </RoomStatus>
      </td>
      <DataContainerButton style={{ position: "relative", top: "25px" }}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 48 48"
            onClick={(e) => {
              // With this check I avoid the parents event listener to be fired when the child event listener should be fired
              if (e && e.stopPropagation) e.stopPropagation();
              setShowOptions(!showOptions);
            }}
          >
            <path d="M24.05 41.7q-1.25 0-2.125-.875t-.875-2.075q0-1.2.875-2.1.875-.9 2.075-.9 1.25 0 2.1.9.85.9.85 2.1 0 1.2-.85 2.075-.85.875-2.05.875Zm0-14.75q-1.25 0-2.125-.875T21.05 24q0-1.25.875-2.1.875-.85 2.075-.85 1.25 0 2.1.85.85.85.85 2.05 0 1.25-.85 2.125t-2.05.875Zm0-14.7q-1.25 0-2.125-.875T21.05 9.25q0-1.25.875-2.125T24 6.25q1.25 0 2.1.875.85.875.85 2.125t-.85 2.125q-.85.875-2.05.875Z" />
          </svg>
        </button>
        {showOptions ? (
          <DropDown>
            <ul>
              <li>
                <button>Room details</button>
              </li>
              <li>
                <button>Edit room</button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    deleteCurrentRoom(e, room.room.id);
                  }}
                >
                  Delete room
                </button>
              </li>
            </ul>
          </DropDown>
        ) : null}
      </DataContainerButton>
    </Row>
  );
};
