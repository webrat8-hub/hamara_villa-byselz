import { CalendarDays, Wallet, Clock, Heart, Users, Trash2, ShieldAlert } from 'lucide-react';

export default function BookingPolicies() {
  return (
    <section id="policies" className="py-24 bg-white border-b border-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs tracking-[0.2em] text-ocean-600 uppercase font-bold block mb-3">
            Guiding Your Stay
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ocean-950 mb-4 leading-tight">
            Policies & Beachfront Philosophy
          </h2>
          <div className="h-[2px] w-12 bg-gold-500 mx-auto mb-6" />
          <p className="font-serif text-slate-600 font-light text-base sm:text-lg leading-relaxed">
            We aim to deliver the perfect tropical escape while actively preserving the gorgeous, pristine coastline of Krui, West Lampung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Booking Process & House Policies */}
          <div className="bg-sand-50/50 rounded-3xl p-8 border border-sand-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <ShieldAlert className="h-5 w-5 text-ocean-600" />
              <h3 className="font-sans font-bold text-lg text-ocean-950 uppercase tracking-wide">
                Prosedur & Kebijakan Villa
              </h3>
            </div>

            <div className="space-y-6">
              {/* Step 1: Booking contact */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-white shadow-sm text-ocean-600 h-fit">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ocean-950 uppercase tracking-wider mb-1">
                    1. Hubungi Tia (WhatsApp)
                  </h4>
                  <p className="font-serif text-xs text-slate-600 leading-relaxed font-light">
                    Semua pemesanan dikonfirmasi langsung melalui WhatsApp dengan <strong className="text-ocean-900 font-medium">Tia di nomor 0821-7767-1110</strong>. Gunakan estimator harga di atas untuk mengirimkan rincian menginap yang rapi.
                  </p>
                </div>
              </div>

              {/* Step 2: Payment Deposit */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-white shadow-sm text-ocean-600 h-fit">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ocean-950 uppercase tracking-wider mb-1">
                    2. Ketentuan DP 50%
                  </h4>
                  <p className="font-serif text-xs text-slate-600 leading-relaxed font-light">
                    Deposit sebesar <strong className="text-ocean-900 font-medium">50% (non-refundable)</strong> diperlukan untuk mengunci tanggal pilihan Anda. Pelunasan sisa pembayaran dilakukan paling lambat <strong className="text-ocean-900 font-medium">2 hari sebelum kedatangan</strong>.
                  </p>
                </div>
              </div>

              {/* Step 3: Check-in Check-out times */}
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-white shadow-sm text-ocean-600 h-fit">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-ocean-950 uppercase tracking-wider mb-1">
                    3. Waktu Check-In & Check-Out
                  </h4>
                  <p className="font-serif text-xs text-slate-600 leading-relaxed font-light">
                    Waktu <strong className="text-ocean-900 font-medium">Check-In mulai pukul 14:00</strong> WIB dan waktu <strong className="text-ocean-900 font-medium">Check-Out maksimal pukul 12:00</strong> WIB. Mohon hubungi kami terlebih dahulu untuk permintaan waktu khusus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Service Philosophy & Eco Initiative */}
          <div className="bg-ocean-950/5 rounded-3xl p-8 border border-ocean-950/5 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-5 w-5 text-gold-600 animate-pulse" />
              <h3 className="font-sans font-bold text-lg text-ocean-950 uppercase tracking-wide">
                Eco-Conscious & Service Philosophy
              </h3>
            </div>

            <div className="space-y-6 font-serif text-slate-600 text-sm leading-relaxed font-light">
              <p>
                Di Hamara Guest House, kenyamanan Anda adalah prioritas utama kami. Kami menyediakan{' '}
                <strong className="text-ocean-950 font-medium">bantuan staf dedikatif di lokasi</strong> untuk memastikan setiap kebutuhan Anda terpenuhi—mulai dari penyediaan kelapa muda segar hingga rekomendasi ombak selancar terbaik hari ini.
              </p>

              <p>
                Kami percaya pada kemewahan yang bertanggung jawab. Struktur villa kami menjalani pemeliharaan berkala secara konstan untuk menjaga kualitasnya agar selalu prima bagi para tamu dari dalam maupun luar negeri.
              </p>

              {/* Beach Cleaning Highlight */}
              <div className="p-5 rounded-2xl bg-white border border-sand-100 shadow-sm mt-4">
                <div className="flex items-center gap-3 mb-3 text-ocean-600">
                  <div className="p-1.5 rounded-lg bg-ocean-50 text-ocean-600">
                    <Trash2 className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="font-sans font-bold text-xs text-ocean-950 uppercase tracking-wider">
                    Beach Cleaning Initiative
                  </h4>
                </div>
                <p className="font-serif text-xs text-slate-500 leading-relaxed font-light">
                  Sebagai komitmen kami untuk menjaga keindahan alam Krui, Hamara menjalankan program{' '}
                  <strong className="text-ocean-950 font-semibold">"Beach Cleaning Initiative"</strong>. 
                  Kami secara aktif mengelola dan membersihkan sampah pesisir di sekitar desa Pugung Walur untuk memastikan pantai Benawang bebas dari plastik dan nyaman untuk dinikmati seluruh tamu kami.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
