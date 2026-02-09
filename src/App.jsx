import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FranchiseLocator from './components/FranchiseLocator';
import FranchiseForm from './components/FranchiseForm';
import BrandStory from './components/BrandStory';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '8px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}>
        WELCOME TO NEW SHOES
      </div>
      
      <Navbar />
      <Hero />
      <Benefits /> 
      <BrandStory />
      <FranchiseLocator />
      <FranchiseForm />
      <Footer />
    </div>
  );
}

export default App;