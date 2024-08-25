import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import RetroLibrary from './RetroLibrary';
import React, { Suspense } from 'react';

const Certificates = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[0, 2, 5]} zoom={0.6} />
        <Stage environment="city" intensity={0.6}>
          <RetroLibrary />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate enablePan={false}/>
      </Suspense>
    </Canvas>
  );
};

export default Certificates;
