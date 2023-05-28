import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';



function BasicExample({ className }) {
  function out() {
    localStorage.clear();
    window.location.href = '/';
  }
  return (
    <Navbar expand="lg" className='nav shadow'>
      <Container>
        <Navbar.Brand href="/home" className='text-light'><img src={logo} alt='logo' width={70} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-light fw-bold' href="/home">Home</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="/MyBooking">My Booking</Nav.Link>
            <Nav.Link className='text-light fw-bold' href="#">Help</Nav.Link>
            <NavDropdown className={ className } align="end" title=<FaUserCircle size={'25'} color={'#ffffff'} />>
              <NavDropdown.Item onClick={out} href='#'>Singout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;