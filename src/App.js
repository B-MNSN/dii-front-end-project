import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './index.css';
import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
import Container from './components/Container';
// import Flight from './components/Flight';
// import CardSelectFlight from './components/CardsSelectFlight';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Container>
          {/* <Flight/>
          <CardSelectFlight/> */}
          <Home/>
      </Container>
    </>
  );
}

export default App;
