/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 compressed.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/compressed.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.link.geometry} material={materials['neck ring']} position={[-1.158, 2.621, 0.315]} scale={0.455} />
      <group position={[-1.1, 3.121, 0.004]} rotation={[0.246, 0, 0]} scale={0.135}>
        <mesh geometry={nodes.Torus001.geometry} material={materials['neck ring']} />
        <mesh geometry={nodes.Torus001_1.geometry} material={materials['neon - BLUE']} />
      </group>
      <group position={[-1.142, 5.124, -0.626]} rotation={[-1.239, -0.043, -0.031]} scale={-0.432}>
        <mesh geometry={nodes.Torus004.geometry} material={materials['3-镭射-渐变镭射条']} />
        <mesh geometry={nodes.Torus004_1.geometry} material={materials['laser- advanced']} />
      </group>
      <group position={[-2.211, 4.92, -0.171]} rotation={[1.902, 0.041, -0.9]} scale={0.432}>
        <mesh geometry={nodes.Torus008.geometry} material={materials['3-镭射-渐变镭射条']} />
        <mesh geometry={nodes.Torus008_1.geometry} material={materials['laser- advanced']} />
      </group>
      <mesh geometry={nodes.strap001.geometry} material={materials['body skin']} position={[-1.158, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1} />
      <group position={[-1.158, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1}>
        <mesh geometry={nodes.Cube011.geometry} material={materials['3-镭射-渐变镭射条']} />
        <mesh geometry={nodes.Cube011_1.geometry} material={materials['laser- advanced']} />
      </group>
      <mesh geometry={nodes.strap008.geometry} material={materials['neck ring']} position={[-1.158, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1} />
      <mesh geometry={nodes.strap009.geometry} material={materials['neck ring']} position={[-1.158, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1} />
      <mesh geometry={nodes.strap010.geometry} material={materials.suit} position={[-1.158, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1} />
      <group position={[-1.158, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1}>
        <mesh geometry={nodes.Cube002.geometry} material={materials.belt} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['laser- advanced.001']} />
      </group>
      <group position={[-1.158, 0, 0]} rotation={[Math.PI, 0, 0]} scale={-1}>
        <mesh geometry={nodes.Cube033.geometry} material={materials.neon} />
        <mesh geometry={nodes.Cube033_1.geometry} material={materials.strap} />
      </group>
      <group position={[-0.974, 0.14, 0.203]} rotation={[0.896, 0.852, -0.369]} scale={[0.315, 0.315, 0.483]}>
        <mesh geometry={nodes.Cube019.geometry} material={materials['shoe body']} />
        <mesh geometry={nodes.Cube019_1.geometry} material={materials['shoe face']} />
        <mesh geometry={nodes.Cube019_2.geometry} material={materials.neon} />
        <mesh geometry={nodes.Cube019_3.geometry} material={materials['laser- advanced GREEN']} />
      </group>
      <group position={[-1.95, 3.571, 0.343]} rotation={[0.126, 0.42, 0.124]} scale={[0.161, 0.161, 0.089]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials.ear} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials['neck ring']} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials['neon - BLUE']} />
      </group>
      <mesh geometry={nodes.iris.geometry} material={materials['Material.010']} position={[-1.077, 3.615, 0.345]} rotation={[1.883, 0.24, -0.525]} scale={0.284} />
      <mesh geometry={nodes.head.geometry} material={materials['face base']} position={[-1.013, 3.729, 0.556]} rotation={[0.126, 0.42, 0.124]} scale={[-0.23, -1.326, -0.23]} />
      <mesh geometry={nodes.HAIR.geometry} material={materials['front with gradient - pog']} position={[-1.288, 5.029, 0.316]} rotation={[0.421, -1.134, 0.329]} scale={0.765} />
      <mesh geometry={nodes.NurbsPath001.geometry} material={materials['front with gradient - pog SHADOW']} position={[-1.349, 5.019, 0.332]} rotation={[0.179, -0.012, -0.237]} />
      <mesh geometry={nodes.NurbsPath002.geometry} material={materials['front with gradient - pos SHADOW']} position={[-1.043, 4.555, 0.812]} rotation={[-2.72, 1.134, -1.84]} />
      <mesh geometry={nodes.NurbsPath003.geometry} material={materials['front with gradient - pos SHADOW']} position={[-0.915, 4.499, 0.8]} rotation={[-2.72, 1.134, -1.84]} />
      <mesh geometry={nodes.NurbsPath006.geometry} material={materials['front with gradient - neg']} position={[-1.349, 5.019, 0.332]} rotation={[3.114, -1.068, 2.559]} />
      <mesh geometry={nodes.NurbsPath007.geometry} material={materials['front with gradient - pos']} position={[-2.113, 3.682, 0.655]} rotation={[0.126, 0.42, 1.92]} scale={0.438} />
      <mesh geometry={nodes.NurbsPath008.geometry} material={materials['front with gradient - pos']} position={[-1.734, 3.417, 0.735]} rotation={[0.126, 0.42, 1.694]} />
      <mesh geometry={nodes.PONY_R.geometry} material={materials['Material.008']} position={[-1.208, 2.139, -1.325]} rotation={[0.355, -0.179, -1.556]} scale={[1.031, 1.394, 1.274]} />
      <mesh geometry={nodes.NurbsPath005.geometry} material={materials['front with gradient - BACK']} position={[-1.349, 5.019, 0.332]} rotation={[3.114, -1.068, 2.559]} />
      <mesh geometry={nodes.body001.geometry} material={materials.Material} position={[0.857, 4.081, -0.213]} />
      <mesh geometry={nodes.suit001.geometry} material={materials['suit inverse']} position={[0.857, 4.081, -0.213]} />
      <group position={[0.878, 4.081, -0.213]}>
        <mesh geometry={nodes.Cube023.geometry} material={materials['laser- advanced inverse']} />
        <mesh geometry={nodes.Cube023_1.geometry} material={materials['belt inverse']} />
      </group>
      <mesh geometry={nodes.link001.geometry} material={materials['neck ring']} position={[0.857, 2.621, 0.315]} scale={0.455} />
      <group position={[0.857, 4.081, -0.213]}>
        <mesh geometry={nodes.Cube034.geometry} material={materials['3-镭射-渐变镭射条 inverse']} />
        <mesh geometry={nodes.Cube034_1.geometry} material={materials['laser- advanced inverse.002']} />
      </group>
      <group position={[0.846, 3.087, -0.171]} scale={0.135}>
        <mesh geometry={nodes.Torus005.geometry} material={materials['neck ring']} />
        <mesh geometry={nodes.Torus005_1.geometry} material={materials['neon - GREEN']} />
      </group>
      <group position={[0.81, 5.007, -0.839]} rotation={[1.648, 0.005, -0.313]} scale={0.432}>
        <mesh geometry={nodes.Torus006.geometry} material={materials['3-镭射-渐变镭射条 inverse']} />
        <mesh geometry={nodes.Torus006_1.geometry} material={materials['laser- advanced inverse']} />
      </group>
      <group position={[1.696, 4.926, -0.564]} rotation={[-0.884, -0.088, -0.749]} scale={-0.432}>
        <mesh geometry={nodes.Torus007.geometry} material={materials['3-镭射-渐变镭射条 inverse']} />
        <mesh geometry={nodes.Torus007_1.geometry} material={materials['laser- advanced inverse']} />
      </group>
      <group position={[0.857, 0, 0]}>
        <mesh geometry={nodes.Cube026.geometry} material={materials.strap} />
        <mesh geometry={nodes.Cube026_1.geometry} material={materials['neon - BLUE']} />
        <mesh geometry={nodes.Cube026_2.geometry} material={materials['neck ring']} />
      </group>
      <group position={[0.47, 2.459, 0.607]} rotation={[Math.PI, 0, 0]} scale={-1}>
        <mesh geometry={nodes.Cube027.geometry} material={materials['strap inverse']} />
        <mesh geometry={nodes.Cube027_1.geometry} material={materials['neon - GREEN']} />
        <mesh geometry={nodes.Cube027_2.geometry} material={materials['neck ring']} />
      </group>
      <group position={[0.673, 0.141, 0.202]} rotation={[-2.245, 0.852, -0.369]} scale={[-0.315, -0.315, -0.483]}>
        <mesh geometry={nodes.Cube029.geometry} material={materials['shoe body inverse']} />
        <mesh geometry={nodes.Cube029_1.geometry} material={materials['shoe face inverse']} />
        <mesh geometry={nodes.Cube029_2.geometry} material={materials['neon - GREEN']} />
        <mesh geometry={nodes.Cube029_3.geometry} material={materials['laser- advanced inverse.001']} />
      </group>
      <group position={[0.162, 3.8, -0.288]} rotation={[-0.049, -0.269, -0.126]} scale={[0.161, 0.161, 0.089]}>
        <mesh geometry={nodes.Cube030.geometry} material={materials['ear - inverse']} />
        <mesh geometry={nodes.Cube030_1.geometry} material={materials['neck ring']} />
        <mesh geometry={nodes.Cube030_2.geometry} material={materials['neon purple']} />
      </group>
      <mesh geometry={nodes.iris002.geometry} material={materials['Material.011']} position={[0.437, 3.721, 0.166]} rotation={[1.576, 0.062, 0.193]} scale={0.284} />
      <mesh geometry={nodes.head001.geometry} material={materials['face base - Inverse']} position={[0.782, 3.785, 0.458]} rotation={[-0.049, -0.269, -0.126]} scale={[-0.23, -1.326, -0.23]} />
      <mesh geometry={nodes.HAIR001.geometry} material={materials['front with gradient - pog inverse']} position={[1.13, 5.043, 0]} rotation={[-2.745, -1.274, -2.654]} scale={0.765} />
      <mesh geometry={nodes.NurbsPath018.geometry} material={materials['front with gradient - pos SHADOW inverse']} position={[0.767, 4.617, 0.597]} rotation={[0.397, 1.274, -1.999]} scale={-1} />
      <mesh geometry={nodes.NurbsPath020.geometry} material={materials['front with gradient - pog SHADOW inverse']} position={[1.072, 5.05, -0.026]} rotation={[-3.135, -0.162, -0.226]} scale={-1} />
      <mesh geometry={nodes.NurbsPath021.geometry} material={materials['front with gradient - neg - inverse']} position={[1.072, 5.05, -0.026]} rotation={[-3.106, -0.383, 2.924]} />
      <mesh geometry={nodes.NurbsPath023.geometry} material={materials['front with gradient - pos inverse']} position={[-0.082, 3.709, 0.381]} rotation={[-0.049, -0.269, 1.445]} />
      <mesh geometry={nodes.NurbsPath029.geometry} material={materials['front with gradient - BACK inverse']} position={[-0.296, 4.189, -0.422]} rotation={[-0.049, -0.269, 1.418]} />
      <mesh geometry={nodes.PONY_R001.geometry} material={materials['pony with gradient inverse']} position={[2.094, 3.109, -1.228]} rotation={[0.354, -0.175, -1.557]} scale={[1.031, 1.394, 1.274]} />
    </group>
  )
}

useGLTF.preload('/compressed.gltf')