import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import TestBooking from "./components/TestBooking";
import MyBooking from "./components/MyBooking";
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <MyBooking />
      </Container>
    </>
  );
}

export default App;
