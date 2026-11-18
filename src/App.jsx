import { useState } from "react";
import { WEDDING } from "./config.js";
import useMusic from "./hooks/useMusic.js";
import Cover from "./components/Cover.jsx";
import Petals from "./components/Petals.jsx";
import Hero from "./components/Hero.jsx";
import Event from "./components/Event.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import MusicButton from "./components/MusicButton.jsx";

export default function App() {
  const [open, setOpen] = useState(false);
  const music = useMusic(WEDDING.music.src);

  const handleOpen = () => {
    music.play(); // dipanggil dari klik pengguna, jadi diizinkan browser
    setOpen(true);
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="glow pointer-events-none fixed left-1/2 top-1/3 z-0 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rosewood/20 blur-3xl"
      />
      <Petals />
      <Cover open={open} onOpen={handleOpen} />
      <main>
        <Hero />
        <Event />
        <Gallery />
        <Footer />
      </main>
      {open && !music.failed && <MusicButton playing={music.playing} onToggle={music.toggle} />}
    </>
  );
}
