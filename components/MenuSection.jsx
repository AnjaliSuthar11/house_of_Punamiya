import ScratchCard from "./ScratchCard";

export default function MenuSection() {
  const menuImages = [
    "/assets/punamiya/House of Punamiya menu card ( From the Bar )-01.jpg",
    "/assets/punamiya/House of Punamiya menu card ( From the cafe)-01.jpg",
    "/assets/punamiya/House of Punamiya menu card ( From the kitchen )-01.jpg",
  ];

  return (
    <section
      id="menu"
      className="px-6 py-20 bg-[#F9F5EF]"
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

        <div className="flex justify-center items-center gap-3 mt-5">
          <div className="w-20 h-px bg-[#8D440D]" />
          <span className="text-[#8D440D]">✦</span>
          <div className="w-20 h-px bg-[#8D440D]" />
        </div>
      </div>

      {/* Menu Images */}
      <div className="flex justify-center items-center gap-10 pt-8 flex-col md:flex-row">
        {menuImages.map((image, index) => (
          <div
            key={index}
            className=" "
          >
            <ScratchCard width={360} height={480}>

           
            <img
              src={image}
              alt={`Menu ${index + 1}`}
              className="w-full h-full object-conatin transition-transform duration-500 group-hover:scale-105 cursor-pointer"
            />
             </ScratchCard>
          </div>
        ))}
      </div>
    </section>
  );
}