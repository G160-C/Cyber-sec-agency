import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleMesh = ({ activeCategory }) => {
  const meshRef = useRef()
  const particlesRef = useRef()

  useEffect(() => {
    if (!particlesRef.current) return

    const particles = particlesRef.current
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorMap = {
      App: new THREE.Color(0xDC2626), // cyber-red
      Web: new THREE.Color(0xDC2626),
      AI: new THREE.Color(0x991B1B), // dark-red
      Cloud: new THREE.Color(0x991B1B),
      Physical: new THREE.Color(0x991B1B),
      Operations: new THREE.Color(0xDC2626),
      null: new THREE.Color(0xDC2626)
    }

    const baseColor = colorMap[activeCategory] || colorMap.null

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 50
      positions[i3 + 1] = (Math.random() - 0.5) * 50
      positions[i3 + 2] = (Math.random() - 0.5) * 50

      const color = baseColor.clone().lerp(new THREE.Color(0xffffff), Math.random() * 0.5)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  }, [activeCategory])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry ref={particlesRef} />
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

const AnimatedBackground = ({ activeCategory }) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleMesh activeCategory={activeCategory} />
      </Canvas>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-black/80 via-space-black/60 to-space-black" />
      
      {/* Holographic Grid */}
      <div className="absolute inset-0 holographic-grid opacity-20" />
    </div>
  )
}

export default AnimatedBackground

