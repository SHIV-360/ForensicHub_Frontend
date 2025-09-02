import { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import { ArrowRight, Book, Tools, Film, FileEarmarkText } from 'react-bootstrap-icons';
import { resourcesData, certificationResources, industryStandards, resourceCategories } from '../../data/mockData';
import ResourceCard from '../resources/ResourceCard';
import '../resources/ResourcesPage.css';

const ResourcesPage = () => {
    const [filter, setFilter] = useState('all');

    const filteredResources = filter === 'all'
        ? resourcesData
        : resourcesData.filter(resource => resource.category.toLowerCase().replace(/\s+/g, '') === filter);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Book': return <Book size={30} />;
            case 'Tools': return <Tools size={30} />;
            case 'Film': return <Film size={30} />;
            case 'FileEarmarkText': return <FileEarmarkText size={30} />;
            default: return null;
        }
    };

    return (
        <div className="bg-light resources-page">
            <Container className="py-5">
                <h1 className="display-5 fw-bold">Learning Resources</h1>
                <p className="lead text-muted mb-4">
                    Comprehensive collection of tools, guides, and educational materials.
                </p>

                <Nav
                    variant="pills"
                    activeKey={filter}
                    onSelect={(selectedKey) => setFilter(selectedKey || 'all')}
                    className="mb-4"
                >
                    <Nav.Item><Nav.Link eventKey="all">All Resources</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="guides">Guides</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="tools">Tools</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="videos">Videos</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="templates">Templates</Nav.Link></Nav.Item>
                </Nav>

                <Row xs={1} md={2} lg={3} className="g-4">
                    {filteredResources.map((resource, index) => (
                        <Col key={index}>
                            <ResourceCard {...resource} />
                        </Col>
                    ))}
                </Row>

                <Row className="mt-5">
                    <Col md={6} className="mb-4">
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="fw-bold mb-4">Certification Resources</Card.Title>
                                <div className="d-flex flex-column gap-3">
                                    {certificationResources.map((item, index) => (
                                        <a key={index} href={item.link} className="resource-link-item">
                                            <span>{item.title}</span>
                                            <ArrowRight />
                                        </a>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="fw-bold mb-4">Industry Standards</Card.Title>
                                <div className="d-flex flex-column gap-3">
                                    {industryStandards.map((item, index) => (
                                        <a key={index} href={item.link} className="resource-link-item">
                                            <span>{item.title}</span>
                                            <ArrowRight />
                                        </a>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="mt-5">
                    <h2 className="fw-bold text-center mb-4">Browse by Category</h2>
                    <Row>
                        {resourceCategories.map((category, index) => (
                            <Col key={index} md={6} lg={3} className="text-center mb-4">
                                <Card className="h-100 border-0 shadow-sm p-3 category-card">
                                    <div className="category-icon mb-3" style={{ color: 'var(--brand-green)' }}>
                                        {getIcon(category.icon)}
                                    </div>
                                    <h5 className="fw-bold">{category.title}</h5>
                                    <p className="text-muted small">{category.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ResourcesPage;