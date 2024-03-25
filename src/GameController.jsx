import { useState, useRef, useEffect } from 'react'
import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Controls from "./Controls.jsx"
import Chicken from "./components/models/Chicken"
import Grass from './components/paths/Grass.jsx'
import { CAMERA_POSITION_X, CAMERA_POSITION_Y, CAMERA_POSITION_Z } from './Constants.jsx'
import Road from './components/paths/Road.jsx'
import { generateLanes, nextLane } from './LaneGeneration.jsx'
import Track from './components/paths/Track.jsx'
import Water from './components/paths/Water.jsx'

const initialLanes = ['grass', 'grass', 'road', 'grass', 'grass', 'road', 'road', 'grass', 'grass', 'road', 'road', 'grass', 'grass', 'grass', 'grass', 'grass']

export default () => {
    const [lanes, setLanes] = useState([])
    const [lane, setLane] = useState(0)
    const chicken = useRef()

    // create initial lanes
    useEffect(() => {
        const arr = generateLanes(20)
        setLanes(arr)
    }, [])

    useEffect(() => {
        if(lanes.length - 20 < lane){
            setLanes(prev => [...prev, nextLane(prev)])
        }
    }, [lane])

    // keyboard handler
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.keyCode) {
                case 38: // up arrow
                    chicken.current.rotation.y = 0
                    chicken.current.position.z -= 1
                    setLane(prev => prev += 1)
                    break;
                case 40: // down arrow
                    chicken.current.rotation.y = Math.PI
                    chicken.current.position.z += 1
                    setLane(prev => prev -= 1)
                    break;
                case 37: // left arrow
                    chicken.current.rotation.y = Math.PI / 2
                    chicken.current.position.x -= 1
                    break;
                case 39: // right arrow
                    chicken.current.rotation.y = Math.PI / -2
                    chicken.current.position.x += 1
                    break;
                default:
                    break;
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Update the camera position to match the chicken's position
    useFrame(({ camera }) => {
        if (chicken.current) {
            camera.position.copy(chicken.current.position)
            camera.position.x += CAMERA_POSITION_X 
            camera.position.y += CAMERA_POSITION_Y
            camera.position.z += CAMERA_POSITION_Z
        }
    })

    return (
        <group>
            <group ref={chicken} position={[0, 0, 0]}>
                <Chicken />
            </group>

            {initialLanes.map((lane, index) => {
                return lane === 'grass' ?
                <Grass key={index} row={-index} /> :
                lane === 'road' ?
                <Road key={index} row={-index} />
                : null
            })}

            {lanes.map((lane, index) => {
                return lane === 'grass' ?
                <Grass key={index} row={index} /> :
                lane === 'road' ?
                <Road key={index} row={index} prev={lanes[index - 1]} /> :
                lane === 'track' ?
                <Track key={index} row={index} /> :
                lane === 'water' ?
                <Water key={index} row={index} />
                : null
            })}
        </group>
    )
}