import './App.css';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Greet } from './components/Greet';

function App() {
  
  return (
    <div className="App">
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>
          Oscar goes to
        </Heading>
      </Oscar>
      <Greet name='Zomita' isLoggedIn={false}/>
    </div>
  );
}

export default App;
