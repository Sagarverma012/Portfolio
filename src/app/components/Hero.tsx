"use client";

import { motion } from "framer-motion";
import ParallaxWrapper from "./effects/ParallaxWrapper";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="select-none text-[10rem] font-black uppercase tracking-tight text-white/[0.01] sm:text-[14rem] lg:text-[18rem]">
              VERSE
        </h1>
      </div>

      {/* Red Orb */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-red-500/20 blur-[120px]"
      />

      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Floating Panels */}

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-10 top-40 hidden lg:block"
      >
        <div className="rotate-[-8deg] rounded-xl border border-red-500/30 bg-black/50 px-5 py-3 backdrop-blur">
          WEB SHOOTERS ONLINE
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-20 bottom-40 hidden lg:block"
      >
        <div className="rotate-[6deg] rounded-xl border border-blue-500/30 bg-black/50 px-5 py-3 backdrop-blur">
          EARTH-616
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-20 top-60 hidden lg:block"
      >
        <div className="rotate-[8deg] rounded-xl border border-blue-500/30 bg-black/50 px-5 py-3 backdrop-blur">
          SYSTEM ONLINE
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-32 bottom-36 hidden lg:block"
      >
        <div className="rotate-[-5deg] rounded-xl border border-red-500/30 bg-black/50 px-5 py-3 backdrop-blur">
          THREAT LEVEL: LOW
        </div>
      </motion.div>

      {/* Main Content */}
      <ParallaxWrapper>

      <div className="relative z-10 text-center">
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-8 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-red-400"
        >
          STATUS: CODING
        </motion.div>

        <p className="mb-6 uppercase tracking-[0.4em] text-red-500">
          Friendly Neighborhood Developer
        </p>

        {/* Spider-Verse Title */}
        <div className="relative">
          <h1 className="absolute left-1 top-1 text-6xl font-black text-blue-500/40 sm:text-7xl md:text-8xl lg:text-9xl">
            SAGAR
          </h1>

          <h1 className="absolute -left-1 -top-1 text-6xl font-black text-red-500/40 sm:text-7xl md:text-8xl lg:text-9xl">
            SAGAR
          </h1>

          <h1 className="relative text-6xl font-black text-white sm:text-7xl md:text-8xl lg:text-9xl">
            SAGAR
          </h1>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
          Building scalable web applications,
          crafting interactive experiences,
          and turning ideas into digital realities.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="#missions"
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-red-700"
          >
            Explore Missions
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:scale-105 hover:border-white"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-zinc-500">
          <span>PHP</span>
          <span>•</span>
          <span>JavaScript</span>
          <span>•</span>
          <span>Node.js</span>
          <span>•</span>
          <span>MySQL</span>
          <span>•</span>
          <span>Next.js</span>
        </div>
      </div>
      </ParallaxWrapper>
    </section>
  );
}