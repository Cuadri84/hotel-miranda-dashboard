import { ReactNode } from "react";

// Define the AuthState and AuthAction types
interface AuthState {
  user: any; // Replace 'any' with the actual type of your user object
  authReady: boolean;
}

export type AuthAction = {
  type: "LOGIN" | "LOGOUT" | "AUTH_READY";
  payload?: any; // Replace 'any' with the actual type of the payload
};

export const AuthContext: React.Context<{
  user: any; // Replace 'any' with the actual type of your user object
  authReady: boolean;
  dispatch: React.Dispatch<AuthAction>;
}>;
