import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import './Navbar.css';

const AppNavbar = () => {
    return (
        <Navbar bg="white" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand 
                    as={NavLink} 
                    to="/" 
                    className="fw-bold" 
                    style={{ 
                        color: 'var(--brand-green)',
                        fontSize: '2rem'
                    }}
                >
                    ForensicHub
                </Navbar.Brand>
                {/* The toggle will now stay to the right */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                {/* Removed justify-content-center and flex-grow-1 */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* ms-auto will push the nav links to the right on desktop */}
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/" className="mx-3">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/laws" className="mx-3">Laws</Nav.Link>
                        <Nav.Link as={NavLink} to="/case-studies" className="mx-3">Case Studies</Nav.Link>
                        <Nav.Link as={NavLink} to="/resources" className="mx-3">Resources</Nav.Link>
                        <Nav.Link as={NavLink} to="/playground" className="mx-3">Playground</Nav.Link>
                        <Nav.Link as={NavLink} to="/profile" className="mx-3">Profile</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="mx-3">Contact</Nav.Link>
                        
                        {/* Moved the search icon inside the collapsed menu for better mobile layout */}
                        <Nav.Link href="#search"><Search size={20} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;