import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
    background-color: grey;
    margin: auto;
}
.navbar-brand, .navbar-nav, .nav-link{
    color: #bbb;
    
    &:hover{
        color:white;
    }
}
`

function NavigationBar(){
    return(
        <Styles>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Portfolio</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar>
        </Styles>
      

    )
  }


export default NavigationBar;