import { useEffect, useState } from "react";

type Dot = { x: number; y: number; id: number; size: number; opacity: number; color: string };

const generateColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 60%)`; // Brighter
};

const SparkTrail = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: idCounter++,
        size: 6 + Math.random() * 4,
        opacity: 0.5 + Math.random() * 0.3,
        color: generateColor(),
      };

      setDots(prev => [...prev, newDot]);

      setTimeout(() => {
        setDots(prev => prev.filter(dot => dot.id !== newDot.id));
      }, 700);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {dots.map(dot => (
        <div
          key={dot.id}
          style={{
            position: "fixed",
            left: dot.x,
            top: dot.y,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            borderRadius: "50%",
            pointerEvents: "none",
            transform: "translate(-50%, -50%) scale(1)",
            zIndex: 9999,
            opacity: dot.opacity,
            filter: "blur(1px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            animation: "shrinkFade 0.7s forwards",
          }}
        />
      ))}

      <style>{`
        @keyframes shrinkFade {
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
          }
        }
      `}</style>
    </>
  );
};

export default SparkTrail;
