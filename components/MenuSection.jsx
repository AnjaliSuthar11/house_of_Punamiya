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
      className=" py-20 "
    >
      {/* Heading */}
      <div className="text-center">
        <p
          className="uppercase tracking-[0.5em] text-sm text-[#8D440D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Culinary Experience
        </p>

        <h2
          className="mt-3 text-4xl md:text-5xl uppercase text-[#8D440D]"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Our Menu
        </h2>

        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="w-24 h-px bg-[#8D440D]/30"></div>
          <span className="text-[#8D440D] text-lg">❦</span>
          <div className="w-24 h-px bg-[#8D440D]/30"></div>
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