import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo className="w-8 h-8 mr-2" />
              <span className="font-heading font-semibold text-xl text-primary-600">Jaga Jiwa</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Platform kesehatan mental yang menyediakan dukungan untuk deteksi dini kecanduan judi online 
              dan dampaknya terhadap kesehatan mental, khusus untuk anak muda Indonesia.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com/mikascend" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Beranda</FooterLink>
              <FooterLink to="/assessment">Assessment</FooterLink>
              <FooterLink to="/chatbot">JiwaBot</FooterLink>
              <FooterLink to="/mood-tracker">Mood Tracker</FooterLink>
              <FooterLink to="/emergency">Bantuan Darurat</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-gray-900 mb-4">Informasi</h3>
            <ul className="space-y-2">
              <FooterLink to="/privacy">Kebijakan Privasi</FooterLink>
              <FooterLink to="https://twitter.com/mikascend">Kontak (@mikascend)</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jaga Jiwa. Semua hak dilindungi.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-500 text-sm mr-1">Made with</span>
            <Heart className="w-4 h-4 text-error-500 mx-1" />
            <span className="text-gray-500 text-sm">by mikascend for better Indonesian mental health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className="text-gray-600 hover:text-primary-600 transition-colors">
        {children}
      </Link>
    </li>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;