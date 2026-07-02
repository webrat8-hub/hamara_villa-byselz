import { MapPin, Compass, Landmark, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual: Image Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-sand-100">
              <img
                src={IMAGES.villaExterior}
                alt="Hamara Guest House Beautifully Renovated Premium Villa Exterior"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Sandy Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-sand-200">
                <span className="block font-sans text-xs tracking-widest text-ocean-600 uppercase font-semibold mb-1">Unrivaled Quality</span>
                <p className="font-serif text-xs text-slate-600 leading-relaxed font-light">
                  A modern sanctuary featuring custom wood carpentry, durable masonry, and curated tropical design in Pesisir Barat, Lampung.
                </p>
              </div>
            </div>
            
            {/* Background design accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sand-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-0" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ocean-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 -z-0" />
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Small Heading Accent */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-gold-500" />
              <span className="font-sans text-xs tracking-[0.25em] text-gold-600 uppercase font-bold">
                Luxury Private Sanctuary
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ocean-950 leading-tight mb-6">
              Hamara Guest House <br />
              <span className="font-serif font-light text-slate-700 italic">Where Beachfront Luxury Meets Tranquility</span>
            </h2>

            {/* Paragraph Description */}
            <div className="font-serif text-slate-600 text-base sm:text-lg leading-relaxed space-y-4 mb-8 font-light">
              <p>
                Nestled beautifully at the quiet edge of the coastal{' '}
                <strong className="text-ocean-950 font-medium">Pugung Walur village</strong> in Krui, 
                Hamara Guest House represents an exclusive architectural standard. Beautifully and comprehensively renovated, 
                there is <span className="font-sans text-sm font-semibold text-ocean-600 bg-ocean-50 px-2 py-0.5 rounded">no comparable quality</span> in the entire Pugung Krui region.
              </p>
              <p>
                From the private estate, a manicured garden path delivers you directly to the untouched, pristine sands of{' '}
                <strong className="text-ocean-950 font-medium">Benawang Beach</strong>. Here, guests enjoy absolute privacy and exclusivity—free from crowded tourist lines, yet ideally positioned in the heart of West Sumatra's iconic surf coast.
              </p>
            </div>

            {/* Core Selling Points (Mini Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div className="flex gap-3">
                <div className="p-2.5 h-fit rounded-lg bg-sand-100 text-ocean-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-ocean-950 uppercase tracking-wide mb-1">
                    Elite Location
                  </h4>
                  <p className="font-serif text-xs text-slate-500 leading-relaxed font-light">
                    Sits peacefully at the edge of Pugung Walur village, offering ultimate quietness.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 h-fit rounded-lg bg-sand-100 text-ocean-700">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-ocean-950 uppercase tracking-wide mb-1">
                    Direct Beach Access
                  </h4>
                  <p className="font-serif text-xs text-slate-500 leading-relaxed font-light">
                    Follow the garden trail straight onto Benawang Beach's golden coastline.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 h-fit rounded-lg bg-sand-100 text-ocean-700">
                  <Landmark className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-ocean-950 uppercase tracking-wide mb-1">
                    Unmatched Quality
                  </h4>
                  <p className="font-serif text-xs text-slate-500 leading-relaxed font-light">
                    Exquisite renovation, solid timber woodwork, air conditioning, and premium finishes.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2.5 h-fit rounded-lg bg-sand-100 text-ocean-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-ocean-950 uppercase tracking-wide mb-1">
                    Private Haven
                  </h4>
                  <p className="font-serif text-xs text-slate-500 leading-relaxed font-light">
                    The entire villa and lush garden are exclusively yours for absolute security and comfort.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
