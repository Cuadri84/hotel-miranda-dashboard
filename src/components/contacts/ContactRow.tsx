// React & Router
import React from "react";

// Styled Components
import { Row } from "../bookings/BookingRowStyled";
import { DataContainer, DataContainerButton } from "./ContactRowStyled";

// Redux
import { useDispatch } from "react-redux";
import { archiveContact } from "../../features/contacSlice";
import { IContact } from "../../features/interfaces/interfaces";
import Swal from "sweetalert2";

interface ContactRowcontact {
  contact: IContact;
}

export const ContactRow: React.FC<ContactRowcontact> = (contact) => {
  const dispatch = useDispatch();

  const handleContact = (_id: string) => {
    dispatch(archiveContact(_id));
  };

  let date: string = new Date(contact.contact.date).toLocaleDateString();

  return (
    <Row key={contact.contact._id}>
      <DataContainer className="data-container__text">
        <p>#{contact.contact._id}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{date}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{contact.contact.name}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{contact.contact.messageBody}</p>
      </DataContainer>
      <DataContainerButton>
        {contact.contact.archived ? (
          <button
            className="green"
            onClick={() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Restored Contact",
                showConfirmButton: false,
                timer: 1500,
              });
              return handleContact(contact.contact._id);
            }}
          >
            restore
          </button>
        ) : (
          <button
            className="red"
            onClick={() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Archived Contact",
                showConfirmButton: false,
                timer: 1500,
              });
              return handleContact(contact.contact._id);
            }}
          >
            Archive
          </button>
        )}
      </DataContainerButton>
    </Row>
  );
};
