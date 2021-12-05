import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';

import {
    BackgroundImage,
    LandingIconsWrapper,
    LandingIcon,
    LandingWrapper,
    SubTitle,
    Title,
} from "./Home.style";
import {Container} from "../Container";

const Home = () => {
    return (
        <div>
            <BackgroundImage src="/img/rect.svg" height="1px" />
            <Container>
                <LandingWrapper>
                    <Title>Hello, I'm Robiot.</Title>
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

                        <LandingIcon
                            href="mailto:me@robiot.dev"
                        >
                            <MailIcon width="1px" />
                        </LandingIcon>
                    </LandingIconsWrapper>
                </LandingWrapper>
            </Container>
        </div>
    );
};

export default Home;
