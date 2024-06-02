import { Suspense, useEffect, useState, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import styled from 'styled-components';

const Compressedemb = lazy(() => import('./Compressed-emb'));

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
  position: absolute;
  top: 10px;  // Adjust as needed
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 13px;
  color: #858585;
  z-index: 1;
`;

const PaddingContainer = styled.div`
  height: 60px;
  width: 100%;
`;

const LoadGLTF = () => {
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modelPosition, setModelPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  const handleScroll = () => {
  };


  const updateModelPosition = (position) => {
    setModelPosition(position);
  };

  if (windowWidth < 990) {
    return <PaddingContainer />;
  }

  return (
    <Container onScroll={handleScroll}>
      <InstructionText>Drag to rotate, scroll to zoom</InstructionText>
      {loading && <LoadingText>Loading 3D Model...</LoadingText>}
      <Canvas>
        <ambientLight intensity={0.4} />
        <PerspectiveCamera makeDefault fov={75} position={[0, 2, 13]} />
        <OrbitControls
          position={[0, 2, 13]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={true}

          onUpdate={(state) => updateModelPosition(state.target.toArray())}
        />
        <Suspense fallback={null}>
          <Stage
            environment="sunset"
            intensity={0.7}
            scale={[1, 1, 1]}
            position={modelPosition}
          >
            <Compressedemb onLoaded={() => setLoading(false)} />
          </Stage>
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default LoadGLTF;
