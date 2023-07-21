// React
import React from "react";

import { IUser } from "../../features/interfaces/interfaces";

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

interface UserFormProps {
  currentUser: IUser;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  formTitle: string;
  handleCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserForm: React.FC<UserFormProps> = ({
  currentUser,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}) => {
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                User name
              </RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                value={currentUser.name}
                placeholder="User Name"
                name="name"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                User picture
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                value={currentUser.photo}
                placeholder="Copy your photo URL"
                name="photo"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                User Email
              </RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                value={currentUser.email}
                placeholder="User Email"
                name="email"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Phone Number
              </RadioDescription>
              <Input
                required
                type="number"
                min={0}
                className="input-user"
                value={currentUser.phone}
                placeholder="Phone Number"
                name="phone"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Select Position
              </RadioDescription>
              <RadioInput
                required
                type="radio"
                id="Manager"
                value="Manager"
                name="position"
                onChange={handleInput}
                defaultChecked={currentUser.position === "Manager"}
              />
              <RadioLabel htmlFor="Manager">Manager</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="Reception"
                value="Reception"
                name="position"
                onChange={handleInput}
                defaultChecked={currentUser.position === "Reception"}
              />
              <RadioLabel htmlFor="Reception">Reception</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="Room Service"
                value="Room Service"
                name="position"
                onChange={handleInput}
                defaultChecked={currentUser.position === "Room Service"}
              />
              <RadioLabel htmlFor="Room Service">Room Service</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Start Date
              </RadioDescription>
              <Input
                required
                style={{ color: "#777777" }}
                type="date"
                className="input-user"
                placeholder="dd-mm-yyyy"
                name="date"
                value={currentUser.date}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Position Description
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                placeholder="Position Description"
                name="description"
                value={currentUser.description}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Select the User Status
              </RadioDescription>
              <RadioInput
                required
                type="radio"
                id="ACTIVE"
                value="ACTIVE"
                name="state"
                onChange={handleInput}
                defaultChecked={currentUser.state === "ACTIVE"}
              />
              <RadioLabel htmlFor="ACTIVE">Active</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="INACTIVE"
                value="INACTIVE"
                name="state"
                onChange={handleInput}
                defaultChecked={currentUser.state === "INACTIVE"}
              />
              <RadioLabel htmlFor="INACTIVE">Inactive</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription style={{ textDecoration: "underline" }}>
                Password
              </RadioDescription>
              <Input
                type="text"
                className="input-user"
                value={currentUser.pass}
                placeholder="Enter the Password"
                name="pass"
                onChange={handleInput}
              ></Input>
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

export default UserForm;
