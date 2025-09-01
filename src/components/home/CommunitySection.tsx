import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import placeholderImage from '../../assets/images/hero-bg.png';

const CommunitySection = () => {
    return (
        <Container className="py-5">
            <Card className="text-center border-0 shadow-sm p-lg-5 p-3">
                <Row className="align-items-center">
                    <Col>
                        <h2 className="fw-bold">Join Our Global Community</h2>
                        <p className="lead my-4 text-muted">
                            Connect with forensic investigators, security professionals, and learners from around the world.
                        </p>
                        <Image
                            src={placeholderImage}
                            rounded
                            fluid // This prop makes the image responsive
                            style={{
                                maxWidth: '400px', // Controls the max size on large screens
                                margin: '0 auto 1.5rem auto' // Centers and provides space below
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