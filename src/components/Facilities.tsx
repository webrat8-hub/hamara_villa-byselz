import { Bed, ShowerHead, Utensils, Wifi, Tv, Trees, ChefHat, Sun } from 'lucide-react';
import { FACILITIES } from '../data';

const iconMap: Record<string, any> = {
  Bed,
  ShowerHead,
  Utensils,
  Wifi,
  Tv,
  Trees,
  ChefHat,
  Sun,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-sand-50 border-y border-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-sans text-xs tracking-[0.2em] text-ocean-600 uppercase font-bold">
              Immersive Comfort
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ocean-950 mb-4 leading-tight">
            Premium Inclusions & Facilities
          </h2>
          <div className="h-[2px] w-12 bg-gold-500 mx-auto mb-6" />
          <p className="font-serif text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            Every corner of Hamara Guest House is thoughtfully furnished with high-end modern convenience to ensure a seamless beach stay for surfers, remote workers, and families.
          </p>
        </div>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACILITIES.map((facility) => {
            const IconComponent = iconMap[facility.icon] || Bed;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="p-3.5 rounded-xl bg-ocean-50 text-ocean-600 w-fit mb-5">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-sans font-bold text-base text-ocean-950 tracking-wide mb-2">
                    {facility.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-serif text-xs text-slate-500 leading-relaxed font-light">
                    {facility.description}
                  </p>
                </div>
                
                {/* Visual marker */}
                <div className="w-6 h-[2px] bg-sand-200 mt-6 group-hover:bg-ocean-500 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Highlight Feature Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-ocean-950 to-ocean-800 text-white shadow-xl relative overflow-hidden">
          {/* Wave/Rhythm Decoration in Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <ChefHat className="h-5 w-5 text-champagne" />
                <span className="font-sans text-xs tracking-widest text-champagne uppercase font-semibold">Special Long-Stay Facility</span>
              </div>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-sand-50 mb-3">
                Traditional 'Anjungan' Pavilion Cooking
              </h3>
              <p className="font-serif text-sm text-sand-200 font-light leading-relaxed max-w-3xl">
                Planning a long stay or surf trip with family? We provide exclusive cooking facilities at our beautifully constructed traditional Sumatra 'anjungan' pavilion. Prep fresh catches from the local Krui fisherman or cook comfort food under the ocean breeze.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-champagne hover:bg-white text-ocean-950 font-sans font-semibold text-xs tracking-wider uppercase shadow-md transition-all hover:scale-105"
              >
                View Long-Stay Discounts
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
