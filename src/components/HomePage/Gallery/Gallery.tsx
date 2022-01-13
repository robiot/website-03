import { useContext } from "react";

import { themeCtx, themes } from "../../../pages/_app";
import { Container, SectionLine } from "../../../style/style";
import { Section, SectionTitle } from "../Experience/Experience.style";
import { Images } from "./gallery";
import {
    BiggerContainer,
    ItemDiv,
    ItemImage,
    ItemsWrapper,
    Tooltip,
} from "./Gallery.style";

export const Creative = () => {
    const [theme, _setTheme] = useContext(themeCtx);

    return (
        <Section id="gallery" style={{ scrollMarginTop: "100px" }}>
            <Container>
                <SectionLine />
                <SectionTitle>
                    Gallery{" "}
                    <Tooltip data-text="All rights reserved for all images">
                        ©
                    </Tooltip>
                </SectionTitle>
            </Container>
            <BiggerContainer>
                <ItemsWrapper>
                    {Images.map((image, index) => (
                        <ItemDiv
                            key={index}
                            style={{
                                boxShadow:
                                    theme == "light" ? undefined : "none",
                            }}
                        >
                            <ItemImage
                                src={`/img/creative/${image.image}`}
                                draggable="false"
                                onContextMenu={(event) =>
                                    event.preventDefault()
                                }
                            />
                        </ItemDiv>
                    ))}
                </ItemsWrapper>
            </BiggerContainer>
        </Section>
    );
};
