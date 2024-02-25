import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { AuthProvider } from './src/components/AuthContext.js';

import DashboardComponent from './src/components/DashboardComponent.js';
import Header from './src/components/Header.js';
import Footer from './src/components/Footer.js';
import PrivacyPolicy from './src/components/Privacy.js';
import Landing from './src/Landing.js';
import LoginComponent from './src/components/LoginComponent.js';
import PrivateRoute from './src/components/PrivateRoute.js';

import './src/App.css';

const App = () => {
  return (<div className='container m-0'>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
        <Footer />
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

