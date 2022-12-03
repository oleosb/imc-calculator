import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form, Button, Row, Col, InputGroup, Container } from "react-bootstrap";
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
} from "react-icons/bs";
import { calculateImc, Level } from "./helpers/imc";

function App() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [data, setData] = useState<Level | null>();

  const calculateBtn = () => {
    if (height && weight) {
      setData(calculateImc(height, weight));
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-3">Calculadora de IMC</h1>
      <Form className="d-flex justify-content-center">
        <Col sm={2} className="py-3">
          <Row className="mb-3">
            <InputGroup>
              <Form.Control
                placeholder="Altura"
                value={height > 0 ? height : ""}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
              />
              <InputGroup.Text>cm</InputGroup.Text>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <Form.Control
                placeholder="Peso"
                value={weight > 0 ? weight : ""}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
              />
              <InputGroup.Text>kg</InputGroup.Text>
            </InputGroup>
          </Row>
          <Row className="px-3">
            <Button
              variant="primary"
              className="mt-3"
              onClick={() => calculateBtn()}
            >
              Calcular
            </Button>
          </Row>
        </Col>
      </Form>
      <Col>
        {data && (
          <div className="text-center">
            <p>
              <strong>{data.title}</strong>
            </p>
            {data.icon === "up" ? (
              <BsFillHandThumbsUpFill />
            ) : (
              <BsFillHandThumbsDownFill />
            )}
            <p>Seu IMC é de {data.userImc?.toFixed(2)} kg/m²</p>
            {data.idealWeight && <p>Seu peso normal está entre {data.idealWeight[0].toFixed(2)}kg e {data.idealWeight[1].toFixed(2)}kg</p>}
          </div>
        )}
      </Col>
    </Container>
  );
}

export default App;
