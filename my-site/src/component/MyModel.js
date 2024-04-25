import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Donut from './Donut';
import Icecream from './Icecream';
import Kid from './Kid';
import styled from 'styled-components';

const Container = styled.div`
  height: 500px;
  width: 100%;
`;

const MyModel = () => {
    return (
        <section id="projects">
        <Container>
        <Canvas camera={{position: [0,10,5], fov: 20}}>
            <Stage environment="city" intensity={0.8} scale={[1, 1, 1]} position={[0, 0, 0]} >
            <Kid/>
            </Stage>
            <OrbitControls 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={0.7}
            enableZoom={false}
            />
        </Canvas>
        </Container>
        </section>

    );
};

export default MyModel;