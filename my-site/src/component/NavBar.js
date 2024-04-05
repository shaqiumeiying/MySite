import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo.png';
import LinkedIn from '../assets/img/linkedin.png';
import Steam from '../assets/img/steam.png';
import Insta from '../assets/img/insta.png';
import Bilibili from '../assets/img/bilibili.png';

export const NavBar = () => {
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

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ''}>
            <Container>
                <Navbar.Brand href="#home">Diana's Site
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About Me</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#misc" className={activeLink === 'misc' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('misc')}>Misc</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/xinyi-dou/"  target="_blank"><img src={LinkedIn} alt="" /></a>
                            <a href="https://space.bilibili.com/4524892"  target="_blank"><img src={Bilibili} alt="" /></a>
                            <a href="https://steamcommunity.com/profiles/76561198165851652/"  target="_blank"><img src={Steam} alt="Steam Profile" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('Contact Me')}>Contact Me!</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
