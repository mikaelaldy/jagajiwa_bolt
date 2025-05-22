import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Home, MessageCircle, LineChart, Activity, LifeBuoy, User } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo className="w-8 h-8 mr-2" />
          <span className="font-heading font-semibold text-xl text-primary-600">Jaga Jiwa</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" exact icon={<Home className="w-4 h-4 mr-1" />}>
            Beranda
          </NavLink>
          <NavLink to="/assessment" icon={<User className="w-4 h-4 mr-1" />}>
            Assessment
          </NavLink>
          <NavLink to="/chatbot" icon={<MessageCircle className="w-4 h-4 mr-1" />}>
            JiwaBot
          </NavLink>
          <NavLink to="/mood-tracker" icon={<Activity className="w-4 h-4 mr-1" />}>
            Mood Tracker
          </NavLink>
          <NavLink to="/emergency" icon={<LifeBuoy className="w-4 h-4 mr-1" />}>
            Bantuan Darurat
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-gray-100 shadow-lg">
          <div className="container py-4 flex flex-col space-y-3">
            <MobileNavLink to="/" exact icon={<Home className="w-5 h-5 mr-2" />}>
              Beranda
            </MobileNavLink>
            <MobileNavLink to="/assessment" icon={<User className="w-5 h-5 mr-2" />}>
              Assessment
            </MobileNavLink>
            <MobileNavLink to="/chatbot" icon={<MessageCircle className="w-5 h-5 mr-2" />}>
              JiwaBot
            </MobileNavLink>
            <MobileNavLink to="/mood-tracker" icon={<Activity className="w-5 h-5 mr-2" />}>
              Mood Tracker
            </MobileNavLink>
            <MobileNavLink to="/emergency" icon={<LifeBuoy className="w-5 h-5 mr-2" />}>
              Bantuan Darurat
            </MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  exact?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, icon, exact }) => {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
  
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'text-primary-600 bg-primary-50'
          : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, icon, exact }) => {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);
  
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 rounded-lg font-medium ${
        isActive
          ? 'text-primary-600 bg-primary-50'
          : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      {children}
    </Link>
  );
};

export default Header;