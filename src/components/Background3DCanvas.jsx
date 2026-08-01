import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';

function Netflix3DMeshes({ theme }) {
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();

  useFrame((state, delta) => {
    if (mesh1.current) {
      mesh1.current.rotation.x += delta * 0.2;
      mesh1.current.rotation.y += delta * 0.25;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x -= delta * 0.15;
      mesh2.current.rotation.z += delta * 0.2;
    }
    if (mesh3.current) {
      mesh3.current.rotation.y += delta * 0.3;
    }
  });

  const isDark = theme === 'dark';

  return (
    <>
      <ambientLight intensity={isDark ? 0.9 : 1.3} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 1.8 : 2.5} color="#E50914" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#B81D24" />

      {/* Floating Icosahedron Node */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-4.5, 2.5, -5]}>
        <mesh ref={mesh1} scale={1.3}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#E50914"
            wireframe
            distort={0.35}
            speed={2}
            opacity={isDark ? 0.45 : 0.25}
            transparent
          />
        </mesh>
      </Float>

      {/* Floating TorusKnot Mesh */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[5, -2, -4]}>
        <mesh ref={mesh2} scale={0.95}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial
            color="#B81D24"
            roughness={0.2}
            metalness={0.9}
            wireframe
            opacity={isDark ? 0.4 : 0.2}
            transparent
          />
        </mesh>
      </Float>

      {/* Floating Dodecahedron Mesh */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={3} position={[0, 4.5, -7]}>
        <mesh ref={mesh3} scale={1.5}>
          <dodecahedronGeometry args={[1]} />
          <MeshDistortMaterial
            color="#FF3B30"
            distort={0.4}
            speed={1.8}
            wireframe
            opacity={isDark ? 0.35 : 0.18}
            transparent
          />
        </mesh>
      </Float>

      {isDark && <Stars radius={100} depth={50} count={3000} factor={4.5} saturation={0.5} fade speed={1.2} />}
    </>
  );
}

export const Background3DCanvas = ({ theme }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Netflix3DMeshes theme={theme} />
      </Canvas>
    </div>
  );
};
