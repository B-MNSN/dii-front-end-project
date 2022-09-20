import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './index.css';
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import ChangeFlight from './components/ChangeFlight';
// import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import Container from './components/Container';
import BookingSearch from './components/BookingSearch';

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <BookingSearch />
      </Container>
    </>
  );
}

export default App;
