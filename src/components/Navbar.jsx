import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';


function ColorSchemesExample() {
  return (
    <>
      <Navbar variant="light" className='nav shadow'>
        <Container>
          <Navbar.Brand href="/" className='text-light'><img src={logo} alt='logo' className='logoBrand'/></Navbar.Brand>
          <Nav>
            <Nav.Link className='text-light fw-bold' href="#">Book Flight</Nav.Link>
            <Nav.Link className='text-light fw-bold mx-5' href="#">My Booking</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#">Help</Nav.Link>
            <NavDropdown className='' align="end" id="basic-nav-dropdown" title=<FaUserAlt className='ms-3' size={'25'} color={'#ffffff'} />>
              <NavDropdown.Item href='#'>Signin</NavDropdown.Item>
              <NavDropdown.Item href='#'>Singout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;