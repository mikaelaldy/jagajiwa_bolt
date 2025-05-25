import React from 'react';
import { ArrowRight, MessageCircle, Users, Activity, Brain, BookOpen, LifeBuoy } from 'lucide-react';
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
                Jaga <span className="text-primary-600">Jiwa</span>mu, <br />
                Jaga <span className="text-primary-600">Masa Depan</span>mu
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Platform dukungan kesehatan mental untuk membantu mendeteksi tanda awal kecanduan judi online
                dan dampaknya terhadap kesehatan mental Anda.
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
                  Chat dengan JiwaBot
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
              Jaga Jiwa menyediakan beragam fitur untuk mendukung kesehatan mental Anda, membantu
              mendeteksi dan mencegah kecanduan judi online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="w-10 h-10 text-primary-500" />}
              title="Self Assessment"
              description="Evaluasi risiko kecanduan judi dan tingkat kesehatan mental Anda melalui kuis interaktif."
              link="/assessment"
            />
            <FeatureCard 
              icon={<MessageCircle className="w-10 h-10 text-primary-500" />}
              title="JiwaBot"
              description="Chatbot yang empatik untuk diskusi dan dukungan mengenai masalah perjudian dan kesehatan mental."
              link="/chatbot"
            />
            <FeatureCard 
              icon={<Activity className="w-10 h-10 text-primary-500" />}
              title="Mood Tracker"
              description="Pantau dan lacak perubahan mood Anda untuk memahami pola dan pemicu masalah emosional."
              link="/mood-tracker"
            />
            <FeatureCard 
              icon={<Brain className="w-10 h-10 text-primary-500" />}
              title="Insight Edukatif"
              description="Akses informasi dan pengetahuan tentang kecanduan judi dan dampaknya terhadap kesehatan mental."
              link="#educational-insights"
            />
            <FeatureCard 
              icon={<BookOpen className="w-10 h-10 text-primary-500" />}
              title="Sumber Daya"
              description="Kumpulan artikel, panduan, dan materi pendukung untuk pemulihan dan pencegahan."
              link="#resources"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Jaga Jiwa?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform yang dibuat khusus untuk masyarakat di Indonesia dengan fokus pada masalah kecanduan judi online dan kesehatan mental. Tanpa Login, full anonymous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Didesain untuk Generasi Z
                </h3>
                <p className="text-gray-600 mb-6">
                  Antarmuka yang modern, bahasa yang relevan, dan pendekatan yang sesuai dengan gaya hidup digital anak muda Indonesia.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Bahasa yang inklusif dan sesuai dengan Gen Z</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Kemudahan akses melalui smartphone</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Tampilan visual yang menarik dan tidak membosankan</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Privasi dan Anonimitas
                </h3>
                <p className="text-gray-600 mb-6">
                  Kami menjaga privasi Anda dengan tidak memerlukan login dan menyimpan data hanya di perangkat lokal Anda.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Tidak perlu mendaftar atau membuat akun</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Data disimpan hanya di perangkat Anda</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                      <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-gray-700">Bebas menggunakan layanan tanpa rasa khawatir</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pengalaman Pengguna</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ini adalah beberapa pengalaman orang yang telah menggunakan Jaga Jiwa dalam perjalanan kesehatan mental mereka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Jaga Jiwa membantu saya menyadari bahwa kebiasaan gaming dan taruhan online saya sudah mulai lepas kendali. Assessment dan chatbot-nya sangat membantu."
              author="Andi, 22"
              location="Jakarta"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            />
            <TestimonialCard
              quote="Awalnya saya skeptis, tapi fitur mood tracker benar-benar membantu saya melihat pola emosi yang berhubungan dengan kecanduan judi online saya."
              author="Dina, 19"
              location="Bandung"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            />
            <TestimonialCard
              quote="Saya merasa nyaman berbagi masalah dengan JiwaBot karena tidak perlu khawatir dihakimi. Responnya sangat manusiawi dan membantu."
              author="Budi, 24"
              location="Surabaya"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            />
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
                Chat dengan JiwaBot
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

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  image,
}) => {
  return (
    <Card>
      <CardBody>
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <div>
            <h4 className="font-medium text-gray-900">{author}</h4>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <p className="text-gray-700 italic">"{quote}"</p>
      </CardBody>
    </Card>
  );
};

export default LandingPage;