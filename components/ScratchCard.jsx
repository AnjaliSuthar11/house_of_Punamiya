"use client";

import { useEffect, useRef, useState } from "react";

export default function ScratchCard({
  children,
  width = 340,
  height = 500,
  revealPercent = 60,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const drawing = useRef(false);
  const lastPoint = useRef(null);

  const [revealed, setRevealed] = useState(false);
const [showGlitter, setShowGlitter] = useState(false);
  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    const ctx = canvas.getContext("2d");

    ctx.scale(dpr, dpr);

    drawFoil(ctx);
  }, []);

  const drawFoil = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, width, height);

    gradient.addColorStop(0, "#6d4d08");
    gradient.addColorStop(.2, "#c99d32");
    gradient.addColorStop(.4, "#fff0b5");
    gradient.addColorStop(.6, "#b88816");
    gradient.addColorStop(.8, "#f8e4a3");
    gradient.addColorStop(1, "#6d4d08");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // metallic texture
    for (let i = 0; i < 300; i++) {
      ctx.fillStyle =
        Math.random() > .5
          ? "rgba(255,255,255,.05)"
          : "rgba(0,0,0,.04)";

      ctx.fillRect(
        0,
        Math.random() * height,
        width,
        1
      );
    }

    ctx.globalCompositeOperation = "destination-out";
  };

  const erase = (x, y) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 40;

    if (!lastPoint.current) {
      lastPoint.current = { x, y };
    }

    ctx.beginPath();
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastPoint.current = { x, y };
  };

  const start = (x, y) => {
    drawing.current = true;
    lastPoint.current = null;
    erase(x, y);
  };

  const move = (x, y) => {
    if (!drawing.current) return;
    erase(x, y);
  };

  const end = () => {
    drawing.current = false;
    lastPoint.current = null;
    checkReveal();
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    const image = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    ).data;

    let clear = 0;

    for (let i = 3; i < image.length; i += 32) {
      if (image[i] === 0) clear++;
    }

    const percent =
      (clear / (image.length / 32)) * 100;

  if (percent > revealPercent) {
  setRevealed(true);
  setShowGlitter(true);

  setTimeout(() => {
    setShowGlitter(false);
  }, 1800);
}
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl shadow-2xl"
      style={{
        width,
        height,
      }}
    >
<div
  className={`w-full h-full transition-all duration-1000 ${
    revealed
      ? "scale-100 opacity-100 animate-reveal"
      : "scale-95 opacity-95"
  }`}
>
  {children}
</div>

      {!revealed && (
        <canvas
          ref={canvasRef}
          onTouchCancel={end}
          className="absolute inset-0"
          style={{
            touchAction: "none",
          }}
          onMouseDown={(e) => start(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
          onMouseMove={(e) => move(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}
          onMouseUp={end}
          onMouseLeave={end}
          onTouchStart={(e) => {
            const rect =
              canvasRef.current.getBoundingClientRect();

            start(
              e.touches[0].clientX - rect.left,
              e.touches[0].clientY - rect.top
            );
          }}
          onTouchMove={(e) => {
            e.preventDefault();

            const rect =
              canvasRef.current.getBoundingClientRect();

            move(
              e.touches[0].clientX - rect.left,
              e.touches[0].clientY - rect.top
            );
          }}
          onTouchEnd={end}
        />
      )}

      {showGlitter && (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 80 }).map((_, i) => (
      <span
        key={i}
        className="absolute animate-glitter"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 0.5}s`,
          "--x": `${Math.random() * 240 - 120}px`,
          "--y": `${Math.random() * 240 - 120}px`,
        }}
      >
        ✦
      </span>
    ))}
  </div>
)}
    </div>
  );
}