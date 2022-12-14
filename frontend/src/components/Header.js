import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand >E-commerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav className="ml-auto">
          <LinkContainer to="/cart">
            <Nav.Link > <i className='fas fa-shopping-cart'/> cart</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link >Sign In</Nav.Link>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </header>
  )
}

export default Header