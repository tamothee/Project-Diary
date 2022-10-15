import { DoubleSide } from "three";

export default function Plane() {
    return (
      // The mesh is at the origin
      // Since it is inside a group, it is at the origin
      // of that group
      // It's rotated by 90 degrees along the X-axis
      // This is because, by default, planes are rendered
      // in the X-Y plane, where Y is the up direction
      
       <mesh rotation={[-1.57, 0, 0]} receiveShadow position={[0, -0.6, 0]}>
       <planeGeometry args={[20, 20]} />
       <meshStandardMaterial color="#F8C2B1" side={DoubleSide}/>
     </mesh>
    );
  }