import React from 'react';
import { Container } from 'react-bootstrap';

const ProfilePage: React.FC = () => {
    return (
        <Container className="py-5">
            <h1 className="mb-4">Alex Johnson</h1>
            <p className="lead">Digital Forensics Analyst</p>
            {/* Page content will be built here */}
        </Container>
    );
};

export default ProfilePage;