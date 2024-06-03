import { useEffect, useState, Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,  Environment } from '@react-three/drei';
import styled from 'styled-components';


const DesktopModel = lazy(() => import('./Comp'));

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
          autoRotate={true}
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom
          minDistance={3}
          maxDistance={8}
          
        />
        <Suspense fallback={null}>
        <Environment preset="sunset" />
            <DesktopModel onLoaded={() => setLoading(false)} scale={[1,1,1]} position={[0,-3,0]}/>
     
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default LoadPCGLTF;
