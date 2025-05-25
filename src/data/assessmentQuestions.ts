import { Question } from '../types';

export const gamblingAssessmentQuestions: Question[] = [
  {
    id: 1,
    text: "Seberapa sering Anda memikirkan tentang perjudian atau berencana untuk berjudi?",
    options: [
      { value: 0, label: "Tidak pernah" },
      { value: 1, label: "Jarang" },
      { value: 2, label: "Kadang-kadang" },
      { value: 3, label: "Sering" },
      { value: 4, label: "Hampir selalu" }
    ]
  },
  {
    id: 2,
    text: "Apakah Anda perlu berjudi dengan jumlah uang yang semakin meningkat untuk mendapatkan kesenangan yang sama?",
    options: [
      { value: 0, label: "Tidak pernah" },
      { value: 1, label: "Jarang" },
      { value: 2, label: "Kadang-kadang" },
      { value: 3, label: "Sering" },
      { value: 4, label: "Hampir selalu" }
    ]
  },
  {
    id: 3,
    text: "Apakah Anda merasa gelisah atau mudah marah ketika mencoba mengurangi atau berhenti berjudi?",
    options: [
      { value: 0, label: "Tidak pernah" },
      { value: 1, label: "Jarang" },
      { value: 2, label: "Kadang-kadang" },
      { value: 3, label: "Sering" },
      { value: 4, label: "Hampir selalu" }
    ]
  },
  {
    id: 4,
    text: "Apakah Anda berjudi untuk lari dari masalah atau meredakan perasaan tidak berdaya, bersalah, cemas, atau depresi?",
    options: [
      { value: 0, label: "Tidak pernah" },
      { value: 1, label: "Jarang" },
      { value: 2, label: "Kadang-kadang" },
      { value: 3, label: "Sering" },
      { value: 4, label: "Hampir selalu" }
    ]
  },
  {
    id: 5,
    text: "Setelah kalah berjudi, apakah Anda kembali berjudi untuk mencoba memenangkan kembali uang yang hilang?",
    options: [
      { value: 0, label: "Tidak pernah" },
      { value: 1, label: "Jarang" },
      { value: 2, label: "Kadang-kadang" },
      { value: 3, label: "Sering" },
      { value: 4, label: "Hampir selalu" }
    ]
  },
  {
    id: 6,
    text: "Apakah Anda pernah berbohong untuk menutupi sejauh mana keterlibatan Anda dalam perjudian?",
    options: [
      { value: 0, label: "Tidak pernah" },
      { value: 1, label: "Jarang" },
      { value: 2, label: "Kadang-kadang" },
      { value: 3, label: "Sering" },
      { value: 4, label: "Hampir selalu" }
    ]
  },
  {
    id: 7,
    text: "Apakah Anda pernah mempertaruhkan atau kehilangan hubungan penting, kesempatan pendidikan, atau karir karena berjudi?",
    options: [
      { value: 0, label: "Tidak pernah" },
      { value: 1, label: "Jarang" },
      { value: 2, label: "Kadang-kadang" },
      { value: 3, label: "Sering" },
      { value: 4, label: "Hampir selalu" }
    ]
  },
  {
    id: 8,
    text: "Apakah Anda pernah mengandalkan orang lain untuk memberikan uang guna mengatasi masalah keuangan yang disebabkan oleh perjudian?",
    options: [
      { value: 0, label: "Tidak pernah" },
      { value: 1, label: "Jarang" },
      { value: 2, label: "Kadang-kadang" },
      { value: 3, label: "Sering" },
      { value: 4, label: "Hampir selalu" }
    ]
  }
];

export const mentalHealthAssessmentQuestions: Question[] = [
  {
    id: 1,
    text: "Selama dua minggu terakhir, seberapa sering Anda merasa gugup, cemas, atau tegang?",
    options: [
      { value: 0, label: "Tidak sama sekali" },
      { value: 1, label: "Beberapa hari" },
      { value: 2, label: "Lebih dari separuh waktu" },
      { value: 3, label: "Hampir setiap hari" }
    ]
  },
  {
    id: 2,
    text: "Selama dua minggu terakhir, seberapa sering Anda tidak dapat menghentikan atau mengendalikan rasa khawatir?",
    options: [
      { value: 0, label: "Tidak sama sekali" },
      { value: 1, label: "Beberapa hari" },
      { value: 2, label: "Lebih dari separuh waktu" },
      { value: 3, label: "Hampir setiap hari" }
    ]
  },
  {
    id: 3,
    text: "Selama dua minggu terakhir, seberapa sering Anda merasa sedih, tertekan, atau putus asa?",
    options: [
      { value: 0, label: "Tidak sama sekali" },
      { value: 1, label: "Beberapa hari" },
      { value: 2, label: "Lebih dari separuh waktu" },
      { value: 3, label: "Hampir setiap hari" }
    ]
  },
  {
    id: 4,
    text: "Selama dua minggu terakhir, seberapa sering Anda kurang berminat atau kurang menikmati dalam melakukan berbagai hal?",
    options: [
      { value: 0, label: "Tidak sama sekali" },
      { value: 1, label: "Beberapa hari" },
      { value: 2, label: "Lebih dari separuh waktu" },
      { value: 3, label: "Hampir setiap hari" }
    ]
  },
  {
    id: 5,
    text: "Selama dua minggu terakhir, seberapa sering Anda mengalami kesulitan tidur, tetap tidur, atau tidur terlalu banyak?",
    options: [
      { value: 0, label: "Tidak sama sekali" },
      { value: 1, label: "Beberapa hari" },
      { value: 2, label: "Lebih dari separuh waktu" },
      { value: 3, label: "Hampir setiap hari" }
    ]
  },
  {
    id: 6,
    text: "Selama dua minggu terakhir, seberapa sering Anda merasa lelah atau kekurangan energi?",
    options: [
      { value: 0, label: "Tidak sama sekali" },
      { value: 1, label: "Beberapa hari" },
      { value: 2, label: "Lebih dari separuh waktu" },
      { value: 3, label: "Hampir setiap hari" }
    ]
  },
  {
    id: 7,
    text: "Selama dua minggu terakhir, seberapa sering Anda kurang nafsu makan atau makan berlebihan?",
    options: [
      { value: 0, label: "Tidak sama sekali" },
      { value: 1, label: "Beberapa hari" },
      { value: 2, label: "Lebih dari separuh waktu" },
      { value: 3, label: "Hampir setiap hari" }
    ]
  },
  {
    id: 8,
    text: "Selama dua minggu terakhir, seberapa sering Anda kesulitan berkonsentrasi pada berbagai hal?",
    options: [
      { value: 0, label: "Tidak sama sekali" },
      { value: 1, label: "Beberapa hari" },
      { value: 2, label: "Lebih dari separuh waktu" },
      { value: 3, label: "Hampir setiap hari" }
    ]
  }
];