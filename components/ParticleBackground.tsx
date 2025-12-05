import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Fix for missing R3F types in JSX.IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      instancedMesh: any;
      lineSegments: any;
      sphereGeometry: any;
      meshBasicMaterial: any;
      bufferGeometry: any;
      lineBasicMaterial: any;
    }
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        instancedMesh: any;
        lineSegments: any;
        sphereGeometry: any;
        meshBasicMaterial: any;
        bufferGeometry: any;
        lineBasicMaterial: any;
      }
    }
  }
}

const ParticleNetwork: React.FC = () => {
  const count = 400;
  const connectionDistance = 2.5;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate random particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 15;
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, [count]);

  // Animation loop
  useFrame(({ clock, mouse }) => {
    if (!meshRef.current || !linesRef.current) return;

    const time = clock.getElapsedTime();
    
    // Rotate entire system gently
    meshRef.current.rotation.y = time * 0.05;
    linesRef.current.rotation.y = time * 0.05;

    // Optional: Mouse influence (parallax)
    const targetX = mouse.x * 0.2;
    const targetY = mouse.y * 0.2;
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.02;

    const dummy = new THREE.Object3D();
    const linePositions: number[] = [];
    // const colors: number[] = [];

    particles.forEach((particle, i) => {
      // Gentle drift
      particle.y += Math.sin(time + particle.x) * 0.002;
      
      dummy.position.copy(particle);
      dummy.scale.setScalar(0.04);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);

      // Find connections
      for (let j = i + 1; j < count; j++) {
        const dist = particle.distanceTo(particles[j]);
        if (dist < connectionDistance) {
            linePositions.push(particle.x, particle.y, particle.z);
            linePositions.push(particles[j].x, particles[j].y, particles[j].z);
            
            // Fade alpha based on distance
            // const alpha = 1.0 - (dist / connectionDistance);
            // colors.push(0, 0.83, 1, alpha * 0.3); // Electric blue
            // colors.push(0, 0.83, 1, alpha * 0.3);
        }
      }
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    
    // Update lines
    linesRef.current.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    // linesRef.current.geometry.setAttribute(
    //   'color',
    //   new THREE.Float32BufferAttribute(colors, 4) // Requires custom shader for alpha in lines usually, simplifying for standard material
    // );
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.6} />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
};

const ParticleBackground: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
      <ParticleNetwork />
    </Canvas>
  );
};

export default ParticleBackground;