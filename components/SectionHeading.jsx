export default function SectionHeading({ kicker, title }) {
  return (
    <header className="reveal text-center pt-20">
      <p className="tracking-[0.5em] md:tracking-[0.55em]  uppercase font-bold text-sm "
      style={{
            color: "#8D440D",
            fontFamily: "Cormorant Garamond, serif",
          }}>
        {kicker}
      </p>
     

      <h2 className="font-display mt-4 text-2xl tracking-[0.16em] uppercase sm:text-4xl" style={{
            color: "#8D440D",
            fontFamily: "Cormorant Garamond, serif",
            textShadow: "0 2px 8px rgba(0,0,0,.35)",
          }}>
        {title}
      </h2>

    </header>
  );
}