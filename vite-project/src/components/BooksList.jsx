import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Books from './Books';
import React from 'react';

const BooksList= () => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <PerspectiveCamera makeDefault position={[0, 3, 5]} zoom={0.6} fov={25}/>
        <Stage environment="city" intensity={0.6}>
          <Books />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate enablePan={false} />
    </Canvas>
  )
}

export default BooksList