import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';
import Compressed from './Compressed';
import styled from 'styled-components';

const Container = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
`;

// const LoadingText = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   font-size: 24px;
//   color: white;
// `;

const InstructionText = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 13px;
  color: #858585;
`;

const LoadGLTF = () => {

    return (
        <>
        <Container>
        <InstructionText>Drag to rotate, scroll to zoom</InstructionText>
         <Canvas>
            <ambientLight intensity={0.4} />
            <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={0.2}
            enableZoom={false}
          />
            <Suspense fallback={null}>
                <Compressed />
            </Suspense>
            <Environment preset="sunset" />
        </Canvas>
        </Container>
        
        </>
    )
}


export default LoadGLTF;