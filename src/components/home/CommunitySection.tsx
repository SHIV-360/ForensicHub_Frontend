import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import placeholderImage from '../../assets/images/hero-bg.png';
// Make sure this CSS import exists if it doesn't already
import './HomePage.css'; 

const CommunitySection = () => {
    return (
        <Container className="py-5">
            <Card className="text-center border-0 shadow-sm p-lg-5 p-3">
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        {/* Removed inline style and added a class */}
                        <Image
                            src={placeholderImage}
                            rounded
                            fluid 
                            style={{
                                height: '300px', // Sets a fixed height
                                objectFit: 'cover', // Prevents image distortion
                                width: '100%', // Ensures it fills the container horizontally
                                maxWidth: '550px', // Controls the max size on large screens
                            }}
                        />
                    </Col>
                    <Col lg={6}>
                        <h2 className="fw-bold">Join Our Global Community</h2>
                        <p className="lead my-4 text-muted">
                            Connect with forensic investigators, security professionals, and learners from around the world.
                        </p>
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