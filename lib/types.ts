export interface Tournament {
  id: string;
  name: string;
  date: string;
  venue: string;
  price: number;
  prize: number;
  participants: number;
  maxParticipants: number;
  level: string;
  status: 'Open' | 'Full' | 'Closed';
  image: string;
  description: string;
  rules: string[];
  schedule: {
    time: string;
    event: string;
  }[];
  registeredPlayers: {
    name: string;
    level: string;
    avatar: string;
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  level: string;
  tournamentsPlayed: number;
  wins: number;
  losses: number;
}