import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="text-success" href="#home">Visa Jenic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                    <Nav className="justify-content-end me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Chekouts</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;