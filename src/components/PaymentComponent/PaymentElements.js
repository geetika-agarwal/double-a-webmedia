import { Container, Form, FormControl, FormLabel } from "react-bootstrap";
import styled from "styled-components";

export const PaymentContainer = styled(Container)`
  background-color: #ffffff;
  padding-top: 100px;
  height: 100%;
`;

export const PaymentHeading = styled.h1`
  text-align: center;
  font-family: "horta";
  font-size: 4rem;
  color: #222831;
`;

export const PaymentSubheading = styled.h3`
  text-align: center;
  color: #393e46;
  font-family: "Abel";
`;

export const PaymentForm = styled(Form)`
  margin: 2rem 5rem;
`;

export const PLabel = styled(FormLabel)`
  color: #393e46;
  font-weight: bolder;
  font-family: "Abel";
  font-size: 1.2rem;
`;

export const PFirstNameInput = styled(FormControl)`
  width: 40%;
  margin-bottom: 1rem;
  display: inline-block;
  margin-left: 2rem;
  color: #222831;
  font-family: "Abel";

  &:focus {
    box-shadow: none;
    border: 1px solid #ffc947;
  }
`;

export const PLastNameInput = styled(FormControl)`
  width: 40%;
  display: inline-block;
  margin-left: 2rem;
  font-family: "Abel";
  color: #222831;

  &:focus {
    box-shadow: none;
    border: 1px solid #ffc947;
  }
`;

export const PEmailInput = styled(FormControl)`
  width: 83%;
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-family: "Abel";
  color: #222831;
  &:focus {
    box-shadow: none;
    border: 1px solid #ffc947;
  }
`;

export const PPackType = styled(FormControl)`
  width: 83%;
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-family: "Abel";
  color: #222831;

  &:focus {
    box-shadow: none;
    border: 1px solid #ffc947;
  }
`;

export const PPhoneNumberInput = styled(FormControl)`
  width: 83%;
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-family: "Abel";
  color: #222831;

  &:focus {
    box-shadow: none;
    border: 1px solid #ffc947;
  }
`;

export const PBtnWrap = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const PBtn = styled.button`
  width: 10rem;
  height: 3rem;
  border: none;
  background-color: #ffc947;
  border-radius: 10px;
  color: #222831;
  font-family: "Abel";

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    font-weight: bold;
  }
`;
