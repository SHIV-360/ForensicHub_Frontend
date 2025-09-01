import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const stats = [
    { value: '2,500+', label: 'Active Investigators' },
    { value: '15,000+', label: 'Challenges Completed' },
    { value: '94%', label: 'Success Rate' },
    { value: '50+', label: 'Countries' },
];

const StatsSection: React.FC = () => {
    return (
        <div className="py-5 bg-white">
            <Container>
                <Row className="text-center">
                    {stats.map((stat, index) => (
                        <Col key={index} md={3} sm={6} className="mb-4 mb-md-0">
                            <h2 className="display-5 fw-bold text-primary">{stat.value}</h2>
                            <p className="text-muted mb-0">{stat.label}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default StatsSection;