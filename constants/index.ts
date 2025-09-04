// API endpoints
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Navigation
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Listings', path: '/listings' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

// Listing categories
export const LISTING_CATEGORIES = [
    { id: 'all', name: 'All' },
    { id: 'apartment', name: 'Apartment' },
    { id: 'house', name: 'House' },
    { id: 'villa', name: 'Villa' },
    { id: 'cabin', name: 'Cabin' },
];

// Price ranges
export const PRICE_RANGES = [
    { id: 'all', name: 'All Prices' },
    { id: 'economy', name: 'Under $50', min: 0, max: 50 },
    { id: 'standard', name: '$50 - $100', min: 50, max: 100 },
    { id: 'premium', name: '$100 - $200', min: 100, max: 200 },
    { id: 'luxury', name: '$200+', min: 200, max: null },
];

// Placeholder data for development
export const PLACEHOLDER_LISTINGS = [
    {
        id: '1',
        title: 'Modern apartment with ocean view',
        description: 'Spacious and bright apartment with amazing ocean views',
        imageUrl: '/assets/listing1.jpg',
        price: 120,
        rating: 4.9,
        location: 'Miami, FL',
        category: 'apartment',
    },
    {
        id: '2',
        title: 'Cozy cabin in the woods',
        description: 'Private cabin surrounded by nature',
        imageUrl: '/assets/listing2.jpg',
        price: 95,
        rating: 4.7,
        location: 'Asheville, NC',
        category: 'cabin',
    },
    {
        id: '3',
        title: 'Luxury villa with private pool',
        description: 'Elegant villa with all amenities and private swimming pool',
        imageUrl: '/assets/listing3.jpg',
        price: 250,
        rating: 5.0,
        location: 'Malibu, CA',
        category: 'villa',
    },
];
