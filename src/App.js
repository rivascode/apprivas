import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Indurepuestos, tu tienda de respuestos industriales" />
    </>
  );
}

export default App;
