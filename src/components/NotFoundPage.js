import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
import routes from '../routers/routes';

export default function NotFoundPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 4, offset:4 }} className="text-center">
          <img style={{width: '100%'}} src="/img/error404quees.jpg" alt="error-404" />
            <h2>¿Te has perdido?</h2>
            <p>
              Vuelve al <Link to={routes.home}>inicio</Link>
            </p>
        </Col>
      </Row>
    </Container>
  )
}
