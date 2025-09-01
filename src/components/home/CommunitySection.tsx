import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import placeholderImage from '../../assets/images/hero-bg.png';

const CommunitySection = () => {
    return (
        <Container className="py-5">
            <Card className="text-center border-0 shadow-sm p-5">
                <Row className="align-items-center">
                    <Col>
                        <h2 className="fw-bold">Join Our Global Community</h2>
                        {/* Change 1: Reduced paragraph's bottom margin */}
                        <p className="lead mb-3 text-muted">
                            Connect with forensic investigators, security professionals, and learners from around the world.
                        </p>
                        <Image
                            src={placeholderImage}
                            rounded
                            fluid
                            style={{
                                maxWidth: '400px',
                                height: '200px',
                                width: '400px',
                                objectFit: 'cover',
                                margin: '20px auto'
                            }}
                        />
                        <div>
                            <Button size="lg" className="px-5 btn-brand-orange">Get Started Today</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default CommunitySection;