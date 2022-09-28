import React from 'react'
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Flight from '../components/Flight';
import CardSelectFlight from '../components/CardsSelectFlight';


function BookFlight() {
  return (
    <>
      <Navbar />
      <Container>
        <Flight />
        <CardSelectFlight />
      </Container>
    </>
  )
}

export default BookFlight