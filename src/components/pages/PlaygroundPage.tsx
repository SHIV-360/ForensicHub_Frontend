import React from 'react';
import { Container } from 'react-bootstrap';

const PlaygroundPage: React.FC = () => {
    return (
        <Container className="py-5">
            <h1 className="mb-4">Welcome to the Playground</h1>
            <p className="lead">Your digital forensics journey continues.</p>
            {/* Page content will be built here */}
        </Container>
    );
};

export default PlaygroundPage;