/*
  Warnings:

  - A unique constraint covering the columns `[userId,movieId]` on the table `MovieRating` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "MovieRating_movieId_key";

-- DropIndex
DROP INDEX "MovieRating_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "MovieRating_userId_movieId_key" ON "MovieRating"("userId", "movieId");
