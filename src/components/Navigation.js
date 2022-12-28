import { Navbar, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../routers/routes";

export default function Navigation() {
  
  const {logout} = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Navbar.Brand as={NavLink} to={routes.home}>PROYECTOS COOPELECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to={routes.projects}> Proyectos </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
                <Nav.Link as={NavLink} to={routes.register}>Register</Nav.Link>
                <Nav.Link to={routes.home} onClick={logout}>Cerrar Sesion</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>   
  )
}
