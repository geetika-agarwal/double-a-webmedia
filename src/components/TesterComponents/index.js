import React from "react";
import {
  PageBtn,
  PageBtnWrap,
  PageContainer,
  PageHeading,
  PageImage,
  PageParagraph,
  PageRow,
  PageSubheading,
} from "../FrontendComponent/CareersSinglePageDesigns";
import tester from "../../images/software-tester.jpg";
import Footer from "../FooterSection";

const TesterComponet = () => {
  return (
    <PageContainer>
      <PageRow>
        <PageHeading>Software Testing</PageHeading>
        <PageImage src={tester} />
        <PageSubheading>What is Software Testing?</PageSubheading>
        <PageParagraph>
          Software Testing is a process of verifying a computer system/program
          to decide whether it meets the specified requirements and produces the
          desired results. As a result, you identify bugs in software
          product/project. Software Testing is indispensable to provide a
          quality product without any bug or issue.
        </PageParagraph>
        <PageSubheading>
          Skills required to become a Software Tester
        </PageSubheading>
        <PageParagraph>
          We will discuss the Technical and Non-Technical required to become a
          Software Tester
        </PageParagraph>
        <PageSubheading>
          <br />
          Non-Technical Skills
        </PageSubheading>
        <PageParagraph>
          Following skills are essential to become a good Software quality
          tester. Compare your skill set against the following checklist to
          determine whether Software Testing is a reality for you-
        </PageParagraph>
        <PageParagraph>
          Analytical skills: A good software tester should have sharp analytical
          skills. Analytical skills will help break up a complex software system
          into smaller units to gain a better understanding and create test
          cases. Not sure that you have good analytical skills – Refer this link
          – if you can solve at least ONE problem you have excellent analytical
          skills.
        </PageParagraph>
        <PageParagraph>
          Communication skill: A good software tester must have good verbal and
          written communication skill. Testing artifacts (like test cases/plans,
          test strategies, bug reports, etc.) created by the software tester
          should be easy to read and comprehend. Dealing with developers (in the
          event of bugs or any other issue) will require a shade of discreetness
          and diplomacy.
        </PageParagraph>
        <PageParagraph>
          Time Management & Organization Skills: Testing at times could be a
          demanding job especially during the release of code. A software tester
          must efficiently manage workload, have high productivity, exhibit
          optimal time management, and organization skills
        </PageParagraph>
        <PageParagraph>
          GREAT Attitude: To be a good software tester you must have a GREAT
          attitude. An attitude to ‘test to break’, detail orientation,
          willingness to learn and suggest process improvements. In the software
          industry, technologies evolve with an overwhelming speed, and a good
          software tester should upgrade his/her technical Software testing
          skills with the changing technologies. Your attitude must reflect a
          certain degree of independence where you take ownership of the task
          allocated and complete it without much direct supervision.
        </PageParagraph>
        <PageParagraph>
          Passion: To Excel in any profession or job, one must have a
          significant degree of the passion for it. A software tester must have
          a passion for his / her field. BUT how do you determine whether you
          have a passion for software testing if you have never tested before?
          Simple TRY it out and if software testing does not excite you switch
          to something else that holds your interest.
        </PageParagraph>
        <PageSubheading>Technical Skills</PageSubheading>
        <PageParagraph>
          Basic knowledge of Database/ SQL: Software Systems have a large amount
          of data in the background. This data is stored in different types of
          databases like Oracle, MySQL, etc. in the backend. So, there will be
          situations when this data needs to be validated. In that case,
          simple/complex SQL queries can be used to check whether proper data is
          stored in the backend databases.
        </PageParagraph>
        <PageParagraph>
          Basic knowledge of Linux commands: Most of the software applications
          like Web-Services, Databases, Application Servers are deployed on
          Linux machines.So it is crucial for testers to have knowledge about
          Linux commands.
        </PageParagraph>
        <PageParagraph>
          Knowledge and hands-on experience of a Test Management Tool:Test
          Management is an important aspect of Software testing. Without proper
          test management techniques, software testing process will fail. Test
          management is nothing but managing your testing related artifacts. For
          example – A tool like Testlink can be used for tracking all the test
          cases written by your team.
        </PageParagraph>
        <PageParagraph>
          There are other tools available that can be utilized for Test
          Management. So, it is important to have knowledge and working
          experience of such tools because they are used in most of the
          companies.
        </PageParagraph>
        <PageParagraph>
          Knowledge and hands-on experience of any Defect Tracking tool- Defect
          Tracking and Defect life cycle are key aspects of software testing. It
          is extremely critical to managing defects properly and track them in a
          systematic manner. Defect tracking becomes necessary because the
          entire team should know about the defect including managers,
          developers, and testers. Several tools are used to log defects
          including QC, Bugzilla, Jira, etc.
        </PageParagraph>
        <PageParagraph>
          Knowledge and hands-on experience of Automation tool: If you see
          yourself as an “Automation tester” after a couple of years working on
          manual testing, then you must master a tool and get in-depth, hands-on
          knowledge of automation tools.
        </PageParagraph>
        <PageParagraph>
          Note – Only knowledge of any Automation tool is not sufficient to
          crack the interview, you must have good hands-on experience, so
          practice the tool of your choice to achieve mastery.
        </PageParagraph>
        <PageParagraph>
          Knowledge of any scripting language like VBScript, JavaScript, C# is
          always helpful as a tester if you are looking for a job into
          automation. Few companies also use Shell/Perl scripting, and there is
          a lot of demand for testers having knowledge of the same. Again, it
          will depend on the company and which tools are used by that company.
        </PageParagraph>
        <PageParagraph>
          There is also a lot of scope for performance testing tools because
          applications need to be tested for their performance which is a part
          of non-functional testing.
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

export default TesterComponet;
