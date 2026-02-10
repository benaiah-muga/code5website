import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Divisions } from './components/Divisions';
import { ValueProps } from './components/ValueProps';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen text-white selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <Divisions />
      <ValueProps />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;