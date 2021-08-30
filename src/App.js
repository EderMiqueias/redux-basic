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
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media minimo={0} maximo={10} />
        <Soma minimo={0} maximo={10} />
        <Sorteio minimo={0} maximo={10} />
      </div>
    </div>
  );
}

export default App;
