import axios from "axios";
import React, { useState, useEffect } from "react";

function CardSlider() {


  const fetchData = () => {
    axios
      .get(
        "https://97151429-0b24-4ab6-abe1-e7b33265af62.mock.pstmn.io/recommendLocation"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <></>;
}

export default CardSlider;
