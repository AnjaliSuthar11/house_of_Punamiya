import ScratchCard from "./ScratchCard";

export default function MenuSection() {
  const menuImages = [
    "/assets/punamiya/House of Punamiya menu card ( From the Bar )-01.jpg",
    "/assets/punamiya/House of Punamiya menu card ( From the cafe)-01.jpg",
    "/assets/punamiya/House of Punamiya menu card 08-01.jpg",
  ];

  return (
    <section
      id="menu"
      className=" md:py-40 "
    >
      {/* Heading */}
      <div className="text-center">
        <p
          className="uppercase tracking-[0.5em] text-lg text-[#8D440D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Culinary Experience
        </p>

        <h2
          className="mt-3 text-2xl md:text-3xl uppercase text-[#8D440D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
         An Afternoon Curated for the Inner Circle

        </h2>

       <div className="flex items-center justify-center gap-3 pt-2">
  <div className="h-px w-20 bg-[#8D440D]" />
  <span className="text-[#8D440D] text-xl">✦</span>
  <div className="h-px w-20 bg-[#8D440D]" />
</div>
      </div>

      {/* Menu Images */}
      <div className="flex justify-center items-center gap-10 pt-15 flex-col md:flex-row ">
        {menuImages.map((image, index) => (
          <div
            key={index}
            className="px-10 "
          >
            

           
            <img
              src={image}
              alt={`Menu ${index + 1}`}
              className="w-full h-full object-conatin transition-transform duration-500 group-hover:scale-105 cursor-pointer"
            />
             
          </div>
        ))}
      </div>
    </section>
  );
}