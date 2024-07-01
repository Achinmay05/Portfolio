import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Col, Row } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

export const Banner = () => {
    


const [text] = useTypewriter({
    words: ['Web Developer', 'Web Designer', 'UI/UX Designer'],
    loop: {},
});


    const handleClick = () => {
        window.open('https://drive.google.com/file/d/1kG8xJhNiw3_mhAzaTOxxpE2I2bmttKEc/view?usp=drivesdk', '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible }) => 
                             <div className={isVisible ? "animate__animated animate__fadeIn animate__fast" : "animate__animated animate__fadeOut animate__fast"}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                {/* <h1>{`Hi i am webcoded`} <span className="wrap">{text}</span></h1> */}
                                <h1>I'm Chinmay </h1>
                                <h1><span className="animatedText" style={{fontWeight: 'bold', color: 'purple'}} >{text}</span><Cursor/></h1>
                                <button onClick={handleClick}>View Resume <ArrowRightCircle size={25} /></button>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}