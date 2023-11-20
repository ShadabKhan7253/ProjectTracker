import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/toggl-logo.png';
import './Header.css';
function Header() {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      
  return (
    <Navbar expand="lg" sticky='top' 
        className="bg-body-tertiary" 
        bg="dark" 
        data-bs-theme="dark">

        <Sidebar show={show} handleClose={handleClose}/>
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} alt="Toggl Logo" className='brand-logo' />
            </Navbar.Brand>
            <Button variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faLeftLong} />
            </Button>
        </Container>

    </Navbar>
  )
}

export default Header