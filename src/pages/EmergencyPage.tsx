import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import ContactCard from '../components/emergency/ContactCard';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { emergencyContacts } from '../data/emergencyContacts';
import { AlertTriangle, Phone } from 'lucide-react';

const EmergencyPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Butuh bantuan sekarang?</h1>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Kamu tidak sendiri. Bantuan darurat siap membantumu kapan pun.
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
                    <p className="text-base leading-relaxed">Jika Anda memiliki pikiran untuk menyakiti diri sendiri atau orang lain, segera hubungi:</p>
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button
                        variant="primary"
                        size="lg"
                        className="bg-error-500 hover:bg-error-600 focus:ring-error-500 text-white font-bold text-2xl px-8 py-4 min-w-[120px]"
                        onClick={() => window.location.href = 'tel:119'}
                        icon={<Phone className="h-6 w-6" />}
                        aria-label="Hubungi hotline darurat 119"
                      >
                        119
                      </Button>
                      <span className="text-error-700 font-semibold text-lg">atau</span>
                      <Button
                        variant="primary"
                        size="lg"
                        className="bg-error-500 hover:bg-error-600 focus:ring-error-500 text-white font-bold text-2xl px-8 py-4 min-w-[120px]"
                        onClick={() => window.location.href = 'tel:112'}
                        icon={<Phone className="h-6 w-6" />}
                        aria-label="Hubungi hotline darurat 112"
                      >
                        112
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          
          {/* Emergency Contacts Section */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-xl font-medium text-gray-800">Kontak Layanan Kesehatan Mental</h2>
            </CardHeader>
            <CardBody>
              {emergencyContacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
              ))}
            </CardBody>
          </Card>
          
          {/* What To Do in Crisis Section */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-xl font-medium text-gray-800">Apa yang Harus Dilakukan Dalam Krisis</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Tetap Tenang</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Tarik napas dalam-dalam. Krisis akan berlalu. Jika memungkinkan, pindah ke tempat yang aman dan tenang.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Hubungi Bantuan</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Segera telepon salah satu nomor darurat di atas. Mereka terlatih untuk membantu Anda dalam situasi ini.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Beritahu Seseorang</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Jika mungkin, hubungi teman atau keluarga yang Anda percaya untuk mendapatkan dukungan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Jangan Sendiri</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Jika Anda memiliki pikiran untuk menyakiti diri sendiri, jangan sendirian. Carilah tempat umum atau tunggu sampai bantuan tiba.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
          
          {/* Supporting a Friend Section */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-medium text-gray-800">Mendukung Teman yang Sedang Krisis</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Ambil Situasi dengan Serius</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Selalu anggap serius jika seseorang berbicara tentang menyakiti diri sendiri atau bunuh diri.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Dengarkan Tanpa Menghakimi</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Biarkan mereka berbicara dan tunjukkan bahwa Anda peduli. Hindari memberikan nasihat atau mencoba "memperbaiki" masalah mereka.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Bantu Mereka Mendapatkan Bantuan</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Tawarkan untuk membantu mereka menghubungi layanan krisis atau antar mereka ke rumah sakit jika diperlukan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Jaga Keamanan Mereka</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Jika situasinya darurat, telepon 119 atau 112. Jangan tinggalkan mereka sendiri jika Anda khawatir tentang keselamatan mereka.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default EmergencyPage;