import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from 'react';
import styled, { keyframes } from 'styled-components';
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import * as THREE from 'three';
import myCV from '../assets/cv.pdf';
import ochero from '../assets/img/hero_oc1.png';

const Canvas = lazy(() => import('@react-three/fiber').then(module => ({ default: module.Canvas })));
const OrbitControls = lazy(() => import('@react-three/drei').then(module => ({ default: module.OrbitControls })));
const Sphere = lazy(() => import('@react-three/drei').then(module => ({ default: module.Sphere })));
const MeshDistortMaterial = lazy(() => import('@react-three/drei').then(module => ({ default: module.MeshDistortMaterial })));

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  height: 650px;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  animation: ${fadeInUp} 1s ease forwards;
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

export const Banner = React.memo(() => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const toDisplay = useMemo(() => ["Coding", "Software Development", "3D Modelling", "UX/UI", "Video Editing", "Content Creating"], []);

  const [color, setColor] = useState(new THREE.Color('#FFB3CD'));

  const updateColor = useCallback(() => {
    const t = (Math.sin(Date.now() * 0.0008) + 1) / 2;
    const newColor = new THREE.Color().lerpColors(new THREE.Color('#FFB3CD'), new THREE.Color('#97E7E3'), t);
    setColor(newColor);
    requestAnimationFrame(updateColor);
  }, []);

  useEffect(() => {
    requestAnimationFrame(updateColor);
  }, [updateColor]);

  const tick = useCallback(() => {
    const i = loopNum % toDisplay.length;
    const fullText = toDisplay[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prevLoopNum => prevLoopNum + 1);
      setDelta(300 - Math.random() * 100);
    } else {
      setDelta(prevDelta => isDeleting ? prevDelta / 1.6 : prevDelta);
    }
  }, [isDeleting, loopNum, text, toDisplay]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

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
            <Suspense fallback={<div>Loading...</div>}>
              <Canvas camera={{ fov: 45, position: [3, 3, 3] }}>
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 32, 32]} scale={1.35}>
                  <MeshDistortMaterial color={color} attach="material" distort={.5} speed={1.3} />
                </Sphere>
              </Canvas>
            </Suspense>
            <Img src={ochero} alt="hero" loading="lazy" />
          </Right>
        </Container>
      </div>
    </section>
  );
});
