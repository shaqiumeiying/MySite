import { useEffect, useState, Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

// Lazy load the Stars component
const Stars = lazy(() => import('./Stars'));

const StarsCanvas = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 990);
  const [isHighPerformance, setIsHighPerformance] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 990);
    };

    window.addEventListener("resize", handleResize);

    // Detect high-performance devices
    const checkPerformance = () => {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const hasHighPerformance = !isMobile && window.navigator.hardwareConcurrency > 4; // Example check for more than 4 logical processors
      setIsHighPerformance(hasHighPerformance);
    };

    checkPerformance();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="stars-canvas-container">
      {isLargeScreen && isHighPerformance && (
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars />
            <Preload all />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
};

export default StarsCanvas;