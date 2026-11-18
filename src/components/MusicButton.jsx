export default function MusicButton({ playing, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={playing ? "Jeda musik" : "Putar musik"}
      aria-pressed={playing}
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-rosewood/30 bg-blush/80 text-rosewood shadow-lg backdrop-blur transition hover:bg-blush focus:outline-none focus-visible:ring-2 focus-visible:ring-rosewood"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`w-[3px] rounded-full bg-current ${playing ? "eq" : "h-1"}`}
            style={{ animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </span>
    </button>
  );
}
