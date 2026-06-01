export default function Missions() {
  return (
    <section
      id="missions"
      className="mx-auto max-w-6xl px-6 py-20 md:py-32"
    >
      <div className="mb-6 h-1 w-16 bg-red-500"></div>

      <p className="uppercase tracking-[0.3em] text-red-500">
        Missions
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        Mission Log
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Mission 001 */}
        <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:border-red-500">
          <p className="text-sm uppercase tracking-widest text-red-500">
            MISSION LOG #001
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            PORTFOLIO
          </h3>

          <p className="mt-2 italic text-zinc-400">
            Building My Digital Headquarters.
          </p>

          <p className="mt-6 text-zinc-300">
            A Spider-inspired developer portfolio designed
            to showcase projects, skills, experience, and
            technical growth through an immersive and fully
            responsive user experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-xl bg-red-600 px-5 py-3 text-center font-semibold transition hover:bg-red-700"
            >
              View Mission
            </a>

            <a
              href="https://github.com/Sagarverma012/Portfolio"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-center transition hover:border-white"
            >
              Mission Repository
            </a>
          </div>
        </div>

        {/* Mission 002 */}
        <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-300 hover:border-red-500">
          <p className="text-sm uppercase tracking-widest text-red-500">
            MISSION LOG #002
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            EVOLBOOKS
          </h3>

          <p className="mt-2 italic text-zinc-400">
            Discover. Explore. Evolve.
          </p>

          <p className="mt-6 text-zinc-300">
            A PHP MVC-based online book platform featuring
            authentication, recommendations, favorites,
            administration tools, and responsive design.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "PHP",
              "MySQL",
              "Bootstrap 5",
              "JavaScript",
              "MVC",
              "PHPMailer",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
             href="#" // live url link 
              className="rounded-xl bg-red-600 px-5 py-3 text-center font-semibold transition hover:bg-red-700"
            >
              View Mission
            </a>

            <a
              href="https://github.com/Sagarverma012/evolbooks"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-center transition hover:border-white"
            >
              Mission Repository
            </a>
          </div>
        </div>

        {/* Mission 003 */}
        <div className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-900/20 p-8 lg:col-span-2">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            MISSION LOG #003
          </p>

          <h3 className="mt-3 text-3xl font-bold">
            PROJECT UNDER CONSTRUCTION
          </h3>

          <p className="mt-4 text-zinc-400">
            A new mission is currently being developed and
            will be added to the archive soon.
          </p>

          <div className="mt-8">
            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}