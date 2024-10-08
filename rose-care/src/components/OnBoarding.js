import React, { useState } from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import '../styles/OnBoarding.css';

function Onboarding({ goToLogin }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        if (activeIndex < 2) {
            setActiveIndex(activeIndex + 1);
        } else {
            goToLogin(); // Appelle la fonction pour aller à la page de connexion
        }
    };

    return (
        <Container className="onboarding-container">
            <Carousel activeIndex={activeIndex} indicators={false} controls={false} interval={null}>
                <Carousel.Item>
                    <div className="onboarding-slide">
                        <img src="/images/logo.png" alt="RoseCare Logo" className="onboarding-logo" />
                        <p className="onboarding-text">Prendre soin de vous, c’est déjà une victoire !</p>
                        <Button className="custom-button" onClick={handleNext}>Suivant</Button>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="onboarding-slide">
                        <img src="/images/illustration1.png" alt="Illustration Suivi" className="onboarding-image" />
                        <p className="onboarding-text">Bénéficier d’un suivi personnalisé</p>
                        <Button className="custom-button" onClick={handleNext}>Suivant</Button>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="onboarding-slide">
                        <img src="/images/illustration2.png" alt="Illustration Spécialistes" className="onboarding-image" />
                        <p className="onboarding-text">Prenez rendez-vous avec des spécialistes</p>
                        <Button className="custom-button" onClick={handleNext}>Suivant</Button>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Onboarding;
