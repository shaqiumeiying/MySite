import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

const Stars = lazy(() => import('./Stars'));

const StarsCanvasM = () => {

  return (
    <div className="stars-canvas-container">
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars />
            <Preload all />
          </Canvas>
        </Suspense>
    </div>
  );
};

export default StarsCanvasM;