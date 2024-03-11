import {React, useEffect, useState} from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './navbar.css';
import header from '../../assets/img/header-img.svg';
import moonIcon from '../../assets/img/moon-icon.png';
import sunIcon from '../../assets/img/sun-icon.svg';


const NavComponent = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const updateDate = () => {
            setCurrentDate(new Date());
        };

        const scrollListener = window.addEventListener('scroll', onScroll);
        const interval = setInterval(updateDate, 1000); // Mettre à jour la date chaque seconde

        return () => {
            window.removeEventListener('scroll', scrollListener);
            clearInterval(interval);
        };
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    };

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'; 
        setTheme(newTheme);
    }
    return (
        <>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Brand as={Link} to="/">
                            <img src={header} alt="Waseem Naseeven" />
                         </Navbar.Brand>
                        <Nav.Link as={Link} to="/" className={activeLink === "Home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Home")}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className={activeLink === "Projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Projects")}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/music" className={activeLink === "Music" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Music")}>Music</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={activeLink === "Contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("Contact")}>
                            <button className="vvd"><span>Let's Connect</span></button>
                        </Nav.Link>
                        {currentDate.toLocaleString()}
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {theme === 'light' ? (
                                <img src={moonIcon} alt="Moon" />
                            ) : (
                                <img src={sunIcon} alt="Sun" />
                            )}
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default NavComponent;