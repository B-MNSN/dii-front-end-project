import React from "react";
import BookingSearch from "../components/BookingSearch";
import { Container, Row, Card } from "react-bootstrap";
import Navbar from "../components/Navbar";

function Home() {
  const mainPic = require("../Elements/airplane-bg.jpg");
  const TripDoiSuThep = require("../Elements/DoiSuThep.jpg");
  const TripBorLuang = require("../Elements/BorLuang.jpg");
  const TripYaowarat = require("../Elements/Taowarat.jpg");
  const Trip100Jula = require("../Elements/100Jula.jpg");


  return (
    <>
      <Navbar />
      <Container fluid="lg">
        <Row className="mt-3 mx-0 H-searchBoxContainer position-relative">
          <div className="H-searchBox d-flex justify-content-center position-absolute">
            <BookingSearch />
          </div>
          <img
            src={mainPic}
            className="H-mainPic rounded p-0 shadow"
            alt="..."
          />
        </Row>
        <Row className="justify-content-center ml-auto">
          <Card style={{ width: "18rem" }} className="rounded p-0 m-3">
            <Card.Img variant="top" src={mainPic} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="rounded p-0 m-3">
            <Card.Img variant="top" src={TripDoiSuThep} />
            <Card.Body>
              <Card.Title>ดอยสุเทพ</Card.Title>
              <Card.Text>CNX,THAILAND</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="rounded p-0 m-3">
            <Card.Img variant="top" src={TripBorLuang} />
            <Card.Body>
              <Card.Title>สวนป่าดอยบ่อหลวง</Card.Title>
              <Card.Text>CNX,THAILAND</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="rounded p-0 m-3">
            <Card.Img variant="top" src={Trip100Jula} />
            <Card.Body>
              <Card.Title>อุทยาน 100 ปี จุฬาฯ</Card.Title>
              <Card.Text>BKK,THAILAND</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="rounded p-0 m-3">
            <Card.Img variant="top" src={TripYaowarat} />
            <Card.Body>
              <Card.Title>เยาวราช</Card.Title>
              <Card.Text>BKK,THAILAND</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default Home;
