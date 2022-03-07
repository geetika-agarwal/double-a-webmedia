import React, { useEffect } from "react";
import {
  CardContent,
  CardPosition,
  CardSocialLinks,
  CardTitle,
  Profile,
  ProfileImg,
  TeamCol,
  TeamContainer,
  TeamContentContainer,
  TeamHeading,
  TeamHr,
  TeamRow,
} from "./OurTeamElements";
import person1 from "../../images/person1.jpg";
import person2 from "../../images/person2.jpg";
import person3 from "../../images/person3.jpg";
import person4 from "../../images/person4.jpg";
import person5 from "../../images/person5.jpg";
import person6 from "../../images/person6.jpg";
import { FaTwitter, FaLinkedinIn, FaFacebookMessenger } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <TeamContainer>
        <TeamHeading>Meet Our Team</TeamHeading>
        <TeamHr />
        <TeamContentContainer>
          <TeamRow data-aos="zoom-in">
            <TeamCol xs={12} lg={4}>
              <CardContent className="card">
                <Profile>
                  <ProfileImg src={person1} className="profile" />
                </Profile>
                <CardTitle>Ross Geller</CardTitle>
                <CardPosition>CEO</CardPosition>
                <CardSocialLinks>
                  <FaTwitter className="socialLink" />
                  <FaLinkedinIn className="socialLink" />
                  <FaFacebookMessenger className="socialLink" />
                </CardSocialLinks>
              </CardContent>
            </TeamCol>
            <TeamCol xs={12} lg={4}>
              <CardContent className="card">
                <Profile>
                  <ProfileImg src={person2} className="profile" />
                </Profile>
                <CardTitle>Monica Geller</CardTitle>
                <CardPosition>Director</CardPosition>
                <CardSocialLinks>
                  <FaTwitter className="socialLink" />
                  <FaLinkedinIn className="socialLink" />
                  <FaFacebookMessenger className="socialLink" />
                </CardSocialLinks>
              </CardContent>
            </TeamCol>
            <TeamCol xs={12} lg={4}>
              <CardContent className="card">
                <Profile>
                  <ProfileImg src={person3} className="profile" />
                </Profile>
                <CardTitle>Rachel Green</CardTitle>
                <CardPosition>Lead Frontend Developer</CardPosition>
                <CardSocialLinks>
                  <FaTwitter className="socialLink" />
                  <FaLinkedinIn className="socialLink" />
                  <FaFacebookMessenger className="socialLink" />
                </CardSocialLinks>
              </CardContent>
            </TeamCol>
          </TeamRow>
          <TeamRow data-aos="zoom-in">
            <TeamCol xs={12} lg={4}>
              <CardContent className="card">
                <Profile>
                  <ProfileImg src={person4} className="profile" />
                </Profile>
                <CardTitle>Chandler Bing</CardTitle>
                <CardPosition>Lead Backend Developer</CardPosition>
                <CardSocialLinks>
                  <FaTwitter className="socialLink" />
                  <FaLinkedinIn className="socialLink" />
                  <FaFacebookMessenger className="socialLink" />
                </CardSocialLinks>
              </CardContent>
            </TeamCol>
            <TeamCol xs={12} lg={4}>
              <CardContent className="card">
                <Profile>
                  <ProfileImg src={person5} className="profile" />
                </Profile>
                <CardTitle>Phoebe Buffay</CardTitle>
                <CardPosition>Project Manager</CardPosition>
                <CardSocialLinks>
                  <FaTwitter className="socialLink" />
                  <FaLinkedinIn className="socialLink" />
                  <FaFacebookMessenger className="socialLink" />
                </CardSocialLinks>
              </CardContent>
            </TeamCol>
            <TeamCol xs={12} lg={4}>
              <CardContent className="card">
                <Profile>
                  <ProfileImg src={person6} className="profile" />
                </Profile>
                <CardTitle>Janice Hosenstein</CardTitle>
                <CardPosition>Human Resources</CardPosition>
                <CardSocialLinks>
                  <FaTwitter className="socialLink" />
                  <FaLinkedinIn className="socialLink" />
                  <FaFacebookMessenger className="socialLink" />
                </CardSocialLinks>
              </CardContent>
            </TeamCol>
          </TeamRow>
        </TeamContentContainer>
      </TeamContainer>
    </>
  );
};

export default OurTeam;
