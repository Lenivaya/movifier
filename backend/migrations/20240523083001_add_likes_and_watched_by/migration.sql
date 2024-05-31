/*
  Warnings:

  - You are about to drop the column `overallPlaceINTop` on the `MovieStats` table. All the data in the column will be lost.
  - Added the required column `overallPlaceInTop` to the `MovieStats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MovieStats" DROP COLUMN "overallPlaceINTop",
ADD COLUMN     "overallPlaceInTop" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "MovieWatchedByUser" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "MovieWatchedByUser_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "MovieLikedByUser" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,

    CONSTRAINT "MovieLikedByUser_pkey" PRIMARY KEY ("userId","movieId")
);

-- CreateTable
CREATE TABLE "MovieReviewLikedByUser" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "movieReviewId" TEXT NOT NULL,

    CONSTRAINT "MovieReviewLikedByUser_pkey" PRIMARY KEY ("userId","movieReviewId")
);

-- AddForeignKey
ALTER TABLE "MovieWatchedByUser" ADD CONSTRAINT "MovieWatchedByUser_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieWatchedByUser" ADD CONSTRAINT "MovieWatchedByUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieLikedByUser" ADD CONSTRAINT "MovieLikedByUser_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieLikedByUser" ADD CONSTRAINT "MovieLikedByUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewLikedByUser" ADD CONSTRAINT "MovieReviewLikedByUser_movieReviewId_fkey" FOREIGN KEY ("movieReviewId") REFERENCES "MovieReview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReviewLikedByUser" ADD CONSTRAINT "MovieReviewLikedByUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MovifierAppUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
