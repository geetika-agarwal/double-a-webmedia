import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContactBackgroundContainer = styled.div`
  width: 100%;
  height: 25rem;
`;

export const ContactBackground = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const ContactHeading = styled.h1`
  width: 100%;
  text-align: center;
  color: #eeeeee;
  margin-top: 5rem;
  font-family: "horta";
  font-size: 4rem;
  letter-spacing: 3px;
  animation: fade 3s;
  position: absolute;
  top: 80px;
  -webkit-animation: fade 3s;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const ContactSubheading = styled.h2`
  text-align: center;
  color: #ffc947;
  font-family: Abel;
  font-weight: 600;
  letter-spacing: 3px;
  animation: fade 3s;
  -webkit-animation: fade 3s;
  position: absolute;
  top: 250px;
  left: 25%;
`;

export const ContactContentContainer = styled(Container)`
  margin-top: 2rem;
`;

export const ContactMapContainer = styled.div`
  width: 100%;
  height: 50vh;
  padding: 2rem 0;
`;

export const ContactRow = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

export const ContactColumn = styled(Col)``;

export const ContactDetailsWrap = styled.div``;

export const ContactLocation = styled.h4`
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 0;
  padding-top: 1rem;
  font-family: "Abel";
  font-weight: bold;
`;

export const ContactEmail = styled.h5`
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 0;
  padding-top: 1rem;
  font-family: "Abel";
`;

export const ContactPhone = styled.h5`
  display: inline-block;
  margin-left: 1rem;
  margin-bottom: 0;
  padding-top: 1rem;
  font-family: "Abel";
`;

export const ContactForm = styled(Form)`
  margin: 1rem;
`;

export const ContactNameInput = styled(FormControl)`
  display: inline-block;
  width: 45%;
  margin-right: 3rem;
  margin-bottom: 2rem;

  &:focus {
    border: 1px solid #ffc947;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const ContactEmailInput = styled(FormControl)`
  display: inline-block;
  width: 45%;

  &:focus {
    border: 1px solid #ffc947;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const ContactSubjectInput = styled(FormControl)`
  margin-bottom: 2rem;

  &:focus {
    border: 1px solid #ffc947;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const ContactDescTextArea = styled(FormControl)`
  width: 100%;
  height: 5rem;
  margin-bottom: 2rem;
  padding: 10px;
  outline: none;

  &:focus {
    border: 1px solid #ffc947;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const ContactBtnWrap = styled.div`
  text-align: center;
`;

export const ContactSubmitBtn = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #222831;
  background-color: #ffc947;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
