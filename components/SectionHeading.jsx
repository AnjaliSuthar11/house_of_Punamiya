export default function SectionHeading({ kicker, title }) {
  return (
    <header className="reveal text-center">
      <p className="font-body text-[0.6rem] tracking-[0.55em] text-gold/75 uppercase sm:text-xs">
        {kicker}
      </p>

      <h2 className="font-display mt-4 text-2xl tracking-[0.16em] text-champagne uppercase sm:text-4xl">
        {title}
      </h2>

      <div className="mx-auto mt-5 flex w-40 items-center gap-3">
        <span className="h-px flex-1 bg-gold/40"></span>
        <span className="h-1.5 w-1.5 rotate-45 bg-gold/70"></span>
        <span className="h-px flex-1 bg-gold/40"></span>
      </div>
    </header>
  );
}