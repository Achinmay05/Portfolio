import { Col, Container, Tab, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import news from "../assets/img/news-project.jpg";
import textProject from "../assets/img/TextUtils.webp";
import expenseTracker from "../assets/img/expenseTracker.webp";
import ReactCart from "../assets/img/ReactCart.webp";
import iNotebook from "../assets/img/inotebook.webp";
import HuntingCoder from "../assets/img/huntingcoder.webp";
import TrackVisibility from "react-on-screen";
import { Card } from "./Card"

export const Projects = () => {
    const projectsFirst = [
        {
            title: "News Website",
            description: "A React-based application that provides users with the latest news headlines and articles from various sources.",
            imgUrl: news,
        },
        {
            title: "Text Utility Website",
            description: "A React-based application that allows users to perform various text manipulations and formatting tasks.",
            imgUrl: textProject,
        },
        {
            title: "Expense Tracker",
            description: "A React application that helps users track and manage their expenses efficiently.",
            imgUrl: expenseTracker,
        },
        {
            title: "Shopping Cart",
            description: "A React application that provides a seamless shopping experience with features to add, remove, and manage items in the cart.",
            imgUrl: ReactCart,
        },
        {
            title: "iNotebook",
            description: "A React application that allows users to create, edit, and organize their notes efficiently.",
            imgUrl: iNotebook,
        },
        {
            title: "Hunting Coder",
            description: "Hunting Coder is a Next.js-powered blog site for sharing coding tutorials and tips. It features fast performance, easy navigation, and a clean design, providing developers with valuable coding insights.",
            imgUrl: HuntingCoder,
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
    const projectsFourth = [
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
            imgUrl: projImg2
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
                                    <p>These are some of the Projects developed by me.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            {/* 
                            <Nav variant="pills" className="mb-5 justify-content-center align-items-center">
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
                                    <Row className="hidden">
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
                                    <Row className="hidden">
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
                                    <Row className="hidden">
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

                                <Tab.Pane eventKey="fourth">
                                    <Row className="hidden">
                                        {
                                            projectsFourth.map((project, index) => {
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
            <img src={colorSharp2} alt="none" className="background-image-right" ></img>
        </section>
    );
};