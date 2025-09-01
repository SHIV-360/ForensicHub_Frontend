import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

// Placeholder images - create these in src/assets/images/
import whatsNewImg1 from '../../assets/images/hero-bg.png';
import whatsNewImg2 from '../../assets/images/hero-bg.png';
import whatsNewImg3 from '../../assets/images/hero-bg.png';

const articles = [
    {
        image: whatsNewImg1,
        category: 'Quick Start',
        title: 'Advanced Blockchain Forensics',
    },
    {
        image: whatsNewImg2,
        category: 'Guide',
        title: 'Mobile Device Analysis Guide',
    },
    {
        image: whatsNewImg3,
        category: 'Update',
        title: 'European GDPR Compliance Update',
    }
];

const WhatsNewSection: React.FC = () => {
    return (
        <div className="py-5 bg-white">
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="fw-bold">What's New</h2>
                    </Col>
                </Row>
                <Row>
                    {articles.map((article, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Img variant="top" src={article.image} />
                                <Card.Body>
                                    <Badge pill bg="info" className="mb-2">{article.category}</Badge>
                                    <Card.Title className="fw-bold">{article.title}</Card.Title>
                                </Card.Body>
                                <Card.Footer className="bg-white border-0">
                                    <a href="#" className="text-primary text-decoration-none fw-bold">
                                        Explore <ArrowRight />
                                    </a>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default WhatsNewSection;