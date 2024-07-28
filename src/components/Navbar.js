import { useState, useEffect } from "react";

import navIcon1 from '../assets/img/nav-icon1.svg';
import Github from '../assets/img/github-outline-7.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

import {
    BrowserRouter as Router
} from "react-router-dom";


export const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <Router>
            <nav className={`navbar navbar-expand-lg bg-dark ${scrolled ? "scrolled" : ""}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HashLink className={`nav-link active ${activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} aria-current="page"`} to="#home" onClick={() => onUpdateActiveLink('home')}>Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className={`nav-link ${activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}`} to="#skills" onClick={() => onUpdateActiveLink('skills')}>Skills</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className={`nav-link ${activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}`} to="#projects" onClick={() => onUpdateActiveLink('projects')}>Projects</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className={`nav-link ${activeLink === 'achievements' ? 'active navbar-link' : 'navbar-link'}`} to="#achievements" onClick={() => onUpdateActiveLink('achievements')}>Achievements</HashLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/chinmay-awasthi-15ba49262" target="_blank" rel="noreferrer"><img src={navIcon1} alt="none" /></a>
                                <a href="https://github.com/Achinmay05" target="_blank" rel="noreferrer"><img src={Github} alt="none" /></a>
                                <a href="https://www.instagram.com/chinmayawasthi05/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="none" /></a>
                            </div>
                            {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </div>
                </div>
            </nav>
        </Router>
    )
}