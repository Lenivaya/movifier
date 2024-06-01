/*
  Warnings:

  - You are about to drop the column `ppopularity` on the `MovieCrewMember` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MovieCrewMember" DROP COLUMN "ppopularity",
ADD COLUMN     "popularity" DOUBLE PRECISION NOT NULL DEFAULT 0;
