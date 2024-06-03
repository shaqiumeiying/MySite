/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 heartnstar.gltf 
*/

import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/heartnstar.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Torus001.geometry} material={materials['Material.002']} position={[-0.04, -0.038, -0.025]} rotation={[-0.107, -0.362, -0.294]} scale={1.416} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.008']} position={[0.266, 0.46, 0.282]} rotation={[0.104, 0, -0.18]} scale={[0.506, 0.506, 0.383]} />
      <mesh geometry={nodes.Star.geometry} material={materials.neon} position={[-0.845, 0.664, -0.314]} rotation={[1.846, 0.402, 0.433]} scale={0.246} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['6-镭射-切割玻璃花纹']} position={[-0.745, -0.692, 0.791]} scale={0.06} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials['6-镭射-切割玻璃花纹']} position={[-1.276, -0.125, -0.659]} scale={0.099} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials['6-镭射-切割玻璃花纹']} position={[1.024, 1.083, -0.015]} scale={-0.063} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.005']} position={[-0.352, -0.331, -0.247]} rotation={[-0.204, 0, 0.33]} scale={[0.506, 0.506, 0.383]} />
      <mesh geometry={nodes.Star001.geometry} material={materials.neon} position={[0.299, -0.627, -0.95]} rotation={[1.773, -0.096, -0.786]} scale={0.445} />
      <mesh geometry={nodes.Star002.geometry} material={materials.neon} position={[0.997, 0.187, 0.944]} rotation={[-2.46, 0.189, 2.412]} scale={0.245} />
    </group>
  )
}

useGLTF.preload('/heartnstar.gltf')