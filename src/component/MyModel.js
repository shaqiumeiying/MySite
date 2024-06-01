import { useState, useEffect, useRef, useCallback } from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import Kid from './Compressed';

const Container = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
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
  const [initialPosition] = useState([0, 0, 10]);
  const canvasRef = useRef(null);

  const handleResize = useCallback(() => {
    if (canvasRef.current && canvasRef.current.camera) {
      canvasRef.current.camera.position.set(...initialPosition); 
      canvasRef.current.camera.updateMatrixWorld();
    }
  }, [initialPosition]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <section id="model">
      <Container>
        <InstructionText>Drag to rotate, scroll to zoom</InstructionText>
        {loading && <LoadingText>Loading 3D Model...</LoadingText>}
        <Canvas
          ref={canvasRef} 
          camera={{ position: initialPosition, fov: 30 }}>
          <Stage
            environment="sunset"
            intensity={0.7}
            scale={[1, 1, 1]}
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
          />
        </Canvas>
      </Container>
    </section>
  );
};

export default MyModel;
