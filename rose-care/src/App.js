import React, { useState } from 'react';
import Onboarding from './components/OnBoarding';
import Login from './components/Login';
import AccountRecovery from './components/AccountRecovery';
import Signup from './components/SignUp';
import Home from './components/Home';

function App() {
    const [currentPage, setCurrentPage] = useState('onboarding');

    const goToLogin = () => {
        setCurrentPage('login');
    };

    const goToAccountRecovery = () => {
        setCurrentPage('accountRecovery');
    };

    const goToSignup = () => {
        setCurrentPage('signup');
    };

    const goToHome = () => {
        setCurrentPage('home');
    };

    const goToOnboarding = () => {
        setCurrentPage('onboarding');
    };

    return (
        <div className="App">
            {currentPage === 'onboarding' && <Onboarding goToLogin={goToLogin} />}
            {currentPage === 'login' && <Login goToAccountRecovery={goToAccountRecovery} goToSignup={goToSignup} goToHome={goToHome} />}
            {currentPage === 'accountRecovery' && <AccountRecovery goToLogin={goToLogin} />}
            {currentPage === 'signup' && <Signup goToLogin={goToLogin} />}
            {currentPage === 'home' && <Home />}
        </div>
    );
}

export default App;
