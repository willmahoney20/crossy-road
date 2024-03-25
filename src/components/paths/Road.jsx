export default ({ row }) => {
    const roadElements = []

    for (let i = -20; i <= 20; i++) {
        const position = [i, 0, -row]
        roadElements.push(
            <mesh key={i} position={position}>
                <boxGeometry args={[1, 0.2, 1]} />
                <meshStandardMaterial color="#495057" />
            </mesh>
        )
    }

    return (
        <group>
            {roadElements}
        </group>
    )
}