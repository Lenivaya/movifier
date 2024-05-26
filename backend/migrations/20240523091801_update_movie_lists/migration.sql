/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `MovieRating` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `MovieList` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MovieRating" DROP CONSTRAINT "MovieRating_userId_fkey";

-- DropForeignKey
ALTER TABLE "MovieReview" DROP CONSTRAINT "MovieReview_ratingId_fkey";

-- DropForeignKey
ALTER TABLE "MovieReviewLikedByUser" DROP CONSTRAINT "MovieReviewLikedByUser_movieReviewId_fkey";

-- DropForeignKey
ALTER TABLE "MovieReviewLikedByUser" DROP CONSTRAINT "MovieReviewLikedByUser_userId_fkey";

-- DropIndex
DROP INDEX "movie_list_pgroonga_idx";

-- AlterTable
ALTER TABLE "MovieList" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[];

-- CreateTable
CREATE TABLE "MovieListLikedByUser" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "movieListId" TEXT NOT NULL,

    CONSTRAINT "MovieListLikedByUser_pkey" PRIMARY KEY ("userId","movieListId")
);

-- CreateIndex
create index if not exists movie_list_pgroonga_idx on "MovieList" using pgroonga (name, description);

-- CreateIndex
CREATE UNIQUE INDEX "MovieRating_userId_key" ON "MovieRating"("userId");

-- AddForeignKey
ALTER TABLE "MovieListLikedByUser" ADD CONSTRAINT "MovieListLikedByUser_movieListId_fkey" FOREIGN KEY ("movieListId") REFERENCES "MovieList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieListLikedByUser" ADD CONSTRAINT "MovieListLikedByUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieRating" ADD CONSTRAINT "MovieRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "MovieRating"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewLikedByUser" ADD CONSTRAINT "MovieReviewLikedByUser_movieReviewId_fkey" FOREIGN KEY ("movieReviewId") REFERENCES "MovieReview"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewLikedByUser" ADD CONSTRAINT "MovieReviewLikedByUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
