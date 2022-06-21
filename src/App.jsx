import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { FooterApp } from './components/FooterApp/FooterApp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <ItemListContainer greeting="Hola Bienvenido!"/>
      <FooterApp/>
    </div>
  );
}

export default App;