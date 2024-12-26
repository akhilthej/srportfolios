import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import LogoLoader from './routes/LogoLoader';

const shouldRedirect = true; // Set this to false to disable the redirect

const RedirectComponent = () => {
    useEffect(() => {
        if (shouldRedirect) {
            window.location.href = "https://rzp.io/rzp/IBiOHkh";
        }
    }, []);

    return shouldRedirect ? null : <App />; // Show App if not redirecting
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <HelmetProvider>
                <LogoLoader />
                <RedirectComponent />
            </HelmetProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
