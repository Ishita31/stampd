import type { Badge, Concert, UserProfile } from "@/types";

export const currentUser: UserProfile = {
  name: "Ishita",
  username: "@ishita",
  persona: "RAVE ROYALTY",
  fanLevel: 7,
  concertsToNextLevel: 3,
  stats: {
    concerts: 23,
    cities: 6,
    badges: 12,
  },
};

export const upcomingConcert: Concert = {
  id: "charli-msg",
  artist: "Charli XCX",
  concert: "Sweat Tour",
  venue: "Madison Square Garden",
  city: "New York",
  date: "September 18, 2026",
  dateShort: "SEP 18",
  status: "upcoming",
  visual: {
    from: "#FF4D8D",
    via: "#7A1E3A",
    to: "#1A0610",
    accent: "#FFB4C8",
  },
};

export const concerts: Concert[] = [
  upcomingConcert,
  {
    id: "weeknd-sofi",
    artist: "The Weeknd",
    concert: "After Hours Til Dawn",
    venue: "SoFi Stadium",
    city: "Los Angeles",
    date: "July 12, 2026",
    dateShort: "JUL 12",
    status: "stamped",
    visual: {
      from: "#C45C26",
      via: "#5A162B",
      to: "#0B0B0B",
      accent: "#F5C16C",
    },
    reactions: [
      { emoji: "🔥", count: 48 },
      { emoji: "🖤", count: 31 },
      { emoji: "😭", count: 19 },
    ],
    memory:
      "Red lights, a packed floor, and Blinding Lights hitting like a movie ending. We stayed until the last encore.",
    rotation: -1.6,
  },
  {
    id: "fred-again-brooklyn",
    artist: "Fred again..",
    concert: "Actual Life",
    venue: "Brooklyn Mirage",
    city: "Brooklyn",
    date: "June 4, 2026",
    dateShort: "JUN 04",
    status: "stamped",
    visual: {
      from: "#4AA3A2",
      via: "#1E3A4C",
      to: "#0B0B0B",
      accent: "#B8F3E8",
    },
    reactions: [
      { emoji: "🪩", count: 62 },
      { emoji: "🫶", count: 27 },
    ],
    memory:
      "Rain on the open roof, strangers singing every sample, phones down for once. Pure release.",
    rotation: 1.8,
  },
  {
    id: "sza-chicago",
    artist: "SZA",
    concert: "SOS Tour",
    venue: "United Center",
    city: "Chicago",
    date: "May 22, 2026",
    dateShort: "MAY 22",
    status: "stamped",
    visual: {
      from: "#D4A017",
      via: "#7A1E3A",
      to: "#14080C",
      accent: "#F5E6A3",
    },
    reactions: [
      { emoji: "🌹", count: 41 },
      { emoji: "✨", count: 22 },
    ],
    memory:
      "Front-row energy during Kill Bill. The whole arena went quiet, then exploded.",
    rotation: -0.8,
  },
  {
    id: "tyler-austin",
    artist: "Tyler, the Creator",
    concert: "Chromakopia",
    venue: "Moody Center",
    city: "Austin",
    date: "April 9, 2026",
    dateShort: "APR 09",
    status: "stamped",
    visual: {
      from: "#F2C14E",
      via: "#C45C26",
      to: "#1A1208",
      accent: "#FFF3C4",
    },
    reactions: [
      { emoji: "🐝", count: 36 },
      { emoji: "💥", count: 18 },
    ],
    memory:
      "Golf le Fleur everywhere. Chromakopia felt like a fever dream in the best way.",
    rotation: 2.2,
  },
  {
    id: "billie-london",
    artist: "Billie Eilish",
    concert: "Hit Me Hard and Soft",
    venue: "The O2",
    city: "London",
    date: "March 1, 2026",
    dateShort: "MAR 01",
    status: "stamped",
    visual: {
      from: "#7EC8E3",
      via: "#1B3B4B",
      to: "#0B0B0B",
      accent: "#D4F1F9",
    },
    reactions: [
      { emoji: "🌊", count: 29 },
      { emoji: "💚", count: 33 },
    ],
    memory:
      "Happier Than Ever in the dark, then the drop. London lost it.",
    rotation: -2.1,
  },
  {
    id: "peggy-berlin",
    artist: "Peggy Gou",
    concert: "I Hear You",
    venue: "Berghain Kantine",
    city: "Berlin",
    date: "February 14, 2026",
    dateShort: "FEB 14",
    status: "stamped",
    visual: {
      from: "#A83252",
      via: "#3D1F5C",
      to: "#0B0B0B",
      accent: "#E7B8FF",
    },
    reactions: [
      { emoji: "🎧", count: 54 },
      { emoji: "🌙", count: 21 },
    ],
    memory:
      "Four hours, no clocks, just kick drums and neon. This is why we travel for music.",
    rotation: 1.2,
  },
];

export const stampedConcerts = concerts.filter((c) => c.status === "stamped");

export const latestBadge = {
  emoji: "🔥",
  name: "Front Row Energy",
  description: "Checked in within the first 10 rows.",
};

export const badges: Badge[] = [
  {
    id: "first-concert",
    name: "First Concert",
    description: "Your passport begins here.",
    emoji: "🎟️",
    unlocked: true,
  },
  {
    id: "front-row",
    name: "Front Row",
    description: "Close enough to feel the bass.",
    emoji: "🔥",
    unlocked: true,
  },
  {
    id: "festival-veteran",
    name: "Festival Veteran",
    description: "Survived a full festival weekend.",
    emoji: "🏕️",
    unlocked: true,
  },
  {
    id: "concert-traveller",
    name: "Concert Traveller",
    description: "Stamped 5+ cities.",
    emoji: "✈️",
    unlocked: true,
  },
  {
    id: "superfan",
    name: "Superfan",
    description: "20 concerts in the books.",
    emoji: "👑",
    unlocked: true,
  },
  {
    id: "backstage-energy",
    name: "Backstage Energy",
    description: "You made it past the velvet rope.",
    emoji: "⚡",
    unlocked: false,
  },
];
