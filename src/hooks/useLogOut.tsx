// src/hooks/useLogOut.tsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext); // Use 'useContext' here

  const logout = async () => {
    try {
      dispatch({ type: "LOGOUT" });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { logout };
};
