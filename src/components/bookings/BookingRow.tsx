// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

import Swal from "sweetalert2";

// Redux
import { useDispatch } from "react-redux";
import { deleteBooking } from "../../features/bookingSlice";

import { Booking } from "../../features/interfaces/interfaces";

// Styled Components
import {
  Row,
  DataContainer,
  DataContainerButton,
  GuestContainer,
  GuestName,
  Status,
  NotesButton,
  DropDown,
} from "./BookingRowStyled";
interface BookingRowProps {
  booking: Booking;
}

export const BookingRow: React.FC<BookingRowProps> = ({ booking }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let orderDate: string = new Date(booking.orderDate).toLocaleDateString();
  let checkIn: string = new Date(booking.checkIn).toLocaleDateString();
  let checkOut: string = new Date(booking.checkOut).toLocaleDateString();

  const [showOptions, setShowOptions] = useState(false);

  const goToSingleBooking = (id: string) => {
    navigate("/bookings/" + id);
  };

  const deleteCurrentBooking = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    dispatch(deleteBooking(id));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Deleted Booking",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const editSingleBooking = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    navigate("/editBooking/" + id);
  };

  return (
    <Row
      onClick={() => {
        goToSingleBooking(booking._id);
      }}
    >
      <td>
        <GuestContainer>
          <div>
            <GuestName>{booking.name}</GuestName>
          </div>
        </GuestContainer>
      </td>
      <DataContainer className="data-container__text">
        <p>{orderDate}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{checkIn}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{checkOut}</p>
      </DataContainer>
      <td>
        <NotesButton type="button">
          {booking.specialRequest === "" ? "No Notes" : "View Notes"}
        </NotesButton>
      </td>

      <DataContainer className="data-container__text">
        <p>{booking.room_number}</p>
      </DataContainer>
      <td>
        <Status $type={booking.status}>{booking.status}</Status>
      </td>
      <DataContainerButton style={{ position: "relative" }}>
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
                    editSingleBooking(e, booking._id);
                  }}
                >
                  Edit booking
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteCurrentBooking(e, booking._id);
                  }}
                >
                  Delete booking
                </button>
              </li>
            </ul>
          </DropDown>
        )}
      </DataContainerButton>
    </Row>
  );
};
