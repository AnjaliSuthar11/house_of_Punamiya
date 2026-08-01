import { greatVibes } from "@/font";
import SectionHeading from "./SectionHeading";


export default function VenueSection() {
  const event = {
    venue: "Crafted for the Inner Circle",
    address:
      "1301/1302/1402, Imperial Residency, Gulmohar Cross Road No 12 , Juhu, Mumbai,Maharashtra india",
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
    <section id="venue" className="px-5 py-24 sm:py-32">
      <SectionHeading
        kicker="The Setting"
        title={event.venue}
      />

      <div className="reveal mx-auto mt-12 max-w-4xl">
        <div className="group relative overflow-hidden rounded-[0.35rem] shadow-luxe ring-1 ring-gold/25">
          <img
            src={media.venueImage}
            alt={`${event.venue} interior`}
            loading="lazy"
            width="1536"
            height="1024"
            className="h-[46vh] w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105 sm:h-[60vh]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,oklch(0.17_0.025_45/0.75))]" />
        </div>

        <div className="bg-white relative -mt-10 mx-auto max-w-2xl px-7 py-9  sm:px-12 sm:py-12">
          <div className="pointer-events-none absolute inset-2.5 border border-antique-gold/45" />

          <div className="relative text-center">
            <h3 className="font-display text-lg tracking-[0.28em] text-chocolate uppercase sm:text-2xl">
              {event.venue}
            </h3>

            <p className="font-body mt-5 text-sm text-chocolate/70 sm:text-base">
              {event.address}
            </p>

            <p className="font-body mt-4 text-sm text-chocolate/70 sm:text-base">
              {event.time}
            </p>

            <p className={`${greatVibes.className} mt-4 text-2xl md:text-3xl text-[#8D440D]`}>
              {event.venueDescription}
            </p>

           <a
  href={event.mapsUrl}
  target="_blank"
  rel="noreferrer"
  className="mt-8 inline-flex items-center rounded-full bg-[#8D440D] px-8 py-3 text-sm uppercase tracking-[0.2em] text-[#F8F2E7] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#6E3409]"
>
  View on Google Maps
</a>
          </div>
        </div>
      </div>
    </section>
  );
}