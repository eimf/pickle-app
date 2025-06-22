-- CreateEnum
CREATE TYPE "match_status" AS ENUM ('SCHEDULED', 'ONGOING', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "tournament" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "match" (
    "id" TEXT NOT NULL,
    "tournament_id" TEXT NOT NULL,
    "player1_id" TEXT NOT NULL,
    "player2_id" TEXT NOT NULL,
    "score1" INTEGER NOT NULL,
    "score2" INTEGER NOT NULL,
    "status" "match_status" NOT NULL,
    "scheduled_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "player_email_key" ON "player"("email");

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_tournament_id_fkey" FOREIGN KEY ("tournament_id") REFERENCES "tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_player1_id_fkey" FOREIGN KEY ("player1_id") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "match" ADD CONSTRAINT "match_player2_id_fkey" FOREIGN KEY ("player2_id") REFERENCES "player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
