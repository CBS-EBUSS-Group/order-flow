import React from "react";
import { Button, Form, Col, Popover, OverlayTrigger } from "react-bootstrap";
import styles from "./Buy.module.css";

const OrderForm = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Exchange</Popover.Title>
                <Popover.Content>Explanation of "Exchange"</Popover.Content>
              </Popover>
            }
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
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Additional Fees</Popover.Title>
                <Popover.Content>
                  Explanation of "Additional Fees"
                </Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Additional Fees</Form.Label>
          </OverlayTrigger>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Limit Type</Popover.Title>
                <Popover.Content>Explanation of "Limit Type"</Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Order Type</Form.Label>
          </OverlayTrigger>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Immediately</option>
            <option>Limit Order</option>
            <option>Stop-Loss</option>
            <option>Buy Stop</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Market Price</Popover.Title>
                <Popover.Content>Explanation of "Market Price"</Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Price</Form.Label>
          </OverlayTrigger>
          <Form.Control />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Amount</Popover.Title>
                <Popover.Content>Explanation of "Amount"</Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Amount</Form.Label>
          </OverlayTrigger>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Order valid until</Popover.Title>
                <Popover.Content>
                  Explanation of "Order valid until"
                </Popover.Content>
              </Popover>
            }
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
      <Button variant="light">Back</Button>
    </Form>
  );
};

export default OrderForm;
