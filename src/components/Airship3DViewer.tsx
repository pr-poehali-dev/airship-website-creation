import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows, Text } from '@react-three/drei';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import * as THREE from 'three';

interface AirshipModelProps {
  modelType: 'cargo' | 'passenger' | 'heavy';
  autoRotate: boolean;
}

const AirshipModel = ({ modelType, autoRotate }: AirshipModelProps) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const colors = {
    cargo: '#3b82f6',
    passenger: '#10b981', 
    heavy: '#f59e0b'
  };

  const scale = {
    cargo: 1,
    passenger: 0.9,
    heavy: 1.2
  };

  const color = colors[modelType];
  const size = scale[modelType];

  return (
    <group ref={meshRef} scale={size}>
      <mesh position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.6, 3, 16, 32]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>

      <mesh position={[-1.8, -0.3, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.8]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[-2.2, 0, 0]} castShadow>
        <coneGeometry args={[0.4, 0.6, 4]} rotation={[0, 0, -Math.PI / 2]} />
        <meshStandardMaterial color="#64748b" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[0, -0.6, 0.4]} castShadow>
        <boxGeometry args={[2, 0.1, 0.3]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.6, -0.4]} castShadow>
        <boxGeometry args={[2, 0.1, 0.3]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
      </mesh>

      {modelType === 'passenger' && (
        <>
          {[...Array(8)].map((_, i) => (
            <mesh key={i} position={[-1 + i * 0.4, 0.3, 0.65]} castShadow>
              <boxGeometry args={[0.15, 0.2, 0.05]} />
              <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.3} />
            </mesh>
          ))}
        </>
      )}

      {modelType === 'heavy' && (
        <>
          <mesh position={[0, -0.9, 0]} castShadow>
            <boxGeometry args={[2.5, 0.4, 1.2]} />
            <meshStandardMaterial color="#78350f" metalness={0.4} roughness={0.6} />
          </mesh>
        </>
      )}

      <mesh position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <coneGeometry args={[0.6, 0.8, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0.5, 0.7, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <boxGeometry args={[0.05, 1.2, 0.3]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.5, 0.7, 0]} rotation={[Math.PI / 2, 0, Math.PI / 4]} castShadow>
        <boxGeometry args={[0.05, 1.2, 0.3]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

interface Airship3DViewerProps {
  modelType: 'cargo' | 'passenger' | 'heavy';
  name: string;
}

const Airship3DViewer = ({ modelType, name }: Airship3DViewerProps) => {
  const [autoRotate, setAutoRotate] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  return (
    <Card className="w-full h-[500px] relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={50} />
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={12}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
        />
        
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight 
          position={[-10, 10, -5]} 
          intensity={0.8}
          angle={0.3}
          penumbra={1}
          castShadow
        />
        
        <Suspense fallback={null}>
          <AirshipModel modelType={modelType} autoRotate={autoRotate} />
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -2, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>
      </Canvas>

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">
          <h3 className="text-white font-bold text-lg">{name}</h3>
        </div>
        <div className="flex gap-2 pointer-events-auto">
          <Button
            size="sm"
            variant="secondary"
            className="bg-black/60 backdrop-blur-md hover:bg-black/80"
            onClick={() => setAutoRotate(!autoRotate)}
          >
            <Icon name={autoRotate ? "Pause" : "Play"} size={16} className="text-white" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-black/60 backdrop-blur-md hover:bg-black/80"
            onClick={() => setShowInfo(!showInfo)}
          >
            <Icon name="Info" size={16} className="text-white" />
          </Button>
        </div>
      </div>

      {showInfo && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-lg pointer-events-none">
          <div className="grid grid-cols-3 gap-4 text-white text-sm">
            <div>
              <Icon name="Maximize2" size={16} className="inline mr-2 text-blue-400" />
              <span className="text-slate-300">Вращайте мышью</span>
            </div>
            <div>
              <Icon name="ZoomIn" size={16} className="inline mr-2 text-blue-400" />
              <span className="text-slate-300">Скролл для приближения</span>
            </div>
            <div>
              <Icon name="Move3d" size={16} className="inline mr-2 text-blue-400" />
              <span className="text-slate-300">3D просмотр</span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Airship3DViewer;
