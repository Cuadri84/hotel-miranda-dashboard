// React & Router
import React, { useState } from "react";

// Styled Components
import {
  Row,
  DataContainer,
  DataContainerButton,
  GuestContainer,
  GuestName,
  BookingID,
  Status,
  NotesButton,
  DropDown,
} from "./BookingRowStyled";

export const BookinmgRow = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <Row>
      <td>
        <GuestContainer>
          <div>
            <GuestName>Ramón López</GuestName>
            <BookingID>id: 500</BookingID>
          </div>
        </GuestContainer>
      </td>
      <DataContainer className="data-container__text">
        <p>5/8</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>8/8</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>10/8</p>
      </DataContainer>
      <td>
        <NotesButton>Beauty view</NotesButton>
      </td>

      <DataContainer className="data-container__text">
        <p>Suite</p>
      </DataContainer>
      <td>
        <Status $type={"Check In"}>Check In</Status>
      </td>
      <DataContainerButton style={{ position: "relative" }}>
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
                <button>Edit booking</button>
              </li>
              <li>
                <button>Delete booking</button>
              </li>
            </ul>
          </DropDown>
        ) : null}
      </DataContainerButton>
    </Row>
  );
};
