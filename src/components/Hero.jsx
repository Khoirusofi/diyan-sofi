import { WEDDING } from "../config.js";
import { dateLong, timeText } from "../lib.js";
import useCountdown from "../hooks/useCountdown.js";
import Countdown from "./Countdown.jsx";
import Heart from "./Heart.jsx";
import Photo from "./Photo.jsx";

export default function Hero() {
  const { done } = useCountdown();
  return (
    <section className="relative z-10 flex min-h-dvh items-center justify-center px-5 py-16">
      <div className="rise w-full max-w-5xl text-center">
        <div className="mx-auto w-48 rounded-t-full border border-rosewood/30 p-2 sm:w-60">
          <Photo
            src={WEDDING.hero}
            alt={`${WEDDING.groom} dan ${WEDDING.bride}`}
            className="aspect-[3/4] w-full rounded-t-full"
          />
        </div>

        <h1 className="mt-8 flex flex-col items-center justify-center gap-1 font-display text-[clamp(3rem,11vw,7rem)] font-light italic leading-[1.05] md:flex-row md:gap-6">
          <span>{WEDDING.groom}</span>
          <span className="flex items-center gap-3 text-rosewood">
            {/* <span className="hidden h-px w-8 bg-rosewood/40 md:block" /> */}
            <Heart className="beat h-[0.45em] w-[0.45em]" />
            {/* <span className="hidden h-px w-8 bg-rosewood/40 md:block" /> */}
          </span>
          <span>{WEDDING.bride}</span>
        </h1>

        <p className="mx-auto mt-5 max-w-md font-display text-xl italic text-sage sm:text-2xl">
          {/* {done ? "Hari ini, dua hati menjadi satu." : WEDDING.tagline} */}
        </p>

        <Countdown />

        <p className="mt-10 font-body text-sm font-light uppercase tracking-[0.2em] sm:text-base">
          {dateLong}, {timeText}
        </p>
      </div>
    </section>
  );
}
