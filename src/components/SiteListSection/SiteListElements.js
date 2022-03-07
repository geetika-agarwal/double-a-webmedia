import { Button, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const SiteContainer = styled.div`
  padding: 1rem;
  color: #eeeeee;
`;

export const ListContainer = styled(Container)`
  border: 1px solid black;
  border-radius: 15px;
  background-color: #222831;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
`;

export const ListRow = styled(Row)``;

export const ListColumn = styled(Col)`
  padding: 0;
  text-align: center;
`;

export const SiteImg = styled.img`
  width: 85%;
  margin-top: 15px;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 15px;

  @media screen and (max-width: 775px) {
    height: 15rem;
  }
`;

export const SiteNameLabel = styled.h6`
  color: #eeeeee;
  margin-top: 1rem;
`;

export const SiteName = styled.h4`
  margin-left: 2rem;
  color: #ffc947;
`;

export const SiteCreatedLabel = styled.h6`
  color: #eeeeee;
  margin-top: 1rem;
`;

export const SiteCreatedAt = styled.h5`
  margin-left: 2rem;
  color: #ffc947;
`;

export const SiteStateLabel = styled.h6`
  color: #eeeeee;
  margin-top: 1rem;
`;

export const SiteState = styled.h5`
  margin-left: 2rem;
  font-size: 18px;
  color: #ffc947;
`;

export const SiteCategoryLabel = styled.h6`
  color: #eeeeee;
  margin-top: 1rem;
`;

export const SiteCategory = styled.h4`
  margin-left: 2rem;
  font-size: 18px;
  color: #ffc947;
`;

export const VisitPage = styled(Button)`
  margin-top: 2rem;
  color: #222831;
  font-weight: 600;
  background: #ffc947;
  outline: 0;
  border: 0;
  margin-bottom: 2rem;

  &:hover {
    background: #ffd369;
    color: #222831;
  }
`;
