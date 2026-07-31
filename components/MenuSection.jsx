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
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {menuImages.map((image, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-xl shadow-lg border border-[#D6B06A]/30"
          >
            <img
              src={image}
              alt={`Menu ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
}