import { WEDDING } from "../config.js";
import { dateLong, timeText, downloadIcs } from "../lib.js";
import Reveal from "./Reveal.jsx";

const btn =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm tracking-wide transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rosewood focus-visible:ring-offset-2 focus-visible:ring-offset-mist";

export default function Event() {
  const { title, venue, address, mapsUrl } = WEDDING.event;
  // return (
  //   <section className="relative z-10 px-5 py-20">
  //     <Reveal className="mx-auto max-w-xl rounded-[2rem] border border-rosewood/20 bg-blush/60 px-6 py-12 text-center shadow-xl shadow-rosewood/10 backdrop-blur sm:px-12">
  //       <p className="font-display text-xl italic text-sage">Save the date</p>
  //       <h2 className="mt-2 font-display text-4xl font-medium sm:text-5xl">{title}</h2>
  //       <div className="mx-auto my-6 h-px w-16 bg-rosewood/40" />
  //       <p className="font-display text-2xl">{dateLong}</p>
  //       <p className="mt-1 font-body font-light tracking-wide">Pukul {timeText}</p>
  //       <p className="mt-6 font-display text-2xl italic">{venue}</p>
  //       <p className="font-body font-light text-plum/80">{address}</p>
  //       <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
  //         {mapsUrl && (
  //           <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`${btn} bg-plum text-blush hover:bg-rosewood`}>
  //             Lihat Lokasi
  //           </a>
  //         )}
  //         <button onClick={downloadIcs} className={`${btn} border border-plum/40 hover:bg-plum/5`}>
  //           Simpan ke Kalender
  //         </button>
  //       </div>
  //     </Reveal>
  //   </section>
  // );
}
