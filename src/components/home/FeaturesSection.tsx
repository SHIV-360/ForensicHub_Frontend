import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Puzzle, Book, JournalRichtext, ShieldLock } from 'react-bootstrap-icons';
import './FeaturesSection.css';

const features = [
    {
        icon: <Puzzle size={40} className="text-primary" />,
        title: 'Interactive Challenges',
        description: 'Sharpen your skills with real-world scenarios in our hands-on labs.'
    },
    {
        icon: <Book size={40} className="text-primary" />,
        title: 'Learning Resources',
        description: 'Access a vast library of articles, guides, and video tutorials.'
    },
    {
        icon: <JournalRichtext size={40} className="text-primary" />,
        title: 'Case Studies',
        description: 'Learn from detailed breakdowns of famous digital forensics investigations.'
    },
    {
        icon: <ShieldLock size={40} className="text-primary" />,
        title: 'Laws & Regulations',
        description: 'Stay updated with the latest legal frameworks and compliance standards.'
    }
];

const FeaturesSection: React.FC = () => {
    return (
        <div className="features-section bg-light py-5">
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="fw-bold">Everything You Need to Excel</h2>
                        <p className="lead text-muted">
                            From beginner-friendly tutorials to advanced investigation techniques, we provide the tools and knowledge for every skill level.
                        </p>
                    </Col>
                </Row>
                <Row>
                    {features.map((feature, index) => (
                        <Col key={index} md={6} lg={3} className="mb-4">
                            <Card className="h-100 text-center shadow-sm feature-card">
                                <Card.Body>
                                    <div className="feature-icon mb-3">{feature.icon}</div>
                                    <Card.Title className="fw-bold">{feature.title}</Card.Title>
                                    <Card.Text>{feature.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default FeaturesSection;