import React, { useState } from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import '../styles/OnBoarding.css';

function Onboarding({ goToLogin }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        if (activeIndex < 2) {
            setActiveIndex(activeIndex + 1);
        } else {
            goToLogin(); // Redirection vers la page de connexion si c'est la dernière slide
        }
    };

    const handleSkip = () => {
        goToLogin(); // Passe directement à la page de connexion
    };

    return (
        <Container className="onboarding-container">
            <div className="skip-button">
                <Button variant="link" onClick={handleSkip}>Passer</Button>
            </div>
            <Carousel activeIndex={activeIndex} onSelect={setActiveIndex} controls={false} indicators={true} interval={null}>
                <Carousel.Item>
                    <div className="onboarding-slide">
                        <img src="/images/logo.png" alt="Slide 1" className="onboarding-image" />
                        <p className="onboarding-text">Prendre soin de vous, c’est déjà une victoire !</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="onboarding-slide">
                        <img src="/images/illustration1.png" alt="Slide 2" className="onboarding-image" />
                        <p className="onboarding-text">Bénéficier d’un suivi personnalisé</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="onboarding-slide">
                        <img src="/images/illustration2.png" alt="Slide 3" className="onboarding-image" />
                        <p className="onboarding-text">Prenez rendez-vous avec des spécialistes</p>
                    </div>
                </Carousel.Item>
            </Carousel>
            <Button className="custom-button mt-4" onClick={handleNext}>Suivant</Button>
        </Container>
    );
}

export default Onboarding;
