import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import myCV from '../assets/cv.pdf';
import ochero from '../assets/img/hero oc.png'

const Container = styled.div`
  height: 650px;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 990px) {
    align-items: center;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 66%;
  height: auto;
  margin-left: 50px;
  object-fit: contain;
  position: absolute;
  bottom: 20%;
  left: 33%;
  margin-top: 0px;
  z-index: 1;
  animation: updown 9s ease infinite;

  @media only screen and (max-width: 990px) {
    width: 300px;
    height: 300px;
  }

  @keyframes updown {
    0% {
      transform: translateY(-15px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(-15px);
    }
  }

`;


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Adjust deleting speed
    const toDisplay = [ "Coding", "Software Development", "3D Modelling", "UX/UI",  "Video Editing","Content Creating"];
    const period = 2000;
    const wordDelay = 1000; // Adjust the duration of the pause before each word starts typing

    // Set color transition
    const [color, setColor] = useState(new THREE.Color('#FFB3CD'));

    useEffect(() => {
      const updateColor = () => {
        const t = (Math.sin(Date.now() * 0.0008) + 1) / 2; 
        const newColor = new THREE.Color().lerpColors(new THREE.Color('#FFB3CD'), new THREE.Color('#97E7E3'), t);
        setColor(newColor);

        requestAnimationFrame(updateColor);
      };

      requestAnimationFrame(updateColor);
    }, []);
   
    useEffect(() => {

      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text, delta, isDeleting, index, loopNum])
  
    const tick = () => {
      let i = loopNum % toDisplay.length;
      let fullText = toDisplay[i];

      // Check if all characters have been typed or deleted
      if (text === fullText && isDeleting === false) {
          // Pause before typing the next word
          setTimeout(() => {
              setIsDeleting(true);
              setDelta(period);
          }, wordDelay);
      }

      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
          setDelta(prevDelta => prevDelta / 1.6);
      }

      if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
      } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(300 - Math.random() * 100);
      } else {
          setIndex(prevIndex => prevIndex + 1);
      }
  };

  const handleButtonClick = () => {
    window.open(myCV, '_blank');
  };

  return (
      <section className="banner" id="home">
        <div className="banner-content">
          <Container>
              <Left>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`I Love `}<span className="wrap">{text}</span></h1>
                <br />
                <p>Hey😊 I'm Diana, an undergraduate student excitedly gearing up for the next chapter in my academic and professional adventure!</p> 
                <p>With a solid background in Computer Science, I'm passionate about all things and am ready to explore the unknown.</p> 
                <p>Scroll down to join my world of experiences, achievements, and dreams!</p>
                <br />
                <button onClick={handleButtonClick}>My Resume<ArrowRightCircleFill size={25} /></button>
              </Left>
              <Right>
              <Canvas camera={{fov:45, position:[3,3,3]}}>
                    <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2}/>
                    <ambientLight intensity={1} />
                    <directionalLight position={[3,2,1]} />
                    <Sphere args={[1, 100, 200]} scale={1.35}>
                    <MeshDistortMaterial color={color} attach="material" distort={.5} speed={1.3}/>
                    </Sphere>
              </Canvas>
              <Img src={ochero} alt="hero"/> 
              </Right>
          </Container>
        </div>
      </section>
  );
};
