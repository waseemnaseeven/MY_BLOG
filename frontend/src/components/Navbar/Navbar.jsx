import {React, useEffect, useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './navbar.css';

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

    return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#Home">
                    <img src={''} alt="Waseem Naseeven" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Music">Music</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#github"><img src={''} alt=""/></a>
                            <a href="#linkedin"><img src={''} alt=""/></a>
                            <a href="#instagram"><img src={''} alt=""/></a>
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