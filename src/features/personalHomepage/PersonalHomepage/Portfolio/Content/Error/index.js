import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraph, Wrapper, StyledWarningIcon } from "./styled";

export const Error = () => (
  <Wrapper>
    <StyledWarningIcon />
    <Header>Ooops! Something went wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github&nbsp;projects.
      <br /> You can check them directly&nbsp;on&nbsp;Github.
    </Paragraph>
    <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">
      Go to my Github!
    </ButtonLink>
  </Wrapper>
);
