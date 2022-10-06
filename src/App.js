import React from 'react';
import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Card from './card';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Card 
       img="image 12.png"
       rating="5.0"
       reviewCount={6}
       country="USA"
       title="Life Lessons with Katie Zaferes"
       price={136}
      />
        <Card 
       img="wedding-photography 1.png"
       rating="5.0"
       reviewCount={30}
       country="USA"
       title="learn wedding photography"
       price={125}
      />
        <Card 
       img="mountain-bike 1.png"
       rating="4.8"
       reviewCount={2}
       country="USA"
       title="group Mountain hiking"
       price={50}
      />
    </div>
  );
}

export default App;
