"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("✅ Signal Sent Successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send signal.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20 md:py-32"
    >
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

          <a
            href="mailtosagaranytime@gmail.com"
            className="mt-3 block text-lg font-semibold"
          >
            mailtosagaranytime@gmail.com
          </a>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-red-500">
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            LinkedIn
          </p>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-lg font-semibold"
          >
            LinkedIn Profile
          </a>
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

      {/* Contact Form */}
      <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8">
        <h3 className="text-2xl font-bold">
          Mission Briefing
        </h3>

        <p className="mt-2 text-zinc-400">
          Leave a message and I'll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl border border-zinc-800 bg-black/40 p-4 text-white outline-none transition focus:border-red-500"
          />

          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border border-zinc-800 bg-black/40 p-4 text-white outline-none transition focus:border-red-500"
          />

          <textarea
            rows={5}
            required
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full rounded-xl border border-zinc-800 bg-black/40 p-4 text-white outline-none transition focus:border-red-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading
              ? "Transmitting..."
              : "Send Signal"}
          </button>

          {status && (
            <p className="pt-2 text-sm text-zinc-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}