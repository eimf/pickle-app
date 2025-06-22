const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Starting seed...');

    // Clean existing data (optional - only for development)
    await prisma.match.deleteMany();
    await prisma.player.deleteMany();
    await prisma.tournament.deleteMany();
    
    console.log('Cleaned existing data');

    // Create tournaments
    const tournament1 = await prisma.tournament.create({
      data: {
        name: 'Summer Pickleball Championship',
        description: 'Annual summer pickleball tournament with singles and doubles matches',
        startDate: new Date('2025-07-15T10:00:00Z'),
        endDate: new Date('2025-07-17T18:00:00Z'),
        location: 'Central Park Courts'
      }
    });

    const tournament2 = await prisma.tournament.create({
      data: {
        name: 'Pickleball Winter Classic',
        description: 'Indoor winter tournament for all skill levels',
        startDate: new Date('2025-12-10T09:00:00Z'),
        endDate: new Date('2025-12-12T19:00:00Z'),
        location: 'Downtown Indoor Sports Complex'
      }
    });

    console.log('Created tournaments');

    // Create players
    const player1 = await prisma.player.create({
      data: {
        name: 'John Smith',
        email: 'john.smith@example.com',
      }
    });

    const player2 = await prisma.player.create({
      data: {
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
      }
    });

    const player3 = await prisma.player.create({
      data: {
        name: 'Mike Williams',
        email: 'mike.w@example.com',
      }
    });

    const player4 = await prisma.player.create({
      data: {
        name: 'Emma Davis',
        email: 'emma.d@example.com',
      }
    });

    console.log('Created players');

    // Create matches
    await prisma.match.create({
      data: {
        tournamentId: tournament1.id,
        player1Id: player1.id,
        player2Id: player2.id,
        score1: 11,
        score2: 8,
        status: 'COMPLETED',
        scheduledAt: new Date('2025-07-15T13:00:00Z')
      }
    });

    await prisma.match.create({
      data: {
        tournamentId: tournament1.id,
        player1Id: player3.id,
        player2Id: player4.id,
        score1: 0,
        score2: 0,
        status: 'SCHEDULED',
        scheduledAt: new Date('2025-07-16T15:30:00Z')
      }
    });

    await prisma.match.create({
      data: {
        tournamentId: tournament2.id,
        player1Id: player1.id,
        player2Id: player3.id,
        score1: 0,
        score2: 0,
        status: 'SCHEDULED',
        scheduledAt: new Date('2025-12-10T10:15:00Z')
      }
    });

    console.log('Created matches');
    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
