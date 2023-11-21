import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProjectCard } from './components/ProjectCard';
import { NoProject } from './NoProject';
import { EditModal } from './components/EditModal';

export const ProjectList = ({
  projects,
  onSidebarShow,
  onDeleteProject,
  onStartTimer,
  onStopTimer,
  onUpdateProject,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [projectToBeUpdated, setProjectToBeUpdated] = useState(null);

  const handleModalClose = () => setIsModalVisible(false);

  const handleEditProject = (id) => {
    setIsModalVisible(true);
    projects.forEach((project) => {
      if (project.id === id) {
        setProjectToBeUpdated(project);
      }
    });
  };

  const handleUpdateProject = (id, projectDetails) => {
    onUpdateProject(id, projectDetails);
    setIsModalVisible(false);
  };
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
              onStartTimer={onStartTimer}
              onStopTimer={onStopTimer}
              elapsed={project.elapsed}
              runningSince={project.runningSince}
              onEditClick={handleEditProject}
            />
          </Col>
        ))}
      </Row>
      <EditModal
        project={projectToBeUpdated}
        onModalClose={handleModalClose}
        isModalVisible={isModalVisible}
        onUpdateProject={handleUpdateProject}
      />
    </Container>
  );
};
