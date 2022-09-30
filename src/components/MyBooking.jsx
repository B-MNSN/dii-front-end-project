import React from "react";
import { CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import background from "../bgAirplane.jpg";
import Navbar from "../components/Navbar";
function MyBooking() {
  return (
    <>
      <Navbar />
      <Card
        style={{
          width: "75%",
          marginTop: "5%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          transition: "0.3s",
        }}
      >
        <Card.Header style={{ backgroundColor: "#02457A" }}>
          <div class="container-head">
            <div class="row align-items-start">
              <div class="col-md-4">
                <h5 style={{ color: "white" }}>
                  <small>รหัสการจอง: </small>
                  <strong style={{ color: "#97CADB" }}>
                    DII642110XXX
                  </strong>{" "}
                </h5>
              </div>
              <div class="col-md-4 offset-md-4"></div>
            </div>
          </div>
        </Card.Header>
        <Card.Body class="img-fluid">
          <Card.Title class="">
            <strong>ข้อมูลผู้โดยสาร</strong>{" "}
          </Card.Title>
          <Card.Text>
            <p class="mb-3" style={{ color: "black" }}>
              <strong>Mrs Elsa Frozen</strong>{" "}
            </p>
            <footer class="blockquote-footer" style={{ color: "#5F6F94" }}>
              Ticket Number : 1234566789
            </footer>
          </Card.Text>
          <Card.Title>
            <h5>
              <strong>ข้อมูลติดต่อ</strong>
            </h5>
          </Card.Title>
          <Card.Text>
            <div class="container-footer">
              <div class="row align-items-end">
                <div class="col order-first">
                  <p class="mb-3" style={{ color: "#5F6F94" }}>
                    <small>ชื่อ-นามสกุล</small>{" "}
                  </p>
                  <footer class="blockquote-footer" style={{ color: "black" }}>
                    <strong>Elsa Frozen</strong>
                  </footer>
                </div>
                <div class="col">
                  <p class="mb-3" style={{ color: "#5F6F94" }}>
                    <small>อีเมล</small>{" "}
                  </p>
                  <footer class="blockquote-footer" style={{ color: "black" }}>
                    <strong>elsa_frozen@email.com</strong>
                  </footer>
                </div>
                <div class="col order-last">
                  <p class="mb-3" style={{ color: "#5F6F94" }}>
                    <small>เบอร์โทรศัพท์</small>
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
}

export default MyBooking;
