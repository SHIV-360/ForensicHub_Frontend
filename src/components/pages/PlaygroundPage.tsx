import { Container, Row, Col, Card, ProgressBar, Alert, ListGroup, Badge } from 'react-bootstrap';
import { Trophy, Star, ClockHistory, TrophyFill } from 'react-bootstrap-icons';
import { challengesData, leaderboardData, recentActivityData } from '../../data/mockData';
import ChallengeCard from '../playground/ChallengeCard';
import '../playground/PlaygroundPage.css';

const PlaygroundPage = () => {
    return (
        <div className="bg-light">
            <Container className="py-5 playground-page">
                <Row className="mb-4 align-items-center">
                    <Col>
                        <h1 className="fw-bold">Welcome to the Playground</h1>
                        <p className="lead text-muted">Your digital forensics journey continues.</p>
                    </Col>
                    <Col xs="auto" className="text-end">
                        <Badge className="p-2 fs-6 badge-level">
                            <TrophyFill className="me-2" /> Level 12
                        </Badge>
                    </Col>
                </Row>

                <Card className="mb-4 shadow-sm border-0">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col md={2}><strong>Overall Progress</strong></Col>
                            <Col md={10}>
                                <ProgressBar now={62.5} label="1,250 / 2,000 XP" className="progress-bar-brand" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Alert variant="light" className="d-flex align-items-center shadow-sm alert-brand">
                    <Star size={24} className="me-3" />
                    <div>
                        <Alert.Heading className="mb-0 fw-bold">New Challenge Available!</Alert.Heading>
                        <p className="mb-0">Advanced Blockchain Forensics challenge is now live.</p>
                    </div>
                </Alert>

                <Row className="mt-4">
                    {/* Main Content */}
                    <Col lg={8}>
                        <Row xs={1} md={2} className="g-4">
                            {challengesData.map((challenge, index) => (
                                <Col key={index}>
                                    <ChallengeCard {...challenge} />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    {/* Sidebar */}
                    <Col lg={4}>
                        <div className="sidebar">
                             <Card className="mb-4 shadow-sm border-0">
                                <Card.Body>
                                    <Card.Title className="fw-bold">Quick Stats</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex justify-content-between">Challenges Completed <span>23</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between">Current Streak <span>7 days</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between">Total Points <span>1,250</span></ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4 shadow-sm border-0">
                                <Card.Body>
                                    <Card.Title className="fw-bold"><Trophy className="me-2" />Leaderboard</Card.Title>
                                    <ListGroup variant="flush" numbered>
                                        {leaderboardData.map((user, index) => (
                                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">{user.name}</div>
                                                <Badge pill className="badge-brand-green">{user.points}</Badge>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                            <Card className="shadow-sm border-0">
                                <Card.Body>
                                    <Card.Title className="fw-bold"><ClockHistory className="me-2" />Recent Activity</Card.Title>
                                    <ListGroup variant="flush">
                                        {recentActivityData.map((activity, index) => (
                                            <ListGroup.Item key={index} className="small">
                                                {activity.description}
                                                <div className="text-muted">{activity.time}</div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaygroundPage;