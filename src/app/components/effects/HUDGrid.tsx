export default function HUDGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_80%)]" />
    </div>
  );
}