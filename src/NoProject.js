import React from 'react';
import { Button } from 'react-bootstrap';

export const NoProject = ({ onSidebarShow }) => {
  return (
    <div>
      <p>No Project Found Yet! Please Create One</p>
      <Button onClick={onSidebarShow}>Create First Project</Button>
    </div>
  );
};
