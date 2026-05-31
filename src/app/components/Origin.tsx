export default function Origin() {
  return (
    <section
      id="origin"
      className="mx-auto max-w-6xl px-6 py-20 md:py-32"
    >
      <div className="mb-6 h-1 w-16 bg-red-500"></div>

      <p className="uppercase tracking-[0.3em] text-red-500">
        FILE 01
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        Origin Dossier
      </h2>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.08)]">
        <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-red-400">
            Status: Active
          </span>

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-400">
            Full Stack Developer
          </span>
        </div>

        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          I'm Sagar Verma, a full-stack developer passionate
          about building scalable web applications and
          creating meaningful user experiences.

          I enjoy turning ideas into real products through
          clean architecture, problem-solving, and continuous
          learning.

          My focus is on developing applications that are
          functional, maintainable, and designed with users
          in mind.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="group rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
          <p className="mb-2 text-xs uppercase tracking-widest text-red-500">
            Trait 01
          </p>

          <h3 className="text-xl font-bold">
            Problem Solver
          </h3>

          <p className="mt-3 text-zinc-400">
            Building solutions for real-world challenges.
          </p>
        </div>

        <div className="group rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
          <p className="mb-2 text-xs uppercase tracking-widest text-red-500">
            Trait 02
          </p>

          <h3 className="text-xl font-bold">
            Full Stack Builder
          </h3>

          <p className="mt-3 text-zinc-400">
            From database design to user interfaces.
          </p>
        </div>

        <div className="group rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]">
          <p className="mb-2 text-xs uppercase tracking-widest text-red-500">
            Trait 03
          </p>

          <h3 className="text-xl font-bold">
            Lifelong Learner
          </h3>

          <p className="mt-3 text-zinc-400">
            Continuously exploring new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}