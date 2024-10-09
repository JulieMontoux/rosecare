import React from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import '../styles/Login.css';

function Login({ goToAccountRecovery, goToSignup, goToHome }) {
    const handleLogin = () => {
        goToHome();
    };

    return (
        <Container className="login-container">
            <div className="login-logo">
                <img src="/images/logo.png" alt="RoseCare Logo" />
            </div>
            <Form className="login-form">
                <Form.Group controlId="formEmail">
                    <InputGroup>
                        <InputGroup.Text className="input-icon">
                            <img src="/images/email-icon.png" alt="Email Icon" />
                        </InputGroup.Text>
                        <Form.Control type="email" placeholder="Email" className="input-field" />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mt-3">
                    <InputGroup>
                        <InputGroup.Text className="input-icon">
                            <img src="/images/password-icon.png" alt="Password Icon" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Mot de passe" className="input-field" />
                        <InputGroup.Text className="input-icon">
                            <img src="/images/eye-icon.png" alt="Eye Icon" />
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="forgot-password">
                        <a href="#" onClick={goToAccountRecovery}>Mot de passe oublié</a>
                    </Form.Text>
                </Form.Group>

                <Button className="custom-button" type="button" onClick={handleLogin}>
                    Se connecter
                </Button>

                <div className="login-footer">
                    <p>C'est ma première fois, <a href="#" className="signup-link" onClick={goToSignup}>je m'inscris !</a></p>
                    <div className="social-buttons">
                        <Button variant="outline-secondary" className="social-button">G</Button>
                        <Button variant="outline-secondary" className="social-button">f</Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
}

export default Login;
