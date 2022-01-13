import { Container } from "../../../style/style";
import { Languages, Other, Technologies } from "./experience";
import {
    ExperienceColumn,
    ExperienceItem,
    Experiences,
    ExperienceTitle,
    Section,
    SectionTitle,
    Separator,
} from "./Experience.style";

const getItems = (itemtype: { name: string; image: string }[]) => {
    return itemtype.map((item, index) => {
        return (
            <ExperienceItem key={index}>
                <img alt={item.name} src={`/img/experiences/${item.image}`} />
                {item.name}
            </ExperienceItem>
        );
    });
};

export const Experience = () => {
    return (
        <Section>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <Experiences>
                    <ExperienceColumn>
                        <ExperienceTitle>Languages</ExperienceTitle>
                        {getItems(Languages)}
                    </ExperienceColumn>

                    <Separator />

                    <ExperienceColumn>
                        <ExperienceTitle>Technologies</ExperienceTitle>
                        {getItems(Technologies)}
                    </ExperienceColumn>

                    <Separator />

                    <ExperienceColumn>
                        <ExperienceTitle>Other</ExperienceTitle>
                        {getItems(Other)}
                    </ExperienceColumn>
                </Experiences>
            </Container>
        </Section>
    );
};
