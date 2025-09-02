import { Container, Row, Col, Card, ProgressBar, Button, ListGroup, Badge, Form } from 'react-bootstrap';
import { PersonCircle, PencilSquare, Trophy, Gear, ClockHistory, CheckCircleFill, ShieldCheck, PhoneFill, TrophyFill } from 'react-bootstrap-icons';
import { userProfileData } from '../../data/mockData';
import '../profile/ProfilePage.css';

const ProfilePage = () => {

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'CheckCircleFill': return <CheckCircleFill size={24} />;
            case 'ShieldCheck': return <ShieldCheck size={24} />;
            case 'PhoneFill': return <PhoneFill size={24} />;
            case 'TrophyFill': return <TrophyFill size={24} />;
            default: return null;
        }
    };

    const { name, title, stats, learningProgress, skillsAssessment, recentActivity, achievements, quickStats } = userProfileData;

    return (
        <div className="bg-light profile-page">
            <Container className="py-5">
                {/* --- Profile Header --- */}
                <Row className="align-items-center mb-4">
                    <Col xs="auto">
                        <PersonCircle size={80} className="text-secondary" />
                    </Col>
                    <Col>
                        <h1 className="fw-bold mb-0">{name}</h1>
                        <p className="lead text-muted">{title}</p>
                    </Col>
                    <Col xs="auto">
                        <Button className="btn-pill-outline"><PencilSquare className="me-2" />Edit Profile</Button>
                    </Col>
                </Row>

                {/* --- Profile Stats --- */}
                <Row className="text-center mb-4 g-3">
                    <Col><Card className="p-3 shadow-sm border-0"><strong>Level {stats.level}</strong><div className="text-muted small">Current Level</div></Card></Col>
                    <Col><Card className="p-3 shadow-sm border-0"><strong>{stats.xp}</strong><div className="text-muted small">Total XP</div></Card></Col>
                    <Col><Card className="p-3 shadow-sm border-0"><strong>{stats.completed}</strong><div className="text-muted small">Completed</div></Card></Col>
                    <Col><Card className="p-3 shadow-sm border-0"><strong>{stats.streak}</strong><div className="text-muted small">Day Streak</div></Card></Col>
                </Row>

                <Row>
                    {/* Left Column */}
                    <Col lg={8}>
                        {/* Learning Progress, Skills Assessment Cards... */}
                         <Card className="mb-4 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="fw-bold mb-3">Learning Progress</Card.Title>
                                {learningProgress.skills.map((item, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <span>{item.name}</span>
                                            <span>{item.progress}%</span>
                                        </div>
                                        <ProgressBar now={item.progress} className="progress-bar-brand" />
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                        <Card className="mb-4 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="fw-bold mb-3">Skills Assessment</Card.Title>
                                {skillsAssessment.map((item, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <span>{item.skill} <Badge pill bg="light" text="dark" className="fw-normal">{item.type}</Badge></span>
                                            <span>{item.progress}%</span>
                                        </div>
                                        <ProgressBar now={item.progress} className="progress-bar-brand" />
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                        <Card className="mb-4 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="fw-bold"><ClockHistory className="me-2" />Recent Activity</Card.Title>
                                <ListGroup variant="flush">
                                    {recentActivity.map((activity, index) => (
                                        <ListGroup.Item key={index} className="d-flex justify-content-between">
                                            {activity.description}
                                            <span className="text-muted small">{activity.time}</span>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                <div className="text-center mt-3">
                                    <Button className="btn-pill-outline w-100">View All Activity</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Column */}
                    <Col lg={4}>
                        {/* Achievements Card... */}
                        <Card className="mb-4 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="fw-bold mb-3"><Trophy className="me-2" />Achievements</Card.Title>
                                <Row xs={2} className="g-3 text-center">
                                    {achievements.map((ach, index) => (
                                        <Col key={index}>
                                            <div className={`achievement-badge achievement-${ach.title.toLowerCase().replace(' ', '-')}`}>
                                                {getIcon(ach.icon)}
                                                <div className="small mt-1">{ach.title}</div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                <div className="text-center mt-3">
                                    <Button className="btn-pill-outline w-100">View All Badges</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-4 shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="fw-bold mb-3"><Gear className="me-2" />Settings</Card.Title>
                                <Form>
                                    <Form.Check type="switch" id="email-notifications" label="Email Notifications" defaultChecked className="mb-2"/>
                                    <Form.Check type="switch" id="public-profile" label="Public Profile" className="mb-2"/>
                                    <Form.Check type="switch" id="two-factor-auth" label="Two-Factor Auth" />
                                </Form>
                                <hr />
                                <div className="d-flex flex-column align-items-center gap-2">
                                    <Button className="btn-pill-outline w-100">Change Password</Button>
                                    <Button className="btn-pill-outline w-100">Privacy Settings</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        {/* Quick Stats Card... */}
                         <Card className="shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="fw-bold">Quick Stats</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="d-flex justify-content-between">Member Since <span>{quickStats.memberSince}</span></ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">Time Spent Learning <span>{quickStats.timeSpent}</span></ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">Resources Downloaded <span>{quickStats.resourcesDownloaded}</span></ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between">Community Rank <span>{quickStats.communityRank}</span></ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfilePage;