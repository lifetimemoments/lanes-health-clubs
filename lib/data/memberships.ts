export type Membership = {
  name: string;
  price: string;
  cadence?: string;
  joiningFee?: string;
  term?: string;
  featured?: boolean;
  promo?: boolean;
  includes: string[];
  note?: string;
  cta?: { label: string; href: string; external?: boolean };
};

const standardIncludes = [
  "3 guest passes",
  "Free gym assessment",
  "15% off Wellness Rooms treatments*",
  "30-minute Personal Training session",
];

export const headlineMemberships: Membership[] = [
  {
    name: "12 Month",
    price: "£88",
    cadence: "/month",
    joiningFee: "£37.50 joining fee",
    term: "12 months minimum term",
    featured: true,
    promo: true,
    includes: standardIncludes,
  },
  {
    name: "3 Month",
    price: "£99",
    cadence: "/month",
    joiningFee: "£37.50 joining fee",
    term: "3 months minimum term",
    promo: true,
    includes: standardIncludes,
  },
  {
    name: "Annual",
    price: "£925",
    joiningFee: "£37.50 joining fee",
    term: "12 months — paid in full",
    promo: true,
    includes: standardIncludes,
  },
];

export const moreMemberships: Membership[] = [
  {
    name: "6 Month",
    price: "£525",
    cadence: "upfront",
    joiningFee: "£37.50 joining fee",
    promo: true,
    includes: standardIncludes,
  },
  {
    name: "Corporate",
    price: "£82",
    cadence: "/month",
    joiningFee: "£50 joining fee (subject to employer)",
    term: "12 months minimum term",
    includes: standardIncludes,
    cta: { label: "More info", href: "/contact" },
  },
  {
    name: "Blue Light Card",
    price: "£82",
    cadence: "/month",
    joiningFee: "£50 joining fee",
    term: "3 months minimum term",
    includes: standardIncludes,
  },
  {
    name: "18–25 Year Old",
    price: "£72.50",
    cadence: "/month",
    joiningFee: "£50 joining fee",
    term: "3 months minimum term",
    includes: standardIncludes,
    cta: { label: "More info", href: "/contact" },
  },
  {
    name: "Monthly Flexible",
    price: "£105",
    cadence: "/month",
    joiningFee: "£50 joining fee",
    includes: ["Free gym assessment", "15% off Wellness Rooms treatments*"],
  },
  {
    name: "12 Month Joint",
    price: "£82",
    cadence: "per person /month",
    joiningFee: "£75 joining fee — min. 2 people joining",
    term: "12 months minimum term — other offers not valid",
    includes: standardIncludes,
  },
  {
    name: "Day Pass",
    price: "£21",
    joiningFee: "No joining fee",
    note: "Sign up in club — just visit reception",
    includes: [
      "All-day access",
      "Gym, pool, jacuzzi, sauna & steam",
    ],
    cta: { label: "Guest pass info", href: "/faqs" },
  },
  {
    name: "Movement Is Medicine",
    price: "£120",
    cadence: "/month",
    joiningFee: "£50 joining fee",
    note: "GP referral required",
    includes: ["Regular assessments", "Clinical-condition support programme"],
    cta: { label: "Contact membership team", href: "mailto:membership@laneshealthclubs.co.uk", external: true },
  },
];

export const membershipFootnote =
  "*Members receive 15% off treatments; new members receive an extra 10% off their first treatment. Discounts excluded on any other offers.";
