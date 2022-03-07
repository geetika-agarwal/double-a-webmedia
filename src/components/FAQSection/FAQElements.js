import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
`;

export const FAQHeading = styled.h1`
  text-align: center;
  padding-top: 3rem;
  font-family: "horta";
  letter-spacing: 3px;
  font-size: 3rem;
  color: #222831;
`;

export const FAQSubHeading = styled.h4`
  text-align: center;
  color: #393e46;
  font-family: "Abel";
  font-weight: 600;
  margin: 1rem 0;
`;

export const FAQHr = styled.hr`
  width: 10%;
  margin: 1rem auto;
  border-bottom: 5px solid #ffc947;
`;

export const FAQContentContainer = styled(Container)`
  padding-bottom: 2rem;
  margin-top: 2rem;
`;

export const FAQRow = styled(Row)`
  margin-bottom: 3rem;
`;

export const FAQColumn = styled(Col)``;

export const FAQQuestion = styled.h3`
  font-family: "horta";
  color: #222831;
  letter-spacing: 2px;
`;

export const FAQAnswer = styled.h5`
  font-family: "Abel";
  padding-left: 20px;
`;
