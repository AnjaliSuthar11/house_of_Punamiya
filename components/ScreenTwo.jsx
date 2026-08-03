"use client"
import React, { useEffect, useState } from 'react'
import ScreenThree from './ScreenThree';

const ScreenTwo = () => {
     const [clicked, setClicked] = useState(false);
const [showVideo, setShowVideo] = useState(false);
const [showScreenThree, setShowScreenThree] = useState(false);
const [fadeVideo, setFadeVideo] = useState(false);
const [showScrollButton, setShowScrollButton] = useState(false);
useEffect(() => {
  if (!clicked) return;

  // Show video after envelope animation
  const showVideoTimer = setTimeout(() => {
    setShowVideo(true);
  }, 400);

 

  

  return () => {
    clearTimeout(showVideoTimer);
   
  };
}, [clicked]);

 if (showScreenThree) {
  return (
    <div className="animate-fadeIn">
      <ScreenThree />
    </div>
  );
}
  return (
   
    <div className={`flex py-18 h-screen justify-center items-center  bg-[url('/3rdAugustbg.png')] bg-cover bg-center  transition-all duration-1000`}>
      {/* #6B270F */}
      {/* bg-[url('/Background_for_Web_Invite_01.png')] */}
   
       {/* Main Content */}
      <div
        className={` flex flex-col justify-center gap-5 items-center transition-all duration-1000 ${
          clicked
            ? "opacity-0 scale-110 blur-xl"
            : "opacity-100"
        }`}
      >
        {/* ================= TOP ================= */}
        <div className="flex flex-col items-center mt-2">
          <img
            src="/assets/punamiya/Logo3.png"
            alt="Logo"
            className="h-30 md:h-28 lg:h-36 object-contain"
          />

          <h2
            className="mt-4 text-center uppercase text-2xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              letterSpacing: ".22em",
              color: "#8D440D",
              textShadow: "0 2px 8px rgba(0,0,0,.35)",
            }}
          >
            RESERVED FOR YOU
          </h2>

          <p
            className="mt-3 flex items-center gap-2 uppercase text-sm md:text-lg"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              letterSpacing: ".35em",
              color: "#8D440D",
            }}
          >
            <span>•</span>
            <span>INTIMATE INDULGENCE</span>
            <span>•</span>
          </p>
        </div>

        {/* ================= MIDDLE ================= */}
        <div className="flex justify-center items-center">
          <img
            src="/assets/punamiya/NewEnvelope.png"
            alt="Envelope"
            onClick={() => setClicked(true)}
            className="md:w-90 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div> 
         <p className=" text-center text-xs tracking-[0.25em] text-champagne/70 uppercase ">
         Tap the Envelope to open 
      </p>

      
      </div>
       {/* Video */}
     {showVideo && (
  <div
  className={`fixed inset-0 z-50 flex items-center justify-center  transition-opacity duration-700 ${
    fadeVideo ? "opacity-0" : "opacity-100"
  }`}
>
    <video
      autoPlay
   
      playsInline
      className="w-full h-full object-contain"
      onEnded={() => {
        setShowScrollButton(true);
      }}
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>

    {showScrollButton && (
      <button
        onClick={() => {
          setFadeVideo(true);

          setTimeout(() => {
            setShowVideo(false);
            setShowScreenThree(true);
          }, 700);
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white animate-bounce"
      >
        <span className="text-xs tracking-[0.4em] uppercase mb-2">
        Tap To  Scroll
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v14m0 0l-5-5m5 5l5-5"
          />
        </svg>
      </button>
    )}
  </div>
)}
{showScreenThree && (
  <div className="animate-fadeIn">
    <ScreenThree />
  </div>
)}
    </div>

  )
}

export default ScreenTwo
