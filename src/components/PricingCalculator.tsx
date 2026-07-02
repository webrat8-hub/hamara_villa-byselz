import { useState, useEffect } from 'react';
import { Calendar, Users, HelpCircle, Receipt, ArrowRight, Percent, CheckCircle2, Gift, Bed } from 'lucide-react';
import { StayCalculation } from '../types';

export default function PricingCalculator() {
  // Input states
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [guests, setGuests] = useState(4);
  const [extraBeds, setExtraBeds] = useState(0);

  // Computed state
  const [calculation, setCalculation] = useState<StayCalculation | null>(null);

  // Handle guest changes to auto-adjust extra beds
  const handleGuestsChange = (val: number) => {
    setGuests(val);
    if (val > 6) {
      setExtraBeds(val - 6);
    } else {
      setExtraBeds(0);
    }
  };

  useEffect(() => {
    // 1. Calculate nights
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    let nights = 1;

    if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
      const diffTime = date2.getTime() - date1.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      nights = diffDays > 0 ? diffDays : 1;
    }

    // Rates config
    const STANDARD_RATE = 1200000; // 1,200,000 IDR
    const SOLO_COUPLE_RATE = 1000000; // 1,000,000 IDR
    const EXTRA_BED_RATE = 150000; // 150,000 IDR

    // 2. Determine base rate per night
    // Special Solo/Couple Discount: 1,000,000 IDR/night for stays of 4 days (nights) or more (Entire Villa)
    const isSoloCouplePromo = guests <= 2 && nights >= 4;
    const baseRate = isSoloCouplePromo ? SOLO_COUPLE_RATE : STANDARD_RATE;

    const basePrice = baseRate * nights;
    const extraBedPrice = extraBeds * EXTRA_BED_RATE * nights;
    const subtotal = basePrice + extraBedPrice;

    // 3. Progressive rewards calculation
    let discountPercent = 0;
    let discountAmount = 0;
    let freeNightsApplied = 0;
    let freeNightsDiscountAmount = 0;
    let appliedPromoTitle = 'Tidak ada promo aktif';

    if (nights >= 6) {
      // Stay 6 Nights: Pay for 5, Get 1 Night FREE + Housekeeping + Luxury Pool Access
      freeNightsApplied = Math.floor(nights / 6);
      freeNightsDiscountAmount = freeNightsApplied * baseRate;
      appliedPromoTitle = 'Promo Menginap 6 Malam (Bayar 5, Gratis 1!)';
    } else if (nights >= 4) {
      // Stay 4 Nights: 10% Discount + Housekeeping every 2 days + 3 PM Access to Sumatra's best luxury pool
      discountPercent = 10;
      discountAmount = Math.round(basePrice * 0.1);
      appliedPromoTitle = 'Promo Menginap 4 Malam (Diskon 10% + Akses Kolam Renang Mewah)';
    } else if (nights >= 2) {
      // Stay 2 Nights: 5% Discount
      discountPercent = 5;
      discountAmount = Math.round(basePrice * 0.05);
      appliedPromoTitle = 'Promo Menginap 2 Malam (Diskon 5%)';
    }

    const totalPrice = subtotal - discountAmount - freeNightsDiscountAmount;

    // Format dates for display
    const formatDateIndonesia = (dateStr: string) => {
      try {
        const d = new Date(dateStr);
        return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
      } catch (e) {
        return dateStr;
      }
    };

    // 4. Draft WhatsApp message
    const waCheckIn = formatDateIndonesia(checkIn);
    const waCheckOut = formatDateIndonesia(checkOut);
    const formatIDR = (val: number) => {
      return val.toLocaleString('id-ID');
    };

    const promoBenefitsText = nights >= 6 
      ? '\n🎁 BONUS: Gratis 1 Malam + Housekeeping + Akses Kolam Renang Mewah Sumatra' 
      : nights >= 4 
      ? '\n🎁 BONUS: Housekeeping tiap 2 hari + Akses Kolam Renang Mewah Sumatra (15.00)' 
      : discountPercent > 0 
      ? `\n🎁 BONUS: Diskon ${discountPercent}% Aktif` 
      : '';

    const coupleText = isSoloCouplePromo ? ' (Promo Solo/Couple Aktif)' : '';

    const whatsappMessage = `Halo Tia, saya ingin pesan villa Hamara Guest House di Krui. Berikut rincian rencana tinggal kami:
• Check-In: ${waCheckIn}
• Check-Out: ${waCheckOut}
• Durasi: ${nights} Malam
• Jumlah Tamu: ${guests} Orang${coupleText}
• Kasur Tambahan (Extra Bed): ${extraBeds} Kasur
• Promo Aktif: ${appliedPromoTitle}${promoBenefitsText}
• Total Estimasi Biaya: Rp ${formatIDR(totalPrice)}

Mohon info ketersediaan tanggalnya ya. Terima kasih!`;

    setCalculation({
      checkInDate: checkIn,
      checkOutDate: checkOut,
      nights,
      guests,
      extraBeds,
      basePrice,
      extraBedPrice,
      subtotal,
      discountPercent,
      discountAmount,
      freeNightsApplied,
      freeNightsDiscountAmount,
      totalPrice,
      appliedPromoTitle,
      whatsappMessage,
    });
  }, [checkIn, checkOut, guests, extraBeds]);

  const formatIDR = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Tariffs, Promotions, Progressive Perks info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-gold-500" />
              <span className="font-sans text-xs tracking-[0.25em] text-gold-600 uppercase font-bold">
                Exclusive Tariffs
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ocean-950 leading-tight mb-6">
              Tarif Eksklusif & <br />
              <span className="font-serif font-light text-slate-700 italic">Progressive Rewards</span>
            </h2>

            <p className="font-serif text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-8">
              Kami menawarkan sistem harga transparan untuk seluruh bangunan villa (Entire Villa). Semakin lama Anda tinggal di Hamara Guest House, semakin banyak fasilitas premium eksklusif yang Anda dapatkan secara gratis.
            </p>

            {/* Standard Rates Breakdown */}
            <div className="space-y-4 mb-8 bg-white p-6 rounded-2xl border border-sand-100 shadow-sm">
              <h3 className="font-sans font-bold text-sm text-ocean-950 uppercase tracking-widest border-b border-slate-100 pb-3 mb-3">
                Tarif Dasar Villa
              </h3>
              
              <div className="flex justify-between items-center text-sm">
                <span className="font-serif text-slate-600 font-light">Sewa 1 Villa (Max 6 Orang)</span>
                <span className="font-sans font-bold text-ocean-950 bg-ocean-50 text-ocean-600 px-3 py-1 rounded-full text-xs">
                  {formatIDR(1200000)} / Malam
                </span>
              </div>

              <div className="flex justify-between items-center text-sm pt-2">
                <span className="font-serif text-slate-600 font-light">Kasur Tambahan (Max 2 Extra Bed)</span>
                <span className="font-sans font-semibold text-slate-700">
                  {formatIDR(150000)} / Kasur / Malam
                </span>
              </div>

              <div className="flex justify-between items-start text-sm pt-3 border-t border-dashed border-slate-100">
                <div>
                  <span className="block font-sans font-bold text-xs text-gold-600 uppercase">Promo Solo / Couple</span>
                  <span className="font-serif text-xs text-slate-500 font-light">Tinggal ≥ 4 hari (Max 2 Orang)</span>
                </div>
                <span className="font-sans font-bold text-gold-700 bg-gold-50 px-3 py-1 rounded-full text-xs">
                  Diskon Khusus: {formatIDR(1000000)} / Malam
                </span>
              </div>
            </div>

            {/* Progressive Rewards Checklist */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-xs text-ocean-950 uppercase tracking-widest mb-3">
                Keuntungan Menginap Lebih Lama
              </h3>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-ocean-100 text-ocean-600 mt-1">
                  <Percent className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ocean-950">Menginap 2 Malam: Diskon 5%</h4>
                  <p className="font-serif text-xs text-slate-500 font-light leading-relaxed">
                    Potongan harga otomatis 5% untuk seluruh tagihan sewa dasar villa Anda.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-ocean-100 text-ocean-600 mt-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ocean-950">Menginap 4 Malam: Diskon 10% + Kolam Renang Sumatra</h4>
                  <p className="font-serif text-xs text-slate-500 font-light leading-relaxed">
                    Potongan 10%, layanan housekeeping gratis setiap 2 hari sekali, serta akses eksklusif mulai pukul 15:00 ke <strong className="text-ocean-900 font-semibold">kolam renang termewah se-Sumatra</strong> yang berlokasi sangat dekat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-gold-100 text-gold-600 mt-1">
                  <Gift className="h-3.5 w-3.5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-gold-700">Menginap 6 Malam: Bayar 5, Gratis 1 Malam!</h4>
                  <p className="font-serif text-xs text-slate-500 font-light leading-relaxed">
                    Bonus 1 malam sepenuhnya GRATIS. Lengkap dengan housekeeping 2 hari sekali dan akses harian gratis ke Sumatra Luxury Pool.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Booking Calculator */}
          <div className="lg:col-span-7">
            <div className="bg-ocean-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full filter blur-xl pointer-events-none" />

              <h3 className="font-sans font-bold text-lg sm:text-xl text-sand-50 mb-1 flex items-center gap-2">
                <Receipt className="h-5 w-5 text-champagne" />
                <span>Stay Planner & Cost Estimator</span>
              </h3>
              <p className="font-serif text-xs text-sand-200/80 font-light mb-6">
                Pilih tanggal tinggal dan rancang liburan tropis Anda. Estimasi harga akan dihitung secara langsung.
              </p>

              {/* INPUT FIELDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Check In Date */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold text-champagne uppercase tracking-widest mb-1.5">
                    Tanggal Check-In
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="date"
                      min={todayStr}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                    />
                  </div>
                </div>

                {/* Check Out Date */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold text-champagne uppercase tracking-widest mb-1.5">
                    Tanggal Check-Out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="date"
                      min={checkIn || todayStr}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold text-champagne uppercase tracking-widest mb-1.5">
                    Jumlah Tamu ({guests} Orang)
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <select
                      value={guests}
                      onChange={(e) => handleGuestsChange(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500 text-white appearance-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num} className="bg-ocean-950 text-white">
                          {num} Orang {num > 6 ? '(Butuh Kasur Tambahan)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Extra Beds Selection */}
                <div>
                  <label className="block font-sans text-[10px] font-semibold text-champagne uppercase tracking-widest mb-1.5">
                    Extra Bed Needed ({extraBeds})
                  </label>
                  <div className="relative">
                    <Bed className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <select
                      value={extraBeds}
                      onChange={(e) => setExtraBeds(Number(e.target.value))}
                      disabled={guests > 6}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-500 text-white disabled:opacity-50"
                    >
                      {[0, 1, 2].map((num) => (
                        <option
                          key={num}
                          value={num}
                          disabled={guests > 6 && num < guests - 6}
                          className="bg-ocean-950 text-white"
                        >
                          {num} Kasur Tambahan {num > 0 ? `(+${formatIDR(num * 150000)}/malam)` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* LIVE BILLING BREAKDOWN */}
              {calculation && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
                  <h4 className="font-sans font-bold text-xs tracking-wider text-champagne uppercase mb-4 border-b border-white/5 pb-2">
                    Billing Breakdown ({calculation.nights} Malam)
                  </h4>

                  <div className="space-y-2.5 text-sm font-serif">
                    {/* Base Rate */}
                    <div className="flex justify-between font-light text-sand-100">
                      <span>
                        Sewa Dasar Villa ({calculation.guests <= 2 && calculation.nights >= 4 ? 'Promo Couple' : 'Tarif Standar'})
                      </span>
                      <span className="font-sans">
                        {formatIDR(calculation.basePrice / calculation.nights)} x {calculation.nights}m
                      </span>
                    </div>

                    {/* Extra Bed Cost if any */}
                    {calculation.extraBeds > 0 && (
                      <div className="flex justify-between font-light text-sand-100">
                        <span>Extra Bed ({calculation.extraBeds} kasur)</span>
                        <span className="font-sans">
                          {formatIDR(150000 * calculation.extraBeds)} x {calculation.nights}m
                        </span>
                      </div>
                    )}

                    {/* Subtotal */}
                    <div className="flex justify-between text-xs text-slate-400 font-sans border-t border-white/5 pt-2 mt-1">
                      <span>SUBTOTAL</span>
                      <span>{formatIDR(calculation.subtotal)}</span>
                    </div>

                    {/* Active Promo Rewards */}
                    {calculation.discountAmount > 0 && (
                      <div className="flex justify-between text-green-400 font-medium">
                        <span>Diskon Menginap ({calculation.discountPercent}%)</span>
                        <span className="font-sans">-{formatIDR(calculation.discountAmount)}</span>
                      </div>
                    )}

                    {calculation.freeNightsApplied > 0 && (
                      <div className="flex justify-between text-green-400 font-medium">
                        <span>Malam Gratis ({calculation.freeNightsApplied} Malam)</span>
                        <span className="font-sans">-{formatIDR(calculation.freeNightsDiscountAmount)}</span>
                      </div>
                    )}

                    {/* Final Price Block */}
                    <div className="flex justify-between items-center text-white font-bold border-t border-white/10 pt-3 mt-3">
                      <span className="font-sans text-sm tracking-wide">ESTIMASI TOTAL</span>
                      <span className="font-sans text-xl text-gold-500">
                        {formatIDR(calculation.totalPrice)}
                      </span>
                    </div>
                  </div>

                  {/* Promo Banner / Benefits alert */}
                  <div className="mt-4 p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs flex items-center gap-2.5">
                    <span className="text-lg">🌴</span>
                    <div className="font-serif text-sand-100 font-light">
                      <span className="font-sans font-bold text-gold-500 block">
                        {calculation.appliedPromoTitle}
                      </span>
                      {calculation.nights >= 4 ? (
                        <span>Termasuk Housekeeping gratis + Akses Sumatra Luxury Pool (15:00)</span>
                      ) : (
                        <span>Nikmati kemewahan dan keindahan murni di Benawang Beach Krui.</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* BOOK BUTTON */}
              <a
                href={
                  calculation
                    ? `https://wa.me/6282177671110?text=${encodeURIComponent(calculation.whatsappMessage)}`
                    : 'https://wa.me/6282177671110'
                }
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-ocean-950 font-sans font-bold text-sm tracking-widest uppercase shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <span>Pesan Sekarang via WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="text-center font-serif text-[10px] text-slate-400 mt-3 font-light">
                *Booking dijamin langsung terhubung dengan Tia (Pengelola Hamara Guest House) di 0821-7767-1110.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
