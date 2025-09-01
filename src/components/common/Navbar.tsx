import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import './Navbar.css';

const AppNavbar = () => {
    return (
        <Navbar bg="white" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold text-dark">
                    ForensicHub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                {/* Change 1: Added flex-grow-1 to make this section fill available space */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center flex-grow-1">
                    <Nav className="align-items-center">
                        {/* Change 2: Increased margin from mx-2 to mx-3 for better spacing */}
                        <Nav.Link as={NavLink} to="/" className="mx-3">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/laws" className="mx-3">Laws</Nav.Link>
                        <Nav.Link as={NavLink} to="/case-studies" className="mx-3">Case Studies</Nav.Link>
                        <Nav.Link as={NavLink} to="/resources" className="mx-3">Resources</Nav.Link>
                        <Nav.Link as={NavLink} to="/playground" className="mx-3">Playground</Nav.Link>
                        <Nav.Link as={NavLink} to="/profile" className="mx-3">Profile</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="mx-3">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav>
                    <Nav.Link href="#search"><Search size={20} /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;