import React, { useState, useEffect, useRef } from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import Kid from './2kids';

const Container = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  display: ${(props) => (props.showModel ? 'block' : 'none')};
`;

const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
`;

const InstructionText = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 13px;
  color: #858585;
`;

const MyModel = () => {
  const [loading, setLoading] = useState(true);
  const [showModel, setShowModel] = useState(true); // State to control visibility
  const [initialPosition, setInitialPosition] = useState([0, 2, 13]); // Initial camera position
  const canvasRef = useRef(null); // Ref to access the Canvas component

  useEffect(() => {
    // Add event listener to listen for window resize
    const handleResize = () => {
      setShowModel(window.innerWidth > 990); // Set visibility based on window size
      if (canvasRef.current && canvasRef.current.camera) {
        canvasRef.current.camera.position.set(...initialPosition); // Set the camera position when resizing
        canvasRef.current.camera.updateMatrixWorld(); // Update camera matrix world
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Call handleResize initially

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialPosition]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <section id="projects">
      <Container showModel={showModel}>
      <InstructionText>Drag to rotate the model, scroll to zoom</InstructionText>
        {loading && <LoadingText>Loading 3D Model...</LoadingText>}
        <Canvas
          ref={canvasRef} // Assign the ref to the Canvas component
          camera={{ position: initialPosition, fov: 30 }}
        >
          <Stage
            environment="sunset"
            intensity={0.7}
            scale={[1, 1, 3]}
            position={[0, 0, 0]}
            onLoaded={() => setLoading(false)}
          >
            <Kid onLoaded={() => setLoading(false)} />
          </Stage>
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={0.2}
            enableZoom={true}
            minDistance={10}
            maxDistance={15}
          />
        </Canvas>

      </Container>
    </section>
  );
};

export default MyModel;
