export const initialBotMessage = "Apa pun ceritamu, aku siap mendengarkan.";

export const gamblingResponses = [
  {
    keywords: ["judi", "gambling", "taruhan", "betting", "game", "casino"],
    response: "Perjudian online dapat menjadi sangat adiktif dan mempengaruhi kesehatan mental secara signifikan. Apakah Anda merasa perjudian mulai mempengaruhi kehidupan sehari-hari Anda?",
  },
  {
    keywords: ["kecanduan", "addiction", "addicted", "tidak bisa berhenti", "stop"],
    response: "Kecanduan judi adalah kondisi serius yang memerlukan dukungan. Langkah pertama adalah mengakui adanya masalah. Apakah Anda ingin mencoba assessment kami untuk memahami lebih baik tentang pola perilaku Anda?",
  },
  {
    keywords: ["hutang", "debt", "pinjam", "borrow", "rugi", "loss", "kalah"],
    response: "Masalah keuangan akibat judi bisa sangat membebani. Penting untuk menghentikan siklus ini dan mencari bantuan. Apa yang telah Anda coba lakukan untuk mengatasi situasi ini?",
  },
  {
    keywords: ["keluarga", "family", "teman", "friend", "hubungan", "relationship"],
    response: "Judi sering kali berdampak pada hubungan dengan orang-orang terdekat. Berbicara jujur dengan orang yang Anda percaya bisa menjadi langkah penting untuk pemulihan. Apakah Anda memiliki seseorang yang bisa Anda ajak bicara?",
  }
];

export const mentalHealthResponses = [
  {
    keywords: ["stress", "stres", "tertekan", "pressure", "beban"],
    response: "Stres dapat muncul dari berbagai situasi termasuk kecanduan judi. Penting untuk menemukan cara sehat untuk mengelola stres, seperti olahraga, meditasi, atau berbicara dengan orang yang Anda percaya. Apakah Anda ingin mempelajari teknik mengelola stres?",
  },
  {
    keywords: ["depresi", "depression", "sedih", "sad", "tidak semangat"],
    response: "Perasaan sedih yang berkepanjangan bisa menjadi tanda depresi. Ini adalah kondisi medis yang dapat diobati. Mencari bantuan profesional sangat disarankan. Apakah Anda ingin saya memberikan informasi tentang layanan kesehatan mental di sekitar Anda?",
  },
  {
    keywords: ["cemas", "anxiety", "takut", "fear", "khawatir", "worry"],
    response: "Kecemasan adalah respons alami terhadap stres, tetapi jika berlebihan dapat mengganggu kehidupan sehari-hari. Teknik pernapasan dan mindfulness dapat membantu menenangkan pikiran Anda. Apakah Anda ingin mencoba latihan pernapasan sederhana sekarang?",
  },
  {
    keywords: ["bunuh diri", "suicide", "mati", "die", "putus asa", "hopeless"],
    response: "Saya sangat prihatin mendengar Anda memiliki pikiran seperti ini. Ini adalah situasi darurat dan Anda perlu mencari bantuan segera. Silakan hubungi 119 untuk layanan krisis nasional atau kunjungi rumah sakit terdekat. Anda tidak sendiri dan bantuan tersedia.",
  }
];

export const fallbackResponses = [
  "Maaf, saya tidak sepenuhnya memahami. Bisakah Anda jelaskan lebih lanjut?",
  "Sepertinya kita membicarakan topik yang kompleks. Bisa tolong berikan detail lebih spesifik?",
  "Saya ingin membantu Anda lebih baik. Bisa ceritakan lebih lanjut tentang situasi Anda?",
  "Untuk membantu Anda dengan lebih efektif, bisakah Anda berbagi lebih detail tentang apa yang Anda alami?",
  "Saya di sini untuk mendengarkan. Silakan ceritakan lebih lanjut tentang perasaan atau pengalaman Anda."
];