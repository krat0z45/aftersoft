"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
}

export default function Meteors() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const generateMeteors = () => {
      const meteorCount = isMobile ? 5 : 15;
      const newMeteors = Array.from({ length: meteorCount }).map((_, i) => ({
        id: i,
        x: `${Math.floor(Math.random() * 200 - 100)}vw`,
        y: `${Math.floor(Math.random() * 200 - 100)}vh`,
        size: Math.random() * 0.7 + 0.6,
        duration: Math.random() * 2 + 1,
        delay: Math.random() * 3
      }));
      setMeteors(newMeteors);
    };
    
    checkDevice();
    generateMeteors();

    const handleResize = () => {
      checkDevice();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [isMobile]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[-1] overflow-hidden">
        {/* Stars */}
        <div 
            className={cn(
                "absolute inset-0 bg-repeat",
                isMobile ? "hidden" : "block"
            )}
            style={{
                backgroundImage: 
                    "radial-gradient(white, rgba(255,255,255,.2) 1px, transparent 20px)," +
                    "radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px)",
                backgroundSize: "600px 600px, 400px 400px",
                backgroundPosition: "0 0, 40px 60px",
                animation: "move-stars 200s linear infinite",
            }}
        />

        {/* Meteors */}
        {meteors.map((meteor) => (
            <div
            key={meteor.id}
            className="absolute h-[2px] bg-gradient-to-r from-blue-400 to-transparent animate-meteor"
            style={{
                top: meteor.y,
                left: meteor.x,
                width: `${meteor.size * 150}px`,
                animationDelay: `${meteor.delay}s`,
                animationDuration: `${meteor.duration}s`,
                boxShadow: '0 0 5px rgba(0, 168, 255, 0.3)',
            }}
            />
        ))}
    </div>
  );
}