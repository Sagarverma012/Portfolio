export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-zinc-400">
          Built by{" "}
          <span className="font-semibold text-white">
            Sagar Verma
          </span>
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          Friendly Neighborhood Developer
        </p>

        <p className="mt-4 text-xs uppercase tracking-widest text-zinc-600">
          © {new Date().getFullYear()} Mission Archive • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}