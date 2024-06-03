import { Suspense, lazy, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

const MobileModel = lazy(() => import('./Heartnstar'));

const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: auto; /* Enable scrolling within the container */
`;

const LoadMobileGLTF = () => {
  const controlsRef = useRef();

  return (
    <Container style={{ height: 300 }}>
      <Canvas
        style={{ height: 300 }}
      >
        <ambientLight intensity={0.4} />
        <OrbitControls
          ref={controlsRef}
          autoRotate
          autoRotateSpeed={1.2}
          enableZoom={false}
          enableRotate={true}
          enableDamping={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Environment preset="dawn" />
        <Suspense fallback={null}>
          <MobileModel scale={[1.7, 1.7, 1.7]} />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default LoadMobileGLTF;

