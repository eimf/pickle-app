import { Tournament } from './types';

export const tournaments: Tournament[] = [
  {
    id: '1',
    name: 'Summer Championship Series',
    date: 'June 15, 2024',
    venue: 'Oceanview Sports Complex',
    price: 150,
    prize: 5000,
    participants: 64,
    maxParticipants: 64,
    level: 'Advanced',
    status: 'Full',
    image: 'https://images.pexels.com/photos/8007226/pexels-photo-8007226.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Join us for the ultimate pickleball championship featuring the best players from around the region.',
    rules: [
      'All games played to 11 points, win by 2',
      'Double elimination format',
      'USAPA rules apply',
      'Equipment inspection required'
    ],
    schedule: [
      { time: '8:00 AM', event: 'Registration & Check-in' },
      { time: '9:00 AM', event: 'Opening Ceremony' },
      { time: '9:30 AM', event: 'First Round Matches' },
      { time: '12:00 PM', event: 'Lunch Break' },
      { time: '1:00 PM', event: 'Quarter Finals' },
      { time: '3:00 PM', event: 'Semi Finals' },
      { time: '4:30 PM', event: 'Championship Match' },
      { time: '5:30 PM', event: 'Awards Ceremony' }
    ],
    registeredPlayers: [
      { name: 'Alex Johnson', level: 'Advanced', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Sarah Williams', level: 'Professional', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Mike Chen', level: 'Advanced', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150' },
    ]
  },
  {
    id: '2',
    name: 'Neon Nights Tournament',
    date: 'July 8, 2024',
    venue: 'Downtown Recreation Center',
    price: 75,
    prize: 2500,
    participants: 28,
    maxParticipants: 32,
    level: 'Intermediate',
    status: 'Open',
    image: 'https://images.pexels.com/photos/8007164/pexels-photo-8007164.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'An electrifying evening tournament under the lights with glow-in-the-dark elements!',
    rules: [
      'All games played to 11 points, win by 2',
      'Single elimination format',
      'Glow equipment provided',
      'Night vision friendly gear required'
    ],
    schedule: [
      { time: '6:00 PM', event: 'Registration & Equipment Setup' },
      { time: '7:00 PM', event: 'Warm-up Session' },
      { time: '7:30 PM', event: 'First Round' },
      { time: '9:00 PM', event: 'Quarter Finals' },
      { time: '10:00 PM', event: 'Semi Finals' },
      { time: '10:45 PM', event: 'Championship Match' },
      { time: '11:30 PM', event: 'Victory Celebration' }
    ],
    registeredPlayers: [
      { name: 'Emma Davis', level: 'Intermediate', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-215829.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Ryan Martinez', level: 'Intermediate', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150' },
    ]
  },
  {
    id: '3',
    name: 'Beginner\'s Paradise Cup',
    date: 'July 22, 2024',
    venue: 'Community Sports Park',
    price: 50,
    prize: 1000,
    participants: 16,
    maxParticipants: 24,
    level: 'Beginner',
    status: 'Open',
    image: 'https://images.pexels.com/photos/8007195/pexels-photo-8007195.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfect for newcomers to competitive pickleball. Coaching tips included!',
    rules: [
      'All games played to 11 points, win by 2',
      'Round robin format',
      'Coaching allowed between games',
      'Equipment available for rent'
    ],
    schedule: [
      { time: '9:00 AM', event: 'Registration & Welcome' },
      { time: '9:30 AM', event: 'Rules Clinic' },
      { time: '10:00 AM', event: 'Round Robin Phase 1' },
      { time: '12:00 PM', event: 'Lunch & Coaching Session' },
      { time: '1:00 PM', event: 'Round Robin Phase 2' },
      { time: '3:00 PM', event: 'Final Rankings' },
      { time: '3:30 PM', event: 'Awards & Group Photo' }
    ],
    registeredPlayers: [
      { name: 'Lisa Thompson', level: 'Beginner', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150' },
    ]
  },
  {
    id: '4',
    name: 'Pro League Showdown',
    date: 'August 5, 2024',
    venue: 'Elite Sports Academy',
    price: 300,
    prize: 15000,
    participants: 12,
    maxParticipants: 16,
    level: 'Professional',
    status: 'Open',
    image: 'https://images.pexels.com/photos/8007188/pexels-photo-8007188.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The ultimate professional tournament featuring the top-ranked players nationwide.',
    rules: [
      'All games played to 15 points, win by 2',
      'Best of 3 format',
      'Professional referee required',
      'Live streaming available'
    ],
    schedule: [
      { time: '7:00 AM', event: 'Player Check-in' },
      { time: '8:00 AM', event: 'Media Interviews' },
      { time: '9:00 AM', event: 'Opening Matches' },
      { time: '11:30 AM', event: 'Quarter Finals' },
      { time: '2:00 PM', event: 'Semi Finals' },
      { time: '4:00 PM', event: 'Championship Match' },
      { time: '6:00 PM', event: 'Victory Ceremony' }
    ],
    registeredPlayers: [
      { name: 'Jordan Smith', level: 'Professional', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Taylor Brown', level: 'Professional', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150' },
    ]
  },
  {
    id: '5',
    name: 'Weekend Warriors Classic',
    date: 'August 19, 2024',
    venue: 'Riverside Tennis Club',
    price: 100,
    prize: 3000,
    participants: 40,
    maxParticipants: 48,
    level: 'Intermediate',
    status: 'Open',
    image: 'https://images.pexels.com/photos/8007229/pexels-photo-8007229.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfect for weekend players looking for competitive fun and great prizes.',
    rules: [
      'All games played to 11 points, win by 2',
      'Pool play followed by bracket',
      'Age divisions available',
      'Mixed doubles option'
    ],
    schedule: [
      { time: '8:00 AM', event: 'Registration Opens' },
      { time: '9:00 AM', event: 'Pool Play Begins' },
      { time: '12:00 PM', event: 'Lunch Break' },
      { time: '1:00 PM', event: 'Bracket Play' },
      { time: '4:00 PM', event: 'Finals' },
      { time: '5:00 PM', event: 'Awards Presentation' }
    ],
    registeredPlayers: [
      { name: 'Chris Wilson', level: 'Intermediate', avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150' },
      { name: 'Kelly Anderson', level: 'Intermediate', avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150' },
    ]
  },
  {
    id: '6',
    name: 'Sunset Beach Tournament',
    date: 'September 2, 2024',
    venue: 'Beachside Courts',
    price: 125,
    prize: 4000,
    participants: 24,
    maxParticipants: 32,
    level: 'Advanced',
    status: 'Open',
    image: 'https://images.pexels.com/photos/8007203/pexels-photo-8007203.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Play pickleball with an ocean view at this exclusive beachside tournament.',
    rules: [
      'All games played to 11 points, win by 2',
      'Wind conditions may affect play',
      'Sand court adaptation required',
      'Sunscreen mandatory'
    ],
    schedule: [
      { time: '3:00 PM', event: 'Beach Setup & Registration' },
      { time: '4:00 PM', event: 'Opening Matches' },
      { time: '6:00 PM', event: 'Semifinals' },
      { time: '7:30 PM', event: 'Championship at Sunset' },
      { time: '8:30 PM', event: 'Beach BBQ Awards' }
    ],
    registeredPlayers: [
      { name: 'Ocean Martinez', level: 'Advanced', avatar: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=150' },
    ]
  }
];