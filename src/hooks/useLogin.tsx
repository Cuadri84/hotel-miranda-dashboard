// Context
import { useAuthContext } from "./useAuthContext";

// Dispatch login action
export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    try {
      dispatch({
        type: "LOGIN",
        payload: { email: email, password: password },
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return { login };
};
