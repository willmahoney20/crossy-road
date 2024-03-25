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
                    left: window.innerWidth / -2,
                    right: window.innerWidth / 2,
                    top: window.innerHeight / 2,
                    bottom: window.innerHeight / -2,
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
                </KeyboardControls>
            </Canvas>
        </div>
    )
}
