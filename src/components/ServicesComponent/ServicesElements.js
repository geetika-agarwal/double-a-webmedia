import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
`;

export const ServicesHeading = styled.h1`
  color: #222831;
  font-family: horta;
  text-align: center;
  padding-top: 3rem;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 3px;
`;

export const ServicesSubheading = styled.h4`
  font-family: "Abel";
  text-align: center;
  margin: 1.5rem 15rem;
  color: #393e46;
  font-weight: 600;
`;

export const ServicesHr = styled.hr`
  width: 10%;
  margin: 0.5rem auto;
  border-top: 5px solid #ffc947;
`;

export const ServiceCardContainer = styled(Container)``;

export const ServiceRow = styled(Row)`
  margin-top: 1rem;
`;

export const ServiceCol = styled(Col)``;

export const ServiceCard = styled.div`
  width: 100%;
  margin: 1rem auto;
  border: 2px solid #ffc947;
  padding: 2rem;
  height: 50vh;
  margin-bottom: 3rem;
  border-radius: 10px;
  background: #f6f6f6;
  margin-top: 3rem;

  &:hover {
    background-color: #ffc947;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin-top: 2.5rem;
  }
`;

export const SImgWrap = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const SCardImg = styled.img`
  width: 30%;
  color: red;
`;

export const SCardHeading = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 4rem;
  font-family: "horta";
  font-weight: 900;
`;

export const SCardSubheading = styled.h4`
  margin: 2rem auto;
  text-align: center;
  font-weight: 500;
  font-family: "Abel";
`;
