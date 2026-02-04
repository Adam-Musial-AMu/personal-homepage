import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import {
  Address,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Paragraph,
  Wrapper,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        I’m always open to new projects when time allows. If you’re looking to build
        a website, dashboard, or mobile app — especially with a focus 
        on  Data, AI, or Machine Learning — feel free to reach out 
        and let’s bring  your ideas to life ✌
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
);
