import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Flight from '../components/Flight';
import CardSelectFlight from '../components/CardsSelectFlight';


function BookFlight() {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    async function getFlights() {
      const flights = await axios.get(
        `http://localhost:8000/flights${window.location.search}`
      );
      setFlights(flights.data);
    }
    getFlights();
  }, []);
  return (

    <>
      <Navbar />
      <Container>
        <Flight />
        <CardSelectFlight flights={flights} />
      </Container>
    </>
  )
}

export default BookFlight