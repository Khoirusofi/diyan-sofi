import { WEDDING } from "../config.js";
import Heart from "./Heart.jsx";
import Reveal from "./Reveal.jsx";

export default function Footer() {
  return (
    <footer className="relative z-10 px-5 pb-24 pt-16 text-center">
      <Reveal>
        {/* <Heart className="beat mx-auto h-6 w-6 text-rosewood" />
        <p className="mx-auto mt-5 max-w-md font-display text-xl italic">
          Merupakan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.
        </p> */}
        <p className="mt-6 font-display text-3xl italic text-rosewood">
          {WEDDING.groom} &amp; {WEDDING.bride}
        </p>
      </Reveal>
    </footer>
  );
}
