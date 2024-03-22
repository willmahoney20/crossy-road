export default ({ row, count, spacing, rotation }) => {
    const grassElements = []

    for (let i = 0; i < count; i++) {
        const position = [i * spacing - 6, row * 0.5 - 2, 0]; // Adjust position based on spacing
        grassElements.push(
            <>
                <mesh key={i} position={position}>
                    <boxGeometry args={[0.5, 0.5, 0.1]} />
                    <meshStandardMaterial color="#5F9E3F" />
                </mesh>
                <mesh position={position}>
                    <boxGeometry args={[0.5, 0.5, 0.1]} />
                    <meshBasicMaterial color="black" wireframe />
                </mesh>
            </>
        )
    }

    return (        
        <group rotation={rotation}>
            {grassElements}
        </group>
    )
}