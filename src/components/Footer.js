// import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import Github from '../assets/img/github-outline-7.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import { Container, Row, Col } from "react-bootstrap"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">

                    <Col size={12} sm={6} className="text-center text-sm-end " style={{ marginTop: '20px' }}>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/chinmay-awasthi-15ba49262" target="_blank" rel="noreferrer"><img src={navIcon1} alt="icon" /></a>
                            <a href="https://github.com/Achinmay05" target="_blank" rel="noreferrer"><img src={Github} alt="icon" /></a>
                            <a href="https://www.instagram.com/chinmayawasthi05/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="icon" /></a>
                        </div>
                        {/* <p id='footer-paragraph'>CopyRight 2024. All Right Reserved</p> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}