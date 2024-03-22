import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import Controls from './Controls.jsx'
import GameController from './GameController.jsx'
import './App.css'
import { CAMERA_POSITION_X, CAMERA_POSITION_Y, CAMERA_POSITION_Z } from './Constants.jsx'

export default () => {
    const map = useMemo(() => [
        { name: Controls.up, keys: ['KeyW', 'ArrowUp'] }
    ], [])

    return (
        <div id="canvas-container">
            <Canvas
                orthographic
                camera={{
                    left: window.innerWidth/-2,
                    right: window.innerWidth/2,
                    top: window.innerHeight/2,
                    bottom: window.innerHeight/-2,
                    zoom: 80,
                    near: 0.1,
                    far: 100,
                    position: [CAMERA_POSITION_X, CAMERA_POSITION_Y, CAMERA_POSITION_Z]
                }}
            >
                <ambientLight intensity={3} />
                <pointLight position={[10, 10, 10]} />
                <KeyboardControls map={map}>
                    <GameController />
                    <mesh position={[0, 0, 2]}>
                        <boxGeometry args={[1, 0.2, 1]} />
                        <meshStandardMaterial color="#5F9E3F" />
                    </mesh>
                    <mesh position={[0, 0, 2]}>
                        <boxGeometry args={[1, 0.2, 1]} />
                        <meshBasicMaterial color="black" wireframe />
                    </mesh>
                    <mesh position={[0, 0, 1]}>
                        <boxGeometry args={[1, 0.1, 1]} />
                        <meshStandardMaterial color="#495057" />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[1, 0.1, 1]} />
                        <meshStandardMaterial color="#495057" />
                    </mesh>
                    <mesh position={[0, 0, -1]}>
                        <boxGeometry args={[1, 0.2, 1]} />
                        <meshStandardMaterial color="#5F9E3F" />
                    </mesh>
                    <mesh position={[0, 0, -2]}>
                        <boxGeometry args={[1, 0.1, 1]} />
                        <meshStandardMaterial color="#219ebc" />
                    </mesh>
                    <mesh position={[1, 0.1, -1.9]}>
                        <boxGeometry args={[0.7, 0.1, 0.7]} />
                        <meshStandardMaterial color="#582f0e" />
                    </mesh>
                    <mesh position={[1, 0, -2]}>
                        <boxGeometry args={[1, 0.1, 1]} />
                        <meshStandardMaterial color="#219ebc" />
                    </mesh>
                    <mesh position={[0, 0, -2]}>
                        <boxGeometry args={[1, 0.1, 1]} />
                        <meshBasicMaterial color="black" wireframe />
                    </mesh>
                    <mesh position={[0, 0, -3]}>
                        <boxGeometry args={[1, 0.2, 1]} />
                        <meshStandardMaterial color="#5F9E3F" />
                    </mesh>
                </KeyboardControls>
            </Canvas>
        </div>
    )
}
