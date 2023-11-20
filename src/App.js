import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import { Badge, Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
function App() {
  const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus enim doloremque nisi similique dolorum laboriosam culpa quisquam nihil id, cupiditate quasi aliquam deserunt molestiae, quis recusandae eos veritatis? Error!";
  const projects = [
    {name: "Project 1", price: "45", description, status: "Ongoing"},
    {name: "Project 2", price: "65", description, status: "Ongoing"},
    {name: "Project 2", price: "65", description, status: "Completed"}
  ];

  return (
    <>
      <Header/>
      <Container className="mt-3">
        <Row>
          <Col md={3}>
            <Card border="info">
              <Card.Header>
                <Stack direction="horizontal">
                  <h4 className='me-auto'>Project Name </h4>
                  <div className="vr" />
                  <p className='my-auto ms-2'>$45</p>
                </Stack>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  <h2 className='text-center'>23:45:12:05</h2>
                </Card.Text>

                <Stack direction="horizontal" gap={3} className='mt-4'>
                  <Badge pill bg="info" size="md">Ongoing</Badge>
                  <Button variant="outline-danger" className='ms-auto' size="sm"><FontAwesomeIcon icon={faTrash}/></Button>
                  <Button variant="outline-warning" size="sm"><FontAwesomeIcon icon={faPencilSquare}/></Button>
                </Stack>
                <div className="d-grid mt-2">
                  <Button variant="outline-success" size="sm">Start Timer</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card border="success">
              <Card.Header>
                <Stack direction="horizontal">
                  <h4 className='me-auto'>Project Name </h4>
                  <div className="vr" />
                  <p className='my-auto ms-2'>$45</p>
                </Stack>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                  <h2 className='text-center text-muted'>23:45:12:05</h2>
                </Card.Text>

                <Stack direction="horizontal" gap={3} className='mt-4'>
                  <Badge pill bg="success" size="md">Completed</Badge>
                  <Button variant="outline-danger" className='ms-auto' size="sm" disabled><FontAwesomeIcon icon={faTrash}/></Button>
                  <Button variant="outline-warning" size="sm" disabled><FontAwesomeIcon icon={faPencilSquare}/></Button>
                </Stack>
                <div className="d-grid mt-2">
                  <Button variant="outline-dark" size="sm" disabled>Start Timer</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;