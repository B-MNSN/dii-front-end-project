import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiUserCircle } from 'react-icons/bi';

function ColorSchemesExample() {
  return (
    <>
      <Navbar variant="light" className='nav'>
        <Container>
          <Navbar.Brand href="/" className='text-light'>BUN AL</Navbar.Brand>
          <Nav className="">
            <Nav.Link className='text-light' href="#">BOOK FLIGHT</Nav.Link>
            <Nav.Link className='text-light' href="#">RESERVATIONS</Nav.Link>
            <Nav.Link className='text-light' href="#">HELP</Nav.Link>
            <BiUserCircle size={'40'} color={'#ffffff'}/>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;