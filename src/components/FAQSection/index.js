import React, { useEffect } from "react";
import {
  FAQAnswer,
  FAQColumn,
  FAQContainer,
  FAQContentContainer,
  FAQHeading,
  FAQHr,
  FAQQuestion,
  FAQRow,
  FAQSubHeading,
} from "./FAQElements";
import Aos from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <FAQContainer>
        <FAQHeading>Frequently Asked Questions</FAQHeading>
        <FAQSubHeading>Things people often ask about</FAQSubHeading>
        <FAQHr />
        <FAQContentContainer>
          <FAQRow data-aos="zoom-in" data-aos-delay="0">
            <FAQColumn xs={12} md={6} lg={4}>
              <FAQQuestion>Lorem ipsum dolor sit amet</FAQQuestion>
              <FAQAnswer>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </FAQAnswer>
            </FAQColumn>
            <FAQColumn xs={12} md={6} lg={4}>
              <FAQQuestion>Ut enim ad minim veniam</FAQQuestion>
              <FAQAnswer>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
              </FAQAnswer>
            </FAQColumn>
            <FAQColumn xs={12} md={6} lg={4}>
              <FAQQuestion>Duis aute irure dolor in reprehenderit</FAQQuestion>
              <FAQAnswer>
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </FAQAnswer>
            </FAQColumn>
          </FAQRow>
          <FAQRow data-aos="zoom-in" data-aos-delay="10">
            <FAQColumn xs={12} md={6} lg={4}>
              <FAQQuestion>Lorem ipsum dolor sit amet</FAQQuestion>
              <FAQAnswer>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </FAQAnswer>
            </FAQColumn>
            <FAQColumn xs={12} md={6} lg={4}>
              <FAQQuestion>Ut enim ad minim veniam</FAQQuestion>
              <FAQAnswer>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat
              </FAQAnswer>
            </FAQColumn>
            <FAQColumn xs={12} md={6} lg={4}>
              <FAQQuestion>Duis aute irure dolor in reprehenderit</FAQQuestion>
              <FAQAnswer>
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </FAQAnswer>
            </FAQColumn>
          </FAQRow>
        </FAQContentContainer>
      </FAQContainer>
    </>
  );
};

export default FAQSection;
