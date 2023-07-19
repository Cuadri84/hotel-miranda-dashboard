// React & Router
import React from "react";

// Styled Components
import { Row } from "../bookings/BookingRowStyled";
import { DataContainer, DataContainerButton } from "./ContactRowStyled";

// Redux
import { useDispatch } from "react-redux";
import { archiveContact } from "../../features/contacSlice";
import { IContact } from "../../features/interfaces/interfaces";

interface ContactRowcontact {
  contact: IContact;
}

export const ContactRow: React.FC<ContactRowcontact> = (contact) => {
  const dispatch = useDispatch();

  const handleContact = (_id: string) => {
    console.log(_id);
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
              return handleContact(contact.contact._id);
            }}
          >
            restore
          </button>
        ) : (
          <button
            className="red"
            onClick={() => {
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
