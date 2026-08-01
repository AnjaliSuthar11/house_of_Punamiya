"use client";

import { useEffect, useState } from "react";

export default function ScreenOne() {
  const [clicked, setClicked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [clicked]);

  return (
    <div className="relative min-h-screen overflow-y-auto overflow-x-hidden">

      {/* Background */}
      <div
        className={`fixed inset-0 -z-10 bg-[url('/Background_for_Web_Invite_01.png')] bg-cover bg-center transition-all duration-1000 ${
          clicked && !showVideo
            ? "scale-110 blur-md brightness-50"
            : ""
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-20 flex flex-col items-center px-6 py-10 transition-all duration-1000 ${
          clicked
            ? "opacity-0 scale-110 blur-xl"
            : "opacity-100"
        }`}
      >

        {/* Logo */}
        <img
          src="/assets/punamiya/Logo3.png"
          alt="Logo"
          className="h-20 md:h-28 lg:h-36 object-contain"
        />

        {/* Heading */}
        <h2
          className="mt-6 text-center uppercase text-3xl md:text-5xl"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            letterSpacing: ".22em",
            color: "#8D440D",
            textShadow: "0 2px 8px rgba(0,0,0,.35)",
          }}
        >
          RESERVED FOR YOU
        </h2>

        {/* Subtitle */}
        <p
          className="mt-3 flex items-center gap-3 uppercase text-sm md:text-lg"
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

        {/* Envelope */}
        <div className="my-12 flex justify-center">
          <img
            src="/assets/punamiya/NewEnvelope.png"
            alt="Envelope"
            onClick={() => setClicked(true)}
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[430px] cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>
                {/* ================= DATE SECTION ================= */}
        <div className="flex flex-col items-center text-[#8D440D] mb-10">

          {/* Date */}
          <h3
            className="uppercase text-4xl md:text-5xl lg:text-6xl tracking-[0.2em]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              textShadow: "0 0 12px rgba(141,68,13,.25)",
            }}
          >
            August 13
          </h3>

          {/* Time */}
          <div className="flex items-center gap-4 mt-4">

            <div className="w-20 md:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#8D440D] to-transparent" />

            <span
              className="uppercase text-lg md:text-xl tracking-[0.35em]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              3 PM
            </span>

            <div className="w-20 md:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#8D440D] to-transparent" />

          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-5">

            <div className="w-14 md:w-24 h-[1px] bg-[#8D440D]" />

            <span className="text-xl animate-pulse text-[#8D440D]">
              ✦
            </span>

            <div className="w-14 md:w-24 h-[1px] bg-[#8D440D]" />

          </div>

          {/* Invitation */}
          <p
            className="mt-5 italic text-lg md:text-2xl"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              color: "#8D440D",
            }}
          >
            Invitation to Follow
          </p>

          {/* Bottom Divider */}
          <div className="flex items-center gap-3 mt-4">

            <div className="w-10 md:w-16 h-[1px] bg-[#8D440D]" />

            <span className="text-lg animate-pulse text-[#8D440D]">
              ✦
            </span>

            <div className="w-10 md:w-16 h-[1px] bg-[#8D440D]" />

          </div>

        </div>

      </div>

      {/* ================= VIDEO ================= */}

      {showVideo && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">

          <video
            autoPlay
            playsInline
            className=" object-contain"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

        </div>
      )}

    </div>
  );
}