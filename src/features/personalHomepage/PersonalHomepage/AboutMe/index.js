import adamMusialImage from "./Adam_Musial.jpg";
import { ReactComponent as EnvelopeIcon } from "./Message.svg";
import {
  Wrapper,
  ProfileImage,
  Person,
  ThisIs,
  Description,
  ContactButton,
} from "./styled";
import { email } from "../email";


export const AboutMe = () => (
    <Wrapper>
        <ProfileImage src={adamMusialImage} alt="Adam Musiał" />
        <div>
            <ThisIs>This is</ThisIs>
            <Person>Adam Musiał</Person>
            <Description>
                💻 Hi, I am a Junior Frontend Developer with one year experience. I am
                looking for my first job and programming challenges. I want to explore
                new technologies, improve my skills and gain knowledge among other
                programmers.
            </Description>
            <ContactButton href={`mailto:${email}`} title={email}>
                <EnvelopeIcon />
                Hire Me!
            </ContactButton>
        </div>
    </Wrapper>
);