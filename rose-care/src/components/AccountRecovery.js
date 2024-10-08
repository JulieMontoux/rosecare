import React, { useState } from 'react';
import { Carousel, Container, Form, Button, InputGroup } from 'react-bootstrap';
import '../styles/AccountRecovery.css';

function AccountRecovery({ goToLogin }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [formData, setFormData] = useState({
        email: '',
        validationCode: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmailStep = () => {
        return formData.email.length > 0;
    };

    const validateCodeStep = () => {
        return formData.validationCode.length === 4;
    };

    const validatePasswordStep = () => {
        return formData.newPassword && formData.newPassword === formData.confirmNewPassword;
    };

    const handleNext = () => {
        if (activeIndex === 0 && validateEmailStep()) {
            setActiveIndex(1);
        } else if (activeIndex === 1 && validateCodeStep()) {
            setActiveIndex(2);
        }
    };

    return (
        <Container className="recovery-container">
            <Carousel activeIndex={activeIndex} controls={false} indicators={false} interval={null}>
                <Carousel.Item>
                    <Form className="recovery-form">
                        <h2 className="recovery-title">Récupération de compte</h2>
                        <Form.Group controlId="formEmail">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/email-icon.png" alt="Email Icon" />
                                </InputGroup.Text>
                                <Form.Control
                                    className="input-label"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Button className="custom-button mt-4" onClick={handleNext} disabled={!validateEmailStep()}>
                            Valider
                        </Button>
                    </Form>
                    <div className="back-to-login mt-4">
                        <a href="#" onClick={goToLogin}>Retour à la connexion</a>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <Form className="recovery-form">
                        <h2 className="recovery-title">Entrer le code de validation</h2>
                        <div className="code-inputs">
                            {[0, 1, 2, 3].map((index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className="code-input"
                                    onChange={(e) => {
                                        const updatedCode = formData.validationCode.split('');
                                        updatedCode[index] = e.target.value;
                                        setFormData({ ...formData, validationCode: updatedCode.join('') });
                                    }}
                                />
                            ))}
                        </div>
                        <p className="validation-text">Un mail de validation a été envoyé à l'adresse mail renseignée</p>
                        <Button className="custom-button mt-4" onClick={handleNext} disabled={!validateCodeStep()}>
                            Valider
                        </Button>
                    </Form>
                </Carousel.Item>

                <Carousel.Item>
                    <Form className="recovery-form">
                        <h2 className="recovery-title">Créer un nouveau mot de passe</h2>
                        <Form.Group controlId="formNewPassword" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/password-icon.png" alt="Password Icon" />
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    name="newPassword"
                                    placeholder="Nouveau mot de passe"
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formConfirmNewPassword" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/password-icon.png" alt="Password Icon" />
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    name="confirmNewPassword"
                                    placeholder="Confirmer le mot de passe"
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Button className="custom-button mt-4" onClick={handleNext} disabled={!validatePasswordStep()}>
                            Valider
                        </Button>
                    </Form>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default AccountRecovery;
