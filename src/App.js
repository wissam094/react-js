
import './App.css';
import Header from './component/header.js' 


import { Button, Form, Col,Navbar,Nav,FormControl } from 'react-bootstrap';
function App() {

  return (
    <div className="App">
    
    <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
    </div>
    <br></br>
    <div>
   <Form.Group>
  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Large Text
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Large text" />
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column lg={2}>
      Normal Text
    </Form.Label>
    <Col>
      <Form.Control type="text" placeholder="Normal text" />
    </Col>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column="sm" lg={2}>
      Small Text
    </Form.Label>
    <Col>
      <Form.Control size="sm" type="text" placeholder="Small text" />
    </Col>
  </Form.Row>
</Form.Group>
    </div>
    <div></div>
    </div>
  );
}

export default App;
