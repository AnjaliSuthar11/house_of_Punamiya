import { ballet, greatVibes } from "@/font";


export default function ThankYouSection() {
  return (
    <footer className="relative overflow-hidden px-6 py-24 ">

      {/* Background Glow */}
     

      <div className="relative z-10 max-w-3xl mx-auto text-center">


        {/* Heading */}
       
 <div className="flex flex-col items-center justify-center text-center py-20 px-6">

  {/* Top Quote */}


    <div className="mt-10 flex items-center justify-center gap-4">
    <div className="w-24 h-px bg-[#8D440D]/40"></div>

 <div
    className="text-7xl leading-none text-[#8D440D] opacity-80"
    style={{ fontFamily: "Cormorant Garamond, serif" }}
  >
    “
  </div>

    <div className="w-24 h-px bg-[#8D440D]/40"></div>
  </div>

  {/* Quote Text */}
  <h2
    className={`${ballet.className} mt-2 text-4xl md:text-5xl text-[#8D440D] leading-relaxed font-bold max-w-3xl`} style={{
    color: "#8D440D",
    textShadow: `
      0.4px 0 #8D440D,
      -0.4px 0 #8D440D,
      0 0.4px #8D440D,
      0 -0.4px #8D440D
    `,
  }}
  >
    The finest moments are never rushed.
    <br />
    They're shared.
  </h2>

  {/* Bottom Decoration */}
  <div className="mt-10 flex items-center justify-center gap-4">
    <div className="w-24 h-px bg-[#8D440D]/40"></div>

    <span
      className="text-5xl leading-none text-[#8D440D]"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
      ”
    </span>

    <div className="w-24 h-px bg-[#8D440D]/40"></div>
  </div>

</div>

  {/* Bottom Divider */}
        {/* <div className="flex items-center justify-center gap-4 py-10">
          <div className="w-24 h-px bg-[#8D440D]/30"></div>
          <span className="text-[#8D440D] text-lg">❦</span>
          <div className="w-24 h-px bg-[#8D440D]/30"></div>
        </div> */}
 
  {/* Logo */}
        <img
          src="/assets/punamiya/Logo3.png"
          alt="House of Punamiya"
          className=" mx-auto h-30 md:h-40 object-contain"
        />

       
        {/* Message */}
        {/* <p
          className="mt-8 text-lg leading-8 text-[#6B4B2A]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Thank you for being a part of our celebration.
         
        </p> */}

     
        {/* <p
          className="mt-10 uppercase tracking-[0.4em] text-sm"
          style={{
            color: "#8D440D",
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          With Love
        </p> */}

        {/* <h3
          className="mt-3 text-3xl"
          style={{
            color: "#8D440D",
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          House of Punamiya
        </h3> */}

       

        {/* Footer */}
        {/* <p
          className="mt-8 text-xs uppercase tracking-[0.35em]"
          style={{
            color: "#8D440D",
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          House of Punamiya • Intimate Indulgence • August 13
        </p> */}

      </div>
    </footer>
  );
}