import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Icecream from './Icecream';
import styled from 'styled-components';

const Container = styled.div`
  height: 500px;
  width: 100%;
`;

const MyModel = () => {
    return (
        <Container>
        <Canvas camera={{fov:75, position:[5,5,10]}}>
            <Stage environment="city" intensity={0.6}>
            <Icecream/>
            </Stage>
            <OrbitControls 
            enableZoom={false}
            autoRotate={true} 
            autoRotateSpeed={1.8}/>
        </Canvas>
        </Container>

    );
};

export default MyModel;