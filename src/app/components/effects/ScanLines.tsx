export default function ScanLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] opacity-20">
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 3px)",
        }}
      />
    </div>
  );
}