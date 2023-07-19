// React
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
import { getUser, editUser } from "../../features/usersSlice";
import { useTypedSelector } from "../../store/store";

//Conponents
import UserForm from "../../components/users/UserForm";
import { Loader } from "../../components/styled/Loader";

import { IUser } from "../../features/interfaces/interfaces";

export const EditUser: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const { id } = params;
  const { singleUser } = useTypedSelector(
    (state: RootStateOrAny) => state.users
  );
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const formTitle =
    "Here you can edit the fields needed and save them to update the original user";

  useEffect(() => {
    if (id) {
      dispatch(getUser(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (singleUser) {
      setCurrentUser(singleUser);
    }
  }, [singleUser]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentUser(
      (prevState) => ({ ...prevState, [name]: value } as IUser | null)
    );
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/users");
  };

  const handleSubmit = () => {
    if (currentUser && currentUser._id) {
      dispatch(editUser({ _id: currentUser._id, user: currentUser }));

      navigate("/users");
    }
  };

  return !currentUser ? (
    <Loader />
  ) : (
    <UserForm
      formTitle={formTitle}
      currentUser={currentUser}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};
