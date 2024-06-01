import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
// import MyModel from './component/MyModel'; 
import LoadGLTF from './component/LoadGLTF';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Project } from './component/Project';

function App() {
  return (
    <Container className="App">
      <NavBar />
      <Banner />
      <br/><br/>
      <Skills />
      {/* <MyModel /> */}
      <LoadGLTF />
      <br/><br/><br/>
      <Project />
      <br/><br/>
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;


