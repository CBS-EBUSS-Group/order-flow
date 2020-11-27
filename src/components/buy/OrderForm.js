import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Col,
  Popover,
  OverlayTrigger,
  Alert,
} from "react-bootstrap";
import { setVisibility } from "../chatbot/botSlice";
import { setFlag } from "../../store/flagSlice";

const OrderForm = ({
  item,
  formValues,
  setFormValues,
  setStep,
  type,
  error,
}) => {
  const dispatch = useDispatch();
  const {
    hasFirstClickedOrderButton,
    hasExplainedFillOrKill,
    hasPromptedDoubleCheck,
    hasRemindedStopLoss,
  } = useSelector((state) => state.flags);
  const [hasCompletedTaskTwo, hasCompletedTaskThree] = useSelector((state) => [
    state.tasks[1].done,
    state.tasks[2].done,
  ]);
  const { exchange, orderType, price, count, ultimo, condition } = formValues;

  useEffect(() => {
    if (
      !hasExplainedFillOrKill &&
      hasCompletedTaskTwo &&
      type === "buy" &&
      formValues.condition === "Fill-Or-Kill"
    ) {
      dispatch(
        setVisibility({ visibility: true, dialogue: "explainFillOrKill" })
      );
      dispatch(setFlag({ id: "hasExplainedFillOrKill", value: true }));
    }

    if (!hasRemindedStopLoss && hasCompletedTaskThree && type === "sell") {
      dispatch(setVisibility({ visibility: true, dialogue: "remindStopLoss" }));
      dispatch(setFlag({ id: "hasRemindedStopLoss", value: true }));
    }
  }, [
    hasCompletedTaskTwo,
    hasExplainedFillOrKill,
    dispatch,
    formValues,
    hasRemindedStopLoss,
    hasCompletedTaskThree,
    type,
  ]);

  const handleClickNext = () => {
    setStep(2);
    if (!hasFirstClickedOrderButton) {
      dispatch(
        setVisibility({ visibility: true, dialogue: "firstOrderButtonClick" })
      );
      dispatch(setFlag({ id: "hasFirstClickedOrderButton", value: true }));
      return;
    }
    if (!hasPromptedDoubleCheck && hasCompletedTaskTwo && type === "buy") {
      dispatch(
        setVisibility({ visibility: true, dialogue: "promptDoubleCheck" })
      );
      dispatch(setFlag({ id: "hasPromptedDoubleCheck", value: true }));
    }
  };

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
                  Fees, currencies and opening hours may change depending on the
                  selected exchange.
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
                  Fees include order commission and vary from exchange to
                  exchange.
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
        <Form.Group as={Col} controlId="formGridState" xs={6}>
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">
                  <b>Order Types</b>
                </Popover.Title>
                <Popover.Content>
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
                  chosen price limit. A buy limit order can only be executed at
                  the limit price or lower, and a sell limit order can only be
                  executed at the limit price or higher.
                  <br />
                  <br />
                  {type === "sell" && (
                    <Fragment>
                      <b>Stop-Loss</b>
                      <br />
                      A stop-loss order is an order to buy or sell a stock once
                      the price of the stock reaches the specified price, known
                      as the stop price. When the stop price is reached, a stop
                      order becomes a market order.
                      <br />
                      <br />
                    </Fragment>
                  )}
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
            {type === "sell" && <option>Stop-Loss Order</option>}
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
                  Contains the market price of the selected security on the
                  current exchange for a market order. Other order types allow
                  you to set your own bidding price.
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
            <Form.Label>Order valid until</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            name="ultimo"
            value={ultimo}
            onChange={(e) => setFormValues(e)}
          >
            <option>Automatic</option>
            <option>End of Day</option>
            <option>End of Month</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <OverlayTrigger
            trigger="hover"
            placement="auto"
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="h3">
                  <b>Order Condition</b>
                </Popover.Title>
                <Popover.Content>
                  Order conditions are optional and alter the way your order is
                  executed.
                  <br />
                  <br />
                  <b>Fill-Or-Kill</b>
                  <br />
                  A Fill-Or-Kill order is an order to buy or sell a stock that
                  must be executed immediately in its entirety; otherwise, the
                  order will be executed and at a later point if the selected
                  amount of shares is offered for the indicated price (i.e., no
                  partial execution of the order is allowed).
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
            <Form.Label>Order Condition</Form.Label>
          </OverlayTrigger>
          <Form.Control
            as="select"
            defaultValue="Choose..."
            name="condition"
            value={condition}
            onChange={(e) => setFormValues(e)}
          >
            <option>Standard</option>
            <option>Fill-Or-Kill</option>
            <option>Immediate-Or-Cancel</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      {error && <Alert variant="danger">{error.message}</Alert>}
      <Button
        variant="primary"
        style={{ width: "100px", marginRight: "10px" }}
        onClick={() => handleClickNext()}
        disabled={error}
      >
        Next
      </Button>
      <Button
        variant="light"
        style={{ width: "100px" }}
        onClick={() => setStep(4)}
      >
        Back
      </Button>
    </Form>
  );
};

export default OrderForm;
