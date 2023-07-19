// React
import React, { ChangeEvent, FormEvent } from "react";

import { Booking } from "../../features/interfaces/interfaces";

// Styled Components
import {
  LoginContainer,
  LoginCard,
  InputContainer,
  Input,
  FormTitle,
  RadioInput,
  RadioLabel,
  RadioDescription,
  InputSubmit,
  InputCancel,
} from "../../pages/login/LoginStyled";

interface BookingFormProps {
  currentBooking: Booking;
  formTitle: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  currentBooking,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <LoginContainer>
        <LoginCard
          style={{
            height: "fit-content",
            margin: "2rem 0",
            width: "50%",
            border: "1px solid rgba(38, 166, 91, 1)",
          }}
        >
          <FormTitle style={{ textDecoration: "underline" }}>
            {formTitle}
          </FormTitle>
          <form onSubmit={onSubmit}>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                User Name
              </RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                value={currentBooking.name}
                placeholder="User Name"
                name="name"
                onChange={handleInput}
              />
            </InputContainer>

            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Check in
              </RadioDescription>
              <Input
                required
                style={{ color: "#777777" }}
                type="date"
                className="input-user"
                placeholder="dd-mm-yyyy"
                name="checkIn"
                value={currentBooking.checkIn}
                onChange={handleInput}
              />
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Check out
              </RadioDescription>
              <Input
                required
                style={{ color: "#777777" }}
                type="date"
                min={currentBooking.checkIn}
                className="input-user"
                placeholder="dd-mm-yyyy"
                name="checkOut"
                value={currentBooking.checkOut}
                onChange={handleInput}
              />
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Special request
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                placeholder="Special request"
                name="specialRequest"
                value={currentBooking.specialRequest}
                onChange={handleInput}
              />
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Room number
              </RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                value={currentBooking.room_number}
                placeholder="Room number"
                name="room_number"
                onChange={handleInput}
              />
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Select the Booking Status
              </RadioDescription>
              <RadioInput
                required
                type="radio"
                id="checkIn"
                value="Check In"
                name="status"
                onChange={handleInput}
                defaultChecked={currentBooking.status === "Check In"}
              />
              <RadioLabel htmlFor="checkIn">Check In</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="checkOut"
                value="Check Out"
                name="status"
                onChange={handleInput}
                defaultChecked={currentBooking.status === "Check Out"}
              />
              <RadioLabel htmlFor="checkOut">Check Out</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="inProgress"
                value="In Progress"
                name="status"
                onChange={handleInput}
                defaultChecked={currentBooking.status === "In Progress"}
              />
              <RadioLabel htmlFor="inProgress">In Progress</RadioLabel>
            </InputContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30%",
                margin: "auto",
                gap: "2rem",
              }}
            >
              <InputSubmit type="submit" value={"Save"} />
              <InputCancel
                onClick={(e) => {
                  handleCancel(e);
                }}
              >
                Cancel
              </InputCancel>
            </div>
          </form>
        </LoginCard>
      </LoginContainer>
    </>
  );
};

export default BookingForm;
