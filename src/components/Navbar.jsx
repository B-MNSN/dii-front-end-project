import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';
import styled from 'styled-components';



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

export default styled(BasicExample)`
  .dropdown-toggle::after {
    display: unset !important;
    margin-left: unset !important;
    vertical-align: unset !important;
    content: "";
    border-top: unset !important;
    border-right: unset !important;
    border-bottom: unset !important;
    border-left: unset !important;

  }
`