import React from 'react';
import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Card from './card';
import CardsData from './CardsData'

function App() {
  const cardsElement = CardsData.map(card => {
    return  <Card
    key={card.id}
    {...card}
/>
  })
  return (
    <div>
      <Navbar/>
      <Hero />
      <section className="cards-list">
        {cardsElement}
      </section>
    </div>
  );
}

export default App;
