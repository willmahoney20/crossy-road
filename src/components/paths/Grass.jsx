export default ({ row }) => {
    const grassElements = []

    for (let i = -20; i <= 20; i++) {
        const position = [i, 0, -row]
        grassElements.push(
            <mesh key={i} position={position}>
                <boxGeometry args={[1, 0.2, 1]} />
                <meshStandardMaterial color="#5F9E3F" />
            </mesh>
        )
    }

    return (
        <group>
            {grassElements}
        </group>
    )
}