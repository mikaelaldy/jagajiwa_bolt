# Reliefin - Platform Dukungan Kesehatan Mental

Reliefin adalah sebuah platform web yang dirancang untuk memberikan dukungan kesehatan mental, dengan fokus khusus pada deteksi dini dan dampak kecanduan judi online pada anak muda di Indonesia. Aplikasi ini dibangun dengan teknologi modern dan menyediakan akses mudah tanpa perlu registrasi atau login.

## 🌟 Fitur yang Sudah Berfungsi

**Live Demo:** [https://reliefin.mikascend.xyz/](https://reliefin.mikascend.xyz/)

✅ **Landing Page:** Halaman utama yang informatif dengan penjelasan fitur
✅ **Self Assessment:** Sistem penilaian mandiri untuk kecanduan judi dan kesehatan mental
✅ **AI-Powered Chatbot:** Working Rely with Azure OpenAI (GPT-4o-mini)
✅ **Mood Tracker:** Pelacakan mood harian dengan visualisasi grafik dan kalender  
✅ **Assessment History:** Riwayat hasil assessment dengan penyimpanan cloud
✅ **Emergency Contacts:** Daftar kontak bantuan darurat kesehatan mental
✅ **Cloud Storage:** Integrasi dengan Azure Cosmos DB untuk penyimpanan data
✅ **Responsive Design:** Tampilan yang optimal di semua perangkat

- **Rely AI:** Chatbot AI canggih yang menggunakan **Azure OpenAI (GPT-4o-mini)** dengan sistem fallback keyword-based. Dirancang khusus untuk memberikan dukungan empatik terkait masalah perjudian dan kesehatan mental.
- **Self Assessment:** Dua jenis assessment terpisah untuk evaluasi risiko kecanduan judi dan tingkat kesehatan mental.
- **Mood Tracker:** Fitur untuk mencatat mood harian dengan visualisasi berupa grafik dan kalender, membantu pengguna memahami pola emosional mereka.
- **Assessment History:** Semua hasil assessment tersimpan di cloud dan dapat diakses kapan saja.
- **Emergency Contacts:** Akses cepat ke layanan krisis dan bantuan profesional.
- **Cloud Storage:** Data tersimpan aman di Azure Cosmos DB dengan fallback ke localStorage.

## 🛠️ Teknologi yang Digunakan

- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS dengan custom color scheme
- **Icons:** Lucide React
- **Charts:** Recharts
- **Calendar:** React Calendar
- **Cloud Database:** Azure Cosmos DB (dengan localStorage fallback)
- **AI/NLP:** Azure OpenAI Service (GPT-4o-mini) dengan keyword fallback system
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Package Manager:** npm

## 🚀 Setup dan Installation

### Prerequisites
- Node.js (v18 atau lebih baru)
- npm atau yarn
- Azure Account (untuk Cosmos DB dan OpenAI - opsional)

### 1. Clone Repository
```bash
git clone [repository-url]
cd reliefin
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Buat file `.env.local` di root directory dan tambahkan:

```env
# Azure Cosmos DB (Opsional - akan fallback ke localStorage jika tidak ada)
VITE_COSMOS_DB_ENDPOINT=https://your-cosmos-account.documents.azure.com:443/
VITE_COSMOS_DB_KEY=your-cosmos-db-key
VITE_COSMOS_DB_DATABASE_ID=your-database-id

# Azure OpenAI (Opsional - akan fallback ke keyword responses jika tidak ada)
VITE_AZURE_OPENAI_ENDPOINT=https://your-openai-service.openai.azure.com/
VITE_AZURE_OPENAI_API_KEY=your-openai-api-key
VITE_AZURE_OPENAI_DEPLOYMENT_NAME=your-gpt-deployment-name
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## 📁 Struktur Project

```
src/
├── components/
│   ├── assessment/     # Komponen untuk fitur assessment
│   ├── chatbot/        # Komponen chat bot
│   ├── emergency/      # Komponen kontak darurat
│   ├── layout/         # Layout components (Header, Footer)
│   ├── mood/           # Komponen mood tracker
│   └── ui/             # Reusable UI components
├── data/               # Static data dan responses
├── pages/              # Page components
├── services/           # External services (Azure, API calls)
├── styles/             # CSS dan styling
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎯 Fitur Utama

### 🤖 Rely - AI Chatbot ⭐

Chatbot AI yang menggunakan Azure OpenAI (GPT-4o-mini) untuk memberikan dukungan empatik:
- **Smart Conversations:** Menggunakan teknologi GPT-4o-mini dari Azure OpenAI
- **Fallback System:** Sistem keyword-based sebagai backup jika Azure OpenAI tidak tersedia
- **Contextual Understanding:** Memahami konteks percakapan untuk respon yang lebih personal
- **Crisis Detection:** Dapat mendeteksi situasi krisis dan mengarahkan ke bantuan profesional
- **Indonesian Optimized:** Dioptimalkan khusus untuk bahasa Indonesia dan konteks budaya lokal

### 📊 Self Assessment

Sistem evaluasi mandiri dengan dua kategori:
- **Gambling Assessment:** 8 pertanyaan untuk mendeteksi risiko kecanduan judi online
- **Mental Health Assessment:** 8 pertanyaan untuk evaluasi tingkat kecemasan dan depresi
- **Risk Categorization:** Hasil dikategorikan menjadi rendah, sedang, atau tinggi
- **Personalized Recommendations:** Rekomendasi yang disesuaikan berdasarkan hasil

### 📈 Mood Tracker

Fitur pelacakan mood yang komprehensif:
- **Daily Mood Logging:** Catat mood harian dengan 5 tingkatan
- **Note Taking:** Tambahkan catatan untuk setiap entry mood
- **Visual Analytics:** Grafik garis untuk melihat pola mood
- **Calendar View:** Kalender dengan color-coding untuk overview bulanan
- **Edit & Delete:** Kelola entries dengan mudah

### 🏥 Emergency Contacts

Akses cepat ke bantuan profesional:
- **Crisis Hotlines:** Nomor darurat nasional (119, 112)
- **Mental Health Services:** Kontak organisasi kesehatan mental
- **24/7 Services:** Informasi layanan yang tersedia 24 jam
- **Quick Access:** Tombol call langsung untuk situasi darurat

## 🔧 Konfigurasi Lanjutan

### Azure Cosmos DB Setup
1. Buat Azure Cosmos DB account
2. Buat database baru (contoh: `jagajiwa-demo`)
3. Container akan dibuat otomatis saat pertama kali digunakan
4. Partition key menggunakan `/userId`

### Azure OpenAI Setup
1. Buat Azure OpenAI Service
2. Deploy model GPT-4o-mini
3. Dapatkan endpoint dan API key
4. Update environment variables

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` untuk mengubah color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
      // dst
    }
  }
}
```

### Chatbot Responses
Edit `src/data/chatbotResponses.ts` untuk menyesuaikan response fallback sistem.

## 📱 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 Contributing

1. Fork repository
2. Buat feature branch
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

## 📄 License

MIT License - lihat file LICENSE untuk detail lengkap.

## 📞 Kontak

Untuk pertanyaan atau dukungan, hubungi:
- Twitter: [@mikascend](https://twitter.com/mikascend)
- Email: mikaelaldy56@gmail.com

---

**Reliefin** - Bersama menjaga kesehatan mental anak muda Indonesia 🇮🇩
