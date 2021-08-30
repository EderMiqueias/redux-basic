import React, {useState} from 'react';
import './App.css';

import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';


function App() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  return (
    <div className="App">
      <h1>Exercício Redux</h1>
      <div className="linha">
        <Intervalo
          minimo={min}
          maximo={max}
          onMinChanged={(value) => setMin(value)}
          onMaxChanged={(value) => setMax(value)}
        />
      </div>
      <div className="linha">
        <Media minimo={min} maximo={max} />
        <Soma minimo={min} maximo={max} />
        <Sorteio minimo={min} maximo={max} />
      </div>
    </div>
  );
}

export default App;
