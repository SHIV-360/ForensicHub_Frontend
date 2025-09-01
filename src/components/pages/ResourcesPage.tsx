import React from 'react';
import { Container } from 'react-bootstrap';

const ResourcesPage: React.FC = () => {
    return (
        <Container className="py-5">
            <h1 className="mb-4">Learning Resources</h1>
            <p className="lead">Comprehensive collection of tools, guides, and educational materials.</p>
            {/* Page content will be built here */}
        </Container>
    );
};

export default ResourcesPage;