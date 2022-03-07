import React from "react";
import frontend from "../../images/frond-end-dev.jpg";
import Footer from "../FooterSection";
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
} from "./CareersSinglePageDesigns";

const FrontEndComponent = () => {
  return (
    <PageContainer>
      <PageRow>
        <PageHeading>Front End Development</PageHeading>
        <PageImage src={frontend} />
        <PageSubheading>What is a Front-End Developer?</PageSubheading>
        <PageParagraph>
          The front-end of a website is the part that users interact with.
          Everything that you see when you’re navigating around the Internet,
          from fonts and colors to dropdown menus and sliders, is a combo of
          HTML, CSS, and JavaScript being controlled by your computer’s browser.
        </PageParagraph>
        <PageQuote>
          Front-end developers are responsible for implementing designs and
          concepts on the web
        </PageQuote>
        <PageSubheading>
          Skills and Tools Required for Front-End Development
        </PageSubheading>
        <PageParagraph>
          Front-end developers are responsible for a website’s user-facing code
          and the architecture of its immersive user experiences. In order to
          execute those objectives, front-end devs must be adept at three main
          languages: HTML, CSS, and Javascript programming.{" "}
        </PageParagraph>
        <PageParagraph>
          In addition to fluency in these languages, front-end devs need to be
          familiar with frameworks like Bootstrap, Foundation, Backbone,
          AngularJS, ReactJs and EmberJS, which ensure great-looking content no
          matter the device, and libraries like jQuery and LESS, which package
          code into a more useful, time-saving form.{" "}
        </PageParagraph>
        <PageParagraph>
          A lot of front-end developer job listings also call for experience
          with Ajax, a widely used technique for using Javascript that lets
          pages dynamically load by downloading server data in the background.
        </PageParagraph>
        <PageParagraph>
          A front-end dev is responsible for the interior design of a house
          that’s been built by a back-end dev.
        </PageParagraph>
        <PageParagraph>
          Using these tools, front-end developers work closely with designers or
          user experience analysts to bring mockups, or wireframes, from
          development to delivery. Strong front-end developers can also
          accurately identify specific issues in user experience and provide
          recommendations and codified solutions to influence the design.{" "}
        </PageParagraph>
        <PageParagraph>
          It’s also important to fluidly partner with other teams across the
          business to understand specific goals, needs, and opportunities and
          then execute on those directives.
        </PageParagraph>
        <PageParagraph>
          It’s a lot of responsibility, but it can be very rewarding. “I’m a
          technical person, but still a visual person, and being able to
          manipulate what we see and interact with on digital platforms through
          markup and code came naturally,” said Mikey Ilagan, a front-end
          developer with eight years of experience. “To that point, I love being
          able to make an impact on the user interface, the aspects of an app or
          website that the user interacts with and sees.”
        </PageParagraph>
        <PageParagraph>
          In all, a front-end dev is responsible for the interior design of a
          house that’s been built by a back-end dev. The taste and style of the
          decor is dictated by the homeowner. As Greg Matranga, Director of
          Product Marketing at Apptix, said of the team of both front-end and
          back-end developers he oversees, “The developers that work on the
          front end are sometimes more excited about what they do because
          they’re really able to leverage their creativity.”
        </PageParagraph>
        <PageSubheading>How it Translates</PageSubheading>
        <PageParagraph>
          Everything you’re seeing on this website right now was made possible
          by a front-end developer. A designer created the logo and graphics, a
          photographer took the pictures, and a copywriter wrote the text. But a
          front-end dev assembled all of those pieces, translated them into
          web-speak, and built the experience you have with each page.{" "}
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

export default FrontEndComponent;
