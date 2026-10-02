export type AttendanceStatus = "stamped" | "upcoming";

export type Concert = {
  id: string;
  artist: string;
  concert: string;
  venue: string;
  city: string;
  date: string;
  dateShort: string;
  status: AttendanceStatus;
  visual: ArtistVisual;
  reactions?: { emoji: string; count: number }[];
  memory?: string;
  rotation?: number;
};

export type ArtistVisual = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  emoji: string;
  unlocked: boolean;
};

export type UserProfile = {
  name: string;
  username: string;
  persona: string;
  fanLevel: number;
  concertsToNextLevel: number;
  stats: {
    concerts: number;
    cities: number;
    badges: number;
  };
};
