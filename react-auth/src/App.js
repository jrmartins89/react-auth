import logo from './logo.svg';
import { Container, Col, Row } from "react-bootstrap";
import Register from "./Register";
import './App.css';

function App() {
  return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}></Col>
          <Register />
          <Col xs={12} sm={12} md={6} lg={6}></Col>
        </Row>
      </Container>
  );
}

export default App;
