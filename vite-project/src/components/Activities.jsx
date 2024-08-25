import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import ForestDiorama from './ForestDiorama';
import React, { Suspense } from 'react';

const Activities = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[0, 3, 5]} zoom={0.6} fov={25}/>
        <Stage environment="city" intensity={0.6} shadows="false">
          <ForestDiorama/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate enablePan={false} />
      </Suspense>
    </Canvas>
  )
}

export default Activities