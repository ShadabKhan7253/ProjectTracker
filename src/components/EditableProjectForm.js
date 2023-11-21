import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const EditableProjectForm = ({ project, onAddProject, onUpdateProject }) => {
  const projectNameRef = useRef('');
  const projectDescriptionRef = useRef('');
  const pricePerHourRef = useRef('');
  const projectStatusRef = useRef('Ongoing');

  useEffect(() => {
    projectNameRef.current.value = project?.name ?? '';
    projectDescriptionRef.current.value = project?.description ?? '';
    pricePerHourRef.current.value = project?.price ?? '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    const projectDetails = {
      name: projectNameRef.current.value,
      description: projectDescriptionRef.current.value,
      price: pricePerHourRef.current.value,
      status: projectStatusRef.current.value,
    };
    if (!project) {
      onAddProject(projectDetails);
    } else {
      onUpdateProject(project.id, projectDetails);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Project Name</Form.Label>
        <Form.Control type="text" placeholder="Enter project name" ref={projectNameRef} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Project Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter project description"
          ref={projectDescriptionRef}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price Per Hour</Form.Label>
        <Form.Control type="text" placeholder="Enter price per hour" ref={pricePerHourRef} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select Status</Form.Label>
        <Form.Select aria-label="Default select example" ref={projectStatusRef}>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        {!project ? 'Add Project' : 'Update Project'}
      </Button>
    </Form>
  );
};

export default EditableProjectForm;
