import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import './App.css';

import Navbar from './components/Layout/Navbar';
import AuthProvider from './components/AuthProvider';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <>
      <AuthProvider>
        <ScrollRestoration />

        <div className="h-24"></div>

        <Navbar />

        <Outlet />

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
