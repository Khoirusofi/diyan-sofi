import { useMemo } from "react";

// Posisi dibuat tetap (bukan acak tiap render) agar tidak berkedip.
export default function Petals({ count = 16 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 10 + ((i * 7) % 14);
        return {
          left: `${(i * 37) % 100}%`,
          size,
          duration: 14 + ((i * 5) % 12),
          delay: -((i * 3.3) % 20),
          drift: `${(i % 2 ? 1 : -1) * (40 + ((i * 11) % 90))}px`,
        };
      }),
    [count]
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.1,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": p.drift,
          }}
        />
      ))}
    </div>
  );
}
