// Semua yang perlu diubah ada di file ini.
export const WEDDING = {
  groom: "Diyan",
  bride: "Sofi",
  // Format ISO + zona waktu WIB (+07:00)
  date: "2026-12-05T09:00:00+07:00",
  tagline: "Dua hati, satu janji, selamanya.",

  event: {
    title: "Akad & Resepsi",
    venue: "Nama Gedung / Tempat",
    address: "Alamat lengkap, Kota",
    mapsUrl: "https://maps.app.goo.gl/UR7Jr2zEvHuzVm989", // tempel link Google Maps; kosongkan jika belum ada
    durationHours: 4,
  },

  // Taruh file lagu di public/music/lagu.mp3 (atau ganti path di bawah)
  music: { src: "/music/lagu.mp3" },

  // Taruh foto di public/photos/ (jpg/png/webp). Jika belum ada, tampil placeholder.
  hero: "/photos/hero.jpg",
  photos: [
    { src: "/photos/foto-1.jpeg", caption: "Awal kami bertemu" },
    { src: "/photos/foto-2.jpeg", caption: "Momen bahagia bersama" },
    { src: "/photos/foto-3.jpeg", caption: "Liburan bersama" },
    { src: "/photos/foto-4.jpeg", caption: "Momen spesial" },
    { src: "/photos/foto-5.jpeg", caption: "Kenangan indah" },
    { src: "/photos/foto-6.jpeg", caption: "Momen romantis" },
    { src: "/photos/foto-7.jpeg", caption: "Bersama keluarga" },
    { src: "/photos/foto-8.jpeg", caption: "Momen bahagia" },
    { src: "/photos/foto-9.jpeg", caption: "Kenangan manis" },
    { src: "/photos/foto-10.jpeg", caption: "Momen tak terlupakan" },
    { src: "/photos/foto-11.jpeg", caption: "Momen spesial" },
    { src: "/photos/foto-12.jpeg", caption: "Kenangan indah" },
  ],
};
