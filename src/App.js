import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import BookFlight from './pages/BookFlight';
import Navbar from './components/Navbar.jsx';
import Container from './components/Container';
import Flight from './components/Flight';
import CardSelectFlight from './components/CardsSelectFlight';
import FlightConfirm from './pages/FlightConfirm';
import Home from './pages/Home'


function App() {
  return (
    <>
      <Navbar />
      <Home />

    </>
  );
}

export default App;
