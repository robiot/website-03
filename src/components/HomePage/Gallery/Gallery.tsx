import { useContext } from "react";

import {
    Container,
    SectionLine,
    SubSection,
    SubSectionTitle,
} from "../../../lib/style";
import { themeCtx } from "../../../pages/_app";
import { Images } from "./gallery";
import {
    BiggerContainer,
    ItemDiv,
    ItemImage,
    ItemsWrapper,
    Tooltip,
} from "./Gallery.style";

export const Gallery = () => {
    const [theme, _setTheme] = useContext(themeCtx);

    return (
        <SubSection id="gallery" style={{ scrollMarginTop: "100px" }}>
            <Container>
                <SectionLine />
                <SubSectionTitle>
                    Gallery{" "}
                    <Tooltip data-text="All rights reserved for all images">
                        ©
                    </Tooltip>
                </SubSectionTitle>
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
        </SubSection>
    );
};
