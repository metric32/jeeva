import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Events', href: '#events' },
    { name: 'For Hospitals', href: '#hospitals' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-[#3B82F6] tracking-tight">
                JEEVA
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1F2937] hover:text-[#3B82F6] transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="text-[#1F2937] hover:text-[#3B82F6] transition-colors text-sm font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="text-[#1F2937] hover:text-[#3B82F6] transition-colors text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/search"
                  className="bg-[#3B82F6] text-white px-6 py-3 rounded-xl hover:bg-[#2563EB] transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm font-medium"
                >
                  Find Hospitals
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1F2937] p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB]">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#1F2937] hover:text-[#3B82F6] transition-colors py-2 text-base"
              >
                {link.name}
              </a>
            ))}
            {user ? (
              <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#1F2937] hover:text-[#3B82F6] transition-colors py-2 text-base"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-base font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#1F2937] hover:text-[#3B82F6] transition-colors py-2 text-base"
                >
                  Sign In
                </Link>
                <Link
                  to="/search"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-[#3B82F6] text-white px-6 py-3 rounded-xl text-center mt-2"
                >
                  Find Hospitals
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
