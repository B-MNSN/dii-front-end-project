import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Flight from '../components/Flight';
import CardSelectFlight from '../components/CardsSelectFlight';


function BookFlight() {
  const [flights, setFlights] = useState([]);
  const [temp, setTemp] = useState(window.location.search);

  useEffect(() => {
    async function getFlights() {
      const flights = await axios.get(
        `http://localhost:8000/flights${temp}`
      );
      setFlights(flights.data);
    }
    getFlights();
  }, [temp]);
  return (

    <>
      <Navbar />
      <Container>
        <Flight setTemp={setTemp} />
        <CardSelectFlight flights={flights} />
      </Container>
    </>
  )
}

export default BookFlight