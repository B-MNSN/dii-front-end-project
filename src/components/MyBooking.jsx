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
          <div className="container-head">
            <div className="row align-items-start">
              <div className="col-md-4">
                <h5 style={{ color: "white" }}>
                  <small>รหัสการจอง: </small>
                  <strong style={{ color: "#97CADB" }}>
                    DII642110XXX
                  </strong>{" "}
                </h5>
              </div>
              <div className="col-md-4 offset-md-4"></div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="img-fluid">
          <Card.Title className="">
            <strong>ข้อมูลผู้โดยสาร</strong>{" "}
          </Card.Title>
          <Card.Text>
            <p className="mb-3" style={{ color: "black" }}>
              <strong>Mrs Elsa Frozen</strong>{" "}
            </p>
            <footer className="blockquote-footer" style={{ color: "#5F6F94" }}>
              Ticket Number : 1234566789
            </footer>
          </Card.Text>
          <Card.Title>
            <h5>
              <strong>ข้อมูลติดต่อ</strong>
            </h5>
          </Card.Title>
          <Card.Text>
            <div className="container-footer">
              <div className="row align-items-end">
                <div className="col order-first">
                  <p className="mb-3" style={{ color: "#5F6F94" }}>
                    <small>ชื่อ-นามสกุล</small>{" "}
                  </p>
                  <footer className="blockquote-footer" style={{ color: "black" }}>
                    <strong>Elsa Frozen</strong>
                  </footer>
                </div>
                <div className="col">
                  <p className="mb-3" style={{ color: "#5F6F94" }}>
                    <small>อีเมล</small>{" "}
                  </p>
                  <footer className="blockquote-footer" style={{ color: "black" }}>
                    <strong>elsa_frozen@email.com</strong>
                  </footer>
                </div>
                <div className="col order-last">
                  <p className="mb-3" style={{ color: "#5F6F94" }}>
                    <small>เบอร์โทรศัพท์</small>
                  </p>
                  <footer className="blockquote-footer" style={{ color: "black" }}>
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
