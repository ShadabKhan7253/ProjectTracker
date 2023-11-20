import React from 'react'
import { Button, Form } from 'react-bootstrap'

const AddProject = () => {
  return (
    <Form>
        <Form.Group className="mb-3">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter project name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter project description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price Per Hour</Form.Label>
          <Form.Control
              type="text"
              placeholder="Enter price per hour"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select Status</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary">
          Add Project
        </Button>
    </Form>
  )
}

export default AddProject