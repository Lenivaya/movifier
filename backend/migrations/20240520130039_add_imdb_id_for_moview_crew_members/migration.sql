/*
  Warnings:

  - A unique constraint covering the columns `[imdbId]` on the table `MovieCrewMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imdbId` to the `MovieCrewMember` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MovieCrewMember" ADD COLUMN     "imdbId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MovieCrewMember_imdbId_key" ON "MovieCrewMember"("imdbId");
