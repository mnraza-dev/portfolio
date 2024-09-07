import React, { useRef } from 'react'

const ReactLogo = (props) => {
    const logoRef = useRef();

    useGSAP(() => {
        gsap.to(logoRef.current.position, {
            y: logoRef.current.position.y + 1.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
    })

  return (
    <mesh {...props} ref={logoRef} position={[-12, Math.PI/5, -3]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default ReactLogo