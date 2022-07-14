import 'react-bootstrap-icons'
import { useContext } from "react"
import contexto from "../../Context/contexto"
import {Link} from "react-router-dom"

const CartWidget = () =>{

    const { carrito } = useContext(contexto);

    return (
         <Link to="/Cart" className="CartWidget"><i class="bi bi-bag-fill"></i>
        {carrito.length ? carrito.length : null}
        </Link>
    )
}

export default CartWidget