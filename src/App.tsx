import './App.css';
import { RandomNumber } from './components/restriction/RandomNumbers';

function App() {
  
  return (
    <div className="App">
      <RandomNumber value={10} isPositive></RandomNumber>
    </div>
  );
}

export default App;
