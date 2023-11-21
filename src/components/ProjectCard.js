import React, { useEffect, useState } from 'react';
import { Badge, Card, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { TimerActionButton } from './TimerActionButton';
import Helper from '../Helper';

export const ProjectCard = ({
  id,
  name,
  price,
  description,
  status,
  onDeleteProject,
  elapsed,
  runningSince,
  onStartTimer,
  onStopTimer,
  onEditClick,
}) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timerInterval = setInterval(() => setCounter(counter + 1), 250);
    return () => {
      clearInterval(timerInterval);
    };
  }, [counter]);
  return (
    <Card border={status === 'Completed' ? 'success' : 'warning'}>
      <Card.Header>
        <Stack direction="horizontal">
          <h4 className="me-auto">{name} </h4>
          <div className="vr" />
          <p className="my-auto ms-2">${price}</p>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <span className="d-block mb-3">{description}</span>
          <span className="h2 d-block text-center text-muted">
            {Helper.renderElapsedString(elapsed, runningSince)}
          </span>
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
            onClick={() => onDeleteProject(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button
            variant="outline-warning"
            size="sm"
            disabled={status === 'Completed'}
            onClick={() => onEditClick(id)}
          >
            <FontAwesomeIcon icon={faPencilSquare} />
          </Button>
        </Stack>
        <div className="d-grid mt-2">
          <TimerActionButton
            id={id}
            runningSince={runningSince}
            onStartTimer={onStartTimer}
            onStopTimer={onStopTimer}
            status={status}
          />
          {/* <Button variant="outline-success" size="sm" disabled={status === 'Completed'}>
            Start Timer
          </Button> */}
        </div>
      </Card.Body>
    </Card>
  );
};
