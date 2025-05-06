import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// This is a placeholder component that would normally load a 3D model
// For now, we'll create a simple 3D shape to represent the avatar
function AvatarModel({ scale = 1 }) {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t / 4) / 4;
    ref.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group ref={ref} scale={scale}>
      {/* Head */}
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#f8d866" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.8, 32]} />
        <meshStandardMaterial color="#0969DA" />
      </mesh>
      
      {/* Left Arm */}
      <mesh position={[-0.5, -0.4, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
        <meshStandardMaterial color="#0969DA" />
      </mesh>
      
      {/* Right Arm */}
      <mesh position={[0.5, -0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 16]} />
        <meshStandardMaterial color="#0969DA" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 0.3, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 0.3, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Smile */}
      <mesh position={[0, 0.1, 0.4]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.2, 0.05, 16, 16, Math.PI]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </group>
  );
}

export default function AnimatedAvatar({ className }) {
  return (
    <motion.div 
      className={`relative w-full h-[400px] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AvatarModel scale={0.8} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
        <Environment preset="city" />
      </Canvas>
    </motion.div>
  );
}
