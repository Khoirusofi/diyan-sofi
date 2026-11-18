import { useEffect, useState } from "react";
import { WEDDING } from "../config.js";
import { dateLong } from "../lib.js";
import Heart from "./Heart.jsx";

export default function Cover({ open, onOpen }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "" : "hidden";
    if (!open) return;
    const t = setTimeout(() => setGone(true), 1000);
    return () => clearTimeout(t);
  }, [open]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-1000 ${
        open ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ background: "radial-gradient(ellipse at 50% 20%, #F9EEEA 0%, #EBD9D4 55%, #D9BBBA 100%)" }}
    >
      {/* <p className="font-display text-xl italic text-sage sm:text-2xl">Undangan Pernikahan</p> */}
      <h1 className="mt-4 font-display text-[clamp(3rem,13vw,6.5rem)] font-light italic leading-[1.05]">
        {WEDDING.groom}
        <span className="mx-3 text-rosewood">&amp;</span>
        {WEDDING.bride}
      </h1>
      <p className="mt-5 font-body text-sm font-light uppercase tracking-[0.2em] sm:text-base">
        {dateLong}
      </p>
      <button
        onClick={onOpen}
        className="mt-12 inline-flex items-center gap-2 rounded-full bg-plum px-8 py-3.5 font-body text-sm tracking-wide text-blush shadow-lg shadow-plum/20 transition hover:bg-rosewood focus:outline-none focus-visible:ring-2 focus-visible:ring-rosewood focus-visible:ring-offset-2 focus-visible:ring-offset-mist"
      >
        <Heart className="beat h-4 w-4" />
        
      </button>
      {/* <p className="mt-4 font-body text-xs font-light text-plum/60">Nyalakan musik untuk pengalaman terbaik</p> */}
    </div>
  );
}
