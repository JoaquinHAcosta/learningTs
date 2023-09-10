import './App.css';
import { CustomButtom } from './components/html/Button';

function App() {
  
  return (
    <div className="App">
      <CustomButtom variant='primary' onClick={() => console.log('Click')
      }>
        Primary Buttom
      </CustomButtom>
    </div>
  );
}

export default App;
