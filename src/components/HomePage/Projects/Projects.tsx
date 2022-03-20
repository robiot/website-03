import { FaGithub } from "react-icons/fa";

import {
    Container,
    SectionLine,
    SubSection,
    SubSectionTitle,
} from "../../../lib/style";
import { TheProjects } from "./projects";
import {
    ButtonsWrapper,
    DownloadButton,
    GithubButton,
    LeftWrapper,
    ProjectDescription,
    ProjectDiv,
    ProjectImage,
    ProjectsWrapper,
    ProjectTitle,
    SectionBg,
} from "./Projects.style";

type ProjectType = {
    title: string;
    description: string;
    download: string;
    github: string;
    image: string;
};

export const Projects = () => {
    return (
        <SubSection id="projects" style={{ scrollMarginTop: "100px" }}>
            <SectionBg />
            <Container>
                <SectionLine />
                <SubSectionTitle>Projects</SubSectionTitle>
                <ProjectsWrapper>
                    {TheProjects.map((item: ProjectType, index: any) => (
                        <div data-aos="fade-up" key={index}>
                            <ProjectDiv>
                                <LeftWrapper>
                                    <div>
                                        <ProjectTitle>
                                            {item.title}
                                        </ProjectTitle>
                                        <ProjectDescription>
                                            {item.description}
                                        </ProjectDescription>
                                    </div>
                                    <ButtonsWrapper>
                                        <DownloadButton
                                            href={item.download}
                                            target="_blank"
                                        >
                                            Download
                                        </DownloadButton>
                                        <GithubButton
                                            href={item.github}
                                            target="_blank"
                                        >
                                            <FaGithub />
                                        </GithubButton>
                                    </ButtonsWrapper>
                                </LeftWrapper>
                                <ProjectImage
                                    src={`/img/projects/${item.image}`}
                                />
                            </ProjectDiv>
                        </div>
                    ))}
                </ProjectsWrapper>
            </Container>
        </SubSection>
    );
};
