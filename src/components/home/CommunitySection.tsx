import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import placeholderImage from '../../assets/images/hero-bg.png';

const CommunitySection = () => {
    return (
        <Container className="py-5">
            <Card className="text-center border-0 shadow-sm p-5">
                <Row className="align-items-center">
                    <Col>
                        <h2 className="fw-bold">Join Our Global Community</h2>
                        <p className="lead my-4 text-muted">
                            Connect with forensic investigators, security professionals, and learners from around the world.
                        </p>
                        <Image
                            src={placeholderImage}
                            rounded
                            fluid
                            style={{
                                maxWidth: '1000px',
                                height: '700px',
                                width: '350px',
                                objectFit: 'cover',
                                margin: '0 auto 1rem auto',
                                transform: 'rotate(90deg)' 
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