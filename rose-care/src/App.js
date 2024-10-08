import React, { useState } from 'react';
import Onboarding from './components/OnBoarding';
import Login from './components/Login';
import AccountRecovery from './components/AccountRecovery';
import Signup from './components/SignUp';

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

    const goToOnboarding = () => {
        setCurrentPage('onboarding');
    };

    return (
        <div className="App">
            {currentPage === 'onboarding' && <Onboarding goToLogin={goToLogin} />}
            {currentPage === 'login' && <Login goToAccountRecovery={goToAccountRecovery} goToSignup={goToSignup} />}
            {currentPage === 'accountRecovery' && <AccountRecovery goToLogin={goToLogin} />}
            {currentPage === 'signup' && <Signup goToLogin={goToLogin} />}
        </div>
    );
}

export default App;
