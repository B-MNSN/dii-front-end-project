import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Flight from '../components/Flight';
import CardSelectFlight from '../components/CardsSelectFlight';

import { fetchFlights } from '../reducers/actions';
import { useSelector, useDispatch } from 'react-redux';



function BookFlight() {

  let userStat = JSON.parse(localStorage.getItem('status'));
  // const [flights, setFlights] = useState([]);
  const [temp, setTemp] = useState(window.location.search);

  const flights = useSelector((state) => state.flights);
  const dispatch = useDispatch();
  

  useEffect(() => {
    async function getFlights() {
      const flights = await axios.get(
        `http://localhost:8000/flights${temp}`
      );
      // setFlights(flights.data);
      dispatch(fetchFlights(flights.data));
    }
    getFlights();
  }, [temp]);

  // console.log(temp);

  // console.log(flights)
  if (userStat?.username) {
    return (
      <>
        <Navbar />
        {flights.length > 0 ? (
          <Container>
          <Flight setTemp={setTemp} flights={flights[0]}/>
          <CardSelectFlight flights={flights} />
        </Container>
        ) : (
          <div>Loading Flighgts...</div>
        )}
      </>
    )
  } else {
    window.location.href = '/'
  }

}

export default BookFlight