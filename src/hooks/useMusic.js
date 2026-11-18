import { useCallback, useEffect, useRef, useState } from "react";

export default function useMusic(src) {
  const ref = useRef(null);
  const resume = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const a = new Audio(src);
    a.loop = true;
    a.volume = 0.6;
    a.preload = "auto";
    const on = () => setPlaying(true);
    const off = () => setPlaying(false);
    const err = () => setFailed(true);
    a.addEventListener("play", on);
    a.addEventListener("pause", off);
    a.addEventListener("error", err);
    ref.current = a;

    // jeda saat tab disembunyikan, lanjut saat kembali
    const onVis = () => {
      if (document.hidden) {
        resume.current = !a.paused;
        a.pause();
      } else if (resume.current) {
        resume.current = false;
        a.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      a.removeEventListener("play", on);
      a.removeEventListener("pause", off);
      a.removeEventListener("error", err);
      a.pause();
    };
  }, [src]);

  const play = useCallback(() => ref.current?.play().catch(() => {}), []);
  const toggle = useCallback(() => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) a.play().catch(() => {});
    else a.pause();
  }, []);

  return { playing, failed, play, toggle };
}
