import { useContext } from "react";

import { Container } from "../../../lib/style";
import { themeCtx, themes } from "../../../pages/_app";
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

const getItems = (
    itemtype: { name: string; image: string }[],
    theme: themes
) => {
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
    const [theme, _setTheme] = useContext(themeCtx);

    return (
        <Section>
            <Container>
                <SectionTitle>Experience</SectionTitle>
                <Experiences>
                    <ExperienceColumn>
                        <ExperienceTitle>Languages</ExperienceTitle>
                        {getItems(Languages, theme)}
                    </ExperienceColumn>

                    <Separator />

                    <ExperienceColumn>
                        <ExperienceTitle>Technologies</ExperienceTitle>
                        {getItems(Technologies, theme)}
                    </ExperienceColumn>

                    <Separator />

                    <ExperienceColumn>
                        <ExperienceTitle>Other</ExperienceTitle>
                        {getItems(Other, theme)}
                    </ExperienceColumn>
                </Experiences>
            </Container>
        </Section>
    );
};
