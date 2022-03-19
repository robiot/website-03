import { useContext } from "react";

import { Container } from "../../../lib/style";
import { themeCtx } from "../../../pages/_app";
import { Languages, Other, Technologies } from "./experience";
import {
    ExperienceColumn,
    ExperienceContainer,
    ExperienceItem,
    Experiences,
    ExperienceTitle,
    Section,
    SectionTitle,
    Separator,
} from "./Experience.style";

const getItems = (itemtype: { name: string; image: string }[]) => {
    const [theme, _setTheme] = useContext(themeCtx);

    return itemtype.map((item, index) => {
        return (
            <ExperienceItem
                key={index}
                style={{ boxShadow: theme == "light" ? undefined : "none" }}
            >
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
            </Container>
            <ExperienceContainer>
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
            </ExperienceContainer>
        </Section>
    );
};
