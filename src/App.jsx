import { Canvas } from '@react-three/fiber'
import './App.css'
import GrassRow from './paths/Grass.jsx';

export default () => {
    // Function to generate rows of grass
    const generateGrassRows = (rowCount, grassCount, spacing) => {
        const grassRows = [];

        for (let i = 0; i < rowCount; i++) {
            const rotation = [-0.1, -0.2, -0.25]
            grassRows.push(
                <GrassRow key={i} row={i} count={grassCount} spacing={spacing} rotation={rotation} />
            );
        }

        return grassRows;
    };

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
                    position: [4, 5, 10]
                }}
            >
                <ambientLight intensity={3} />
                <pointLight position={[10, 10, 10]} />
                <mesh position={[0, -1, 2]}>
                    <boxGeometry args={[1, 0.2, 1]} />
                    <meshStandardMaterial color="#5F9E3F" />
                </mesh>
                <mesh position={[0, -1, 2]}>
                    <boxGeometry args={[1, 0.2, 1]} />
                    <meshBasicMaterial color="black" wireframe />
                </mesh>
                <mesh position={[0, -1, 1]}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial color="#495057" />
                </mesh>
                <mesh position={[0, -1, 0]}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial color="#495057" />
                </mesh>
                <mesh position={[0, -1, -1]}>
                    <boxGeometry args={[1, 0.2, 1]} />
                    <meshStandardMaterial color="#5F9E3F" />
                </mesh>
                <mesh position={[0, -1, -2]}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial color="#219ebc" />
                </mesh>
                <mesh position={[1.1, -0.9, -1.85]}>
                    <boxGeometry args={[0.7, 0.1, 0.7]} />
                    <meshStandardMaterial color="#582f0e" />
                </mesh>
                <mesh position={[1, -1, -2]}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial color="#219ebc" />
                </mesh>
                <mesh position={[0, -1, -2]}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshBasicMaterial color="black" wireframe />
                </mesh>
                <mesh position={[0, -1, -3]}>
                    <boxGeometry args={[1, 0.2, 1]} />
                    <meshStandardMaterial color="#5F9E3F" />
                </mesh>
            </Canvas>
        </div>
    )
}
