import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';


const Header = () => {
    // // const [user] = useAuthState(auth);

    // // const handleSignOut = () =>{
    // //     signOut(auth);
    // }
    return (
        <>
            <Navbar collapseOnSelect sticky="top" opacity= "25" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="text-success" href="#home">Visa Jenic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                    <Nav className="justify-content-end me-auto">
                        <Nav.Link as = {Link} to="home">Home</Nav.Link>
                        <Nav.Link as = {Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as = {Link} to="about">About</Nav.Link>
                        <Nav.Link as = {Link} to="login">Login</Nav.Link>
                    </Nav>
                    {/* <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav> */}
                </Container>
            </Navbar>
        </>
    );
};

export default Header;