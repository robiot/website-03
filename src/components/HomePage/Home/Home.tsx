import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Container } from "../../../style/Container";
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
            <Container>
                <LandingWrapper>
                    <Title>Hello, I'm Elliot.</Title>
                    <SubTitle>A 14 year old Software developer.</SubTitle>
                    <LandingIconsWrapper>
                        <LandingIcon
                            href="https://github.com/robiot"
                            target="_blank"
                        >
                            <GitHubIcon width="1px" />
                        </LandingIcon>
                        <LandingIcon
                            href="https://twitter.com/notrobiot"
                            target="_blank"
                        >
                            <TwitterIcon width="1px" />
                        </LandingIcon>
                        <LandingIcon
                            href="https://www.youtube.com/c/robiot"
                            target="_blank"
                        >
                            <YouTubeIcon width="1px" />
                        </LandingIcon>

                        <LandingIcon href="mailto:&#x6d;&#x65;&#x40;&#x72;&#x6f;&#x62;&#x69;&#x6f;&#x74;&#x2e;&#x64;&#x65;&#x76;">
                            <MailIcon width="1px" />
                        </LandingIcon>
                    </LandingIconsWrapper>
                </LandingWrapper>
            </Container>
        </div>
    );
};
