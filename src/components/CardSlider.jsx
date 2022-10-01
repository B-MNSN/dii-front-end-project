import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function CardSlider() {

  const [data, setData] = useState()
  async function fetchData() {
    await axios
      .get(
        "https://97151429-0b24-4ab6-abe1-e7b33265af62.mock.pstmn.io/recommendLocation"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {data && data.length && (
        <>
          {data.map((item, index) => {
            return (
              <>
                <Card
                  style={{ width: "18rem"}}
                  className="rounded p-0 m-8"
                  key={index}
                >
                  {/* <Card.Img variant="top" src={mainPic} /> */}
                  <Card.Body>
                    <Card.Title>{item.id}</Card.Title>
                    <Card.Text>{item.country}</Card.Text>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </>
      )}
    </>
  );
}

export default CardSlider;
