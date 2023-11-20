import './App.css';

import Header from './components/Header';

import { ProjectList } from './ProjectList';
function App() {
  const description =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus enim doloremque nisi similique dolorum laboriosam culpa quisquam nihil id, cupiditate quasi aliquam deserunt molestiae, quis recusandae eos veritatis? Error!';
  const projects = [
    { id: 1, name: 'Project 1', price: '45', description, status: 'Ongoing' },
    { id: 2, name: 'Project 2', price: '65', description, status: 'Ongoing' },
    { id: 3, name: 'Project 2', price: '65', description, status: 'Completed' },
  ];

  return (
    <>
      <Header />
      <ProjectList projects={projects} />
    </>
  );
}

export default App;
