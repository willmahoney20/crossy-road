export default ({ row }) => {
    const roadElements = []

    for (let i = -20; i <= 20; i++) {
        const position = [i, 0, -row]
        roadElements.push(
            <group key={i}>
                <mesh position={position}>
                    <boxGeometry args={[1, 0.1, 1]} />
                    <meshStandardMaterial color="#495057" />
                </mesh>
                <mesh position={[i - 0.5, 0.05, -row]}>
                    <boxGeometry args={[0.1, 0.1, 1]} />
                    <meshStandardMaterial color="#7f4f24" />
                </mesh>
                <mesh position={[i, 0.15, -row + 0.32]}>
                    <boxGeometry args={[1, 0.1, 0.1]} />
                    <meshStandardMaterial color="#8d959d" />
                </mesh>
                <mesh position={[i, 0.15, -row - 0.32]}>
                    <boxGeometry args={[1, 0.1, 0.1]} />
                    <meshStandardMaterial color="#8d959d" />
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