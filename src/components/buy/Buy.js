import React, { useState } from "react";
import {
  Button,
  Form,
  Col,
  Container,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import styles from "./Buy.module.css";

const Buy = ({ state } = window.location) => {
  console.log(state);

  const [stock, setStock] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [step, setStep] = useState(1);
  const popover1 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Exchange</Popover.Title>
      <Popover.Content>Explanation of "Exchange"</Popover.Content>
    </Popover>
  );
  const popover2 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Amount</Popover.Title>
      <Popover.Content>Explanation of "Amount"</Popover.Content>
    </Popover>
  );
  const popover3 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Market Price</Popover.Title>
      <Popover.Content>Explanation of "Market Price"</Popover.Content>
    </Popover>
  );
  const popover4 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Additional Fees</Popover.Title>
      <Popover.Content>Explanation of "Additional Fees"</Popover.Content>
    </Popover>
  );
  const popover5 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Limit Type</Popover.Title>
      <Popover.Content>Explanation of "Limit Type"</Popover.Content>
    </Popover>
  );
  const popover6 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Order valid until</Popover.Title>
      <Popover.Content>Explanation of "Order valid until"</Popover.Content>
    </Popover>
  );

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
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <OverlayTrigger
                    trigger="hover"
                    placement="auto"
                    overlay={popover1}
                  >
                    <Form.Label>Exchange</Form.Label>
                  </OverlayTrigger>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Direct</option>
                    <option>Xetra</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <OverlayTrigger
                    trigger="hover"
                    placement="auto"
                    overlay={popover2}
                  >
                    <Form.Label>Amount</Form.Label>
                  </OverlayTrigger>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <OverlayTrigger
                    trigger="hover"
                    placement="auto"
                    overlay={popover3}
                  >
                    <Form.Label>Market Price</Form.Label>
                  </OverlayTrigger>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <OverlayTrigger
                    trigger="hover"
                    placement="auto"
                    overlay={popover4}
                  >
                    <Form.Label>Additional Fees</Form.Label>
                  </OverlayTrigger>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <OverlayTrigger
                    trigger="hover"
                    placement="auto"
                    overlay={popover5}
                  >
                    <Form.Label>Limit Type</Form.Label>
                  </OverlayTrigger>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Immediately</option>
                    <option>Limit Order</option>
                    <option>Stop-Loss</option>
                    <option>Buy Stop</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <OverlayTrigger
                    trigger="hover"
                    placement="auto"
                    overlay={popover6}
                  >
                    <Form.Label>Date valid until</Form.Label>
                  </OverlayTrigger>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Automatic</option>
                    <option>Immediately</option>
                    <option>End of Day</option>
                    <option>End of Month</option>
                    <option>Maximum</option>
                  </Form.Control>
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
            <h1>Overview</h1>
            <p>overview über stj </p>
            <Button variant="light">Confirm & Buy</Button>
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
