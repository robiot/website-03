import { GitHub, Twitter, YouTube, Mail } from "@material-ui/icons";
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
                            <GitHub width="1px" />
                        </LandingIcon>
                        <LandingIcon
                            href="https://twitter.com/notrobiot"
                            target="_blank"
                        >
                            <Twitter width="1px" />
                        </LandingIcon>
                        <LandingIcon
                            href="https://www.youtube.com/c/robiot"
                            target="_blank"
                        >
                            <YouTube width="1px" />
                        </LandingIcon>

                        <LandingIcon
                            href="mailto:me@robiot.dev"
                        >
                            <Mail width="1px" />
                        </LandingIcon>
                    </LandingIconsWrapper>
                </LandingWrapper>
            </Container>
        </div>
    );
};

export default Home;
