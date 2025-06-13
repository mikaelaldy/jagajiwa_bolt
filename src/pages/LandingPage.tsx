import React from 'react';
import { ArrowRight, MessageCircle, Users, Activity, Brain, BookOpen, LifeBuoy, MessageSquare, ClipboardList, Calendar } from 'lucide-react';
import { LinkButton } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import AppLayout from '../components/layout/AppLayout';

const LandingPage: React.FC = () => {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white pt-10 pb-20">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Bersama Menjaga <span className="text-primary-600">Kesehatan Mentalmu</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Mulai dari tes awal hingga dukungan harian—kami siap menemani langkahmu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <LinkButton 
                  to="/assessment" 
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="bg-primary-50 text-primary-600 border-primary-500 hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  Mulai Assessment
                </LinkButton>
                <LinkButton 
                  to="/chatbot" 
                  variant="outline"
                  size="lg"
                  icon={<MessageCircle className="w-5 h-5" />}
                  className="bg-primary-50 text-primary-600 border-primary-500 hover:bg-primary-500 hover:text-white hover:border-primary-500"
                >
                  Chat dengan Rely
                </LinkButton>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mental Health Support" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Utama Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reliefin menyediakan beragam fitur untuk mendukung kesehatan mental Anda, membantu
              mendeteksi dan mencegah kecanduan judi online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<MessageSquare className="w-10 h-10 text-primary-500" />}
              title="Rely AI"
              description="Chatbot AI yang ramah dan empatik untuk berbagi cerita dan mendapatkan dukungan awal."
              link="/chatbot"
            />
            <FeatureCard 
              icon={<ClipboardList className="w-10 h-10 text-primary-500" />}
              title="Self Assessment"
              description="Evaluasi diri untuk memahami tingkat risiko kecanduan judi dan kondisi kesehatan mental Anda."
              link="/assessment"
            />
            <FeatureCard 
              icon={<Calendar className="w-10 h-10 text-primary-500" />}
              title="Mood Tracker"
              description="Pantau dan lacak perubahan mood Anda untuk memahami pola dan pemicu masalah emosional."
              link="/mood-tracker"
            />
            <FeatureCard 
              icon={<LifeBuoy className="w-10 h-10 text-primary-500" />}
              title="Kontak Darurat"
              description="Akses cepat ke layanan krisis dan profesional kesehatan mental saat Anda membutuhkan."
              link="/emergency"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Reliefin?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Platform yang dirancang khusus untuk masyarakat Indonesia, dengan fokus pada isu kesehatan mental dan kecanduan judi online. Bisa digunakan tanpa akun, sepenuhnya anonim, dan mudah diakses siapa saja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Akses Mudah dan Ramah Pengguna
                </h3>
                <p className="text-gray-600 mb-6">
                  Dirancang agar nyaman digunakan oleh siapa pun, mulai dari anak muda hingga orang tua, tanpa perlu pengalaman teknis.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Antarmuka yang sederhana dan mudah dipahami</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Bisa diakses langsung lewat smartphone atau laptop</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Tampilan bersih dan tidak membingungkan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Privasi dan Anonimitas Dijaga Penuh
                </h3>
                <p className="text-gray-600 mb-6">
                  Kami mengutamakan kenyamanan dan keamanan Anda. Tidak perlu membuat akun dan tidak ada data pribadi yang disimpan di server kami.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Tidak perlu login atau mendaftar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Data hanya tersimpan di perangkat Anda</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Gunakan layanan ini tanpa rasa khawatir atau takut dilacak</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Bahasa yang Inklusif dan Bersahabat
                </h3>
                <p className="text-gray-600 mb-6">
                  Kami menggunakan pendekatan yang manusiawi dan bahasa yang bisa dimengerti semua kalangan, agar setiap orang merasa diterima dan dihargai.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Bahasa yang empatik dan mudah dicerna</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Tidak menghakimi dan terbuka untuk semua latar belakang</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Cocok untuk siapa saja yang sedang ingin memahami atau menjaga kesehatan mentalnya</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Mulai Perjalanan Kesehatan Mental Anda</h2>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              Langkah pertama untuk mengatasi kecanduan judi dan memperbaiki kesehatan mental adalah dengan memahami diri sendiri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton 
                to="/assessment" 
                variant="primary"
                size="lg"
              >
                Ambil Assessment
              </LinkButton>
              <LinkButton 
                to="/chatbot" 
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
              >
                Chat dengan Rely
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <Card className="h-full transition-transform hover:translate-y-[-5px]" hoverable>
      <CardBody className="flex flex-col h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <LinkButton 
          to={link} 
          variant="ghost" 
          className="mt-auto self-start text-primary-600 hover:text-primary-700 p-0 hover:bg-transparent"
        >
          Pelajari lebih lanjut <ArrowRight className="w-4 h-4 ml-1" />
        </LinkButton>
      </CardBody>
    </Card>
  );
};

export default LandingPage;