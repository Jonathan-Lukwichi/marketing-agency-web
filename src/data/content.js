// ════════════════════════════════════════════════════════════════════════
//  LWC GROUP MARKETING — the agency's own site. Direct, bold, short.
// ════════════════════════════════════════════════════════════════════════

export const brand = {
  name: 'LWC GROUP MARKETING',
  short: 'LWC',
  monogram: 'L',
  tagline: 'Your partner in marketing design.',
  email: 'jonathanlukwichi29@gmail.com',
  instagram: 'https://instagram.com',
}

// The agency film: boring scroll → your 5 demos → happy customers.
export const scrub = { frameCount: 287, ext: 'webp', heightVh: 720 }

// Bold statements over the film — no "why/how" labels, just the claim.
export const heroBeats = [
  { tag: 'LWC Group Marketing', title: 'Your marketing is forgettable.', p: 'Boring photos, random PDFs — gone in seconds. Exactly like your competitors.' },
  { tag: 'The fix', title: 'So we make you unforgettable.', p: 'We turn your business into a film people can’t stop watching — or sharing.' },
  { tag: 'Products', title: 'Sell a product?', p: 'We make it look irresistible.' },
  { tag: 'Services', title: 'Offer a service?', p: 'We make it impossible to ignore.' },
  { tag: 'For everyone', title: 'Whatever you sell.', p: 'Product or service — we make you the one they remember.' },
  { tag: 'Get started', title: 'Cinematic sites + video ads.', p: 'Contact us for a quote — and a free demo of your own business.', cta: true },
]

// Case studies — the real demos, split by what the visitor does.
export const cases = {
  eyebrow: 'The proof',
  title: 'This is what we build.',
  product: {
    label: 'Sell a product?',
    line: 'We make it look irresistible.',
    items: [
      { name: 'Maison Royale', tag: 'Luxury menswear', img: '/cs-maison.jpg' },
      { name: 'BrightVolt Solar', tag: 'Solar installer', img: '/cs-solar.jpg' },
    ],
  },
  service: {
    label: 'Offer a service?',
    line: 'We make it impossible to ignore.',
    items: [
      { name: 'Prestige Properties', tag: 'Real estate', img: '/cs-prestige.jpg' },
      { name: 'Lumière', tag: 'Restaurant & lounge', img: '/cs-lumiere.jpg' },
      { name: 'LWC Group', tag: 'Engineering', img: '/cs-lwc.jpg' },
    ],
  },
}

export const steps = {
  eyebrow: 'How it works',
  title: 'Three steps to unforgettable.',
  list: [
    ['We film it', 'A short cinematic film of your product or service.'],
    ['We build it', 'A one-page website that plays like a movie.'],
    ['We spread it', 'A video ad that stops the scroll and brings people to you.'],
  ],
}

export const pricing = {
  eyebrow: 'Simple pricing',
  title: 'Priced to pay for itself.',
  cards: [
    { name: 'Reel', price: 'R1 500', desc: 'One cinematic video ad.' },
    { name: 'Essential', price: 'R5 000', desc: 'A one-page cinematic site + one reel.' },
    { name: 'Signature', price: 'R12 000', desc: 'Bilingual site + gallery + 3 reels.', feat: true },
    { name: 'Premium', price: 'from R20 000', desc: 'Big builds — solar, property, cars.' },
  ],
  monthly: 'Or subscribe for fresh content every month — from R990.',
  note: 'Prices in Rand, illustrative — we quote to your business.',
}

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Let’s make you unforgettable.',
  sub: 'Tell us what you sell. We’ll send you a quote and a free demo of your business — no pressure.',
  cta: 'Email us for a quote & demo',
  lines: ['A quote for your business', 'A free demo of your product or service', 'A quick, honest chat'],
}

export const credit = {
  by: 'LWC Group Marketing',
  tagline: 'Your partner in marketing design',
}
