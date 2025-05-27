import React from 'react';
import AppLayout from '../components/layout/AppLayout';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Kebijakan Privasi</h1>
          <div className="prose lg:prose-xl">
            <p>
              Selamat datang di Kebijakan Privasi Jaga Jiwa. Kami menghargai privasi Anda dan berkomitmen untuk melindunginya. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan menjaga informasi Anda saat Anda mengunjungi aplikasi kami.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-2">Informasi yang Kami Kumpulkan</h2>
            <p>
              Jaga Jiwa dirancang untuk dapat digunakan sepenuhnya secara anonim. Kami tidak memerlukan Anda untuk membuat akun atau memberikan informasi identitas pribadi apa pun untuk menggunakan fitur inti aplikasi kami. Data yang Anda masukkan, seperti hasil assessment dan catatan mood, disimpan secara lokal di perangkat Anda dan tidak dikirimkan atau disimpan di server kami.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Penggunaan Informasi Anda</h2>
            <p>
              Karena kami tidak mengumpulkan informasi identitas pribadi Anda, kami tidak menggunakannya untuk tujuan apa pun. Data yang disimpan secara lokal di perangkat Anda digunakan untuk menyediakan fungsionalitas aplikasi, seperti menampilkan riwayat assessment atau pola mood Anda.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Keamanan Informasi Anda</h2>
            <p>
              Kami menggunakan langkah-langkah keamanan administratif, teknis, dan fisik yang wajar untuk membantu melindungi informasi yang disimpan secara lokal di perangkat Anda. Meskipun kami telah mengambil langkah-langkah yang wajar untuk mengamankan data yang Anda gunakan dalam aplikasi kami, perlu diketahui bahwa tidak ada tindakan keamanan yang sempurna atau tidak dapat ditembus, dan tidak ada metode transmisi data yang dapat dijamin terhadap intersepsi atau jenis penyalahgunaan lainnya.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Kebijakan untuk Anak-Anak</h2>
            <p>
              Kami tidak dengan sengaja mengumpulkan informasi identitas pribadi dari anak-anak di bawah usia 13 tahun. Jika Anda mengetahui adanya data yang kami kumpulkan dari anak-anak di bawah usia 13 tahun, silakan hubungi kami menggunakan informasi kontak yang disediakan di bawah ini.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Perubahan pada Kebijakan Privasi Ini</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan. Perubahan pada Kebijakan Privasi ini efektif ketika diposting di halaman ini.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan atau saran tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami melalui Twitter di <a href="https://twitter.com/mikascend" target="_blank" rel="noopener noreferrer">@mikascend</a>.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicyPage; 