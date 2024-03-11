import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './src/components/AuthContext.js';

const Header = React.lazy(() => import('./src/components/Header.js'));
const Footer = React.lazy(() => import('./src/components/Footer.js'));
const PrivacyPolicy = React.lazy(() => import('./src/components/Privacy.js'));
const Landing = React.lazy(() => import('./src/Landing.js'));
const LoginComponent = React.lazy(() => import('./src/components/LoginComponent.js'));
const DashboardComponent = React.lazy(() => import('./src/components/DashboardComponent.js'));

import './src/App.css';

const App = () => {
  return (<div className='container m-0'>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
      </Routes>
      <Footer />
    </Suspense>
  </div>
  );
};

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

