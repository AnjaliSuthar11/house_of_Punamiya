"use client";

import { useEffect, useRef, useState } from "react";

export default function FlipCard({ frontImage, backImage, delay = 0 }) {
  const ref = useRef(null);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setFlip(true);
          }, delay);

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="w-[320px] h-[470px] perspective-[1500px]"
    >
      <div
        className={`relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] ${
          flip ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-xl">
          <img
            src={frontImage}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl overflow-hidden shadow-xl">
          <img
            src={backImage}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}