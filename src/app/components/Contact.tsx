export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20 md:py-32"
    >
      {/* Section Header */}
      <div className="mb-6 h-1 w-16 bg-red-500"></div>

      <p className="uppercase tracking-[0.3em] text-red-500">
        Contact
      </p>

      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
        Send A Signal
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        Ready for the next mission? Whether it's a project,
        internship opportunity, freelance work, or just a
        conversation about technology, I'm always open to
        connecting.
      </p>

      {/* Contact Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-red-500">
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            Email
          </p>

          <p className="mt-3 text-lg font-semibold">
            mailtosagaranytime@gmail.com
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-red-500">
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            LinkedIn
          </p>

          <p className="mt-3 text-lg font-semibold">
            linkedin.com/in/your-profile
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-red-500">
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            GitHub
          </p>

          <a
  href="https://github.com/Sagarverma012"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 block text-lg font-semibold"
>
  github.com/Sagarverma012
</a>
        </div>
      </div>

      {/* Mission Briefing Form */}
      <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
        <h3 className="text-2xl font-bold">
          Mission Briefing
        </h3>

        <p className="mt-2 text-zinc-400">
          Leave a message and I'll get back to you.
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-zinc-800 bg-black/40 p-4 text-white outline-none transition focus:border-red-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-zinc-800 bg-black/40 p-4 text-white outline-none transition focus:border-red-500"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full rounded-xl border border-zinc-800 bg-black/40 p-4 text-white outline-none transition focus:border-red-500"
          />

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="submit"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
            >
              Send Signal
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}