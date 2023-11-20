import React from 'react';
import { Badge, Card, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ id, name, price, description, status }) => {
  return (
    <Card border="info">
      <Card.Header>
        <Stack direction="horizontal">
          <h4 className="me-auto">{name} </h4>
          <div className="vr" />
          <p className="my-auto ms-2">${price}</p>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <span className="d-block">{description}</span>
          <span className="h2 -block text-center">23:45:12:05</span>
        </Card.Text>

        <Stack direction="horizontal" gap={3} className="mt-4">
          <Badge pill bg={status === 'Completed' ? 'success' : 'warning'} size="md">
            {status}
          </Badge>
          <Button
            variant="outline-danger"
            className="ms-auto"
            size="sm"
            disabled={status === 'Completed'}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button variant="outline-warning" size="sm" disabled={status === 'Completed'}>
            <FontAwesomeIcon icon={faPencilSquare} />
          </Button>
        </Stack>
        <div className="d-grid mt-2">
          <Button variant="outline-success" size="sm" disabled={status === 'Completed'}>
            Start Timer
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
