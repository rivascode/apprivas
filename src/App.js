
import './App.css';
import { NavBar } from './components/NavBar';


export function App() {
  const nombre = 'Persona de prueba';
  const toDos = {
    maniana: 'compras',
    tarde: 'gimnasio',
  };
  return (
    <>
      <NavBar />
      <div className="main-container">
        <div className='personal-data'>
          <p>{nombre}</p>
        </div>
        <h1>To-Do</h1>
        <hr />
        <div className='card-container'>
          <div className="card morning-card">
            <span className='header'>Mañana</span>
            <div className='main'>{toDos.maniana}</div>
          </div>
          <div className="card afternon-card">
            <span className='header'>Tarde</span>
            <div className='main'>{toDos.tarde}</div>
          </div>
        </div>
      </div>
    </>
  )

}


