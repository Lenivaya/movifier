/*
  Warnings:

  - The primary key for the `MovieSpokenLanguage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `MovieSpokenLanguage` table. All the data in the column will be lost.
  - You are about to drop the column `password_hash` on the `MovifierAppUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieCrewMember` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieCrewMemberType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `MovieCrewMemberType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieKeywordCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieList` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieListComment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieListStats` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieRating` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieReview` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[language]` on the table `MovieSpokenLanguage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovieStudio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MovifierAppUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `MovifierAppUser` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MoviefireAppUserRole" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "MovieInfo" DROP CONSTRAINT "MovieInfo_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieRating" DROP CONSTRAINT "MovieRating_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieStats" DROP CONSTRAINT "MovieStats_movieId_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToMovieSpokenLanguage" DROP CONSTRAINT "_MovieToMovieSpokenLanguage_B_fkey";

-- AlterTable
ALTER TABLE "MovieSpokenLanguage" DROP CONSTRAINT "MovieSpokenLanguage_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "MovieSpokenLanguage_pkey" PRIMARY KEY ("language");

-- AlterTable
ALTER TABLE "MovifierAppUser" DROP COLUMN "password_hash",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "MoviefireAppUserRole" NOT NULL DEFAULT 'USER';

-- CreateIndex
CREATE UNIQUE INDEX "Movie_id_key" ON "Movie"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieCrewMember_id_key" ON "MovieCrewMember"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieCrewMemberType_id_key" ON "MovieCrewMemberType"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieCrewMemberType_name_key" ON "MovieCrewMemberType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MovieInfo_id_key" ON "MovieInfo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieKeywordCategory_id_key" ON "MovieKeywordCategory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieList_id_key" ON "MovieList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieListComment_id_key" ON "MovieListComment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieListStats_id_key" ON "MovieListStats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieRating_id_key" ON "MovieRating"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieReview_id_key" ON "MovieReview"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovieSpokenLanguage_language_key" ON "MovieSpokenLanguage"("language");

-- CreateIndex
CREATE UNIQUE INDEX "MovieStudio_id_key" ON "MovieStudio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MovifierAppUser_id_key" ON "MovifierAppUser"("id");

-- AddForeignKey
ALTER TABLE "MovieStats" ADD CONSTRAINT "MovieStats_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieInfo" ADD CONSTRAINT "MovieInfo_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieRating" ADD CONSTRAINT "MovieRating_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MovieToMovieSpokenLanguage" ADD CONSTRAINT "_MovieToMovieSpokenLanguage_B_fkey" FOREIGN KEY ("B") REFERENCES "MovieSpokenLanguage"("language") ON DELETE CASCADE ON UPDATE CASCADE;
