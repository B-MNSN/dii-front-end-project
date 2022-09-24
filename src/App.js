import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './index.css';
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Container from './components/Container';
// import Flight from './components/Flight';
// import CardSelectFlight from './components/CardsSelectFlight';
// import MyFlight from './components/MyFlight';
// import MyFlightDetails from './components/MyFlightDetails'
import MyBooking from './components/MyBooking';

function App() {
  return (
    <>
      <Navbar />
      <Container>
          <MyBooking/>
      </Container>
    </>
  );
}

export default App;
