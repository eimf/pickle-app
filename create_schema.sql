-- Create tables in the tournaments schema
CREATE TABLE tournaments.tournament (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  location VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tournaments.player (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TYPE tournaments.match_status AS ENUM ('SCHEDULED', 'ONGOING', 'COMPLETED', 'CANCELLED');

CREATE TABLE tournaments.match (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tournament_id UUID NOT NULL REFERENCES tournaments.tournament(id),
  player1_id UUID NOT NULL REFERENCES tournaments.player(id),
  player2_id UUID NOT NULL REFERENCES tournaments.player(id),
  score1 INTEGER NOT NULL DEFAULT 0,
  score2 INTEGER NOT NULL DEFAULT 0,
  status tournaments.match_status NOT NULL DEFAULT 'SCHEDULED',
  scheduled_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
