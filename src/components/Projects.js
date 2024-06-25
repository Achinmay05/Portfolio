import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import news from "../assets/img/news-project.jpg";
import textProject from "../assets/img/text-project.jpg";
import calculator from "../assets/img/calculator-project.jpg";
import calender from "../assets/img/calender-project.jpg";
import TrackVisibility from "react-on-screen";
import { Card } from "./Card"

export const Projects = () => {
    const projectsFirst = [
        {
            title: "News Website ",
            description: "created a website using React in which user can read the top news headlines.",
            imgUrl: news,
        },
        {
            title: "Text Formatter",
            description: "a website in which user can perform various text related actions",
            imgUrl: textProject,
        },
        {
            title: "Simple Caculator",
            description: "a simple calculator using react",
            imgUrl: calculator,
        },
        {
            title: "Calender",
            description: "a basic calender in which user can mark important dates.",
            imgUrl: calender,
        },

    ];

    const projectsSecond = [
        {
            title: "second News Website ",
            description: "a website in which user can read the top news headlines.",
            imgUrl: projImg1,
        },
        {
            title: " second Text Formatter",
            description: "",
            imgUrl: projImg2,
        },
        {
            title: "second",
            // description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "second",
            // description: "Design & Development",
            imgUrl: projImg2,
        },

    ];

    const projectsThird = [
        {
            title: "third News Website ",
            description: "a website in which user can read the top news headlines.",
            imgUrl: projImg1,
        },
        {
            title: " third Text Formatter",
            // description: "",
            imgUrl: projImg2,
        },
        {
            title: "third",
            // description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "third",
            // description: "Design & Development",
            imgUrl: projImg2,
        },

    ];

    return (

        <section className="project" id="projects">
            <Container>





                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn animate__fast" : "animate__animated animate__fadeOut animate__fast"}>
                                    <h2>Projects</h2>
                                    <p>These are some of the Frontend Projects developed by me.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            {/* <Nav variant="pills" className="mb-5 justify-content-center align-items-center">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 01</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 02</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 03</Nav.Link>
                                </Nav.Item>
                            </Nav> */}


                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsFirst.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>



                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsSecond.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectsThird.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>


                                {/* modification */}


                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsFirst.map((project, index) => {
                                                return (
                                                    <Card
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsSecond.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projectsThird.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                {/* modification */}

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" ></img>
        </section>
    );
};