import CornerOrnament from "./CornerOrnament";

export default function InvitationCard() {
  const event = {
    birthdayTitle: "Birthday Celebration",
    guestName: "Reserved For You",
    invitationText:
      "You are cordially invited to celebrate an unforgettable evening filled with warmth, elegance and cherished memories.",

    birthdayName: "House of Punamiya",

    ageLine: "Intimate Indulgence",

    date: "13 August 2026",

    time: "3:00 PM",

    venue: "House of Punamiya",

    dressCode: "Elegant Traditional",

    specialMessage:
      "Your presence will make this celebration truly special. We look forward to welcoming you with love and hospitality.",

    hostName: "With Love • House of Punamiya",
  };

  const brand = {
    logo: "/assets/punamiya/Logo3.png",
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
          className="mx-auto h-20 object-contain opacity-80"
        />

        {/* Small Heading */}
        <p
          className="mt-6 uppercase tracking-[0.45em] text-xs"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#8D440D",
          }}
        >
          {event.birthdayTitle}
        </p>

        {/* Guest */}
        <p
          className="mt-8 italic text-lg"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#6B4B2A",
          }}
        >
          {event.guestName}
        </p>

        {/* Invitation */}
        <p
          className="max-w-md mx-auto mt-4 leading-8"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#6B4B2A",
          }}
        >
          {event.invitationText}
        </p>

        {/* Main Title */}
        <h2
          className="mt-8 text-5xl"
          style={{
            fontFamily: "Great Vibes",
            color: "#B58B47",
          }}
        >
          {event.birthdayName}
        </h2>

        <p
          className="uppercase tracking-[0.45em] text-xs mt-2"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#8D440D",
          }}
        >
          {event.ageLine}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-10">

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

          <div className="w-2 h-2 rotate-45 bg-[#B58B47]"></div>

          <div className="w-24 h-px bg-[#B58B47]/50"></div>

        </div>

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg mx-auto">

          <Detail
            label="Date"
            value={event.date}
          />

          <Detail
            label="Time"
            value={event.time}
          />

          <Detail
            label="Venue"
            value={event.venue}
          />

          <Detail
            label="Dress Code"
            value={event.dressCode}
          />

        </div>

        {/* Footer */}
        <p
          className="max-w-md mx-auto mt-10 text-sm italic leading-7"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#6B4B2A",
          }}
        >
          {event.specialMessage}
        </p>

        <p
          className="uppercase tracking-[0.35em] text-xs mt-8"
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#8D440D",
          }}
        >
          {event.hostName}
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