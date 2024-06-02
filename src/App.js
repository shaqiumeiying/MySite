import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import StarsCanvas from './component/Stars';
import LoadGLTF from './component/LoadGLTF';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Project } from './component/Project';

function App() {
  return (
    <Container className="App">
      <NavBar />
      <div className="layer">
      <Banner />
      <StarsCanvas />
      </div>
      <Skills />
      <LoadGLTF />
      <Project />
      <br/><br/>
      
      <div className="layer">
      <Contact />
      <br/>
      <Footer />
      <StarsCanvas />
      </div>
    </Container>
  );
}

export default App;


