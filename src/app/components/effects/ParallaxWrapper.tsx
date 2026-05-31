"use client";

import { useEffect, useState } from "react";

export default function ParallaxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className="transition-transform duration-300"
    >
      {children}
    </div>
  );
}