/*
  Warnings:

  - Added the required column `releaseDate` to the `MovieInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MovieInfo" ADD COLUMN     "releaseDate" TIMESTAMP(3) NOT NULL;
