export default function Arsenal() {
  return (
    <section
      id="arsenal"
      className="mx-auto max-w-6xl px-6 py-20 md:py-32"
    >
      <div className="mb-6 h-1 w-16 bg-red-500"></div>

      <p className="uppercase tracking-[0.3em] text-red-500">
        Web Arsenal
      </p>

<h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Tools, Technologies & Powers
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Frontend */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="text-xl font-bold text-red-500">
            🕸 Frontend Systems
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="text-xl font-bold text-red-500">
            🕸 Backend Systems
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {["PHP", "Node.js", "Express"].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="text-xl font-bold text-red-500">
            🕸 Data Core
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {["MySQL", "MongoDB"].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="text-xl font-bold text-red-500">
            🕸 Utility Belt
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Git",
              "GitHub",
              "Postman",
              "VS Code",
              "XAMPP",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Learning */}
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
        <h3 className="text-xl font-bold text-red-500">
          🕸 Currently Upgrading
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "Next.js", "TypeScript"].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-red-600 px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}