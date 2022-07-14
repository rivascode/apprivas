import Cart from "./components/Cart/Cart"
import Catalogo from "./components/Paginas/Catalogo/Catalogo"
import Contacto from "../src/components/Paginas/Contacto"
import Enviosydevoluciones from "../src/components/Paginas/Enviosydevoluciones"
import Faq from "../src/components/Paginas/Faq"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import ItemListContainer from "./components/List/ItemListContainer"
import ItemDetailContainer from "./components/Detail/ItemDetailContainer"
import Mayoristas from "../src/components/Paginas/Mayoristas"
import Terminosycondiciones from "../src/components/Paginas/Terminosycondiciones"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./components/CartProvider";
import Error from "./components/Error/Error";


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/tienda" component={ItemListContainer} />
              <Route path="/categoria/:id" >
                <ItemListContainer />
              </Route>
              <Route path="/categoria/:id" exact>
                <ItemListContainer />
              </Route>
              <Route path="/categoria/:id">
                <ItemListContainer />
              </Route>
              <Route path="/" exact>
                <ItemListContainer greeting="Bienvenidos a Galantry Man" />
              </Route>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/catalogo"><Catalogo /></Route>
              <Route path="/cart" component={Cart} />
              <Route path="/hero"><Hero /></Route>
              <Route path="/contacto"><Contacto /></Route>
              <Route path="/mayoristas"><Mayoristas /></Route>
              <Route path="/enviosydevoluciones"><Enviosydevoluciones /></Route>
              <Route path="/faq"><Faq /></Route>
              <Route path="/terminosycondiciones"><Terminosycondiciones/></Route>
              <Route path="/error" component={Error} />
              <Route path="/" component={Home} />
          </Switch>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
};
export default App;
