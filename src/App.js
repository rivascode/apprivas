import './App.css';
import { CounterApp } from './Components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <CounterApp value={0} stock={10}/>      
    </div>
  );
}

export default App;
