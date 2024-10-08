import React, { useState } from 'react';
import Onboarding from './components/OnBoarding';
import Login from './components/Login';

function App() {
    const [currentPage, setCurrentPage] = useState('onboarding');

    const goToLogin = () => {
        setCurrentPage('login');
    };

    return (
        <div className="App">
            {currentPage === 'onboarding' && <Onboarding goToLogin={goToLogin} />}
            {currentPage === 'login' && <Login />}
        </div>
    );
}

export default App;
