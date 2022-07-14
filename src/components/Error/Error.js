import { Link } from "react-router-dom";

import Error404 from '../../img/Error404.png';


const Error = () => {
    return (
        <div id="error_404">
         <Link to="/home" className="error404"><img className="d-block w-100" src={Error404} alt="Error 404"/></Link>
        </div>
    )
}

export default Error;