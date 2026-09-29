export const site = {
  name: "Lanes Health Clubs",
  tagline: "Break The Ordinary",
  address: "Golfers Lane, Angmering, BN16 4NB",
  phone: "01903 859777",
  phoneHref: "tel:+441903859777",
  email: "info@laneshealthclubs.co.uk",
  membershipEmail: "membership@laneshealthclubs.co.uk",
  swimEmail: "swim@laneshealthclubs.co.uk",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lanes+Health+Clubs+Golfers+Lane+Angmering+BN16+4NB",
  bookingPortal: "https://memberuk.resamania.com/laneshealthclubs/",
  joinOnline: "https://laneshealthclubs.co.uk/membership/",
  tripAdvisor:
    "https://www.tripadvisor.co.uk/Search?q=Lanes%20Health%20Clubs%20Rustington",
  socials: {
    instagram: "https://www.instagram.com/laneshealthclubs",
    facebook: "https://www.facebook.com/lanesrustington",
    linkedin: "https://www.linkedin.com/company/laneshealthclubs",
  },
  stats: [
    { value: 100, suffix: "+", label: "Classes every week" },
    { value: 25, suffix: "m", label: "Heated swimming pool" },
    { value: 350, suffix: "+", label: "Free parking spaces" },
    { value: 2015, suffix: "", label: "Established", plain: true },
  ],
  promo: "50% off joining fee — this September",
};

/** Club opening hours, 0 = Sunday … 6 = Saturday (JS Date#getDay) */
export const clubHours: { day: string; open: number; close: number }[] = [
  { day: "Sunday", open: 8, close: 20 },
  { day: "Monday", open: 6, close: 22 },
  { day: "Tuesday", open: 6, close: 22 },
  { day: "Wednesday", open: 6, close: 22 },
  { day: "Thursday", open: 6, close: 22 },
  { day: "Friday", open: 6, close: 22 },
  { day: "Saturday", open: 8, close: 20 },
];

export const nav = [
  { label: "Membership", href: "/membership" },
  { label: "Gym", href: "/gym" },
  { label: "Swimming", href: "/swimming" },
  {
    label: "Classes",
    href: "/classes",
    children: [
      { label: "All classes", href: "/classes" },
      { label: "Group Cycle Studio", href: "/group-cycle" },
    ],
  },
  { label: "Café & Events", href: "/cafe-events" },
  { label: "Wellness Rooms", href: "/wellness-rooms" },
  { label: "About", href: "/about" },
];
