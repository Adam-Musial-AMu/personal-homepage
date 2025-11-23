import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as WarningIcon } from "./error.svg";

export const Error = () => (
  <Wrapper>
    <WarningIcon />
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
