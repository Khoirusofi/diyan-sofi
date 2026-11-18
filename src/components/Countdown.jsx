import useCountdown from "../hooks/useCountdown.js";

const pad = (n) => String(n).padStart(2, "0");

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center px-2 py-4 sm:px-4 sm:py-2">
      <span
        aria-hidden="true"
        className="font-display text-[clamp(3.5rem,14vw,8rem)] font-light leading-none tabular-nums"
      >
        {value}
      </span>
      <span className="mt-2 font-display text-lg italic text-rosewood sm:text-2xl">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { done, days, hours, minutes, seconds } = useCountdown();
  if (done) return null;
  return (
    <div
      role="timer"
      aria-label={`${days} hari ${hours} jam ${minutes} menit ${seconds} detik lagi`}
      className="mx-auto mt-10 grid max-w-3xl grid-cols-2 divide-plum/15 sm:mt-12 sm:grid-cols-4 sm:divide-x"
    >
      <Unit value={days} label="hari" />
      <Unit value={pad(hours)} label="jam" />
      <Unit value={pad(minutes)} label="menit" />
      <Unit value={pad(seconds)} label="detik" />
    </div>
  );
}
