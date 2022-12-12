import { Link } from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap"
import AuthContext from "../context/AuthContext";

function  Menu() {
    return (
        <AuthContext.Consumer>
            {
                context =>
                <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between px-5">
                    <Nav variant="tabs">
                        <Nav.Link as = {Link} to="/">Inicio</Nav.Link>
                        {
                            !context.userLogin &&
                            <>
                                <Nav.Link as = {Link} to="/alta">Registro</Nav.Link>
                                <Nav.Link as  ={Link} to="/ingresar">Login</Nav.Link>
                            </>
                        }
                        {
                            context.userLogin &&
                            <>
                                <Nav.Link as = {Link} to="/producto/alta">Agregar producto</Nav.Link>
                                <Nav.Link as = {Link} onClick={context.logoutUser}>Salir</Nav.Link>
                            </>
                        }
                    </Nav>
                    {
                        context.userLogin &&
                        <div> <font color="white"> Hola {context.userInfo.nombre}</font></div>
                    }
                </Navbar>
            }
        </AuthContext.Consumer> 
     );
}

export default  Menu;