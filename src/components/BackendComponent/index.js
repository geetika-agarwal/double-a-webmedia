import React from "react";
import {
  PageBtn,
  PageBtnWrap,
  PageContainer,
  PageHeading,
  PageImage,
  PageParagraph,
  PageQuote,
  PageRow,
  PageSubheading,
} from "../FrontendComponent/CareersSinglePageDesigns";
import backend from "../../images/back-end-dev.jpg";
import Footer from "../FooterSection";

const BackEndComponent = () => {
  return (
    <PageContainer>
      <PageRow>
        <PageHeading>Back End Developer</PageHeading>
        <PageImage src={backend} />
        <PageSubheading>What is a Back-End Developer?</PageSubheading>
        <PageParagraph>
          So what makes the front-end of a website possible? Where is all that
          data stored? This is where the back-end comes in. The back- end of a
          website consists of a server, an application, and a database.{" "}
        </PageParagraph>
        <PageParagraph>
          A back-end developer builds and maintains the technology that powers
          those components which, together, enable the user-facing side of the
          website to even exist in the first place.
        </PageParagraph>
        <PageQuote>
          A back-end developer builds and maintains the technology that powers
          those components which, together, enable the user-facing side of the
          website to even exist in the first place.
        </PageQuote>
        <PageSubheading>
          Skills and Tools Required for Back-End Development
        </PageSubheading>
        <PageParagraph>
          In order to make the server, application, and database communicate
          with each other, back-end devs use server-side languages like PHP,
          Ruby, Python, Java, and .Net to build an application, and tools like
          MySQL, Oracle, and SQL Server to find, save, or change data and serve
          it back to the user in front-end code.{" "}
        </PageParagraph>
        <PageParagraph>
          Job openings for back-end developers often also call for experience
          with PHP frameworks like Zend, Symfony, and CakePHP; experience with
          version control software like SVN, CVS, or Git; and experience with
          Linux as a development and deployment system.
        </PageParagraph>
        <PageParagraph>
          Back-end devs use these tools to create or contribute to web
          applications with clean, portable, well-documented code. But before
          writing that code, they need to collaborate with business stakeholders
          to understand their particular needs, then translate those into
          technical requirements and come up with the most effective and
          efficient solution for architecting the technology.
        </PageParagraph>
        <PageParagraph>
          “I’ve always preferred back-end development because I love
          manipulating data,” said long-time back-end developer JP Toto, who’s
          currently a software developer for Wildbit. “Recently public and
          private APIs have become an essential part of trading data between
          mobile devices, websites, and other connected systems. Creating APIs
          that the public finds useful is a very satisfying part of my job.”
        </PageParagraph>
        <PageSubheading>How it Translates</PageSubheading>
        <PageParagraph>
          When you navigated to this website, the Udacity servers sent
          information to your computer or mobile device, which turned into the
          page you’re seeing right now. That process is the result of a back-end
          developer’s work. In addition, if you enroll in a Udacity course or
          nanodegree, the storage of your personal information—and the fact that
          each time you return to the site and log in, your data is called up—is
          attributable to a back-end developer.
        </PageParagraph>
      </PageRow>
      <PageRow>
        <PageBtnWrap>
          <PageBtn>Apply Here</PageBtn>
        </PageBtnWrap>
      </PageRow>
      <Footer />
    </PageContainer>
  );
};

export default BackEndComponent;
