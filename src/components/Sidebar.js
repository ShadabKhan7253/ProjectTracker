import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import EditableProjectForm from './EditableProjectForm';

const Sidebar = ({ show, handleClose, onAddProject }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Add Project</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <EditableProjectForm onAddProject={onAddProject} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
