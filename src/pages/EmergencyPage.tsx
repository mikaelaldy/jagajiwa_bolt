import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import ContactCard from '../components/emergency/ContactCard';
import { Card, CardBody } from '../components/ui/Card';
import { emergencyContacts } from '../data/emergencyContacts';
import { AlertTriangle, Phone } from 'lucide-react';

const EmergencyPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Bantuan Darurat</h1>
          <p className="text-gray-600 mb-6">
            Jika Anda atau seseorang yang Anda kenal sedang mengalami krisis kesehatan mental,
            hubungi layanan darurat berikut segera.
          </p>
          
          {/* Emergency Alert */}
          <Card className="bg-error-50 border-error-200 mb-8">
            <CardBody>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-error-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-error-800">Situasi Darurat</h3>
                  <div className="mt-2 text-error-700">
                    <p>Jika Anda memiliki pikiran untuk menyakiti diri sendiri atau orang lain, segera hubungi:</p>
                    <p className="mt-2 flex items-center font-semibold text-lg">
                      <Phone className="h-5 w-5 mr-2" />
                      <a href="tel:119" className="hover:underline">119</a>
                      <span className="mx-2">atau</span>
                      <a href="tel:112" className="hover:underline">112</a>
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          
          {/* Emergency Contacts */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Kontak Layanan Kesehatan Mental</h2>
            {emergencyContacts.map((contact, index) => (
              <ContactCard key={index} contact={contact} />
            ))}
          </div>
          
          {/* What To Do in Crisis */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Apa yang Harus Dilakukan Dalam Krisis</h2>
            <Card>
              <CardBody>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">1. Tetap Tenang</h3>
                    <p className="text-gray-600">
                      Tarik napas dalam-dalam. Krisis akan berlalu. Jika memungkinkan, pindah ke tempat yang aman dan tenang.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">2. Hubungi Bantuan</h3>
                    <p className="text-gray-600">
                      Segera telepon salah satu nomor darurat di atas. Mereka terlatih untuk membantu Anda dalam situasi ini.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">3. Beritahu Seseorang</h3>
                    <p className="text-gray-600">
                      Jika mungkin, hubungi teman atau keluarga yang Anda percaya untuk mendapatkan dukungan.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">4. Jangan Sendiri</h3>
                    <p className="text-gray-600">
                      Jika Anda memiliki pikiran untuk menyakiti diri sendiri, jangan sendirian. Carilah tempat umum atau tunggu sampada bantuan tiba.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          
          {/* Supporting a Friend */}
          <div>
            <h2 className="text-xl font-medium text-gray-800 mb-4">Mendukung Teman yang Sedang Krisis</h2>
            <Card>
              <CardBody>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">1. Ambil Situasi dengan Serius</h3>
                    <p className="text-gray-600">
                      Selalu anggap serius jika seseorang berbicara tentang menyakiti diri sendiri atau bunuh diri.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">2. Dengarkan Tanpa Menghakimi</h3>
                    <p className="text-gray-600">
                      Biarkan mereka berbicara dan tunjukkan bahwa Anda peduli. Hindari memberikan nasihat atau mencoba "memperbaiki" masalah mereka.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">3. Bantu Mereka Mendapatkan Bantuan</h3>
                    <p className="text-gray-600">
                      Tawarkan untuk membantu mereka menghubungi layanan krisis atau antar mereka ke rumah sakit jika diperlukan.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">4. Jaga Keamanan Mereka</h3>
                    <p className="text-gray-600">
                      Jika situasinya darurat, telepon 119 atau 112. Jangan tinggalkan mereka sendiri jika Anda khawatir tentang keselamatan mereka.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default EmergencyPage;