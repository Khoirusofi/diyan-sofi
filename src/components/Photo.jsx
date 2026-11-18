import { useState } from "react";
import Heart from "./Heart.jsx";

// Menampilkan foto; jika file belum ada, tampil placeholder yang rapi.
export default function Photo({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-blush to-[#D9A9AE] text-rosewood/60 ${className}`}
      >
        <Heart className="h-8 w-8" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
