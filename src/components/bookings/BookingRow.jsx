// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../features/bookingSlice";

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

export const BookingRow = (booking) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);

  const goToSingleBooking = (id) => {
    navigate("/bookings/" + id);
  };

  const deleteCurrentBooking = (e, bookingID) => {
    e.preventDefault();
    dispatch(deleteBooking(bookingID));
  };

  const editSingleBooking = (e, bookingID) => {
    e.preventDefault();
    navigate("/editBooking/" + bookingID);
  };

  return (
    <Row
      onClick={() => {
        goToSingleBooking(booking.booking.bookingID);
      }}
    >
      <td>
        <GuestContainer>
          <div>
            <GuestName>{booking.booking.userName}</GuestName>
            <BookingID>#{booking.booking.bookingID}</BookingID>
          </div>
        </GuestContainer>
      </td>
      <DataContainer className="data-container__text">
        <p>{booking.booking.orderDate}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{booking.booking.checkIn}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{booking.booking.checkOut}</p>
      </DataContainer>
      <td>
        <NotesButton>
          {booking.booking.specialRequest === "" ? "No Notes" : "View Notes"}
        </NotesButton>
      </td>

      <DataContainer className="data-container__text">
        <p>{booking.booking.roomType}</p>
      </DataContainer>
      <td>
        <Status $type={booking.booking.status}>{booking.booking.status}</Status>
      </td>
      <DataContainerButton style={{ position: "relative" }}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            viewBox="0 0 48 48"
            onClick={(e) => {
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
                <button
                  onClick={(e) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    editSingleBooking(e, booking.booking.bookingID);
                  }}
                >
                  Edit booking
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    if (e && e.stopPropagation) e.stopPropagation();
                    deleteCurrentBooking(e, booking.booking.bookingID);
                  }}
                >
                  Delete booking
                </button>
              </li>
            </ul>
          </DropDown>
        ) : null}
      </DataContainerButton>
    </Row>
  );
};
