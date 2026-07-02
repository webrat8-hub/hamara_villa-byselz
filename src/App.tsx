/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import PricingCalculator from './components/PricingCalculator';
import BookingPolicies from './components/BookingPolicies';
import Testimonials from './components/Testimonials';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col font-serif antialiased selection:bg-ocean-100 selection:text-ocean-900">
      {/* Sticky Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Villa Section */}
        <About />

        {/* Facilities Section */}
        <Facilities />

        {/* Pricing & Custom Planner Calculator */}
        <PricingCalculator />

        {/* Testimonials */}
        <Testimonials />

        {/* Interactive Gallery with Slide Lightbox */}
        <GallerySection />

        {/* Policies and Sustainability */}
        <BookingPolicies />
      </main>

      {/* Footer with Contacts, Maps and Instagram */}
      <Footer />
    </div>
  );
}

