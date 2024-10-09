import React, { useState } from 'react';
import { Carousel, Container, Form, Button, InputGroup } from 'react-bootstrap';
import '../styles/SignUp.css';

function Signup({ goToLogin, goToHome }) {
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
        const { name, value } = e.target;
        // Contrôle la saisie pour le numéro de téléphone et de sécurité sociale
        if (name === 'phoneNumber' || name === 'socialSecurity') {
            // Autorise seulement les chiffres et limite la longueur
            if (!/^\d*$/.test(value)) return;
        }

        setFormData({ ...formData, [name]: value });
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

    const handleAccessHome = () => {
        goToHome(); // Redirige vers la page d'accueil
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
                                    <Form.Control type="text" name="firstName" placeholder="Nom" className="input-field" onChange={handleInputChange} />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group controlId="formLastName" className="flex-item">
                                <InputGroup>
                                    <InputGroup.Text className="input-icon">
                                        <img src="/images/user-icon.png" alt="User Icon" />
                                    </InputGroup.Text>
                                    <Form.Control type="text" name="lastName" placeholder="Prénom" className="input-field" onChange={handleInputChange} />
                                </InputGroup>
                            </Form.Group>
                        </div>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/email-icon.png" alt="Email Icon" />
                                </InputGroup.Text>
                                <Form.Control type="email" name="email" placeholder="Email" className="input-field" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/password-icon.png" alt="Password Icon" />
                                </InputGroup.Text>
                                <Form.Control type="password" name="password" placeholder="Mot de passe" className="input-field" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/password-icon.png" alt="Password Icon" />
                                </InputGroup.Text>
                                <Form.Control type="password" name="confirmPassword" placeholder="Confirmer le mot de passe" className="input-field" onChange={handleInputChange} />
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
                                <Form.Control type="date" name="birthDate" placeholder="Date de naissance" className="input-field" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formSocialSecurity" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/social-security-icon.png" alt="Social Security Icon" />
                                </InputGroup.Text>
                                <Form.Control type="number" name="socialSecurity" placeholder="Numéro de sécurité sociale" className="input-field" maxLength="13" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>

                        <div className="form-row-2">
                        <Form.Group controlId="formPhoneNumber" className="mt-3 tel">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/phone-icon.png" alt="Phone Icon" />
                                </InputGroup.Text>
                                <Form.Control type="number" name="phoneNumber" placeholder="+33" className="input-field" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber" className="mt-3 num">
                            <InputGroup>
                                <Form.Control type="number" name="phoneNumber" placeholder="Numéro de téléphone" className="input-field" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>
                        </div>

                        <Form.Group controlId="formAddress" className="mt-3">
                            <InputGroup>
                                <InputGroup.Text className="input-icon">
                                    <img src="/images/address-icon.png" alt="Address Icon" />
                                </InputGroup.Text>
                                <Form.Control type="text" name="address" placeholder="Adresse" className="input-field" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>
                        <div className="form-row-2">
                        <Form.Group controlId="formAddress" className="mt-3">

                            <InputGroup>
                                <Form.Control type="number" name="postalcode" placeholder="Code Postal" className="input-field" onChange={handleInputChange} />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control type="text" name="country" placeholder="Ville" className="input-field" onChange={handleInputChange} />
                            </InputGroup>
                        </Form.Group>
                        </div>

                        <Button className="custom-button mt-4" onClick={handleNext} disabled={!validateStepTwo()}>
                            S'inscrire
                        </Button>
                    </Form>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="signup-success">
                        <img src="/images/validate-icon.png" alt="Inscription Réussie" className="success-icon" />
                        <p className="success-text">Inscription réussie</p>
                        <Button className="custom-button mt-4" onClick={handleAccessHome}>
                            Accéder à RoseCare
                        </Button>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Signup;

// TODO : add incrémentation et retour a l'accueil
// TODO : divise le numéro de téléphone 