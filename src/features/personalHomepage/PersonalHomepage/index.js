import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { AboutMe } from "./AboutMe";
import { Container } from "./styled";


export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <AboutMe />
    </Container>
);