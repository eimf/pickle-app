import { Tournament as PrismaTournament, Match, Player } from '@prisma/client';
import { Tournament as UITournament } from './types';

// Type representing a tournament with its matches and players included
export type TournamentWithRelations = PrismaTournament & {
  matches: (Match & {
    player1: Player;
    player2: Player;
  })[];
};

/**
 * Adapts a Prisma tournament model to the UI tournament model
 */
export function adaptTournamentToUI(dbTournament: TournamentWithRelations): UITournament {
  // Convert database tournament to UI tournament
  return {
    id: String(dbTournament.id),
    name: dbTournament.name,
    date: formatDateRange(dbTournament.startDate, dbTournament.endDate),
    venue: dbTournament.location,
    price: 25, // Default price since it's not in the DB model
    prize: 500, // Default prize since it's not in the DB model
    participants: dbTournament.matches.reduce((set, match) => {
      if (match.player1Id) set.add(match.player1Id);
      if (match.player2Id) set.add(match.player2Id);
      return set;
    }, new Set<string>()).size,
    maxParticipants: 32, // Default max since it's not in the DB model
    level: "All Levels", // Default level since it's not in the DB model
    status: "Open", // Default status since it's not in the DB model
    image: "/images/tournament-default.jpg", // Default image
    description: dbTournament.description || "",
    rules: [
      "USA Pickleball Association rules apply",
      "Double elimination tournament format",
      "Matches are best of 3 games to 11 points",
      "Must win by 2 points",
      "Each player must bring their own paddle"
    ],
    schedule: [
      { time: formatDate(dbTournament.startDate, "time"), event: "Check-in Opens" },
      { time: formatDate(addHours(dbTournament.startDate, 1), "time"), event: "Preliminary Rounds Begin" },
      { time: formatDate(dbTournament.endDate, "time"), event: "Finals & Award Ceremony" }
    ],
    registeredPlayers: dbTournament.matches.slice(0, 5).flatMap(match => [
      {
        name: match.player1.name,
        level: "Intermediate",
        avatar: `/images/avatar-${Math.floor(Math.random() * 8) + 1}.png`
      },
      {
        name: match.player2.name,
        level: "Advanced",
        avatar: `/images/avatar-${Math.floor(Math.random() * 8) + 1}.png`
      }
    ])
  };
}

// Helper functions for date formatting
function formatDateRange(start: Date, end: Date): string {
  const startMonth = start.toLocaleString('default', { month: 'short' });
  const startDay = start.getDate();
  const endMonth = end.toLocaleString('default', { month: 'short' });
  const endDay = end.getDate();
  const year = start.getFullYear();
  
  if (startMonth === endMonth) {
    return `${startMonth} ${startDay}-${endDay}, ${year}`;
  } else {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
  }
}

function formatDate(date: Date, format: 'date' | 'time' | 'datetime' = 'datetime'): string {
  if (format === 'time') {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (format === 'date') {
    return date.toLocaleDateString();
  } else {
    return date.toLocaleString();
  }
}

function addHours(date: Date, hours: number): Date {
  const newDate = new Date(date);
  newDate.setHours(date.getHours() + hours);
  return newDate;
}
