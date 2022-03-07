import {
  Button,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import styled from "styled-components";

export const CustomizeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;
  overflow: hidden;
`;

export const CustomizeBackgroundContainer = styled.div`
  width: 100%;
  height: 25rem;
`;

export const CustomizeBackground = styled.img`
  width: 100%;
  height: 25rem;
  position: absolute;
  z-index: -21;
  top: 80px;
  left: 0;
`;

export const CustomizeTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-weight: 900;
  margin-top: 10rem;
  font-size: 5rem;
  font-family: "horta";
  letter-spacing: 3px;
  animation: fade 3s;
  --webkit-animation: fade 3s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const CustomizeSubTitle = styled.h3`
  text-align: center;
  color: #ffc947;
  letter-spacing: 3px;
  font-family: "Abel";
  font-weight: 600;
  margin-top: 2rem;
  animation: fade 3s;
  --webkit-animation: fade 3s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const CustomizeContentContainer = styled(Container)`
  margin: 0;
  font-size: 20px;
`;

export const CustomizeBlockQuote = styled.h2`
  border-left: 10px solid #222831;
  padding: 10px 20px;
  color: #222831;
  font-family: "Abel";
  font-weight: 600;
  margin-left: 5rem;
  line-height: 1.5;
  font-style: italic;
  animation: fade 3s;
  -webkit-animation-: fade 3s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;

export const CustomForm = styled(Form)`
  margin: 0 8rem;

  @media screen and (max-width: 1024px) {
    margin: 0 1rem;
  }
`;

export const CustomLabel = styled(FormLabel)`
  color: #393e46;
  font-size: 23px;
  font-weight: 600;
  margin-top: 2rem;
  font-family: "Abel";
`;

export const NameInput = styled(FormControl)`
  width: 70%;
  margin-left: 2rem;
  border: 0.2px solid #393e46;
  border-radius: 3px;
  background-color: #f6f6f6;

  &:focus {
    background-color: #f6f6f6;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
    width: 90%;
  }
`;

export const EmailInput1 = styled(FormControl)`
  margin-left: 2rem;
  width: 70%;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;
  margin-bottom: 1.5rem;

  &:focus {
    background-color: #f6f6f6;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media screen and (max-width: 1165px) {
    width: 20rem;
    display: block;
    margin-left: 2rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;

export const EmailInput2 = styled(FormControl)`
  width: 70%;
  margin-left: 2rem;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;

  &:focus {
    background-color: #f6f6f6;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media screen and (max-width: 1165px) {
    width: 20rem;
    display: block;
    margin-left: 2rem;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;

export const Contact1 = styled(FormControl)`
  width: 70%;
  margin-left: 2rem;
  background-color: #f6f6f6;
  margin-bottom: 1.5rem;
  border: 0.2px solid #222831;
  border-radius: 3px;

  &:focus {
    background-color: #f6f6f6;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media screen and (max-width: 1195px) {
    width: 20rem;
    display: block;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;

export const Contact2 = styled(FormControl)`
  width: 70%;
  margin-left: 2rem;
  height: 35px;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;

  &:focus {
    background-color: #f6f6f6;
    outline: none;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media screen and (max-width: 1195px) {
    width: 20rem;
    display: block;
    margin-left: 2rem;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
  }
`;

export const Title = styled(FormControl)`
  width: 70%;
  margin-left: 2rem;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;

  &:focus {
    background-color: #f6f6f6;
    outline: none;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
    width: 85%;
  }
`;

export const TextArea = styled(FormControl)`
  width: 70%;
  margin-left: 2rem;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;
  height: 6rem;
  padding: 1rem;

  &:focus {
    background-color: #f6f6f6;
    outline: none;
    color: #476d7c;
    border: 1px solid #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const DesignInput = styled(FormControl)`
  width: 70%;
  margin-left: 2rem;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;

  &:focus {
    background-color: #f6f6f6;
    outline: none;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
    width: 85%;
  }
`;

export const DaysCounter = styled(FormControl)`
  display: inline-block;
  width: 10rem;
  margin-left: 2rem;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;

  &:focus {
    background-color: #f6f6f6;
    outline: none;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }
`;

export const UpdateInput = styled(FormControl)`
  width: 70%;
  margin-left: 2rem;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;

  &:focus {
    background-color: #f6f6f6;
    outline: none;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
    width: 85%;
  }
`;

export const FrontendLabel = styled(FormLabel)`
  color: #222831;
  font-family: "Abel";
  font-size: 20px;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-left: 3rem;

  @media screen and (max-width: 400px) {
    width: 80%;
    margin-left: 5px;
  }
`;

export const Frontend = styled(FormControl)`
  display: inline-block;
  width: 30%;
  margin-left: 2rem;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;

  &:focus {
    background-color: #f6f6f6;
    outline: none;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: 4rem;
    width: 60%;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
    margin-left: 10px;
  }
`;

export const BackendLabel = styled(FormLabel)`
  color: #222831;
  font-family: "Abel";
  font-size: 20px;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-left: 3rem;

  @media screen and (max-width: 400px) {
    width: 80%;
    margin-left: 5px;
  }
`;

export const Backend = styled(FormControl)`
  display: inline-block;
  width: 30%;
  margin-left: 2rem;
  background-color: #f6f6f6;
  border: 0.2px solid #222831;
  border-radius: 3px;
  margin-top: 1rem;

  &:focus {
    background-color: #f6f6f6;
    outline: none;
    color: #476d7c;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #476d7c;
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: 4rem;
    width: 60%;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
    margin-left: 10px;
  }
`;

export const TermsCheck = styled(FormCheck)`
  margin: 1rem 4rem;
  color: #bbbbbb;

  @media screen and (max-width: 550px) {
    margin: 1rem 2px;
  }
`;

export const SubmitButtonWrap = styled.div`
  margin-top: 3rem;
  text-align: center;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  width: 15rem;
  height: 3rem;
  border: none;
  color: #222831;
  font-family: "Abel";
  background-color: #ffc947;
  border-radius: 10px;
  outline: none;
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    background-color: #ffd369;
    color: #000;
    font-weight: 600;
  }
`;
