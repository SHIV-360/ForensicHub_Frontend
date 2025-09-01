import React from 'react';
import { Container } from 'react-bootstrap';

const CaseStudiesPage: React.FC = () => {
    return (
        <Container className="py-5">
            <h1 className="mb-4">Case Studies</h1>
            <p className="lead">Learn from real-world digital forensics investigations.</p>
            {/* Page content will be built here */}
        </Container>
    );
};

export default CaseStudiesPage;