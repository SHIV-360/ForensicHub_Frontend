import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CommunitySection: React.FC = () => {
    return (
        <div className="py-5 bg-primary text-white">
            <Container className="text-center">
                <Row>
                    <Col>
                        <h2 className="fw-bold">Join Our Global Community</h2>
                        <p className="lead my-4">
                            Connect with forensic investigators, security professionals, and learners from around the world.
                        </p>
                        <Button variant="light" size="lg" className="text-primary fw-bold px-4">Join Community</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CommunitySection;