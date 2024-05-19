import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Vector.svg'; 
import './Nav.css'; 

function CustomNavbar() {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <Navbar className='my-3' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav">
            <Nav.Link className='text-dark' href="#home">Learn</Nav.Link>
            <FontAwesomeIcon icon={faCircle} className="nav-separator d-none d-lg-inline" />
            <Nav.Link className='text-dark' href="#services">How do I practice?</Nav.Link>
            <FontAwesomeIcon icon={faCircle} className="nav-separator d-none d-lg-inline" />
            <Nav.Link className='text-dark' href="#universities">Universities</Nav.Link>
            <FontAwesomeIcon icon={faCircle} className="nav-separator d-none d-lg-inline" />
            <Nav.Link className='text-dark' href="#corporative">Corporative</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            {searchVisible && (
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 search-input border-2 rounded-pill border-dark"
                aria-label="Search"
              />
            )}
            <Button variant="outline-success bg-white border-2 rounded-pill border-dark text-dark mt-2" onClick={handleSearchClick}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
          <Button className='bg-dark border-0 rounded-pill'>Join Program</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
