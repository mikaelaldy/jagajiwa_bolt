# Jaga Jiwa - Platform Dukungan Kesehatan Mental

Jaga Jiwa adalah sebuah platform web yang dirancang untuk memberikan dukungan kesehatan mental, dengan fokus khusus pada deteksi dini dan dampak kecanduan judi online pada anak muda di Indonesia. Aplikasi ini menyediakan serangkaian alat bantu mandiri, informasi edukatif, dan akses ke sumber daya darurat.

## 🌐 Demo Website

**Live Demo:** [https://jagajiwa.mikascend.xyz/](https://jagajiwa.mikascend.xyz/)

## Fitur Utama

- **Self Assessment:** Pengguna dapat mengambil kuis interaktif untuk mengevaluasi risiko kecanduan judi online dan tingkat kesehatan mental umum (kecemasan, depresi).
- **JiwaBot:** Chatbot AI yang empatik, dirancang untuk berdiskusi dan memberikan dukungan awal terkait masalah perjudian dan kesehatan mental.
- **Mood Tracker:** Fitur untuk memantau dan mencatat perubahan suasana hati harian, lengkap dengan catatan opsional. Data divisualisasikan dalam bentuk grafik dan kalender untuk membantu pengguna mengenali pola mood.
- **Riwayat Mood & Assessment:** Pengguna dapat melihat riwayat mood dan hasil assessment sebelumnya. Data mood dan assessment dapat diedit atau dihapus.
- **Insight Edukatif & Sumber Daya:** (Direalisasikan melalui konten statis atau bagian informasi di halaman-halaman terkait) Menyediakan artikel, panduan, dan materi pendukung.
- **Kontak Darurat:** Akses cepat ke daftar layanan krisis nasional dan organisasi pendukung kesehatan mental di Indonesia.
- **Desain Responsif & Modern:** Antarmuka yang bersih, modern, dan mudah diakses di berbagai perangkat, dirancang dengan mempertimbangkan Gen Z.
- **Privasi:** Tidak memerlukan login, dan semua data pengguna (hasil assessment, catatan mood) disimpan secara lokal di peramban pengguna.

## Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Charting:** Recharts
- **Calendar:** React Calendar
- **Browser Automation (untuk Screenshots):** Playwright

## Prasyarat

Pastikan Anda memiliki Node.js dan npm (atau Yarn/pnpm) terinstal di sistem Anda.
- Node.js (disarankan versi LTS terbaru, misal v18.x atau lebih tinggi)
- npm (biasanya terinstal bersama Node.js)

## Instalasi

1.  **Clone repository:**
    ```bash
    git clone https://github.com/yourusername/jaga-jiwa.git
    cd jaga-jiwa
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    ```
    atau jika Anda menggunakan Yarn:
    ```bash
    yarn install
    ```

## Menjalankan Aplikasi (Development)

Untuk menjalankan aplikasi dalam mode development (dengan hot-reloading):

```bash
npm run dev
```

Aplikasi akan tersedia secara default di `http://localhost:5173`.

## Skrip yang Tersedia

Dalam package.json, Anda akan menemukan beberapa skrip:

-   `npm run dev`: Menjalankan aplikasi dalam mode development.
-   `npm run build`: Mem-build aplikasi untuk production ke folder `dist`.
-   `npm run lint`: Menjalankan ESLint untuk memeriksa kode.
-   `npm run preview`: Menjalankan server lokal untuk melihat build production dari folder `dist`.
-   `node screenshots.mjs`: (Memerlukan server dev berjalan) Mengambil screenshot dari halaman-halaman utama aplikasi menggunakan Playwright dan menyimpannya di folder `screenshots`.

## Struktur Proyek

```
/public
  /logo.svg
/src
  /components
    /assessment      (QuestionCard, ResultCard)
    /chatbot        (ChatInput, ChatMessage)
    /emergency      (ContactCard)
    /layout         (Header, Footer, AppLayout)
    /mood           (MoodChart, MoodSelector, MoodCalendar)
    /ui             (Button, Card, Input, Logo)
  /data             (assessmentQuestions, chatbotResponses, emergencyContacts)
  /pages            (LandingPage, AssessmentPage, ChatbotPage, MoodTrackerPage, EmergencyPage, AssessmentHistoryPage, PrivacyPolicyPage, NotFoundPage)
  /types            (Definisi tipe TypeScript)
  /utils            (Fungsi helper: assessment, chatbot, storage)
  App.tsx           (Konfigurasi routing utama)
  main.tsx          (Titik masuk aplikasi React)
  index.css         (Styling global Tailwind)
.bolt               (Konfigurasi internal Bolt)
eslint.config.js
index.html
package.json
postcss.config.js
README.md
screenshots.mjs     (Skrip Playwright untuk screenshot)
tailwind.config.js
tsconfig.json
... (file konfigurasi lainnya)
```

## Fitur Detail

### 🧠 Self Assessment
- **Gambling Assessment:** 8 pertanyaan untuk mengevaluasi risiko kecanduan judi online
- **Mental Health Assessment:** 8 pertanyaan untuk mengevaluasi tingkat kecemasan dan depresi
- **Risk Scoring:** Sistem penilaian tiga tingkat (rendah, sedang, tinggi)
- **Personalized Recommendations:** Rekomendasi yang disesuaikan berdasarkan hasil

### 🤖 JiwaBot
- **Intelligent Response System:** AI yang dapat mengenali kata kunci terkait perjudian dan kesehatan mental
- **Empathetic Conversations:** Respon yang empatik dan mendukung
- **Crisis Detection:** Mampu mendeteksi situasi darurat dan memberikan panduan bantuan

### 📊 Mood Tracker
- **Daily Mood Logging:** Pencatatan mood harian dengan 5 tingkatan
- **Visual Analytics:** Grafik garis untuk melihat pola mood dari waktu ke waktu
- **Calendar View:** Kalender visual dengan indikator warna mood
- **Notes & Context:** Catatan opsional untuk memberikan konteks pada setiap entri mood
- **Edit & Delete:** Kemampuan untuk mengedit atau menghapus entri mood

### 🆘 Emergency Support
- **Crisis Hotlines:** Daftar lengkap kontak darurat nasional
- **Professional Resources:** Informasi organisasi kesehatan mental di Indonesia
- **Crisis Management Guide:** Panduan langkah-demi-langkah untuk situasi krisis
- **Supporting Others:** Informasi untuk membantu teman yang sedang krisis

### 🔒 Privacy & Security
- **No Registration Required:** Tidak perlu membuat akun atau login
- **Local Storage Only:** Semua data disimpan hanya di perangkat pengguna
- **No Data Tracking:** Tidak ada pelacakan atau pengumpulan data pribadi
- **Complete Anonymity:** Penggunaan sepenuhnya anonim

## Kontribusi

Saat ini, kontribusi dari pihak luar belum dibuka secara formal. Namun, jika Anda memiliki saran atau menemukan bug, silakan buat *issue* di repository GitHub proyek.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.

---

*Dibuat dengan ❤️ untuk kesehatan mental Indonesia.* 

**Creator:** [@mikascend](https://twitter.com/mikascend) 