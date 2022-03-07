import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const TeamContainer = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
`;

export const TeamHeading = styled.h1`
  text-align: center;
  padding-top: 3rem;
  margin-bottom: 1rem;
  font-family: "horta";
  color: #222831;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 3px;
`;

export const TeamHr = styled.hr`
  width: 10%;
  border-bottom: 5px solid #ffc947;
  margin: auto;
  margin-bottom: 3rem;
`;

export const TeamContentContainer = styled(Container)`
  width: 100%;
  height: 100%;
  padding-bottom: 1px;
`;

export const TeamRow = styled(Row)`
  margin: 6rem 0;
`;

export const TeamCol = styled(Col)`
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.div`
  background-color: #393e46;
  border-radius: 40px;
  height: 50vh;
  margin-top: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  &:hover {
    margin-top: 0.2rem;
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  text-align: center;
  position: relative;
  bottom: 80px;
`;

export const ProfileImg = styled.img`
  width: 40%;
  border-radius: 50%;
`;

export const CardTitle = styled.h1`
  text-align: center;
  font-family: "horta";
  letter-spacing: 3px;
  color: #ffd369;
`;

export const CardPosition = styled.h3`
  text-align: center;
  color: #eeeeee;
  font-family: "Abel";
`;

export const CardRole = styled.h5`
  color: #f6f6f6;
  font-family: "Abel";
  word-spacing: 3px;
  text-align: center;
  padding: 1rem 4rem;
`;

export const CardSocialLinks = styled.div`
  margin: 2rem auto;
  justify-content: space-between;
  text-align: center;
  color: #eeeeee;
  padding-bottom: 3rem;
`;
