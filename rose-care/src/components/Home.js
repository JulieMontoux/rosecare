import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import '../styles/Home.css';

function Home() {
    return (
        <Container className="home-container">
            <div className="profile-section">
                <img src="/images/user-icon.png" alt="Profile Icon" className="profile-icon" />
                <h2>Bonjour Céline</h2>
            </div>
            <Form className="search-form mt-3">
                <InputGroup>
                    <InputGroup.Text className="input-icon">
                        <img src="/images/search-icon.png" alt="Search Icon" />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Rechercher" className="input-field" />
                    <Button variant="dark" className="search-button">Rechercher</Button>
                </InputGroup>
            </Form>
            <div className="welcome-message mt-4">
                <img src="/images/head-rosecare.png" alt="Rose Icon" className="rose-icon" />
                <span>Bienvenue dans votre app <strong>RoseCare</strong></span>
            </div>
            <Row className="quick-actions mt-4">
                <Col xs={6} className="action-item">
                    <Button className="custom-button">Auto-Examen</Button>
                </Col>
                <Col xs={6} className="action-item">
                    <Button className="custom-button">Guide</Button>
                </Col>
                <Col xs={6} className="action-item mt-3">
                    <Button className="custom-button">Configurer les rappels</Button>
                </Col>
                <Col xs={6} className="action-item mt-3">
                    <Button className="custom-button">Vos documents</Button>
                </Col>
            </Row>
            <div className="bottom-navigation mt-5">
                <Button className="nav-icon active">Accueil</Button>
                <Button className="nav-icon">Planning</Button>
                <Button className="nav-icon">Forum</Button>
                <Button className="nav-icon">Compte</Button>
            </div>
        </Container>
    );
}

export default Home;
