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
    { src: "/photos/foto-1.jpg", caption: "Awal kami bertemu" },
    { src: "/photos/foto-2.jpg", caption: "Tawa yang sama" },
    { src: "/photos/foto-3.jpg", caption: "Perjalanan kita" },
    { src: "/photos/foto-4.jpg", caption: "Hari yang dinanti" },
    { src: "/photos/foto-5.jpg", caption: "Bersama, selalu" },
    { src: "/photos/foto-6.jpg", caption: "Menuju selamanya" },
  ],
};
