import 'react-bootstrap-icons';
import { Nav } from "react-bootstrap"
import {Link} from "react-router-dom"

const UserIcon = () =>{
    return (
        <Nav.Link as={Link} to="/Usuario" className="UserIcon"><i class="bi bi-person-fill"></i></Nav.Link>
        
    )
}

export default UserIcon