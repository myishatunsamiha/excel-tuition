import React from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CustomLink from './../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (

        <Navbar collapseOnSelect expand="lg" bg="light" sticky='top' variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img
                        src={logo}
                        width="60"
                        height="40"
                        alt="excel tuition logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home#courses" className='fw-bold fs-5'>Services[Courses]</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={CustomLink} to="/about" className='fw-bold fs-5'>About</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blogs" className='fw-bold fs-5'>Blogs</Nav.Link>
                        {
                            loading ? '' :
                                user ? <button className='btn btn-link text-decoration-none' onClick={() => { signOut(auth) }}>Sign Out</button> :
                                    <Nav.Link as={CustomLink} to="/login" className='fw-bold fs-5'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;