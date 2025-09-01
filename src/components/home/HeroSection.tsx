import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section text-white text-center">
            <Container>
                <h1 className="display-4 fw-bold">Welcome to ForensicHub</h1>
                <p className="lead my-4">
                    Master digital forensics through hands-on challenges, comprehensive resources, and real-world case studies
                </p>
                <Button variant="warning" size="lg" className="me-3 px-4">Start Your Journey</Button>
                <Button variant="light" size="lg" className='px-4' disabled>Learn More</Button>
            </Container>
        </div>
    );
};

export default HeroSection;