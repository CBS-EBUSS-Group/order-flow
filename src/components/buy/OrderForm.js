import React from "react";
import { Button, Form, Col, Popover, OverlayTrigger } from "react-bootstrap";
import styles from "./Buy.module.css";

const OrderForm = ({ item, formValues, setFormValues }) => {
  const { exchange, orderType, price, count, ultimo } = formValues;
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
                <Popover.Content>
                  Securities are traded on various stock exchanges.
                  <br />
                  <br />
                  Fees may change depending on the chosen exchange.
                </Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Exchange</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            value={exchange}
            name="exchange"
            onChange={(e) => setFormValues(e)}
          >
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
                  These costs (Stock exchange fee) are in addition to the order
                  commission.
                </Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Additional Fees</Form.Label>
          </OverlayTrigger>
          <Form.Control name="fees" value={exchange === "Xetra" ? 1.75 : 0} />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">
                  <b>Order Types</b>
                </Popover.Title>
                <Popover.Content>
                  Set a limit for your order. Depending on your strategy, you
                  can set limits to limit losses or optimize returns. <br />
                  <br />
                  <b>Market Order</b>
                  <br />
                  A market order is an order to buy or sell a security
                  immediately. This type of order guarantees that the order will
                  be executed, but does not guarantee the execution price.
                  <br />
                  <br />
                  <b>Limit Order</b>
                  <br />
                  A limit order is an order to buy or sell a security at a
                  specific price or better. A buy limit order can only be
                  executed at the limit price or lower, and a sell limit order
                  can only be executed at the limit price or higher.
                  <br />
                  <br />
                  <b>Stop-loss</b>
                  <br />
                  A stop-loss order is an order to buy or sell a stock once the
                  price of the stock reaches the specified price, known as the
                  stop price. When the stop price is reached, a stop order
                  becomes a market order.
                  <br />
                  <br />
                  <b>Stop Order</b>
                  <br />
                  A buy stop order is entered at a stop price above the current
                  market price. Investors generally use a buy stop order to
                  limit a loss or protect a profit on a stock that they have
                  sold short. A sell stop order is entered at a stop price below
                  the current market price. Investors generally use a sell stop
                  order to limit a loss or protect a profit on a stock they own.
                  <br />
                  <br />
                  <b>Fill-Or-KIll</b>
                  <br />
                  A Fill-Or-Kill order is an order to buy or sell a stock that
                  must be executed immediately in its entirety; otherwise, the
                  entire order will be cancelled (i.e., no partial execution of
                  the order is allowed).
                  <br />
                  <br />
                  <b>Immediate-Or-Cancel</b>
                  <br />
                  An Immediate-Or-Cancel (IOC) order is an order to buy or sell
                  a stock that must be executed immediately. Any portion of an
                  IOC order that cannot be filled immediately will be cancelled.
                </Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Order Type</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            name="orderType"
            value={orderType}
            onChange={(e) => setFormValues(e)}
          >
            <option>Market Order</option>
            <option>Limit Order</option>
            <option>Stop-Loss Order</option>
            <option>Stop Order</option>
            <option>Fill-Or-KIll</option>
            <option>Immediate-Or-Cancel</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Price</Popover.Title>
                <Popover.Content>
                  The price of the security on the trading place - at the time
                  of the query in real time. The price offer is not binding.
                </Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Price (EUR)</Form.Label>
          </OverlayTrigger>
          <Form.Control
            name="price"
            value={orderType !== "Market Order" ? price : item.price}
            onChange={(e) => setFormValues(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">Count</Popover.Title>
                <Popover.Content>
                  Enter the number of shares for the selected security.
                </Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Count</Form.Label>
          </OverlayTrigger>
          <Form.Control
            name="count"
            value={count}
            onChange={(e) => setFormValues(e)}
          />
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
                  An order without limit and with validity "Automatic" is valid
                  until the end of the calendar day. You can also change this
                  period.
                </Popover.Content>
              </Popover>
            }
          >
            <Form.Label>Date valid until</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            name="ultimo"
            value={ultimo}
            onChange={(e) => setFormValues(e)}
          >
            <option>Immediately</option>
            <option>End of Day</option>
            <option>End of Month</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Button variant="primary" style={{ width: "100px", marginRight: "10px" }}>
        Next
      </Button>
      <Button variant="light" style={{ width: "100px" }}>
        Back
      </Button>
    </Form>
  );
};

export default OrderForm;
