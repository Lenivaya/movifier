/*
  Warnings:

  - You are about to drop the `_MovieToMovifierAppUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MovieCrewMemberOnMovie" DROP CONSTRAINT "MovieCrewMemberOnMovie_movieId_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToMovifierAppUser" DROP CONSTRAINT "_MovieToMovifierAppUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToMovifierAppUser" DROP CONSTRAINT "_MovieToMovifierAppUser_B_fkey";

-- AlterTable
ALTER TABLE "MovieCrewMember" ADD COLUMN     "ppopularity" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "MovieCrewMemberOnMovie" ADD COLUMN     "order" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "_MovieToMovifierAppUser";

-- CreateTable
CREATE TABLE "UserMovieWatchlist" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "UserMovieWatchlist_pkey" PRIMARY KEY ("userId","movieId")
);

-- AddForeignKey
ALTER TABLE "MovieCrewMemberOnMovie" ADD CONSTRAINT "MovieCrewMemberOnMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMovieWatchlist" ADD CONSTRAINT "UserMovieWatchlist_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMovieWatchlist" ADD CONSTRAINT "UserMovieWatchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
