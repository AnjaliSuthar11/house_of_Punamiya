import FlipCard from "./FlipCard";
import ScratchCard from "./ScratchCard";

export default function MenuSection() {
  const menuImages = [
    "/assets/punamiya/House of Punamiya menu card ( From the Bar )-01.jpg",
    "/assets/punamiya/House of Punamiya menu card ( From the cafe)-01.jpg",
    "/assets/punamiya/House of Punamiya menu card 08-01.jpg",
  ];
  const cards = [
    {
      front: "/assets/punamiya/House of Punamiya logo-01.jpg",
      back: "/assets/punamiya/House of Punamiya menu card ( From the Bar )-01.jpg",
    },
    {
      front: "/assets/punamiya/House of Punamiya logo-01.jpg",
      back: "/assets/punamiya/House of Punamiya menu card ( From the cafe)-01.jpg",
    },
    {
      front: "/assets/punamiya/House of Punamiya logo-01.jpg",
      back: "/assets/punamiya/House of Punamiya menu card 08-01.jpg",
    },
  ];


  return (
  
      


    <section id="menu" className="md:py-40 py-20 ">

     
      {/* Heading */}
      <div className="text-center">
        {/* <p
          className="uppercase tracking-[0.5em] text-lg text-[#8D440D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Culinary Experience
        </p> */}

        <h2
          className="mt-3 text-2xl md:text-3xl uppercase text-[#8D440D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
           Culinary Experience

        </h2>

       <div className="flex items-center justify-center gap-3 pt-2">
  <div className="h-px w-20 bg-[#8D440D]" />
  <span className="text-[#8D440D] text-xl">✦</span>
  <div className="h-px w-20 bg-[#8D440D]" />
</div>
      </div>

      <div className="flex justify-center items-center gap-10 pt-16 flex-col md:flex-row">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
            frontImage={card.front}
            backImage={card.back}
            delay={index * 350}
          />
        ))}
      </div>

    </section>
  );
}
    