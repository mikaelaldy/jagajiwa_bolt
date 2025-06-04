# Jaga Jiwa - Platform Dukungan Kesehatan Mental

Jaga Jiwa adalah sebuah platform web yang dirancang untuk memberikan dukungan kesehatan mental, dengan fokus khusus pada deteksi dini dan dampak kecanduan judi online pada anak muda di Indonesia. Aplikasi ini menyediakan serangkaian alat bantu mandiri, informasi edukatif, dan akses ke sumber daya darurat.

## 🌐 Demo Website

**Live Demo:** [https://jagajiwa.mikascend.xyz/](https://jagajiwa.mikascend.xyz/)

## Fitur Utama

- **Self Assessment:** Pengguna dapat mengambil kuis interaktif untuk mengevaluasi risiko kecanduan judi online dan tingkat kesehatan mental umum (kecemasan, depresi).
- **JiwaBot:** Chatbot AI canggih yang menggunakan Azure OpenAI dengan sistem fallback keyword-based. Dirancang khusus untuk memberikan dukungan empatik terkait masalah perjudian dan kesehatan mental dengan bahasa Indonesia yang sesuai Gen Z.
- **Mood Tracker:** Fitur untuk memantau dan mencatat perubahan suasana hati harian, lengkap dengan catatan opsional. Data divisualisasikan dalam bentuk grafik dan kalender untuk membantu pengguna mengenali pola mood.
- **Cloud Storage:** Integrasi dengan Azure Cosmos DB untuk penyimpanan data yang andal dengan fallback ke local storage.
- **Riwayat Mood & Assessment:** Pengguna dapat melihat riwayat mood dan hasil assessment sebelumnya. Data mood dan assessment dapat diedit atau dihapus.
- **Insight Edukatif & Sumber Daya:** (Direalisasikan melalui konten statis atau bagian informasi di halaman-halaman terkait) Menyediakan artikel, panduan, dan materi pendukung.
- **Kontak Darurat:** Akses cepat ke daftar layanan krisis nasional dan organisasi pendukung kesehatan mental di Indonesia.
- **Desain Responsif & Modern:** Antarmuka yang bersih, modern, dan mudah diakses di berbagai perangkat, dirancang dengan mempertimbangkan Gen Z.
- **Privasi:** Tidak memerlukan login, dan semua data pengguna (hasil assessment, catatan mood) disimpan secara anonim dengan ID unik pengguna.

## Tech Stack

### Frontend
- **React 18** dengan **TypeScript** untuk type safety dan developer experience yang optimal
- **Vite** sebagai build tool dan development server
- **React Router DOM** untuk routing dan navigasi
- **Tailwind CSS** untuk styling dan desain responsif
- **Framer Motion** untuk animasi dan transisi yang smooth
- **Lucide React** untuk icon set yang konsisten
- **Recharts** untuk visualisasi data dan grafik mood
- **React Calendar** untuk tampilan kalender mood tracker

### Backend & Cloud Services
- **Azure Cosmos DB** (Serverless) untuk penyimpanan data yang scalable dan reliable
- **Azure OpenAI** (GPT-4o) untuk chatbot AI yang canggih dan kontekstual
- **Azure AI Language** (untuk sentiment analysis - dalam pengembangan)

### Development Tools
- **ESLint** untuk code quality dan consistency
- **TypeScript** untuk static type checking
- **Playwright** untuk automated testing dan screenshot generation
- **PostCSS** dan **Autoprefixer** untuk CSS processing

### Package Manager
- **Bun** dan **npm** untuk dependency management

## Prasyarat

Pastikan Anda memiliki Node.js dan package manager terinstal di sistem Anda.
- Node.js (disarankan versi LTS terbaru, misal v18.x atau lebih tinggi)
- npm/Bun untuk package management
- Azure account (opsional, untuk cloud features)

## Instalasi

1.  **Clone repository:**
    ```bash
    git clone https://github.com/yourusername/jaga-jiwa.git
    cd jaga-jiwa
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    # atau
    bun install
    ```

3.  **Setup Environment Variables (Opsional):**
    Buat file `.env` untuk konfigurasi Azure (aplikasi akan berfungsi tanpa ini dengan fallback ke local storage):
    ```env
    VITE_AZURE_COSMOS_ENDPOINT=your_cosmos_endpoint
    VITE_AZURE_COSMOS_KEY=your_cosmos_key
    VITE_AZURE_COSMOS_DATABASE_NAME=your_database_name
    VITE_AZURE_OPENAI_ENDPOINT=your_openai_endpoint
    VITE_AZURE_OPENAI_API_KEY=your_openai_key
    VITE_AZURE_OPENAI_DEPLOYMENT_NAME=your_deployment_name
    ```

## Menjalankan Aplikasi (Development)

Untuk menjalankan aplikasi dalam mode development (dengan hot-reloading):

```bash
npm run dev
# atau
bun dev
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
  /services         (azureOpenAI, azureCosmosDB integration)
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
- **Cloud Storage:** Hasil assessment disimpan di Azure Cosmos DB dengan fallback ke local storage

### 🤖 JiwaBot - AI Chatbot
- **Azure OpenAI Integration:** Menggunakan GPT-4o untuk respons yang contextual dan empathic
- **Intelligent Fallback System:** Sistem keyword-based sebagai backup jika Azure OpenAI tidak tersedia
- **Mental Health Focus:** Dioptimalkan khusus untuk masalah kesehatan mental dan kecanduan judi online
- **Indonesian Language:** Menggunakan bahasa Indonesia yang sesuai dengan Gen Z
- **Crisis Detection:** Mampu mendeteksi situasi darurat dan memberikan panduan bantuan langsung
- **Conversation History:** Menyimpan dan memuat riwayat percakapan
- **Real-time Typing Indicators:** Animasi typing untuk user experience yang natural
- **System Prompt Engineering:** Prompt yang dirancang khusus untuk memberikan dukungan yang empatis dan bertanggung jawab

### 📊 Mood Tracker
- **Daily Mood Logging:** Pencatatan mood harian dengan 5 tingkatan
- **Visual Analytics:** Grafik garis untuk melihat pola mood dari waktu ke waktu
- **Calendar View:** Kalender visual dengan indikator warna mood
- **Notes & Context:** Catatan opsional untuk memberikan konteks pada setiap entri mood
- **Edit & Delete:** Kemampuan untuk mengedit atau menghapus entri mood
- **Cloud Synchronization:** Data mood tersinkronisasi dengan Azure Cosmos DB

### 🆘 Emergency Support
- **Crisis Hotlines:** Daftar lengkap kontak darurat nasional
- **Professional Resources:** Informasi organisasi kesehatan mental di Indonesia
- **Crisis Management Guide:** Panduan langkah-demi-langkah untuk situasi krisis
- **Supporting Others:** Informasi untuk membantu teman yang sedang krisis

### ☁️ Cloud Integration & Storage
- **Azure Cosmos DB:** Penyimpanan data yang scalable dan reliable
- **Anonymous User System:** Setiap pengguna mendapat ID unik tanpa perlu registrasi
- **Automatic Fallback:** Aplikasi otomatis beralih ke local storage jika cloud tidak tersedia
- **Error Handling:** Robust error handling untuk semua operasi cloud
- **Data Partitioning:** Data dipartisi berdasarkan user ID untuk performa optimal

### 🔒 Privacy & Security
- **No Registration Required:** Tidak perlu membuat akun atau login
- **Anonymous User IDs:** Setiap pengguna mendapat ID anonim yang unik
- **Local Storage Fallback:** Data tetap tersimpan lokal jika cloud tidak tersedia
- **No Personal Data Collection:** Tidak mengumpulkan data personal atau identifiable
- **Complete Privacy:** Penggunaan sepenuhnya anonim dengan proteksi privasi maksimal

## Deployment & Production

Aplikasi ini di-deploy menggunakan:
- **Frontend:** Static hosting (Netlify/Vercel compatible)
- **Backend Services:** Azure Cloud Services
- **CDN:** Global content delivery untuk performa optimal
- **SSL/HTTPS:** Secured connection untuk semua komunikasi

## Kontribusi

Saat ini, kontribusi dari pihak luar belum dibuka secara formal. Namun, jika Anda memiliki saran atau menemukan bug, silakan buat *issue* di repository GitHub proyek.

## Environment Variables

Untuk fitur cloud, aplikasi memerlukan environment variables berikut (opsional):

```env
# Azure Cosmos DB
VITE_AZURE_COSMOS_ENDPOINT=
VITE_AZURE_COSMOS_KEY=
VITE_AZURE_COSMOS_DATABASE_NAME=

# Azure OpenAI
VITE_AZURE_OPENAI_ENDPOINT=
VITE_AZURE_OPENAI_API_KEY=
VITE_AZURE_OPENAI_DEPLOYMENT_NAME=

# Azure AI Language (upcoming)
VITE_AZURE_AI_LANGUAGE_ENDPOINT=
VITE_AZURE_AI_LANGUAGE_KEY=
```

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.

---

*Dibuat dengan ❤️ untuk kesehatan mental Indonesia.* 

**Creator:** [@mikascend](https://twitter.com/mikascend)

**Teknologi:** React • TypeScript • Azure Cloud • AI/ML • Tailwind CSS 