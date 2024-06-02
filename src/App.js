import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import { Project } from './component/Project';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';
import StarsCanvas from './component/StarCanvas';
import StarsCanvasM from './component/StarCanvas mobile';
import LoadGLTF from './component/LoadGLTF';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';


function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkMobileDevice = () => {
      setIsMobileDevice(/Mobi|Android/i.test(navigator.userAgent));
    };

    checkMobileDevice();
    window.addEventListener('resize', checkMobileDevice);
    return () => window.removeEventListener('resize', checkMobileDevice);
  }, []);

  return (
    <Container className="App">
      <NavBar />
      <div className="layer">
        <Banner />
        <StarsCanvas />
      </div>
      <Skills />
      {isMobileDevice ? (
        <div className="layer">
          <LoadGLTF />
          <StarsCanvasM />
        </div>
      ) : (<LoadGLTF />)}
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



