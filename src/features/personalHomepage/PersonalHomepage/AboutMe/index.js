import adamMusialImage from "./adam_musial.png";
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
                💻 Hi, I am a ML / Data / AI enthusiast focused on data analysis 
                and machine learning. I work with Python-based tools and data exploration 
                and I use frontend (Streamlit / React.js) and backend technologies as supporting skills for 
                building and presenting data-driven applications. 
                I want to explore new technologies, 
                improve my skills and gain knowledge among other programmers.
            </Description>
            <ContactButton href={`mailto:${email}`} title={email}>
                <EnvelopeIcon />
                Hire Me!
            </ContactButton>
        </div>
    </Wrapper>
);