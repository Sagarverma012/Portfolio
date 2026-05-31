export default function WebOverlay() {
  return (
    <>
      {/* Top Left Web */}
      <div className="pointer-events-none fixed left-0 top-0 z-[1] opacity-10">
        <svg
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
        >
          <line x1="0" y1="0" x2="250" y2="250" stroke="white" />
          <line x1="125" y1="0" x2="250" y2="125" stroke="white" />
          <line x1="0" y1="125" x2="125" y2="250" stroke="white" />

          <circle
            cx="0"
            cy="0"
            r="60"
            stroke="white"
          />
          <circle
            cx="0"
            cy="0"
            r="120"
            stroke="white"
          />
          <circle
            cx="0"
            cy="0"
            r="180"
            stroke="white"
          />
        </svg>
      </div>

      {/* Bottom Right Web */}
      <div className="pointer-events-none fixed bottom-0 right-0 z-[1] rotate-180 opacity-10">
        <svg
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
        >
          <line x1="0" y1="0" x2="250" y2="250" stroke="white" />
          <line x1="125" y1="0" x2="250" y2="125" stroke="white" />
          <line x1="0" y1="125" x2="125" y2="250" stroke="white" />

          <circle
            cx="0"
            cy="0"
            r="60"
            stroke="white"
          />
          <circle
            cx="0"
            cy="0"
            r="120"
            stroke="white"
          />
          <circle
            cx="0"
            cy="0"
            r="180"
            stroke="white"
          />
        </svg>
      </div>
    </>
  );
}