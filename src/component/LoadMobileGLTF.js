import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';
import styled from 'styled-components';

const MobileModel = lazy(() => import('./Heartnstar'));

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const LoadMobileGLTF = () => {

  return (
    <Container style={{ height: 300 }}>
      <Canvas style={{ height: 300 }}>
        <ambientLight intensity={0.4} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.2}
          enableZoom={false}
          enableRotate={false}
          enableDamping={false}
        />
        <Suspense fallback={null}>
            <Environment preset="apartment" />
        <MobileModel scale={[1.7, 1.7, 1.7]}/>

        </Suspense>
      </Canvas>
    </Container>
  );
};

export default LoadMobileGLTF;

