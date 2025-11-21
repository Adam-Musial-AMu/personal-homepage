import adamMusialImage from "./Adam_Musial.jpg";
import { ReactComponent as EnvelopeIcon } from "./Message.svg";
import { Wrapper, ProfileImage, ThisIs, Name, Description, ButtonLink } from "./styled";

export const AboutMe = () => (
    <Wrapper>
        <ProfileImage src={adamMusialImage} alt="Adam Musiał" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Adam Musiał</Name>
            <Description>
                💻👨🏻‍💻Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Description>
            <ButtonLink>
                <EnvelopeIcon />
                Hire me
            </ButtonLink>
        </div>    
    </Wrapper>
    
)