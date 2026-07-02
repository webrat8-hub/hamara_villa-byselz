import heroBeachPath from './assets/images/hero_beach_path.jpg';
import villaExterior from './assets/images/villa_exterior.jpg';
import villaBedroom from './assets/images/villa_bedroom.jpg';
import villaLiving from './assets/images/villa_living.jpg';
import villaOutdoorDeck from './assets/images/villa_outdoor_deck.jpg';
import villaSunset from './assets/images/villa_sunset.jpg';
import villaBathroom from './assets/images/villa_bathroom.jpg';
import villaBedroomMirror from './assets/images/villa_bedroom_mirror.jpg';
import villaSignCloseup from './assets/images/villa_sign_closeup.jpg';
import villaBeachPorch from './assets/images/villa_beach_porch.jpg';
import villaBedroomDreamcatcher from './assets/images/villa_bedroom_dreamcatcher.jpg';
import villaBunkBed from './assets/images/villa_bunk_bed.jpg';
import villaKitchen from './assets/images/villa_kitchen.jpg';
import villaEntry from './assets/images/villa_entry.jpg';

import { Facility, PromoTier, GalleryImage } from './types';

export const IMAGES = {
  heroBeachPath,
  villaExterior,
  villaBedroom,
  villaLiving,
  villaOutdoorDeck,
  villaSunset,
  villaBathroom,
  villaBedroomMirror,
  villaSignCloseup,
  villaBeachPorch,
  villaBedroomDreamcatcher,
  villaBunkBed,
  villaKitchen,
  villaEntry,
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    src: villaExterior,
    alt: 'Hamara Guest House Premium Villa Exterior Entrance',
    category: 'Exterior',
    title: 'Modern Tropical Façade & Stone Pillars',
  },
  {
    id: 'g2',
    src: heroBeachPath,
    alt: 'Lush Garden Path Leading to Benawang Beach',
    category: 'Outdoor',
    title: 'Pathway to Benawang Beach',
  },
  {
    id: 'g3',
    src: villaBedroom,
    alt: 'Hamara Guest House Beautifully Renovated Master Bedroom with queen bed',
    category: 'Bedroom',
    title: 'Comfort Master Bedroom',
  },
  {
    id: 'g4',
    src: villaOutdoorDeck,
    alt: 'Covered Wooden Veranda and Dining Area',
    category: 'Outdoor',
    title: 'Spacious Wooden Veranda Deck',
  },
  {
    id: 'g5',
    src: villaLiving,
    alt: 'Bright Cozy Living Room with Smart TV, sofa and wooden bench',
    category: 'Living Area',
    title: 'Elegant Tropical Living Room',
  },
  {
    id: 'g6',
    src: villaSunset,
    alt: 'Golden Sunset View from Benawang Beach Krui',
    category: 'Sunset',
    title: 'Breathtaking Benawang Sunset',
  },
  {
    id: 'g7',
    src: villaBathroom,
    alt: 'Newly Renovated Bathroom with glass blocks and hot shower',
    category: 'Bathroom',
    title: 'Modern Tile Bathroom',
  },
  {
    id: 'g8',
    src: villaBedroomMirror,
    alt: 'AC Bedroom featuring full mirror wardrobe and stunning ocean waves painting',
    category: 'Bedroom',
    title: 'Mirrored Wardrobe AC Bedroom',
  },
  {
    id: 'g9',
    src: villaSignCloseup,
    alt: 'Closeup of Hamara Guest House custom wooden sign on stone pillar wall',
    category: 'Exterior',
    title: 'Villa Custom Wooden Signboard',
  },
  {
    id: 'g10',
    src: villaBeachPorch,
    alt: 'Gorgeous beachfront porch terrace dining table under wooden beams with seagrass lamps',
    category: 'Outdoor',
    title: 'Beachfront Porch Dining Table',
  },
  {
    id: 'g11',
    src: villaBedroomDreamcatcher,
    alt: 'Cozy AC Bedroom with dark gray bed setting and dreamcatcher ornament',
    category: 'Bedroom',
    title: 'Dreamcatcher Accent Bedroom',
  },
  {
    id: 'g12',
    src: villaBunkBed,
    alt: 'Spacious guest bedroom equipped with sturdy wooden bunk beds and fresh linen',
    category: 'Bedroom',
    title: 'Boho Wooden Bunk Beds',
  },
  {
    id: 'g13',
    src: villaKitchen,
    alt: 'Fully equipped modern kitchen with a round dining table, dark wood chairs, gas stove and refrigerator',
    category: 'Kitchen',
    title: 'Fully Equipped Guest Kitchen',
  },
  {
    id: 'g14',
    src: villaEntry,
    alt: 'Cozy entry foyer hallway with premium leather recliner chair, console table and vanity mirror',
    category: 'Living Area',
    title: 'Entry Hallway & Recliner Foyer',
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'f1',
    title: '3 AC Bedrooms',
    description: 'Beautifully appointed bedrooms with modern, quiet air conditioning to guarantee a restful sleep.',
    icon: 'Bed',
  },
  {
    id: 'f2',
    title: 'Hot Showers & Bathrooms',
    description: 'Freshly renovated, modern bathrooms equipped with strong pressure hot water showers.',
    icon: 'ShowerHead',
  },
  {
    id: 'f3',
    title: 'Fully Equipped Kitchen',
    description: 'Complete cooking amenities including gas stoves, cutlery, and a large double-door refrigerator.',
    icon: 'Utensils',
  },
  {
    id: 'f4',
    title: 'StarLink Ultra-WiFi',
    description: 'High-speed satellite internet, perfect for remote workers, digital nomads, or streaming.',
    icon: 'Wifi',
  },
  {
    id: 'f5',
    title: 'Smart TV Entertainment',
    description: 'Wide-screen Smart TV set up with streaming apps for cozy movie nights after long surf sessions.',
    icon: 'Tv',
  },
  {
    id: 'f6',
    title: 'Exclusive Garden Area',
    description: 'A private, manicured tropical natural lawn and garden exclusive for villa guests.',
    icon: 'Trees',
  },
  {
    id: 'f7',
    title: 'Anjungan Cooking Area',
    description: 'Outdoor traditional pavilion cooking facilities, custom-built and ideal for long-stay guests.',
    icon: 'ChefHat',
  },
  {
    id: 'f8',
    title: 'Outdoor Dining & Shower',
    description: 'A spacious wooden dining table on the deck and a fresh outdoor shower to rinse off beach sand.',
    icon: 'Sun',
  },
];

export const PROMO_TIERS: PromoTier[] = [
  {
    id: 'p1',
    nightsRequired: 2,
    title: 'Weekend Explorer Reward',
    discountPercent: 5,
    freeNights: 0,
    description: 'Perfect for domestic weekend getaways.',
    benefits: ['5% Discount off entire stay', 'Dedicated on-site staff assistance'],
  },
  {
    id: 'p2',
    nightsRequired: 4,
    title: 'Sumatran Surf & Swim Week',
    discountPercent: 10,
    freeNights: 0,
    description: 'For surfers and families looking to settle in.',
    benefits: [
      '10% Discount off entire stay',
      'Professional housekeeping every 2 days',
      'Exclusive 15:00 access to Sumatra’s best luxury pool nearby',
    ],
  },
  {
    id: 'p3',
    nightsRequired: 6,
    title: 'Tropical Extended Escape',
    discountPercent: 0,
    freeNights: 1,
    description: 'Pay for 5 nights, get the 6th night absolutely FREE!',
    benefits: [
      '1 Night completely FREE (Pay for 5, Stay 6)',
      'Professional housekeeping every 2 days',
      'Daily Sumatra luxury pool access starting 15:00',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Marcus & Sophie',
    role: 'Surfers & Nomads from Australia',
    text: 'Hamara is a hidden gem in Pugung Walur! Having ultra-fast StarLink internet while living literally steps from the beach is a dream. The garden path directly leads to Benawang beach. We will definitely come back!',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Keluarga Rahardjo',
    role: 'Family from Jakarta',
    text: 'Sangat puas menginap di Hamara. Kamar tidurnya bersih, AC dingin, dan dapurnya lengkap sekali. Anak-anak sangat suka bermain di kebunnya yang luas dan bersih. Sangat direkomendasikan untuk liburan keluarga di Krui.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Yuki Takahashi',
    role: 'Adventure Traveler from Japan',
    text: 'The best villa quality in the entire Pugung Krui area, without question. Clean, premium materials, and superb hospitality. The staff helped us with everything, and we loved their beach cleaning initiative to keep Pugung plastic-free.',
    rating: 5,
  },
];
