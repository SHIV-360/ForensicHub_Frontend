import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { Search, Megaphone, CheckCircle, Briefcase, Bookmark } from 'react-bootstrap-icons';
import { lawsData } from '../../data/mockData';
import LawCard from '../laws/LawCard';
import '../laws/LawsPage.css';

const LawsPage: React.FC = () => {
    const [filter, setFilter] = useState<string>("all");   // track selected filter
    const [searchQuery, setSearchQuery] = useState<string>("");

    // --- Filter logic ---
    const filteredLaws = lawsData.filter((law) => {
        const matchesCategory = filter === "all" || law.category.toLowerCase() === filter;
        const matchesSearch = law.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-light">
            <Container className="py-5 laws-page">
                {/* --- Header --- */}
                <h1 className="mb-4 fw-bold">Laws & Regulations</h1>
                <p className="lead text-muted">
                    Stay informed about the latest legal frameworks governing digital forensics.
                </p>

                {/* --- Search Bar --- */}
                <InputGroup className="my-4 shadow-sm">
                    <Form.Control
                        placeholder="Search laws and regulations..."
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button variant="outline-secondary">
                        <Search />
                    </Button>
                </InputGroup>

                {/* --- Recent Legal Updates Banner --- */}
                <Card 
                    className="text-white my-4 border-0 shadow-sm" 
                    style={{ backgroundColor: 'var(--brand-orange)' }}
                >
                    <Card.Body className="d-flex justify-content-between align-items-center p-4">
                        <div>
                            <Card.Title className="fw-bold">
                                <Megaphone className="me-2" />Recent Legal Updates
                            </Card.Title>
                            <Card.Text>
                                New amendments to the Digital Evidence Act effective January 2025.
                            </Card.Text>
                        </div>
                        <Button variant="light">View Details</Button>
                    </Card.Body>
                </Card>

                {/* --- Filter Tabs --- */}
                <Nav variant="pills" activeKey={filter} onSelect={(selectedKey) => setFilter(selectedKey || "all")} className="mb-4">
                    <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="federal">Federal</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="state">State</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="international">International</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="procedural">Procedural</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="judicial">Judicial</Nav.Link></Nav.Item>
                </Nav>

                {/* --- Laws Grid --- */}
                <Row xs={1} md={2} lg={3} className="g-4">
                    {filteredLaws.map((law, index) => (
                        <Col key={index}>
                            <LawCard {...law} />
                        </Col>
                    ))}
                    {filteredLaws.length === 0 && (
                        <p className="text-muted"> 🚫 No Laws found for this filter.</p>
                    )}
                </Row>
                
                {/* --- Quick Access Resources --- */}
                <div className="mt-5">
                    <h3 className="fw-bold mb-4">Quick Access Resources</h3>
                    <Row>
                        <Col md={4} className="mb-3">
                            <Card className="h-100 text-center p-3 border-0 shadow-sm">
                                <Card.Body>
                                    <Bookmark size={30} style={{ color: 'var(--brand-green)' }} className="mb-2" />
                                    <h5 className="fw-bold">Legal Glossary</h5>
                                    <p className="text-muted">Definitions of key legal terms in digital forensics.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Card className="h-100 text-center p-3 border-0 shadow-sm">
                                <Card.Body>
                                    <CheckCircle size={30} style={{ color: 'var(--brand-green)' }} className="mb-2" />
                                    <h5 className="fw-bold">Compliance Checker</h5>
                                    <p className="text-muted">Verify your processes against current legal standards.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-3">
                            <Card className="h-100 text-center p-3 border-0 shadow-sm">
                                <Card.Body>
                                    <Briefcase size={30} style={{ color: 'var(--brand-green)' }} className="mb-2" />
                                    <h5 className="fw-bold">Case Precedents</h5>
                                    <p className="text-muted">Important court decisions shaping digital evidence.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default LawsPage;
