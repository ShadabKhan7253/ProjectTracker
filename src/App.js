import { useState } from 'react';
import './App.css';
import { v1 as uuidv4 } from 'uuid';
import Header from './components/Header';
import { ProjectList } from './ProjectList';

function App() {
  const [projects, setProjects] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleSidebarClose = () => setIsSidebarVisible(false);
  const handleSidebarShow = () => setIsSidebarVisible(true);

  const handleAddProject = (project) => {
    const projectToBeAdded = { ...project, id: uuidv4() };
    setProjects([...projects, projectToBeAdded]);
    setIsSidebarVisible(false);
  };

  return (
    <>
      <Header
        onAddProject={handleAddProject}
        onSidebarShow={handleSidebarShow}
        onSidebarClose={handleSidebarClose}
        isSidebarVisible={isSidebarVisible}
      />
      <ProjectList projects={projects} onSidebarShow={handleSidebarShow} />
    </>
  );
}

export default App;
