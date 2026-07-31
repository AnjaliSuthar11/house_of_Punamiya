export default function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        className="text-[#B58B47]"
      >
        <path d="M4 60C4 32 14 12 40 6" />

        <path
          d="M10 58c2-18 10-30 26-36"
          opacity="0.6"
        />

        <path d="M14 34c-6-2-9-8-6-13 4 1 7 5 7 10" />

        <path d="M26 20c-2-6 1-12 7-13 1 5-1 10-6 13" />

        <path d="M40 12c4-4 10-4 13 0-3 4-9 5-13 1" />

        <circle
          cx="18"
          cy="42"
          r="2.2"
        />

        <circle
          cx="33"
          cy="15"
          r="1.6"
        />
      </g>
    </svg>
  );
}