import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col, Container } from "react-bootstrap";
import styles from "./Buy.module.css";

const Buy = () => {
  const [stock, setStock] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className={styles.buy}>
      {step === 0 && (
        <div>
          <h1>Choose a security</h1>
          <p>This is an explanation of "stocks"</p>
          <h2>Hot Stocks</h2>
          <h3>Tesla</h3>
          <div className={styles.chart}>
            <img
              src="https://media.ycharts.com/charts/897da9362a265c625d9f1e50d6a49d73.png"
              alt="Chart"
            />
          </div>

          <h3>Amazon</h3>
          <div className={styles.chart}>
            <img
              src="https://media.ycharts.com/charts/897da9362a265c625d9f1e50d6a49d73.png"
              alt="Chart"
            />
          </div>
          <h3>S&P 500</h3>
          <div className={styles.chart}>
            <img
              src="https://media.ycharts.com/charts/897da9362a265c625d9f1e50d6a49d73.png"
              alt="Chart"
            />
          </div>
          <h3>Apple</h3>
          <div className={styles.chart}>
            <img
              src="https://media.ycharts.com/charts/897da9362a265c625d9f1e50d6a49d73.png"
              alt="Chart"
            />
          </div>

          <h2>Hot ETFs</h2>
          <h3>MSCI WORLD</h3>
          <div className={styles.chart}>
            <img
              src="https://media.ycharts.com/charts/897da9362a265c625d9f1e50d6a49d73.png"
              alt="Chart"
            />
          </div>
          <h3>S&P 500</h3>
          <div className={styles.chart}>
            <img
              src="https://media.ycharts.com/charts/897da9362a265c625d9f1e50d6a49d73.png"
              alt="Chart"
            />
          </div>

          <Button variant="light">Back</Button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h1>Order Form</h1>
          <Container>
            <h2>Exchanges</h2>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Limit Type</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>

          <Button variant="light">Back</Button>
        </div>
      )}
      {step === 2 && (
        <div>
          <div>
            <h1>Portfolio</h1>
            <Button variant="light">Next</Button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <div>
            <h1>Tax Report</h1>
            <Button variant="light">Next</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buy;
