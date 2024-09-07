import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";

const Target = (props) => {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  const targetRef = useRef();
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 1.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,

    })
  });

  return (
    <mesh scale={1.2} {...props} ref={targetRef} position={[-12, -5, -3]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
