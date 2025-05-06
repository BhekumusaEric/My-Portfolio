import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a 3D space
function generatePoints(count, radius) {
  const points = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const angle = Math.random() * Math.PI * 2;
    const z = (Math.random() * 2) - 1;
    const r = Math.sqrt(1 - z * z) * radius;
    
    points[i3] = Math.cos(angle) * r;
    points[i3 + 1] = Math.sin(angle) * r;
    points[i3 + 2] = z * radius;
    
    // Add some color variation
    colors[i3] = 0.2 + Math.random() * 0.3; // R
    colors[i3 + 1] = 0.5 + Math.random() * 0.3; // G
    colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
  }
  
  return { positions: points, colors };
}

function StarField() {
  const pointsRef = useRef();
  const { positions, colors } = generatePoints(5000, 3);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = time * 0.05;
    pointsRef.current.rotation.y = time * 0.075;
  });
  
  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <StarField />
      </Canvas>
    </div>
  );
}
