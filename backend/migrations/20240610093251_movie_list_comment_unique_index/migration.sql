/*
  Warnings:

  - A unique constraint covering the columns `[userId,movieListId]` on the table `MovieListComment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "MovieListComment_userId_movieListId_key" ON "MovieListComment"("userId", "movieListId");
