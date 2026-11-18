# Wedding Countdown

Undangan digital + hitung mundur menuju **Sabtu, 5 Desember 2026, pukul 09.00 WIB**.
React + Vite + Tailwind CSS, responsif di semua perangkat.

## Fitur
- Halaman pembuka "Buka Undangan" yang sekaligus memutar musik
- Hitung mundur real-time (zona waktu WIB)
- Kelopak mawar jatuh, hati berdetak, animasi muncul saat scroll
- Detail acara, tombol lokasi Google Maps, dan "Simpan ke Kalender" (.ics)
- Galeri foto dengan lightbox (klik, panah keyboard, Esc)
- Tombol musik melayang; musik berhenti otomatis saat tab disembunyikan

## Yang perlu Anda ganti
1. **Nama, tanggal, lokasi, teks**: `src/config.js`
2. **Foto**: taruh di `public/photos/` (`hero.jpg`, `foto-1.jpg` sampai `foto-6.jpg`).
   Sebelum diisi, tampil placeholder. Kompres foto (lebar maks 1600px, di bawah 400 KB).
3. **Lagu**: ganti `public/music/lagu.mp3` dengan lagu Anda (nama sama, atau ubah path di config).
   File bawaan hanyalah musik box orisinal sebagai contoh. Pakai lagu yang Anda punya hak/lisensinya.

## Jalankan lokal
```bash
npm install
npm run dev
```

## Deploy ke Vercel
Push ke GitHub, lalu Add New Project di vercel.com, pilih repo, **Deploy**. Preset Vite terdeteksi otomatis.

## Jalankan langsung dari GitHub
`https://stackblitz.com/github/USERNAME/NAMA-REPO`
