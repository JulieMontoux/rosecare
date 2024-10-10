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
    <div className="bubble-avatar">
        <img src="/images/rose-icon.png" alt="Rose Icon" className="rose-icon" />
    </div>
    <div className="bubble-text">
        <span>Bienvenue dans votre app <strong>RoseCare</strong></span>
    </div>
</div>


            <Row className="quick-actions mt-4 gx-2 gy-2">
    <Col xs={12} md={6} className="action-item auto-examen">
        <a href="/auto-examen" className="custom-button-home">Auto-Examen</a>
    </Col>
    <Col xs={12} md={6} className="action-item guide">
        <a href="/guide" className="custom-button-home">Guide</a>
    </Col>
    <Col xs={12} md={6} className="action-item rappels">
        <a href="/rappels" className="custom-button-home">Configurer les rappels</a>
    </Col>
    <Col xs={12} md={6} className="action-item documents">
        <a href="/documents" className="custom-button-home">Vos documents</a>
    </Col>
</Row>


            <div className="bottom-navigation mt-5">
                <a href="/accueil" className="nav-icon active">Accueil</a>
                <a href="/planning" className="nav-icon">Planning</a>
                <a href="/forum" className="nav-icon">Forum</a>
                <a href="/compte" className="nav-icon">Compte</a>
            </div>
        </Container>
    );
}

export default Home;