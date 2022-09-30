import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCardSlider from 'react-card-slider-component';


const CardSlider = () => {
  const [defaultValue, setDefaultValue] = useState <Number>(20);

  useEffect(() => {
    const url = "https://97151429-0b24-4ab6-abe1-e7b33265af62.mock.pstmn.io/recommendLocation";

    const fetchData = async() =>{
        try{
            const response = await fetch('https://97151429-0b24-4ab6-abe1-e7b33265af62.mock.pstmn.io/recommendLocation');
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log("error",error);
         }
        };
        fetchData();
    }, []);
return (
    <>
     <ReactCardSlider CardSlider={CardSlider}  />
    </>
  );
};

export default CardSlider;
