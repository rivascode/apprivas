import { useState } from "react";
import { Provider } from "../Context/contexto"


const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0); 
    const [compradorData, setCompradorData] = useState({
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      calle: '',
      altura: '',
      piso: '',
      dpto: '',
      localidad: '',
      cp: '',
      provincia: '',
      message: ''
  });
  const [idCompra, setIdCompra] = useState();
    
  const yaExiste = (id) => carrito.some((item) => item.id === id);
    
    const addItem = (item, cantidad) => {
        if (yaExiste(item.id)) {
          const newProductos = carrito.map((carritoE) => {
            if (carritoE.id === item.id) {
              return { ...carritoE, cantidad: carritoE.cantidad + cantidad };
            } else return carritoE;
          });
          setCarrito(newProductos);
        } else {
          setCarrito((prev) => [...prev, { ...item, cantidad }]);
        }
      };

    const removeItem = (id) => {
        const newProductos = carrito.filter((item) => item.id !== item.id.id);
        setCarrito(newProductos);
    };
    
    const clear = () => {
        setCarrito([])
    }
    
    const calcularTotal = () =>{  
      const total = Object.values(carrito).reduce( (suma, {cantidad, Price}) => suma + cantidad * Price, 0);
      setPrecioTotal(total);       
  }

    
    return (
        <Provider value={{ carrito, setCarrito, addItem, removeItem, clear, precioTotal, setPrecioTotal, calcularTotal, compradorData, setCompradorData, idCompra, setIdCompra }}>
            {children}
        </Provider>
    )
    }
export default CartProvider
