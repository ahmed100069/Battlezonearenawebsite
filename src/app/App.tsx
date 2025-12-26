import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Games } from './components/Games';
import { Tournaments } from './components/Tournaments';
import { RegistrationForm } from './components/RegistrationForm';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Games />
      <Tournaments />
      <RegistrationForm />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}
