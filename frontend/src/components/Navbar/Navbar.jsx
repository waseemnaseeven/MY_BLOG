import {React, useEffect, useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './navbar.css';
import header from '../../assets/img/header-img.svg';


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
                    <Nav.Link as={Link} to="/" className={activeLink === "Home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Home")}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects" className={activeLink === "Projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Projects")}>Projects</Nav.Link>
                    <Nav.Link as={Link} to="/music" className={activeLink === "Music" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Music")}>Music</Nav.Link>
                    </Nav>
                    <span>
                        <Nav.Link as={Link} to="/contact" className={activeLink === "Contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Contact")}>
                            <button className="vvd"><span>Let's Connect</span></button>
                        </Nav.Link>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navComponent;