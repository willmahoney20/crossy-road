import { useState, useRef, useEffect } from 'react'
import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Controls from "./Controls.jsx"
import Chicken from "./components/models/Chicken"
import Grass from './components/paths/Grass.jsx'
import { CAMERA_POSITION_X, CAMERA_POSITION_Y, CAMERA_POSITION_Z } from './Constants.jsx'
import Road from './components/paths/Road.jsx'

export default () => {
    const upPressed = useKeyboardControls((state) => state[Controls.up])
    const [lanes, setLanes] = useState([])
    const chicken = useRef()
    const lane = useRef(0) // tracks the current lane of the chicken

    // create initial lanes
    useEffect(() => {
        let arr = []
        for(let i = 0; i < 6; i++){
            Math.random() < 0.4 ? arr.push('road') : arr.push('grass')
        }
        setLanes(arr)
    }, [])

    // keyboard handler
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.keyCode) {
                case 38: // up arrow
                    chicken.current.rotation.y = 0
                    chicken.current.position.z -= 1
                    lane.current += 1
                    break;
                case 40: // down arrow
                    chicken.current.rotation.y = Math.PI
                    chicken.current.position.z += 1
                    lane.current -= 1
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

            {lanes.map((lane, index) => {
                console.log('find', lane)
                return lane === 'grass' ?
                <Grass key={index} row={index} /> :
                lane === 'road' ?
                <Road key={index} row={index} />
                : null
            })}
        </group>
    )
}