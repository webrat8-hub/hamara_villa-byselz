import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Compass, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Fasilitas', href: '#facilities' },
    { name: 'Harga & Promo', href: '#pricing' },
    { name: 'Kebijakan', href: '#policies' },
    { name: 'Galeri', href: '#gallery' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-sand-100'
          : 'bg-gradient-to-b from-ocean-950/60 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-full bg-ocean-500/10 text-ocean-500 group-hover:scale-105 transition-transform">
              <Compass className={`h-6 w-6 ${scrolled ? 'text-ocean-500' : 'text-champagne'}`} />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-sans font-bold tracking-widest text-lg sm:text-xl uppercase transition-colors ${
                  scrolled ? 'text-ocean-950' : 'text-white'
                }`}
              >
                Hamara
              </span>
              <span
                className={`text-[10px] tracking-[0.25em] font-sans font-medium uppercase transition-colors ${
                  scrolled ? 'text-ocean-600' : 'text-champagne'
                }`}
              >
                Guest House
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans font-medium text-sm tracking-wider uppercase hover:text-ocean-500 transition-colors ${
                  scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/6282177671110?text=Halo%20Tia%2C%20saya%20tertarik%20untuk%20booking%20Hamara%20Guest%20House%20Krui."
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-sm ${
                scrolled
                  ? 'bg-ocean-500 hover:bg-ocean-600 text-white hover:shadow-md'
                  : 'bg-white hover:bg-sand-100 text-ocean-950 hover:scale-105'
              }`}
            >
              <PhoneCall className="h-3.5 w-3.5 animate-pulse" />
              <span>WhatsApp Tia</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                scrolled ? 'text-ocean-950 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg font-sans font-semibold text-sm tracking-wide text-slate-800 hover:bg-ocean-50 hover:text-ocean-600 transition-all uppercase"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 px-4">
              <a
                href="https://wa.me/6282177671110?text=Halo%20Tia%2C%20saya%20tertarik%20untuk%20booking%20Hamara%20Guest%20House%20Krui."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-ocean-500 hover:bg-ocean-600 text-white font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow"
              >
                <PhoneCall className="h-4 w-4" />
                <span>WhatsApp Tia (0821-7767-1110)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
