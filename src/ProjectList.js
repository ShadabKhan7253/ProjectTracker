import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProjectCard } from './components/ProjectCard';

export const ProjectList = ({ projects }) => {
  return (
    <Container className="mt-3">
      <Row>
        {projects.map((project) => (
          <Col md={3} key={project.id}>
            <ProjectCard
              id={project.id}
              name={project.name}
              price={project.price}
              description={project.description}
              status={project.status}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
