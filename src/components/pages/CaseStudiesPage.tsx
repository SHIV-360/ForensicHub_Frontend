// frontend/src/components/pages/CaseStudiesPage.tsx

import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Book, People, ChatLeftText } from 'react-bootstrap-icons';
import { caseStudiesData } from '../../data/mockData';
import CaseStudyCard from '../casestudies/CaseStudyCard';

const CaseStudiesPage = () => {
    return (
        <div className="bg-light">
            <Container className="py-5">
                <h1 className="display-5 fw-bold">Case Studies</h1>
                <p className="lead text-muted mb-4">
                    Learn from real-world digital forensics investigations.
                </p>

                <Nav variant="pills" defaultActiveKey="/all" className="mb-4">
                    <Nav.Item><Nav.Link href="/all">All Cases</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="network">Network Security</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="mobile">Mobile Forensics</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="email">Email Forensics</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="malware">Malware Analysis</Nav.Link></Nav.Item>
                </Nav>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {caseStudiesData.map((study, index) => (
                        <Col key={index}>
                            <CaseStudyCard {...study} />
                        </Col>
                    ))}
                </Row>

                <div className="bg-white p-5 mt-5 rounded shadow-sm">
                    <h3 className="fw-bold mb-4">Learning Resources</h3>
                    <Row className="text-center">
                        <Col md={4}>
                            <Book size={30} className="text-success mb-2" />
                            <h5 className="fw-bold">Case Templates</h5>
                            <p className="text-muted">Structured templates for documenting your own investigations.</p>
                        </Col>
                        <Col md={4}>
                            <People size={30} className="text-success mb-2" />
                            <h5 className="fw-bold">Expert Insights</h5>
                            <p className="text-muted">Commentary and analysis from leading forensics professionals.</p>
                        </Col>
                        <Col md={4}>
                            <ChatLeftText size={30} className="text-success mb-2" />
                            <h5 className="fw-bold">Community Discussion</h5>
                            <p className="text-muted">Engage with peers and share insights on complex cases.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CaseStudiesPage;