// React & Router
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Styled Components
import { Row } from "../bookings/BookingRowStyled";
import { DataContainer, DataContainerButton } from "./ContactRowStyled";

export const ContactRow = (props) => {
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
        <button className="green">Publish</button>
        <button className="red">Archive</button>
      </DataContainerButton>
    </Row>
  );
};
