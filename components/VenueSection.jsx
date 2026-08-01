import { greatVibes } from "@/font";
import SectionHeading from "./SectionHeading";


export default function VenueSection() {
  const event = {
    venue: "Crafted for the Inner Circle",
    address:
      "1301/1302/1402, Imperial Residency, Gulmohar Cross Road No 12, Juhu, Mumbai, Maharashtra India",
    time: "Thursday, August 13 • 3:00 PM onwards",
    venueDescription:
      "True luxury is found in time shared with those who matter most.",
    mapsUrl: "https://www.google.com/maps/place/Imperial+Residency,+YOGA+APARTMENT,+Gulmohar+Road,+Gulmohar+Colony,+Vile+Parle+West,+Mumbai,+Maharashtra+400049/@19.1155774,72.8280635,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9dd291caea3:0x7cfc75c76fb4e8bc!8m2!3d19.1155723!4d72.8306384!16s%2Fg%2F11mcy08rbp?entry=tts&g_ep=EgoyMDI2MDcyOS4wIPu8ASoASAFQAw%3D%3D&skid=3dbaa1de-f0b0-4fd3-a21b-2e39d61e67a1",
  };
// Pallavi Punamiya 
// 1301/1302/1402,Imperial Residency,Gulmohar Cross Road No 12 
// Juhu
// Mumbai 400049
// Maharashtra
// India
// 13th August ( Thursday )
// Timing -3pm 
// High tea
  const media = {
    venueImage: "/assets/punamiya/venue.jpg",
  };

  return (
    <section  className=" flex flex-col justify-center items-center py-10">
      <SectionHeading
        kicker="Thursday • 13 August • 3 PM"
        title={event.venue}
      />
     
       {/* Divider */}
         <div className="flex items-center justify-center gap-3">
  <div className="h-px w-20 bg-[#8D440D]" />
  <span className="text-[#8D440D] text-xl">✦</span>
  <div className="h-px w-20 bg-[#8D440D]" />
</div>

       {/* Bottom Divider
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="w-24 h-px bg-[#8D440D]/30"></div>
          <span className="text-[#8D440D] text-lg">❦</span>
          <div className="w-24 h-px bg-[#8D440D]/30"></div>
        </div>
     */}

<div className="mx-auto mt-12 max-w-6xl rounded-3xl px-6 py-8 md:px-10 md:py-10">
  <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

    {/* Left Content */}
    <div>
      <div className="flex items-center gap-3">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#8D440D]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/>
        </svg>

        <h2
          className="uppercase text-4xl tracking-[0.08em] text-[#8D440D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Location
        </h2>
      </div>

      <div
        className="mt-8 space-y-1 text-lg leading-8 text-[#5F3914]"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        <p>House of Punamiya</p>

        <p>
          1301 / 1302 / 1402,
          <br />
          Imperial Residency,
          <br />
          Gulmohar Cross Road No.12,
          <br />
          Juhu, Mumbai,
          <br />
          Maharashtra 400049
        </p>
      </div>

      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-3 border border-[#8D440D] px-8 py-3 text-sm uppercase tracking-[0.15em] text-[#8D440D] transition-all duration-300 hover:bg-[#8D440D] hover:text-white"
      >
        Navigate To The Venue
        <span>→</span>
      </a>
    </div>

    {/* Right Image */}
    <div className="flex justify-center  p-8 rounded-xl">
      <img
        src="/assets/Punamiya/location-1.png"
        alt="Venue Map"
        className="w-full h-full rounded-2xl"
       
      />
    </div>

  </div>
</div>
    </section>
  );
}