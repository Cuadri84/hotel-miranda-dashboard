import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  box-shadow: 0px 16px 30px #00000014;
  padding: 3%;
  width: 50rem;
  height: 40rem;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  text-align: center;
  font-family: var(--font-poppins);
  font-size: 1.4rem;
`;

const FormTitle = styled.p`
  text-align: center;
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: 500;
  color: #393939;
  margin-bottom: 4rem;
`;

const InputContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Input = styled.input`
  transition: all 0.1s;
  width: 100%;
  margin: 0 0 3rem 0;
  display: block;
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid #c5c5c5;

  &:hover {
    border-bottom: 1px solid #135846;
  }
  &:hover ~ div .input-icon {
    color: #135846;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #135846;
  }

  &:focus ~ div .input-icon {
    color: #135846;
  }
`;

const LoginButton = styled.button`
  background-color: #ebf1ef;
  border: none;
  border-radius: 8px;
  width: 16rem;
  transition: background-color 0.3s;
  text-align: center;
  font-family: var(--font-poppins);
  text-decoration: none;
  color: #135846;
  font-size: 1.4rem;
  font-weight: 600;
  display: block;
  padding: 1.5rem;
  margin: auto;
  :hover {
    background-color: rgba(19, 87, 69, 0.2);
  }
`;
const InputSubmit = styled.input`
  display: inline-block;
  background-color: #ebf1ef;
  border: none;
  border-radius: 8px;
  width: 16rem;
  transition: background-color 0.3s;
  text-align: center;
  font-family: var(--font-poppins);
  text-decoration: none;
  color: #135846;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.5rem;
  margin: auto;
  :hover {
    background-color: rgba(19, 87, 69, 0.2);
  }
`;
const InputCancel = styled.button`
  display: inline-block;
  background-color: rgba(226, 52, 40, 0.1);
  border: none;
  border-radius: 8px;
  width: 16rem;
  transition: background-color 0.3s;
  text-align: center;
  font-family: var(--font-poppins);
  text-decoration: none;
  color: rgba(226, 52, 40, 1);
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.5rem;
  margin: auto;
  :hover {
    background-color: rgba(226, 52, 40, 0.2);
  }
`;

const RadioInput = styled.input`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  color: #777777;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;

const RadioLabel = styled.label`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  color: #777777;
  margin-right: 1rem;
`;

const RadioDescription = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.6rem;
  color: #393939;
  margin-top: 0;
`;

export {
  Description,
  FormTitle,
  Input,
  InputCancel,
  InputContainer,
  InputSubmit,
  LoginButton,
  LoginCard,
  LoginContainer,
  LogoContainer,
  RadioDescription,
  RadioInput,
  RadioLabel,
};
