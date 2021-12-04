import {
    AboutMeWrapper,
    SectionBg,
    SectionLine,
    Section,
    SectionTitle,
    MeImage,
    AboutMeText,
} from "./About.style";
import {Container} from "../Container";

const About = () => {
    return (
        <Section id="about">
            <SectionBg />
            <Container>
                <SectionLine />
                <SectionTitle>About me</SectionTitle>

                <AboutMeWrapper>
                    <AboutMeText>
                        <p>
                            Hi I'm Robiot, a self-taught software developer. I do
                            software development as a hobby and I really enjoy it. I
                            have been coding seriously since 2020, but I've made
                            some small projects before. I also practice some ethical
                            hacking in my free time.
                        </p>
                        <p>
                            I upload most of my projects to github, where some
                            projects got really popular. Thanks!
                        </p>
                    </AboutMeText>
                    <MeImage src="/img/robot.png" />
                </AboutMeWrapper>
            </Container>
        </Section>
    );
};

export default About;
