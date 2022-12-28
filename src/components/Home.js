import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../routers/routes";


export default function Home() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-4">
          <h2>BIENVENID@</h2>
          <p>¡Aqui podrás gestionar tus proyectos!</p>
          <p>
            Realiza tus tareas, Agrega, Elimina o Actualiza
          </p>
          <div>
            <Link to={routes.login}>Ingresa</Link> <> o </>
            <Button as={Link} to={routes.register} className="ml-1">
              Crea una cuenta
              </Button>
          </div>
          <img
            className="img-fluid mt-5" 
            src="/img/homelogo.jpeg"
            alt="home-project"
          />
        </Col>
        <Col>
          <img
            className="img-fluid" 
            src="/img/task-manager.svg"
            alt="gestor-projects"
          />
        </Col>
      </Row>
    </Container>
  )
}
