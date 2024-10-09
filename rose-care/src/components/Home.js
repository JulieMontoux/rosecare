import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import '../styles/Home.css';

function Home() {
    return (
        <Container className="home-container">
            <div className="profile-section">
                <div className="profile-bubble">
                    <img src="/images/user-icon.png" alt="Profile Icon" className="profile-icon" />
                </div>
                <h2 className="profile-name">Bonjour Céline</h2>
            </div>

            <Form className="search-form mt-3">
                <InputGroup>
                    <InputGroup.Text className="input-icon">
                        <img src="/images/search-icon.png" alt="Search Icon" />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Rechercher" className="input-field" />
                    <Button className="search-button">Rechercher</Button>
                </InputGroup>
            </Form>

            <div className="welcome-message mt-4">
                <img src="/images/rose-icon.png" alt="Rose Icon" className="rose-icon" />
                <span>Bienvenue dans votre app <strong>RoseCare</strong></span>
            </div>

            <Row className="quick-actions mt-4 gx-2 gy-2">
                <Col xs={6} className="action-item auto-examen">
                    <Button className="custom-button-home">Auto-Examen</Button>
                </Col>
                <Col xs={6} className="action-item guide">
                    <Button className="custom-button-home">Guide</Button>
                </Col>
                <Col xs={6} className="action-item rappels">
                    <Button className="custom-button-home">Configurer les rappels</Button>
                </Col>
                <Col xs={6} className="action-item documents">
                    <Button className="custom-button-home">Vos documents</Button>
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