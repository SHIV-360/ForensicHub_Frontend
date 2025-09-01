import React from 'react';
import { Container } from 'react-bootstrap';

const ContactPage: React.FC = () => {
    return (
        <Container className="py-5">
            <h1 className="mb-4">Get in Touch</h1>
            <p className="lead">Connect with our team of digital forensics experts.</p>
            {/* Page content will be built here */}
        </Container>
    );
};

export default ContactPage;