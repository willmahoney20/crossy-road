export default ({ row, prev }) => {
    const roadElements = []

    for (let i = -20; i <= 20; i++) {
        const position = [i, 0, -row]
        roadElements.push(
            prev === 'road' && i % 2 === 0 ?
            <group key={i}>
                <mesh position={position}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial color="#495057" />
                </mesh>
                <mesh position={[i, 0, (-row + 0.5)]}>
                    <boxGeometry args={[1, 0.15, 0.2]} />
                    <meshStandardMaterial color="#adb5bd" />
                </mesh>
            </group>
            :
            <group key={i}>
                <mesh position={position}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial color="#495057" />
                </mesh>
            </group>
        )
    }

    return (
        <group>
            {roadElements}
        </group>
    )
}