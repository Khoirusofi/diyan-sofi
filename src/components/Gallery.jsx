import { useCallback, useEffect, useState } from "react";
import { WEDDING } from "../config.js";
import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";

const ratios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]"];

function Lightbox({ index, onClose, onMove }) {
  const photos = WEDDING.photos;

  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    window.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [onClose, onMove]);

  const nav =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-blush/15 text-2xl text-blush transition hover:bg-blush/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blush";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galeri foto"
      className="fixed inset-0 z-50 flex items-center justify-center bg-plum/95 p-4"
      onClick={onClose}
    >
      <figure className="max-h-full w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <Photo
          src={photos[index].src}
          alt={photos[index].caption}
          className="mx-auto max-h-[78vh] min-h-[50vh] w-full rounded-2xl"
        />
        <figcaption className="mt-4 text-center font-display text-xl italic text-blush">
          {photos[index].caption}
        </figcaption>
      </figure>
      <button autoFocus onClick={onClose} aria-label="Tutup" className={`${nav} right-4 top-8`}>
        ×
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMove(-1);
        }}
        aria-label="Foto sebelumnya"
        className={`${nav} left-3`}
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMove(1);
        }}
        aria-label="Foto berikutnya"
        className={`${nav} right-3`}
      >
        ›
      </button>
    </div>
  );
}

export default function Gallery() {
  const photos = WEDDING.photos;
  const [index, setIndex] = useState(null);
  const close = useCallback(() => setIndex(null), []);
  const move = useCallback(
    (d) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length]
  );

  if (!photos.length) return null;

  return (
    <section className="relative z-10 px-5 py-20">
      <Reveal className="mx-auto max-w-5xl text-center">
        {/* <p className="font-display text-xl italic text-sage">Momen kami</p> */}
        <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">Galeri</h2>
      </Reveal>

      <div className="mx-auto mt-10 max-w-5xl columns-2 gap-3 sm:gap-4 md:columns-3">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 120} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              onClick={() => setIndex(i)}
              aria-label={`Buka foto: ${p.caption}`}
              className="group block w-full overflow-hidden rounded-2xl border border-rosewood/15 shadow-md shadow-rosewood/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-rosewood"
            >
              <Photo
                src={p.src}
                alt={p.caption}
                className={`w-full ${ratios[i % ratios.length]} transition duration-700 group-hover:scale-105`}
              />
            </button>
          </Reveal>
        ))}
      </div>

      {index !== null && <Lightbox index={index} onClose={close} onMove={move} />}
    </section>
  );
}
