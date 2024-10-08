import React, { useState } from 'react';
import { Carousel, Container, Form, Button, InputGroup } from 'react-bootstrap';
import '../styles/SignUp.css';

function Signup({ goToLogin }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        socialSecurity: '',
        phoneNumber: '',
        address: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateStepOne = () => {
        const { firstName, lastName, email, password, confirmPassword } = formData;
        return firstName && lastName && email && password && password === confirmPassword;
    };

    const validateStepTwo = () => {
        const { birthDate, socialSecurity, phoneNumber, address } = formData;
        return birthDate && socialSecurity && phoneNumber && address;
    };

    const handleNext = () => {
        if (activeIndex === 0 && validateStepOne()) {
            setActiveIndex(1);
        } else if (activeIndex === 1 && validateStepTwo()) {
            setActiveIndex(2);
        }
    };

    return (
        <Container className="signup-container">
            <Carousel activeIndex={activeIndex} controls={false} indicators={false} interval={null}>
                <Carousel.Item>
                    <Form className="signup-form">
                        <h2 className="signup-title">Créer un compte</h2>
                        <div className="form-row">
                            <Form.Group controlId="formFirstName" className="flex-item">
                                <InputGroup>
                                    <InputGroup.Text className="input-icon">
                                        <img src="/images/user-icon.png" alt="User Icon" />
                                    </InputGroup.Text>
                                    <Form.Control type="text" name="firstName" placeholder="Nom" onChange={handleInputChange} />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formLastName" className="flex-item">
                                <InputGroup>
                                    <InputGroup.Text className="input-icon">
                                        <img src="/images/user-icon.png" alt="User Icon" />
                                    </InputGroup.Text>
                                    <Form.Control type="text" name="lastName" placeholder="Prénom" onChange={handleInputChange} />
                                </InputGroup>
                            </Form.Group>
                        </div>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/email-icon.png" alt="Email Icon" />
                                </InputGroup.Text>
                                <Form.Control type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/password-icon.png" alt="Password Icon" />
                                </InputGroup.Text>
                                <Form.Control type="password" name="password" placeholder="Mot de passe" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/password-icon.png" alt="Password Icon" />
                                </InputGroup.Text>
                                <Form.Control type="password" name="confirmPassword" placeholder="Confirmer le mot de passe" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Button className="custom-button mt-4" onClick={handleNext} disabled={!validateStepOne()}>
                            Continuer
                        </Button>
                    </Form>
                </Carousel.Item>

                <Carousel.Item>
                    <Form className="signup-form">
                        <h2 className="signup-title">Informations supplémentaires</h2>
                        <Form.Group controlId="formBirthDate" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/calendar-icon.png" alt="Calendar Icon" />
                                </InputGroup.Text>
                                <Form.Control type="date" name="birthDate" placeholder="Date de naissance" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formSocialSecurity" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/social-security-icon.png" alt="Social Security Icon" />
                                </InputGroup.Text>
                                <Form.Control type="text" name="socialSecurity" placeholder="Numéro de sécurité sociale" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formPhoneNumber" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/phone-icon.png" alt="Phone Icon" />
                                </InputGroup.Text>
                                <Form.Control type="text" name="phoneNumber" placeholder="Numéro de téléphone" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formAddress" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/address-icon.png" alt="Address Icon" />
                                </InputGroup.Text>
                                <Form.Control type="text" name="address" placeholder="Adresse" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Button className="custom-button mt-4" onClick={handleNext} disabled={!validateStepTwo()}>
                            S'inscrire
                        </Button>
                    </Form>
                </Carousel.Item>
            </Carousel>
            <div className="page-indicator">
                <span className={activeIndex === 0 ? 'active' : ''}>1</span>
                <span className={activeIndex === 1 ? 'active' : ''}>2</span>
            </div>

            <div className="back-to-login mt-4">
                <a href="#" onClick={goToLogin}>Retour à la connexion</a>
            </div>
        </Container>
    );
}

export default Signup;
