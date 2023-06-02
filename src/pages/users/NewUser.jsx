// React
import React, { useState } from "react";
import { useNavigate } from "react-router";

// Components
import UserForm from "../../components/users/UserForm";

const NewUser = () => {
  const navigate = useNavigate();

  const formTitle = "Please fill the form to create a new user";
  const [currentUser, setCurrentUser] = useState({
    id: Math.floor(Math.random() * 100000),
    photo: "",
    name: "",
    position: "",
    email: "",
    phone: "",
    date: "",
    description: "",
    state: "",
    pass: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    let valToUpdate;
    if (name === "position") {
      valToUpdate = value;
    } else {
      valToUpdate = value;
    }
    setCurrentUser((prevState) => ({ ...prevState, [name]: valToUpdate }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/users");
  };

  const handleSubmit = () => {
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

export default NewUser;
