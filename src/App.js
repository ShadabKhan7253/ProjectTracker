import { useEffect, useState } from 'react';
import './App.css';
import { v1 as uuidv4 } from 'uuid';
import Header from './components/Header';
import { ProjectList } from './ProjectList';

// const initialProjects = [
//   {
//     id: 1,
//     name: 'Project 1',
//     description: 'Project 1 Description',
//     status: 'Ongoing',
//     price: 45,
//     elapsed: 46446737,
//     runningSince: null,
//   },
//   {
//     id: 2,
//     name: 'Project 2',
//     description: 'Project 2 Description',
//     status: 'Ongoing',
//     price: 55,
//     elapsed: 46446737,
//     runningSince: 1700488695674,
//   },
// ];

function App() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || []);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const handleSidebarClose = () => setIsSidebarVisible(false);
  const handleSidebarShow = () => setIsSidebarVisible(true);

  const handleAddProject = (project) => {
    const projectToBeAdded = { ...project, id: uuidv4(), elapsed: 0, runningSince: null };
    setProjects([...projects, projectToBeAdded]);
    setIsSidebarVisible(false);
  };

  const handleUpdateProject = (projectId, updatedProject) => {
    // console.log(updatedProject.status);
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId && updatedProject.status !== 'completed') {
        return {
          ...updatedProject,
          elapsed: project.elapsed,
          runningSince: project.runningSince,
          id: projectId,
        };
      }
      if (project.id === projectId && updatedProject.status === 'completed') {
        return {
          ...updatedProject,
          elapsed: project.elapsed + (Date.now() - project.runningSince),
          runningSince: null,
          id: projectId,
        };
      }
      return project;
    });
    setProjects(updatedProjects);
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
        onUpdateProject={handleUpdateProject}
      />
    </>
  );
}

export default App;
