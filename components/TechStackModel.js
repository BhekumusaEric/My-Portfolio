import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { Vector3 } from 'three';

// Tech stack items with positions
const techStack = [
  { name: 'Python', position: [0, 0, 0], color: '#3776AB' },
  { name: 'React', position: [-1.5, 1, -1], color: '#61DAFB' },
  { name: 'TensorFlow', position: [1.5, -1, -1], color: '#FF6F00' },
  { name: 'Django', position: [1, 1.5, 0.5], color: '#092E20' },
  { name: 'Flask', position: [-1, -1.5, 0.5], color: '#000000' },
  { name: 'JavaScript', position: [2, 0, -0.5], color: '#F7DF1E' },
  { name: 'HTML5', position: [-2, 0, -0.5], color: '#E34F26' },
  { name: 'CSS3', position: [0, 2, -0.5], color: '#1572B6' },
  { name: 'Git', position: [0, -2, -0.5], color: '#F05032' },
  { name: 'Azure', position: [-1.5, -1, -1], color: '#0078D4' },
];

function TechItem({ name, position, color }) {
  const ref = useRef();
  const initialPosition = new Vector3(...position);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    // Add a slight floating movement
    ref.current.position.x = initialPosition.x + Math.sin(time * 0.5 + initialPosition.x) * 0.1;
    ref.current.position.y = initialPosition.y + Math.cos(time * 0.5 + initialPosition.y) * 0.1;
    ref.current.position.z = initialPosition.z + Math.sin(time * 0.3 + initialPosition.z) * 0.05;
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        ref={ref}
        position={position}
        color={color}
        fontSize={0.3}
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </Float>
  );
}

export default function TechStackModel({ className }) {
  return (
    <div className={`relative w-full h-[400px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        {techStack.map((tech, index) => (
          <TechItem key={index} {...tech} />
        ))}
      </Canvas>
    </div>
  );
}
