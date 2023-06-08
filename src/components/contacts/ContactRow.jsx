// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Styled Components
import { Row } from "../bookings/BookingRowStyled";
import { DataContainer, DataContainerButton } from "./ContactRowStyled";

// Redux
import { useDispatch } from "react-redux";
import { archiveContact } from "../../features/contacSlice";

export const ContactRow = (props) => {
  const dispatch = useDispatch();

  const handleContact = (id) => {
    dispatch(archiveContact(id));
  };

  return (
    <Row key={props.contact.id}>
      <DataContainer className="data-container__text">
        <p>#{props.contact.id}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{props.contact.date}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{props.contact.user.name}</p>
      </DataContainer>
      <DataContainer className="data-container__text">
        <p>{props.contact.message.body}</p>
      </DataContainer>
      <DataContainerButton>
        {props.contact.archived ? (
          <button
            className="green"
            onClick={() => {
              return handleContact(props.contact.id);
            }}
          >
            restore
          </button>
        ) : (
          <button
            className="red"
            onClick={() => {
              return handleContact(props.contact.id);
            }}
          >
            Archive
          </button>
        )}
      </DataContainerButton>
    </Row>
  );
};
