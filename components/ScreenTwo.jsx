"use client"
import React, { useEffect, useState } from 'react'
import ScreenThree from './ScreenThree';

const ScreenTwo = () => {
     const [clicked, setClicked] = useState(false);
const [showVideo, setShowVideo] = useState(false);
const [showScreenThree, setShowScreenThree] = useState(false);
const [fadeVideo, setFadeVideo] = useState(false);
useEffect(() => {
  if (!clicked) return;

  // Show video after envelope animation
  const showVideoTimer = setTimeout(() => {
    setShowVideo(true);
  }, 400);

  // Start fading the video after 5 seconds
  const fadeTimer = setTimeout(() => {
    setFadeVideo(true);
  }, 6200);//6200

  // Show ScreenThree after fade animation
  const screenTimer = setTimeout(() => {
    setShowVideo(false);
    setShowScreenThree(true);
  }, 7000);//7000

  return () => {
    clearTimeout(showVideoTimer);
    clearTimeout(fadeTimer);
    clearTimeout(screenTimer);
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
   
    <div className={`flex justify-center items-center md:p-10 bg-[url('/Background_for_Web_Invite_01.png')] bg-cover bg-center  transition-all duration-1000`}>
   
       {/* Main Content */}
      <div
        className={` flex flex-col justify-center gap-5 items-center px-6 py-6 transition-all duration-1000 ${
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
            className="md:w-80 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center text-[#8D440D]">
          <h3
            className="uppercase text-3xl md:text-5xl lg:text-6xl tracking-[0.2em]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              textShadow: "0 0 12px rgba(214,176,106,.4)",
            }}
          >
            August 13
          </h3>

          {/* Time */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#8D440D] to-transparent" />

            <span
              className="uppercase text-lg md:text-xl tracking-[0.35em]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              3 PM
            </span>

            <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#8D440D] to-transparent" />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-12 md:w-20 h-[1px] bg-[#8D440D]" />

            <span className="text-xl animate-pulse">✦</span>

            <div className="w-12 md:w-20 h-[1px] bg-[#8D440D]" />
          </div>

          <p
            className="mt-2 italic text-lg md:text-xl"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              color: "#8D440D",
            }}
          >
            Invitation to Follow
          </p>

          <div className="flex items-center gap-4 mt-2">
            <div className="w-10 md:w-16 h-[1px] bg-[#8D440D]" />

            <span className="text-lg animate-pulse">✦</span>

            <div className="w-10 md:w-16 h-[1px] bg-[#8D440D]" />
          </div>
        </div>
      </div>
       {/* Video */}
      {showVideo && (
  <div
    className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${
      fadeVideo ? "opacity-0" : "opacity-100"
    }`}
  >
    <video
      autoPlay
      muted
      playsInline
      className="w-full h-full object-contain"
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
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
