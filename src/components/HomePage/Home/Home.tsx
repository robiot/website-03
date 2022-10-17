import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

import { Container } from "../../../lib/style";
import {
    BackgroundImage,
    LandingIcon,
    LandingIconsWrapper,
    LandingWrapper,
    SubTitle,
    Title,
} from "./Home.style";

export const Home = () => {
    return (
        <div>
            <BackgroundImage src="/img/rect.svg" height="1px" />
            {/* <BackgroundImage /> */}

            <Container>
                <LandingWrapper>
                    <Title>Hello, I'm Elliot.</Title>
                    <SubTitle>A 15 year old Software developer.</SubTitle>
                    <LandingIconsWrapper>
                        <LandingIcon
                            href="https://github.com/robiot"
                            target="_blank"
                        >
                            <FaGithub width="1px" fontSize="1.5rem" />
                        </LandingIcon>
                        <LandingIcon
                            href="https://twitter.com/notrobiot"
                            target="_blank"
                        >
                            <FaTwitter width="1px" />
                        </LandingIcon>
                        <LandingIcon
                            href="https://www.youtube.com/c/robiot"
                            target="_blank"
                        >
                            <FaYoutube width="1px" />
                        </LandingIcon>
                    </LandingIconsWrapper>
                </LandingWrapper>
            </Container>
        </div>
    );
};
