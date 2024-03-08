import {React, useEffect, useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './navbar.css';
import header from '../../assets/img/header-img.svg';
import githubicon from '../../assets/img/github-icon.svg';
import linkedinicon from '../../assets/img/linkedin-icon.svg';
import instaicon from '../../assets/img/insta-icon.svg';
import spotifyicon from '../../assets/img/spotify-icon.svg';
import discordicon from '../../assets/img/discord-icon.svg';


const navComponent = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#Home">
                    <img src={header} alt="Waseem Naseeven" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home" className={activeLink === "Home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Home")}>Home</Nav.Link>
                        <Nav.Link href="#About" className={activeLink === "About" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("About")}>About</Nav.Link>
                        <Nav.Link href="#Projects" className={activeLink === "Projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Projects")}>Projects</Nav.Link>
                        <Nav.Link href="#Music" className={activeLink === "Music" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Music")}>Music</Nav.Link>
                        <Nav.Link href="#Contact" className={activeLink === "Contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Contact")}>Contact</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#github"><img src={githubicon} alt="github"/></a>
                            <a href="#linkedin"><img src={linkedinicon} alt="linkedin"/></a>
                            <a href="#instagram"><img src={instaicon} alt="insta"/></a>
                            <a href="#spotify"><img src={spotifyicon} alt="spotify"/></a>
                            <a href="#discord"><img src={discordicon} alt="discord"/></a>
                            <a href="#patreon"><img src={''} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navComponent;