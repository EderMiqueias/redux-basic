import React from 'react';
import './App.css';

import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';


function App() {
  return (
    <div className="App">
      <h1>Exercício Redux</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
