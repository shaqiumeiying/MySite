import { Suspense, useEffect, useState, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import styled from 'styled-components';

const DesktopModel = lazy(() => import('./Compressed-emb'));
const MobileModel = lazy(() => import('./Starsemb'));

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

const LoadGLTF = () => {
  const [loading, setLoading] = useState(true);
  const [modelPosition, setModelPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const updateModelPosition = (position) => {
    setModelPosition(position);
  };

  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <Container>
      {!isMobileDevice && <InstructionText>Drag to rotate, pinch/scroll to zoom</InstructionText>}
      {loading && <LoadingText>Loading 3D Model...</LoadingText>}
      <Canvas>
        <ambientLight intensity={0.4} />
        <PerspectiveCamera makeDefault fov={75} position={[0, 2, 13]} />
        <OrbitControls
          autoRotate={isMobileDevice}
          position={[0, 2, 13]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={isMobileDevice}
          onUpdate={(state) => updateModelPosition(state.target.toArray())}
        />
        <Suspense fallback={null}>
          {isMobileDevice ? (
            <Stage environment="park" intensity={1} scale={[1, 1, 1]} position={modelPosition} shadows={false}>
              <MobileModel onLoaded={() => setLoading(false)} />
            </Stage>
          ) : (
            <Stage environment="sunset" intensity={1} scale={[1, 1, 1]} position={modelPosition}>
              <DesktopModel onLoaded={() => setLoading(false)} />
            </Stage>
          )}
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default LoadGLTF;

