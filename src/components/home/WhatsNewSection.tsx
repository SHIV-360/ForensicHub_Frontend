// frontend/src/components/home/WhatsNewSection.tsx

import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Book, Mortarboard, PlusCircle } from 'react-bootstrap-icons';

const newItems = [
    { title: "Advanced Blockchain Forensics", type: "Expert", category: "New Challenge" },
    { title: "Mobile Device Analysis Guide", type: "Popular", category: "Resource Update" },
    { title: "European GDPR Compliance", type: "Important", category: "Legal Update" }
];

const WhatsNewSection = () => {
    // Helper to determine badge color based on type
    const getBadgeVariant = (type: string) => {
        switch (type) {
            case 'Expert': return 'danger';
            case 'Popular': return 'success';
            case 'Important': return 'warning';
            default: return 'secondary';
        }
    };

    return (
        <Container className="py-5">
            <Row>
                {/* What's New Column */}
                <Col md={8} className="mb-4 mb-md-0">
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4">
                            <Card.Title className="fw-bold mb-4">What's New</Card.Title>
                            {newItems.map((item, index) => (
                                <div key={index} className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                                    <div>
                                        <div className="fw-bold">{item.title}</div>
                                        <small className="text-muted">{item.category}</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Badge bg={getBadgeVariant(item.type)} className="me-3">{item.type}</Badge>
                                        <PlusCircle size={20} className="text-primary" />
                                    </div>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>

                {/* Quick Start Column */}
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 d-flex flex-column">
                            <Card.Title className="fw-bold mb-4">Quick Start</Card.Title>
                            <Button variant="primary" size="lg" className="w-100 mb-3">
                                <Mortarboard className="me-2" /> Take a Challenge
                            </Button>
                            <Button variant="outline-secondary" size="lg" className="w-100 mb-3">
                                <Book className="me-2" /> Browse Resources
                            </Button>
                            <a href="#" className="mt-auto text-center">Join Community</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WhatsNewSection;