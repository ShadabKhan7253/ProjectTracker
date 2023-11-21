import React from 'react';
import { Modal } from 'react-bootstrap';
import EditableProjectForm from './EditableProjectForm';

export const EditModal = ({ project, onModalClose, isModalVisible, onUpdateProject }) => {
  return (
    <>
      <Modal show={isModalVisible} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Project </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditableProjectForm project={project} onUpdateProject={onUpdateProject} />
        </Modal.Body>
      </Modal>
    </>
  );
};
