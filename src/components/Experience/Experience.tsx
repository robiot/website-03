import {
    Section,
    SectionTitle,
    ExperienceItem,
    Experiences,
    ExperienceColumn,
    ExperienceTitle,
    Separator,
} from "./Experience.style";
import { Container } from "../Container";
import { Languages, Technologies, Other } from "../../lib/experience";

const Experience = () => {
    return (
        <Section id="experience">
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <Experiences>
                    <ExperienceColumn>
                        <ExperienceTitle>Languages</ExperienceTitle>
                        {Languages.map((item, index) => {
                            return (
                                <ExperienceItem key={index}>
                                    <img
                                        alt=""
                                        src={`/img/experiences/${item.image}`}
                                    />
                                    {item.name}
                                </ExperienceItem>
                            );
                        })}
                    </ExperienceColumn>

                    <Separator />

                    <ExperienceColumn>
                        <ExperienceTitle>Technologies</ExperienceTitle>
                        {Technologies.map((item, index) => {
                            return (
                                <ExperienceItem key={index}>
                                    <img
                                        alt=""
                                        src={`/img/experiences/${item.image}`}
                                    />
                                    {item.name}
                                </ExperienceItem>
                            );
                        })}
                    </ExperienceColumn>

                    <Separator />

                    <ExperienceColumn>
                        <ExperienceTitle>Other</ExperienceTitle>
                        {Other.map((item, index) => {
                            return (
                                <ExperienceItem key={index}>
                                    <img
                                        alt=""
                                        src={`/img/experiences/${item.image}`}
                                    />
                                    {item.name}
                                </ExperienceItem>
                            );
                        })}
                    </ExperienceColumn>
                </Experiences>
            </Container>
        </Section>
    );
};

export default Experience;
