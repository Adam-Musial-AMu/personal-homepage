import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { AboutMe } from "./AboutMe";
import { Container } from "./styled";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import { frontendSkills, dataSkills } from "./skillsData";
import { Footer } from "./Footer";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <AboutMe />
        <main>
            <Skills title={<>My Data / AI / ML skillset includes 🛠</>} skills={dataSkills} />
            <Skills title={<>My Frontend / Backend skillset includes 🚀</>} skills={frontendSkills} />
            <Portfolio />
        </main>
        <Footer />
    </Container>
);