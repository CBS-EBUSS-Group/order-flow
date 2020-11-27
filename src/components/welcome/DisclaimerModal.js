import React from "react";
import { Modal, Button } from "react-bootstrap";

const DisclaimerModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ⚠️ Warning: This application is a prototype
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ marginBottom: "30px" }}>Disclaimer</h4>
        <p>
          Please be aware that this application does not reflect real market
          conditions. Correctness of information is not warranted for. The
          application is solely used for user testing purposes. Always trade
          responsibly and ask your financial advisor, when in doubt. Thank you
          for participating.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DisclaimerModal;
