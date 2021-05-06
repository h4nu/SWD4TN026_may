import React from 'react';
import Kirjastot from './components/Kirjastot';
import PelaajaLista from './components/PelaajaLista';
import './App.css';

const pelaajat = [
  { numero: 1, nimi: "Maija Majava", laani: 0, pitaja: 5, tila: 4, kirous: 0 },
  { numero: 2, nimi: "Liisa Laaksonen", laani: 2, pitaja: 7, tila: 3, kirous: 2 }, 
  { numero: 3, nimi: "Leena Leinonen", laani: 5, pitaja: 2, tila: 3, kirous: 5 },
  { numero: 4, nimi: "Miina Mäkinen", laani: 2, pitaja: 4, tila: 6, kirous: 0 },
];

function App() {
  return (
    <div >
        <Kirjastot />
        <PelaajaLista pelit={ pelaajat } />
    </div>
  );
}

export default App;
