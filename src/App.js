import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import './index.css';
// import Navbar from './components/Navbar';
import Login from './components/Login';
// import ChangeFlight from './components/ChangeFlight';
// import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import Container from './components/Container';

function App() {
  // const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {/* <Navbar /> */}
      <Container>
          <Login/>
      </Container>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Something
      </Button> */}
      
      {/* <ChangeFlight
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </>
  );
}

export default App;
