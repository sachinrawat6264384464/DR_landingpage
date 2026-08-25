"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface ThreeDTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

export default function ThreeDTiltCard({
  children,
  className = "",
  maxTilt = 12,
  scale = 1.02,
}: ThreeDTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const px = mouseX / width;
    const py = mouseY / height;

    // Calculate rotation (-maxTilt to +maxTilt degrees)
    const rY = (px - 0.5) * (maxTilt * 2);
    const rX = (0.5 - py) * (maxTilt * 2);

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: px * 100,
      y: py * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: rotateX !== 0 || rotateY !== 0 ? scale : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`relative transition-shadow duration-300 ${className}`}
      >
        {children}

        {/* Specular 3D Glare Light Reflection Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-inherit transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
            opacity: glarePos.opacity,
            borderRadius: "inherit",
          }}
        />
      </motion.div>
    </div>
  );
}
