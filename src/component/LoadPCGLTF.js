import { useEffect, useState, Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import styled from 'styled-components';

const DesktopModel = lazy(() => import('./Compressed-emb'));

const Container = styled.div`
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
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 13px;
  color: #858585;
  z-index: 1;
`;

const LoadPCGLTF = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container style={{ height: 500 }}>
      <InstructionText>Drag to rotate, pinch/scroll to zoom</InstructionText>
      {loading && <LoadingText>Loading 3D Model...</LoadingText>}
      <Canvas style={{ height: 500 }}>
        <ambientLight intensity={0.4} />
        <OrbitControls
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom
          enableRotate
          enableDamping
        />
        <Suspense fallback={null}>
          <Stage environment="sunset" intensity={1} scale={[1, 1, 1]} position={[0, 0, 0]}>
            <DesktopModel onLoaded={() => setLoading(false)} />
          </Stage>
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default LoadPCGLTF;
