# Jaga Jiwa - Platform Dukungan Kesehatan Mental

Jaga Jiwa adalah sebuah platform web yang dirancang untuk memberikan dukungan kesehatan mental, dengan fokus khusus pada deteksi dini dan dampak kecanduan judi online pada anak muda di Indonesia. Aplikasi ini menyediakan serangkaian alat bantu mandiri, informasi edukatif, dan akses ke sumber daya darurat.

## 🌐 Demo Website

**Live Demo:** [https://jagajiwa.mikascend.xyz/](https://jagajiwa.mikascend.xyz/)

## 🏆 Hackathon Achievements

✅ **Azure Cloud Integration:** Full integration with Azure Cosmos DB and Azure OpenAI  
✅ **AI-Powered Chatbot:** Working JiwaBot with Azure OpenAI (GPT-4o-mini)  
✅ **Cloud Storage:** All data stored in Azure Cosmos DB with local fallback  
✅ **Production Ready:** Deployed and fully functional for demo  

## Fitur Utama

- **Self Assessment:** Pengguna dapat mengambil kuis interaktif untuk mengevaluasi risiko kecanduan judi online dan tingkat kesehatan mental umum (kecemasan, depresi).
- **JiwaBot AI:** Chatbot AI canggih yang menggunakan **Azure OpenAI (GPT-4o-mini)** dengan sistem fallback keyword-based. Dirancang khusus untuk memberikan dukungan empatik terkait masalah perjudian dan kesehatan mental dengan bahasa Indonesia yang sesuai Gen Z.
- **Mood Tracker:** Fitur untuk memantau dan mencatat perubahan suasana hati harian, lengkap dengan catatan opsional. Data divisualisasikan dalam bentuk grafik dan kalender untuk membantu pengguna mengenali pola mood.
- **Cloud Storage:** **Full integration dengan Azure Cosmos DB** untuk penyimpanan data yang andal dengan fallback ke local storage.
- **Riwayat Mood & Assessment:** Pengguna dapat melihat riwayat mood dan hasil assessment sebelumnya. Data mood dan assessment dapat diedit atau dihapus.
- **Kontak Darurat:** Akses cepat ke daftar layanan krisis nasional dan organisasi pendukung kesehatan mental di Indonesia.
- **Desain Responsif & Modern:** Antarmuka yang bersih, modern, dan mudah diakses di berbagai perangkat, dirancang dengan mempertimbangkan Gen Z.
- **Privasi Total:** Tidak memerlukan login, dan semua data pengguna (hasil assessment, catatan mood) disimpan secara anonim dengan ID unik pengguna.

## Tech Stack

### Frontend
- **React 18** dengan **TypeScript** untuk type safety dan developer experience yang optimal
- **Vite** sebagai build tool dan development server
- **React Router DOM** untuk routing dan navigasi
- **Tailwind CSS** untuk styling dan desain responsif
- **Lucide React** untuk icon set yang konsisten
- **Recharts** untuk visualisasi data dan grafik mood
- **React Calendar** untuk tampilan kalender mood tracker

### Backend & Cloud Services ⭐
- **Azure Cosmos DB** (Serverless) - **FULLY INTEGRATED** untuk penyimpanan data yang scalable dan reliable
- **Azure OpenAI** (GPT-4o-mini) - **FULLY INTEGRATED** untuk chatbot AI yang canggih dan kontekstual
- **Vercel** untuk deployment dan hosting

### Development Tools
- **ESLint** untuk code quality dan consistency
- **TypeScript** untuk static type checking
- **PostCSS** dan **Autoprefixer** untuk CSS processing

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

3.  **Setup Environment Variables:**
    Buat file `.env` dengan konfigurasi Azure berikut:
    ```env
    # Azure Cosmos DB (Required for cloud features)
    VITE_COSMOS_DB_ENDPOINT=https://your-cosmosdb-name.documents.azure.com:443/
    VITE_COSMOS_DB_KEY=your-cosmos-primary-key-here
    VITE_COSMOS_DB_DATABASE_ID=your-database-name

    # Azure OpenAI (Required for AI chatbot)
    VITE_AZURE_OPENAI_ENDPOINT=https://your-openai-resource-name.openai.azure.com/
    VITE_AZURE_OPENAI_API_KEY=your-openai-api-key-here
    VITE_AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4o-mini
    ```

## Menjalankan Aplikasi (Development)

```bash
npm run dev
```

Aplikasi akan tersedia di `http://localhost:5173`.

## Fitur Detail

### 🧠 Self Assessment
- **Gambling Assessment:** 8 pertanyaan untuk mengevaluasi risiko kecanduan judi online
- **Mental Health Assessment:** 8 pertanyaan untuk mengevaluasi tingkat kecemasan dan depresi
- **Risk Scoring:** Sistem penilaian tiga tingkat (rendah, sedang, tinggi)
- **Personalized Recommendations:** Rekomendasi yang disesuaikan berdasarkan hasil
- **✅ Cloud Storage:** Hasil assessment disimpan di Azure Cosmos DB dengan fallback ke local storage

### 🤖 JiwaBot - AI Chatbot ⭐
- **✅ Azure OpenAI Integration:** Menggunakan GPT-4o-mini untuk respons yang contextual dan empathic
- **✅ Intelligent Fallback System:** Sistem keyword-based sebagai backup jika Azure OpenAI tidak tersedia
- **✅ Mental Health Focus:** Dioptimalkan khusus untuk masalah kesehatan mental dan kecanduan judi online
- **✅ Indonesian Language:** Menggunakan bahasa Indonesia yang sesuai dengan Gen Z
- **✅ Crisis Detection:** Mampu mendeteksi situasi darurat dan memberikan panduan bantuan langsung
- **✅ Conversation History:** Menyimpan dan memuat riwayat percakapan di cloud
- **✅ Real-time Typing Indicators:** Animasi typing untuk user experience yang natural
- **✅ Advanced System Prompt:** Prompt yang dirancang khusus untuk memberikan dukungan yang empatis dan bertanggung jawab

### 📊 Mood Tracker
- **Daily Mood Logging:** Pencatatan mood harian dengan 5 tingkatan
- **Visual Analytics:** Grafik garis untuk melihat pola mood dari waktu ke waktu
- **Calendar View:** Kalender visual dengan indikator warna mood
- **Notes & Context:** Catatan opsional untuk memberikan konteks pada setiap entri mood
- **Edit & Delete:** Kemampuan untuk mengedit atau menghapus entri mood
- **✅ Cloud Synchronization:** Data mood tersinkronisasi dengan Azure Cosmos DB

### 🆘 Emergency Support
- **Crisis Hotlines:** Daftar lengkap kontak darurat nasional
- **Professional Resources:** Informasi organisasi kesehatan mental di Indonesia
- **Quick Access:** Akses mudah dari menu utama

### ☁️ Cloud Integration & Storage ⭐
- **✅ Azure Cosmos DB:** Penyimpanan data yang scalable dan reliable - FULLY WORKING
- **✅ Anonymous User System:** Setiap pengguna mendapat ID unik tanpa perlu registrasi
- **✅ Automatic Fallback:** Aplikasi otomatis beralih ke local storage jika cloud tidak tersedia
- **✅ Error Handling:** Robust error handling untuk semua operasi cloud
- **✅ Data Partitioning:** Data dipartisi berdasarkan user ID untuk performa optimal

### 🔒 Privacy & Security
- **✅ No Registration Required:** Tidak perlu membuat akun atau login
- **✅ Anonymous User IDs:** Setiap pengguna mendapat ID anonim yang unik
- **✅ Local Storage Fallback:** Data tetap tersimpan lokal jika cloud tidak tersedia
- **✅ No Personal Data Collection:** Tidak mengumpulkan data personal atau identifiable
- **✅ Complete Privacy:** Penggunaan sepenuhnya anonim dengan proteksi privasi maksimal

## Deployment & Production

Aplikasi ini di-deploy menggunakan:
- **Frontend:** Vercel (Static hosting)
- **Backend Services:** Azure Cloud Services (Cosmos DB + OpenAI)
- **SSL/HTTPS:** Secured connection untuk semua komunikasi

## Environment Variables (Production)

Untuk deployment production, pastikan environment variables berikut sudah dikonfigurasi:

```env
# Azure Cosmos DB
VITE_COSMOS_DB_ENDPOINT=https://your-cosmosdb-name.documents.azure.com:443/
VITE_COSMOS_DB_KEY=your-production-cosmos-key-here
VITE_COSMOS_DB_DATABASE_ID=your-database-name

# Azure OpenAI
VITE_AZURE_OPENAI_ENDPOINT=https://your-openai-resource-name.openai.azure.com/
VITE_AZURE_OPENAI_API_KEY=your-production-openai-key-here
VITE_AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4o-mini
```

## 🎯 Hackathon Demo Points

### Azure Cloud Integration
- **Real-time cloud storage** with Azure Cosmos DB
- **AI-powered chatbot** using Azure OpenAI
- **Serverless architecture** for cost efficiency
- **Cross-device data persistence**

### User Experience
- **No login required** - fully anonymous
- **Responsive design** for all devices
- **Graceful fallbacks** for offline usage
- **Indonesian language** optimized for Gen Z

### Technical Excellence
- **TypeScript** for type safety
- **Modern React** with hooks and context
- **Cloud-first architecture** with local fallbacks
- **Production-ready** deployment on Vercel

---

**🏆 Built for Hackathon - Fully Functional MVP with Azure Integration**

*Dibuat dengan ❤️ untuk kesehatan mental Indonesia.*

**Creator:** [@mikascend](https://twitter.com/mikascend)

**Teknologi:** React • TypeScript • Azure Cosmos DB • Azure OpenAI • Tailwind CSS 