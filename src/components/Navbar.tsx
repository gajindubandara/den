import { Navbar as BsNavbar, Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {useEffect, useState} from "react";
import logo from "../assets/logo.png"

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <BsNavbar
            expand="lg"
            fixed="top"
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <BsNavbar.Brand href="#home">
                        <img
                            src={logo}
                            alt="The Den at Yala Logo"
                            style={{
                                width: "95px"
                                // height: "40px",
                                // marginRight: "10px",
                            }}
                        />
                    </BsNavbar.Brand>
                </motion.div>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {['Home', 'About', 'Gallery', 'Contact'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Nav.Link href={`#${item.toLowerCase()}`}>{item}</Nav.Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {/*<Nav.Link className="btn btn-success ms-2" href="#book">*/}
                            {/*    Book Now*/}
                            {/*</Nav.Link>*/}
                        </motion.div>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
};