import { useRef, useEffect } from 'react'
import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import Controls from "./Controls"
import Chicken from "./components/models/Chicken"

export default () => {
    const upPressed = useKeyboardControls((state) => state[Controls.up])

    const chicken = useRef()

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.keyCode) {
                case 38: // up arrow
                    chicken.current.rotation.y = 0
                    chicken.current.position.z += -1
                    break;
                case 40: // down arrow
                    chicken.current.rotation.y = Math.PI
                    chicken.current.position.z += 1
                    break;
                case 37: // left arrow
                    chicken.current.rotation.y = Math.PI / 2
                    chicken.current.position.x += -1
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

    return (
        <group ref={chicken} position={[0, 0, 2]}>
            <Chicken />
        </group>
    )
}