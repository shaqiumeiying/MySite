import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import Test from './component/Test';
import MyModel from './component/MyModel';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Misc } from './component/Misc';

function App() {
  return (
    <Container className="App">
      <NavBar />
      <Banner />
      <Skills />
      <MyModel />
      <Misc />
      <Test />
    </Container>
    
  );
}

export default App;


