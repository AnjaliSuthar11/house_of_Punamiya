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
    mapsUrl: "https://maps.google.com",
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
    <section id="venue" className="  h-screen flex flex-col justify-center items-center md:px-10 px-2 py-24 sm:py-10">
      <SectionHeading
        kicker="Thursday, 13 auguest, 3:00 pm"
        title={event.venue}
      />
      
       {/* Bottom Divider */}
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="w-24 h-px bg-[#8D440D]/30"></div>
          <span className="text-[#8D440D] text-lg">❦</span>
          <div className="w-24 h-px bg-[#8D440D]/30"></div>
        </div>
    

      <div className="reveal mx-auto mt-10 max-w-4xl">
        
        <div className="bg-white relative mt-10 mx-auto max-w-2xl px-7 py-9  sm:px-12 sm:py-12 rounded-2xl">
          <div className="pointer-events-none absolute inset-2.5 border border-antique-gold/45 rounded-2xl" />

          <div className="relative text-center">
          <p className="text-xl  tracking-[0.4em]  uppercase "
      style={{
            color: "#8D440D",
            fontFamily: "Cormorant Garamond, serif",
          }}>
      venue
      </p>

            <p  className="mt-8 text-lg leading-8 text-[#6B4B2A]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}>
              1301/1302/1402, Imperial Residency, Gulmohar Cross Road No 12, Juhu, Mumbai, Maharashtra India
            </p>

          
{/* 
            <p className={`${greatVibes.className} mt-4 text-2xl md:text-3xl text-[#8D440D]`}>
              {event.venueDescription}
            </p> */}

 <a
  href={event.mapsUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#8D440D] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-[#8D440D] transition-all duration-300 hover:bg-[#8D440D] hover:text-[#F9F5EF]"
>
  Navigate to venue
</a>
          </div>
        </div>
      </div>
    </section>
  );
}