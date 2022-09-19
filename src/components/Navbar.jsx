import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
  return (
    <>
      <Navbar variant="light" className='nav'>
        <Container>
          <Navbar.Brand href="/" className='text-light'>BUN AL</Navbar.Brand>
          <Nav>
            <Nav.Link className='text-light' href="#">BOOK FLIGHT</Nav.Link>
            <Nav.Link className='text-light' href="#">RESERVATIONS</Nav.Link>
            <Nav.Link className='text-light' href="#">HELP</Nav.Link>
            <NavDropdown title=<FaUserAlt className='ms-3 ' size={'25'} color={'#ffffff'}/>>
              <NavDropdown.Item href='#'>Sign in</NavDropdown.Item>
              <NavDropdown.Item href='#'>Sing out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;