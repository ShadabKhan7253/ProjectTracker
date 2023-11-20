import { useState } from 'react';
import './App.css';
import { v1 as uuidv4 } from 'uuid';
import Header from './components/Header';
import { ProjectList } from './ProjectList';

const initialProjects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'Project 1 Description',
    status: 'Ongoing',
    price: 45,
    elapsed: 46446737,
    runningSince: null,
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Project 2 Description',
    status: 'Ongoing',
    price: 55,
    elapsed: 46446737,
    runningSince: 1700488695674,
  },
];

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarClose = () => setIsSidebarVisible(false);
  const handleSidebarShow = () => setIsSidebarVisible(true);

  const handleAddProject = (project) => {
    const projectToBeAdded = { ...project, id: uuidv4() };
    setProjects([...projects, projectToBeAdded]);
    setIsSidebarVisible(false);
  };

  const handleDeleteProject = (projectId) => {
    const updateProjects = projects.filter((project) => project.id !== projectId);
    setProjects(updateProjects);
  };

  const handleStartTimer = (projectId) => {
    const updatedProjects = projects.map((project) =>
      projectId === project.id ? { ...project, runningSince: Date.now() } : project
    );
    setProjects(updatedProjects);
  };

  const handleStopTimer = (projectId) => {
    const updatedProjects = projects.map((project) => {
      if (project.id !== projectId) return project;

      return {
        ...project,
        elapsed: project.elapsed + (Date.now() - project.runningSince),
        runningSince: null,
      };
    });
    setProjects(updatedProjects);
  };

  return (
    <>
      <Header
        onAddProject={handleAddProject}
        onSidebarShow={handleSidebarShow}
        onSidebarClose={handleSidebarClose}
        isSidebarVisible={isSidebarVisible}
      />
      <ProjectList
        projects={projects}
        onSidebarShow={handleSidebarShow}
        onDeleteProject={handleDeleteProject}
        onStartTimer={handleStartTimer}
        onStopTimer={handleStopTimer}
      />
    </>
  );
}

export default App;
