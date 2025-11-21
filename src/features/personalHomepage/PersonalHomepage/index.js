import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { AboutMe } from "./AboutMe";
import { Container } from "./styled";
import { Skills } from "./Skills";
import { skills, nextSkills } from "./skillsData";
import { Footer } from "./Footer";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <AboutMe />
        <main>
            <Skills title={<>My skillset includes 🛠</>} skills={skills} />
            <Skills title={<>What I want to learn next 🚀</>} skills={nextSkills} />
        </main>
        <Footer />
    </Container>
);