const ExampleComponent = ({ meshRef }) => (
  <mesh ref={meshRef}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="red" />
  </mesh>
);

export default ExampleComponent;
