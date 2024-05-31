import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Cube from "./Cube";

const Container = styled.div`
  height: 500px;
  width: 100%;
`;

const Test = () => {
    return (
        <Container>
            <Canvas camera={{fov:45, position:[3,3,3]}}>
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={2}/>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube/>
            </Canvas>
        </Container>
    );
};

export default Test;

