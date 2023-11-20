import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProjectCard } from './components/ProjectCard';
import { NoProject } from './NoProject';

export const ProjectList = ({ projects, onSidebarShow, onDeleteProject }) => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={12}>
          <h2>Projects</h2>
        </Col>
        <Col> {projects.length === 0 && <NoProject onSidebarShow={onSidebarShow} />} </Col>
      </Row>
      <Row>
        {projects.map((project) => (
          <Col md={3} key={project.id}>
            <ProjectCard
              id={project.id}
              name={project.name}
              price={project.price}
              description={project.description}
              status={project.status}
              onDeleteProject={onDeleteProject}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
