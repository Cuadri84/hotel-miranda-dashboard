// React
import React, { ChangeEvent, FormEvent } from "react";

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
import { IRoom } from "../../features/interfaces/interfaces";

interface RoomFormProps {
  currentRoom: IRoom;
  formTitle: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RoomForm: React.FC<RoomFormProps> = ({
  currentRoom,
  formTitle,
  handleInput,
  handleSubmit,
  handleCancel,
}) => {
  const listOfAmenities = [
    "Air Conditioner",
    "Kitchen",
    "Grocery",
    "Towels",
    "Smart Security",
    "High speed WiFi",
    "Cleaning",
    "Single Bed",
    "24/7 Online Support",
    "Expert Team",
    "Breakfast",
    "Shower",
    "Shop near",
    "Strong locker",
  ];

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
          <FormTitle>{formTitle}</FormTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Photo one
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo"
                value={currentRoom.photo}
                placeholder="First photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Photo two
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photoTwo"
                value={currentRoom.photoTwo}
                placeholder="Second photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Photo three
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photoThree"
                value={currentRoom.photoThree}
                placeholder="Third photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Photo four
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photoFour"
                value={currentRoom.photoFour}
                placeholder="Four photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Photo five
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photoFive"
                value={currentRoom.photoFive}
                placeholder="Five photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Select the Room Type
              </RadioDescription>
              <RadioInput
                required
                type="radio"
                id="singleBed"
                value="single"
                name="bed_type"
                onChange={handleInput}
                defaultChecked={currentRoom.bed_type === "Single Bed"}
              />
              <RadioLabel htmlFor="singleBed">Single</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="double"
                value="double"
                name="bed_type"
                onChange={handleInput}
                defaultChecked={currentRoom.bed_type === "double"}
              />
              <RadioLabel htmlFor="doubleBed">Double</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleSuperior"
                value="double-superior"
                name="bed_type"
                onChange={handleInput}
                defaultChecked={currentRoom.bed_type === "double-superior"}
              />
              <RadioLabel htmlFor="doubleSuperior">Double Superior</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="suite"
                value="suite"
                name="bed_type"
                onChange={handleInput}
                defaultChecked={currentRoom.bed_type === "suite"}
              />
              <RadioLabel htmlFor="suite">Suite</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Room number
              </RadioDescription>
              <Input
                required
                type="number"
                min={0}
                className="input-user"
                name="room_number"
                value={currentRoom.room_number}
                placeholder="Room Number"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Room description
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="description"
                value={currentRoom.description}
                placeholder="Room description"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Offer
              </RadioDescription>
              <RadioInput
                required
                type="radio"
                id="yes"
                value="Yes"
                name="discount"
                onChange={handleInput}
                defaultChecked={currentRoom.discount === "Yes"}
              />
              <RadioLabel htmlFor="yes">Yes</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="no"
                value="No"
                name="discount"
                onChange={handleInput}
                defaultChecked={currentRoom.discount === "No"}
              />
              <RadioLabel htmlFor="no">No</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Room rate
              </RadioDescription>
              <Input
                required
                type="number"
                min={0}
                className="input-user"
                placeholder="Price per night"
                name="room_rate"
                value={currentRoom.room_rate}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            {currentRoom.discount === "Yes" ? (
              <InputContainer>
                <RadioDescription style={{ textDecoration: "underline" }}>
                  Discount %
                </RadioDescription>
                <Input
                  required
                  type="number"
                  min={0}
                  className="input-user"
                  name="discountPercent"
                  value={currentRoom.discountPercent}
                  placeholder="Discount %"
                  onChange={handleInput}
                ></Input>
              </InputContainer>
            ) : null}

            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Cancellation Policy
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="cancellationPolicy"
                value={currentRoom.cancellationPolicy}
                placeholder="Cancellation Policy"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Select the amenities included in the new room
              </RadioDescription>
              {listOfAmenities.map((amenity, index) => (
                <div key={index} style={{ display: "inline-block" }}>
                  {currentRoom.room_facilities.includes(amenity) ? (
                    <RadioInput
                      type="checkbox"
                      name="room_facilities"
                      id={amenity}
                      value={amenity}
                      onChange={handleInput}
                      defaultChecked
                    />
                  ) : (
                    <RadioInput
                      type="checkbox"
                      name="room_facilities"
                      id={amenity}
                      value={amenity}
                      onChange={handleInput}
                    />
                  )}

                  <RadioLabel htmlFor={amenity}>{amenity}</RadioLabel>
                </div>
              ))}
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Room status
              </RadioDescription>
              <RadioInput
                required
                type="radio"
                id="available"
                value="Available"
                name="room_status"
                onChange={handleInput}
                defaultChecked={currentRoom.room_status === "Available"}
              />
              <RadioLabel htmlFor="available">Available</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="booked"
                value="Booked"
                name="room_status"
                onChange={handleInput}
                defaultChecked={currentRoom.room_status === "Booked"}
              />
              <RadioLabel htmlFor="booked">Booked</RadioLabel>
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

export default RoomForm;
