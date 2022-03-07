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
import fullstack from "../../images/full-stack-dev.jpg";
import Footer from "../FooterSection";

const FullStack = () => {
  return (
    <PageContainer>
      <PageRow>
        <PageHeading>Full Stack Developer</PageHeading>
        <PageImage src={fullstack} />
        <PageSubheading>What is a Full Stack Developer?</PageSubheading>
        <PageParagraph>
          There’s often not a black-and-white distinction between front-end and
          back-end development. “Front-end developers often need to learn those
          additional back-end skills, and vice versa, especially in the current
          economy where marketing is thinly resourced,” said Matranga.
          “Developers need some of that cross-discipline. Oftentimes, you have
          to be a generalist.”
        </PageParagraph>
        <PageQuote>Full stack developers are jacks-of-all-trades.</PageQuote>
        <PageParagraph>
          The role was popularized by Facebook’s engineering department. The
          idea is that a full stack developer can work cross-functionally on the
          full “stack” of technology, i.e. both the front end and back end. Full
          stack developers offer the full package.
        </PageParagraph>
        <PageParagraph>
          “Working on both the server side and client side professionally opens
          more opportunities,” said Federico Ulfo, Full Stack Developer at
          Grovo. But, of course, full- stack development isn’t without its
          challenges. “To make an analogy with food, you can be good at cooking
          or good at baking, but mastering both takes time and experience. And
          I’m not talking about following a recipe, anyone can do that. I’m
          talking about having the ingredients to prepare something truly good.”
        </PageParagraph>
        <PageSubheading>
          Skills and Tools Required for Full Stack Developers
        </PageSubheading>
        <PageParagraph>
          Full stack developers work, like back-end devs, on the server side of
          web programming, but they can also fluently speak the front-end
          languages that control how content looks on a site’s user-facing side.
          They’re jacks-of-all-trades.
        </PageParagraph>
        <PageParagraph>
          Regardless of the specific tools, dependent on the project or client
          at hand, full stack developers should be knowledgeable in every level
          of how the web works: setting up and configuring Linux servers,
          writing server-side APIs, diving into the client-side JavaScript
          powering an application, and turning a “design eye” to the CSS.
        </PageParagraph>
        <PageParagraph>
          Using these tools, full stack developers need to be able to
          immediately identify the client- and server-side responsibilities of a
          solution and articulate the pros and cons of various solutions.
        </PageParagraph>
        <PageSubheading>How it Translates</PageSubheading>
        <PageParagraph>
          A full stack developer would be responsible for the entire flow of
          your experience with this blog post, from its load time and layout to
          its interactiveness and structural underpinnings.
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

export default FullStack;
