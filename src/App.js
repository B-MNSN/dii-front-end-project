import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './index.css';
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Container from './components/Container';
import Flight from './components/Flight';
import CardSelectFlight from './components/CardsSelectFlight';

function App() {
  return (
    <>
      <Navbar />
      <Container>
          <Flight/>
          <CardSelectFlight/>
      </Container>
    </>
  );
}

export default App;
