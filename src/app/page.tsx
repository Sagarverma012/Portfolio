import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Origin from "./components/Origin";
import Arsenal from "./components/Arsenal";
import Missions from "./components/Missions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import HUDGrid from "./components/effects/HUDGrid";
import ScanLines from "./components/effects/ScanLines";
import WebOverlay from "./components/effects/WebOverlay";

export default function Home() {
  return (
    <main className="relative text-white">
      {/* Background Dark Overlay */}
      <div className="fixed inset-0 z-0 bg-black/20" />

      {/* Effects Layer */}
      <HUDGrid />
      <ScanLines />
      <WebOverlay />

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Origin />
        <Arsenal />
        <Missions />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}