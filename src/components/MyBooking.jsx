import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MyBooking = () => {
  return (
    <>
      <Card style={{ width: "75%",marginTop: "5%" }}>
        <Card.Header>
          <div class="container-head">
            <div class="row align-items-start">
              <div class="col-md-4">
                <h5 style={{ color: "gray" }}>
                  <small>Booking code: </small>
                  <strong style={{ color: "black" }}>DII642110XXX</strong>{" "}
                </h5>
              </div>
              <div class="col-md-4 offset-md-4">
                <Button variant="primary">Edit Booking</Button>{" "}
              </div>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <strong>Passenger Information</strong>{" "}
          </Card.Title>
          <Card.Text>
            <p class="mb-3" style={{ color: "black" }}>
              <strong>Mrs Elsa Frozen</strong>{" "}
            </p>
            <footer class="blockquote-footer" style={{ color: "gray" }}>
              Ticket Number : 1234566789
            </footer>
          </Card.Text>
          <Card.Title>
            <h5>
              <strong>Contact Information</strong>
            </h5>
          </Card.Title>
          <Card.Text>
            <div class="container-footer">
              <div class="row align-items-end">
                <div class="col order-first">
                  <p class="mb-3" style={{ color: "gray" }}>
                    <small>Full Name</small>{" "}
                  </p>
                  <footer class="blockquote-footer" style={{ color: "black" }}>
                    <strong>Elsa Frozen</strong>
                  </footer>
                </div>
                <div class="col">
                  <p class="mb-3" style={{ color: "gray" }}>
                    <small>E-mail Address</small>{" "}
                  </p>
                  <footer class="blockquote-footer" style={{ color: "black" }}>
                    <strong>elsa_frozen@email.com</strong>
                  </footer>
                </div>
                <div class="col order-last">
                  <p class="mb-3" style={{ color: "gray" }}>
                    <small>Phone Number</small>
                  </p>
                  <footer class="blockquote-footer" style={{ color: "black" }}>
                    <strong>+66(0)89-789-1234</strong>
                  </footer>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyBooking;
