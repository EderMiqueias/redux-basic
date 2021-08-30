import './App.css';
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      <h1>Exercício Redux</h1>
      <div className="linha">
        <Card title="Card 1" green>
          AAAAAAAAA
        </Card>
        <Card title="Card 2" purple>
          BBBBBBBBBB
        </Card>
      </div>
      <div className="linha">
        <Card title="Card 3" red>
          CCCCCCCCCC
        </Card>
        <Card title="Card 4" blue>
          DDDDDDDDDD
        </Card>
      </div>
    </div>
  );
}

export default App;
