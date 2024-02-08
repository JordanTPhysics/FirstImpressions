import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'; // Import BrowserRouter
import Landing from './src/Landing.js';
import LoginComponent from './src/components/LoginComponent.js';
import DashboardComponent from './src/components/DashboardComponent.js';
import { AuthProvider } from './src/components/AuthContext.js';
import Header from './src/components/Header.js';

const App = () => {
    return (
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </AuthProvider>
    );
  };
  
  const container = document.getElementById('root');
  
  createRoot(container).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

