import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/toggl-logo.png';
import './Header.css';
function Header({ onAddProject, isSidebarVisible, onSidebarShow, onSidebarClose }) {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Sidebar show={isSidebarVisible} handleClose={onSidebarClose} onAddProject={onAddProject} />
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Toggl Logo" className="brand-logo" />
        </Navbar.Brand>
        <Button variant="primary" onClick={onSidebarShow}>
          <FontAwesomeIcon icon={faLeftLong} />
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
