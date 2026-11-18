import { useEffect, useState } from "react";
import { target } from "../lib.js";

function getParts() {
  const diff = Math.max(0, target - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    done: diff === 0,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export default function useCountdown() {
  const [parts, setParts] = useState(getParts);
  useEffect(() => {
    const id = setInterval(() => setParts(getParts()), 1000);
    return () => clearInterval(id);
  }, []);
  return parts;
}
