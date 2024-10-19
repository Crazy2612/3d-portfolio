import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Text } from '@react-three/drei';

function Hero() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.2;
    cubeRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group>
      <mesh ref={cubeRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
      <Text
        position={[0, 4, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Faij Alam
      </Text>
      <Text
        position={[0, 3, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Full Stack Developer
      </Text>
    </group>
  );
}

export default Hero;