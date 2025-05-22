import React from 'react';
import { LinkButton } from '../components/ui/Button';
import { Home } from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';

const NotFoundPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="container py-20">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-primary-500 text-9xl font-bold mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak ada. Mungkin alamat salah atau halaman telah dipindahkan.
          </p>
          <LinkButton 
            to="/" 
            size="lg"
            icon={<Home className="w-5 h-5" />}
          >
            Kembali ke Beranda
          </LinkButton>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;