import React from 'react';
import { Button } from 'react-bootstrap';

export const TimerActionButton = ({ id, status, runningSince, onStartTimer, onStopTimer }) => {
  if (status === 'completed') {
    return (
      <Button variant="outline-success" size="sm" disabled={status === 'completed'}>
        Start Timer
      </Button>
    );
  }
  if (runningSince) {
    return (
      <Button variant="outline-danger" size="sm" onClick={() => onStopTimer(id)}>
        Stop Timer
      </Button>
    );
  }
  return (
    <Button variant="outline-success" size="sm" onClick={() => onStartTimer(id)}>
      Start Timer
    </Button>
  );
};
