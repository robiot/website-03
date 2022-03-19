import {
    Container,
    Section,
    SectionLine,
    SectionTitle,
} from "../../../lib/style";
import { AboutMeText, AboutMeWrapper, MeImage, SectionBg } from "./About.style";

export const About = () => {
    return (
        <Section id="about">
            <SectionBg />
            <Container>
                <SectionLine />
                <SectionTitle>About me</SectionTitle>

                <AboutMeWrapper>
                    <AboutMeText>
                        <p>
                            Hi I'm Elliot (aka Robiot), a self-taught software
                            developer. I do software development as a hobby and
                            I really enjoy it. I've been coding seriously since
                            early 2021, but I've made some small projects
                            before.
                        </p>
                        <p>
                            I upload most of my projects to Github, where some
                            projects got really popular. Thanks!
                        </p>
                    </AboutMeText>
                    <MeImage src="/img/robot.png" />
                    {/* <MeImage src="/img/christmas-robot.png" /> */}
                </AboutMeWrapper>
            </Container>
        </Section>
    );
};
