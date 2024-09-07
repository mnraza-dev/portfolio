import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react.glb");
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} dispose={null} scale={0.3} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[-5, 0.079, 0.189]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");
export default ReactLogo;
