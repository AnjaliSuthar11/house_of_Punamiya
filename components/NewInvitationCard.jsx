import CornerOrnament from "./CornerOrnament";

export default function NewInvitationCard() {


  const brand = {
    logo: "/assets/punamiya/Logo2.png",
    logoAlt: "House of Punamiya",
  };

  return (
    <article className="relative bg-[#F8F1E6] shadow-2xl max-w-3xl mx-auto px-6 py-12 sm:px-14 sm:py-16 rounded-sm overflow-hidden">

      {/* Border */}
      <div className="absolute inset-3 border border-[#B58B47]/60"></div>

      <div className="absolute inset-5 border border-[#B58B47]/30"></div>

      {/* Corner Designs */}
      <CornerOrnament className="absolute left-4 top-4 h-10 w-10" />
      <CornerOrnament className="absolute right-4 top-4 h-10 w-10 rotate-90" />
      <CornerOrnament className="absolute right-4 bottom-4 h-10 w-10 rotate-180" />
      <CornerOrnament className="absolute left-4 bottom-4 h-10 w-10 -rotate-90" />

      <div className="relative text-center">

        {/* Logo */}
        <img
          src={brand.logo}
          alt={brand.logoAlt}
          className="mx-auto h-50  object-contain opacity-80"
        />

        {/* Guest */}
        <p
          className="mt-4 italic text-2xl"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#B58B47",
          }}
        >
          An Afternoon Reserved <br></br> for the 
        </p>
         <p
          className="uppercase tracking-[0.35em] text-4xl mt-4"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#B58B47",
          }}
        >
         Inner circle
        </p>

          {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-4">

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

          <div className="w-2 h-2 rotate-45 bg-[#B58B47]"></div>

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

        </div>

         <p
          className="mt-6 italic text-2xl"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#B58B47",
          }}
        >
         join me for 
        </p>
        <h2
          className="mt-9 text-8xl"
          style={{
            fontFamily: "Great Vibes",
            color: "#B58B47",
          }}
        >
          High Tea
        </h2>

             {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-10">

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

          <div className="w-2 h-2 rotate-45 bg-[#B58B47]"></div>

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

        </div>
          <p
          className="mt-8 italic text-3xl"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#B58B47",
          }}
        >
        with love,
        </p>
          <p
          className="uppercase tracking-[0.35em] text-4xl mt-2 text-3xl"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#B58B47",
          }}
        >
        pallavi
        </p>
         <div className="flex items-center justify-center gap-3 my-8">

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

          <div className="w-2 h-2 rotate-45 bg-[#B58B47]"></div>

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

        </div>

          <p
          className="uppercase tracking-[0.35em] text-xl mt-2 text-3xl"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#B58B47",
          }}
        >
        Thursday, August 13 2026
        </p>
         <div className="flex items-center justify-center gap-3 my-8">

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

          <div className="w-2 h-2 rotate-45 bg-[#B58B47]"></div>

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

        </div>
          <p
          className="mt-4 text-2xl"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#B58B47",
          }}
        >
        3:00 PM 
        </p>
      </div>
    </article>
  );
}

function Detail({ label, value }) {
  return (
    <div className="text-center">

      <p
        className="uppercase text-xs tracking-[0.35em]"
        style={{
          fontFamily: "Cormorant Garamond",
          color: "#B58B47",
        }}
      >
        {label}
      </p>

      <p
        className="mt-2 text-base"
        style={{
          fontFamily: "Cormorant Garamond",
          color: "#6B4B2A",
        }}
      >
        {value}
      </p>

    </div>
  );
}