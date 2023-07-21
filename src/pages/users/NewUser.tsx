// React
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router";
// Redux
import { useDispatch } from "react-redux";
import { createNewUser } from "../../features/usersSlice";

import { IUser } from "../../features/interfaces/interfaces";

// Components
import UserForm from "../../components/users/UserForm";

export const NewUser: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formTitle = "Please fill the form to create a new user";
  const [currentUser, setCurrentUser] = useState<IUser>({
    _id: "",
    photo: "",
    name: "",
    position: "",
    email: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    description: "",
    state: "ACTIVE",
    pass: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCancel = (e: FormEvent) => {
    e.preventDefault();
    navigate("/users");
  };

  const handleSubmit = () => {
    dispatch(createNewUser(currentUser));
    navigate("/users");
  };
  return (
    <UserForm
      formTitle={formTitle}
      currentUser={currentUser}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};
