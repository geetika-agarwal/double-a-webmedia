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
import leader from "../../images/project-leader.jpg";
import Footer from "../FooterSection";

const ProjectLeaderComponent = () => {
  return (
    <PageContainer>
      <PageRow>
        <PageHeading>Project / Team Leader</PageHeading>
        <PageImage src={leader} />
        <PageSubheading>Project Leader Overview</PageSubheading>
        <PageParagraph>
          It’s easy to confuse project leaders with project managers. Depending
          on organizational structure, managers' and leaders' roles and
          responsibilities may overlap to some extent.{" "}
        </PageParagraph>
        <PageParagraph>
          Regardless, there’s a key difference between the two roles. While
          project managers are focused on the bigger picture — project
          deadlines, managing schedules, and progress reports — project leaders
          are on the ground motivating the project’s team.{" "}
        </PageParagraph>
        <PageParagraph>
          An expert within their field, a project leader can effectively make
          plans that support project goals and lead their team to perform
          efficiently. An exceptional project leader is receptive to the
          feelings of their team members. They work diligently to keep their
          team engaged, motivated, and focused on the task at hand.{" "}
        </PageParagraph>
        <PageParagraph>
          A successful project manager will inspire their team, encourage
          creativity, and foster a collaborative work environment to exceed
          project goals.
        </PageParagraph>
        <PageSubheading>Project Leader Roles & Responsibilities</PageSubheading>
        <PageParagraph>
          Work with departmental heads, managers, and other stakeholders to
          develop team goals and delegate tasks to the appropriate team member
        </PageParagraph>
        <PageParagraph>
          Develop team schedules and assist in the successful onboarding and
          training of team members
        </PageParagraph>
        <PageParagraph>
          Create and communicate a clear list of expectations and goals for team
          members to follow
        </PageParagraph>
        <PageParagraph>
          Offer emotional support to project team members and make people feel
          valued
        </PageParagraph>
        <PageParagraph>
          Maintain frequent communication to offer encouragement, amend tasks,
          and provide updates on goal progress
        </PageParagraph>
        <PageParagraph>
          Implement incentives to keep the team motivated and focused on their
          daily tasks project goals
        </PageParagraph>
        <PageParagraph>
          Provide frequent feedback on employee performance, address weaknesses
          or inefficiencies, and offer support to improve skill gaps
        </PageParagraph>
        <PageParagraph>
          Nurture collaboration amongst team members
        </PageParagraph>
        <PageParagraph>
          Create a workspace that encourages creativity and innovation to get
          the most out of the team.
        </PageParagraph>
        <PageSubheading>Project Leader Skills</PageSubheading>
        <PageParagraph>
          A project leader has a unique set of skills that provide the tools
          needed to lead their team successfully. Required hard skills will be
          specific to the industry and may include project management platforms,
          industry knowledge, or relevant licensing.
        </PageParagraph>
        <PageParagraph>
          There are, however, a number of soft skills that help with a project
          leader’s responsibilities, including the following:
        </PageParagraph>
        <PageSubheading>Team Management</PageSubheading>
        <PageParagraph>
          The bulk of a project leader’s responsibilities rely on effectively
          managing their team. To achieve project goals, leaders must establish
          a team of individuals with the right skill sets and encourage
          collaboration. Successful team management involves teamwork, goal
          setting, and regular performance reviews.
        </PageParagraph>
        <PageSubheading>Communication</PageSubheading>
        <PageParagraph>
          Strong communication is an essential project leader skill. To
          effectively convey ideas, or direct a team of employees, leaders
          should promote and facilitate communication
        </PageParagraph>
        <PageSubheading>Listening</PageSubheading>
        <PageParagraph>
          Project leaders should be focused on actively listening to their team.
          Understand team members’ concerns and feedback and work to rectify any
          issues to avoid disruptions to productivity.{" "}
        </PageParagraph>
        <PageSubheading>Conflict Resolution</PageSubheading>
        <PageParagraph>
          When a diverse group of individuals work within close proximity,
          conflict is often inevitable. However, nothing quite hinders
          productivity than team friction. Project leaders must swiftly
          recognize emerging conflicts and work to de-escalate any tension or
          disputes among team members. A work environment should be harmonious
          for all team members to thrive.
        </PageParagraph>
        <PageSubheading>Team Leadership</PageSubheading>
        <PageParagraph>
          The position title of project leader is one major indicator that
          leadership is the most critical skill required for success in the
          role. Project leaders must work without biases to ensure all team
          members are treated equally. Leadership requires a combination of
          conflict resolution, team management, and communication. Set goals
          that are in line with project requirements and provide the team with
          the necessary tools to achieve them.
        </PageParagraph>
        <PageSubheading>Organization</PageSubheading>
        <PageParagraph>
          Strong organizational skills are crucial to creating and keeping
          deadlines, delegating tasks, and making effective schedules for their
          team.
        </PageParagraph>
        <PageSubheading>Critical Thinking</PageSubheading>
        <PageParagraph>
          Finding creative solutions, anticipating potential roadblocks in
          productivity, and overcoming obstacles are typical challenges faced by
          project leaders. A good project leader possesses strong critical
          thinking skills that empower them to achieve success no matter the
          situation.
        </PageParagraph>
        <PageSubheading>Time Management</PageSubheading>
        <PageParagraph>
          Although primarily focused on leading their teams, there are still
          deadlines that project leaders must ensure are met. These
          professionals must understand the capabilities and skill levels of the
          team and strong time management skills to ensure all tasks are
          completed efficiently.
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

export default ProjectLeaderComponent;
