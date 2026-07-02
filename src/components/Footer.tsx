import { Compass, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2.5 rounded-full bg-white/10 text-champagne">
                  <Compass className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-bold tracking-widest text-xl uppercase text-sand-50">
                    Hamara
                  </span>
                  <span className="text-[10px] tracking-[0.25em] font-sans font-medium uppercase text-champagne">
                    Guest House
                  </span>
                </div>
              </div>

              <p className="font-serif text-xs text-sand-200/80 font-light leading-relaxed mb-6 max-w-sm">
                Sebuah tempat peristirahatan premium di tepi Pantai Benawang, Pugung Walur, Krui. Menyajikan kenyamanan modern tropis tak tertandingi di pesisir barat Lampung untuk peselancar dan keluarga.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="block font-sans text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                Follow Our Sanctuary
              </span>
              <a
                href="https://www.instagram.com/kruipugungexclusive"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:text-champagne transition-colors group"
              >
                <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="font-sans text-xs tracking-wider">@kruipugungexclusive</span>
              </a>
            </div>
          </div>

          {/* Column 2: Direct Contact & Timing */}
          <div className="lg:col-span-4">
            <h3 className="font-sans font-bold text-sm text-champagne uppercase tracking-widest mb-6">
              Contact & Location
            </h3>

            <div className="space-y-4 text-xs font-serif text-sand-200/90 font-light">
              <div className="flex gap-3">
                <MapPin className="h-4.5 w-4.5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-sans font-semibold mb-0.5">Alamat Lengkap</span>
                  <p className="leading-relaxed">
                    Pugung Walur, Pesisir Utara, Kabupaten Pesisir Barat, Lampung, Indonesia.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Phone className="h-4.5 w-4.5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-sans font-semibold mb-0.5">Reservasi WhatsApp</span>
                  <a href="tel:+6282177671110" className="hover:text-champagne transition-colors">
                    Tia: 0821-7767-1110
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Clock className="h-4.5 w-4.5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-sans font-semibold mb-0.5">Check-In / Out</span>
                  <p>In: Pukul 14:00 | Out: Pukul 12:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Interactive Google Maps Embed */}
          <div className="lg:col-span-4">
            <h3 className="font-sans font-bold text-sm text-champagne uppercase tracking-widest mb-6">
              Google Maps Location
            </h3>
            
            {/* Real Interactive Iframe Map Container */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[200px] w-full shadow-lg relative bg-white/5 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.253018255928!2d103.8816752!3d-5.068307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40fe387bc00001%3A0x6b77c27ff110df00!2sPugung%20Walur%2C%20Kec.%20Pesisir%20Utara%2C%20Kabupaten%20Pesisir%20Barat%2C%20Lampung!5e0!3m2!1sid!2sid!4v1783000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/5 text-center text-slate-400 font-serif text-[10px] font-light">
          <p>© {new Date().getFullYear()} Hamara Guest House Krui. All Rights Reserved.</p>
          <p className="mt-1 text-slate-500">
            Beautifully Renovated Luxury Beachfront Villa — Designed for Tranquility.
          </p>
        </div>
      </div>
    </footer>
  );
}
